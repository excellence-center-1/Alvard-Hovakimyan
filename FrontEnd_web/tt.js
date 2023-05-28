document.addEventListener('DOMContentLoaded', () => {
  const board = document.querySelector('.board');
  const restartBtn = document.querySelector('.restart-btn button');
  const sizeInput = document.querySelector('#size');
  const message = document.querySelector('.message span');
  let currentPlayer = 'X';
  let gameActive = true;
  let boardSize = parseInt(sizeInput.value);

  function createCell() {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.addEventListener('click', handleCellClick);
    return cell;
  }

  function handleCellClick() {
    if (!this.textContent && gameActive) {
      this.textContent = currentPlayer;
      this.classList.add(currentPlayer);
      checkGameStatus();
      togglePlayer();
    }
  }

  function togglePlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }

  function checkGameStatus() {
    const cells = Array.from(document.querySelectorAll('.cell'));
    const winningCombinations = generateWinningCombinations(boardSize);

    for (let combination of winningCombinations) {
      let isWinningCombination = true;

      for (let index of combination) {
        const cell = cells[index];

        if (
          !cell.textContent ||
          cell.textContent !== currentPlayer
        ) {
          isWinningCombination = false;
          break;
        }
      }

      if (isWinningCombination) {
        for (let index of combination) {
          const cell = cells[index];
          cell.classList.add('win');
        }

        gameActive = false;
        message.textContent = `${currentPlayer} wins!`;
        break;
      }
    }

    if (!gameActive) {
      restartBtn.disabled = false;
    }
  }

  function restartGame() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
      cell.textContent = '';
      cell.classList.remove('X', 'O', 'win');
    });

    currentPlayer = 'X';
    gameActive = true;
    restartBtn.disabled = true;
    message.textContent = '';
  }

  function generateWinningCombinations(size) {
    const combinations = [];
    const cellsCount = size * size;

    // Rows
    for (let i = 0; i < cellsCount; i += size) {
      const rowCombination = [];
      for (let j = i; j < i + size; j++) {
        rowCombination.push(j);
      }
      combinations.push(rowCombination);
    }

    // Columns
    for (let i = 0; i < size; i++) {
      const colCombination = [];
      for (let j = i; j < cellsCount; j += size) {
        colCombination.push(j);
      }
      combinations.push(colCombination);
    }

    // Diagonal from top left to bottom right
    const diagonalCombination1 = [];
    for (let i = 0; i < cellsCount; i += size + 1) {
      diagonalCombination1.push(i);
    }
    combinations.push(diagonalCombination1);

    // Diagonal from top right to bottom left
    const diagonalCombination2 = [];
    for (let i = size - 1; i < cellsCount - 1; i += size - 1) {
      diagonalCombination2.push(i);
    }
    combinations.push(diagonalCombination2);

    return combinations;
  }

  function updateBoardSize() {
    const newSize = parseInt(sizeInput.value);
    if (newSize !== boardSize && newSize >= 3 && newSize <= 6) {
      boardSize = newSize;
      restartGame();
      createBoard();
    }
  }

  function createBoard() {
    board.innerHTML = '';
    board.style.gridTemplateColumns = `repeat(${boardSize}, 1fr)`;

    for (let i = 0; i < boardSize * boardSize; i++) {
      const cell = createCell();
      board.appendChild(cell);
    }
  }

  createBoard();
  sizeInput.addEventListener('change', updateBoardSize);
  restartBtn.addEventListener('click', restartGame);
});
