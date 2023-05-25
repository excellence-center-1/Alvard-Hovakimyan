let currentPlayer = "X";
let gameBoard = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
];

function makeMove(row, col) {
  if (gameBoard[row][col] === "") {
    gameBoard[row][col] = currentPlayer;
    document.getElementById("game").children[row].children[col].innerText = currentPlayer;
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    checkWinner();
  }
}

function checkWinner() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < winningCombinations.length; i++) {
    const [a, b, c] = winningCombinations[i];
    const valueA = gameBoard[Math.floor(a / 3)][a % 3];
    const valueB = gameBoard[Math.floor(b / 3)][b % 3];
    const valueC = gameBoard[Math.floor(c / 3)][c % 3];
    if (valueA !== "" && valueA === valueB && valueA === valueC) {
      alert(`Player ${valueA} wins!`);
      resetGame();
      return;
    }
  }

  // Check for a tie
  if (gameBoard.flat().every(cell => cell !== "")) {
    alert("It's a tie!");
    resetGame();
  }
}

function resetGame() {
  gameBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ];
  currentPlayer = "X";
  const cells = document.getElementsByClassName("cell");
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = "";
  }
}
