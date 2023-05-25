function sumEvenNumbers(numbers) {
    return numbers.reduce((sum, num) => {
        if (num % 2 === 0) {
            return sum + num;
        }
        return sum;
    }, 0);
}
function reverseString(str) {
    return str.split('').reverse().join('');
}
function capitalizeStrings(strings) {
    return strings.map(str => str.toUpperCase());
}
class TicTacToe {
    constructor() {
        this.board = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];
        this.currentPlayer = 'X';
    }

    makeMove(row, col) {
        if (this.board[row][col] === '') {
            this.board[row][col] = this.currentPlayer;
            this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
        }
    }

    checkWinner() {
        // Check rows
        for (let i = 0; i < 3; i++) {
            if (
                this.board[i][0] !== '' &&
                this.board[i][0] === this.board[i][1] &&
                this.board[i][0] === this.board[i][2]
            ) {
                return this.board[i][0];
            }
        }

        // Check columns
        for (let j = 0; j < 3; j++) {
            if (
                this.board[0][j] !== '' &&
                this.board[0][j] === this.board[1][j] &&
                this.board[0][j] === this.board[2][j]
            ) {
                return this.board[0][j];
            }
        }

        // Check diagonals
        if (
            this.board[0][0] !== '' &&
            this.board[0][0] === this.board[1][1] &&
            this.board[0][0] === this.board[2][2]
        ) {
            return this.board[0][0];
        }

        if (
            this.board[0][2] !== '' &&
            this.board[0][2] === this.board[1][1] &&
            this.board[0][2] === this.board[2][0]
        ) {
            return this.board[0][2];
        }

        // No winner
        return null;
    }

    isBoardFull() {
        return this.board.every(row => row.every(cell => cell !== ''));
    }

    printBoard() {
        console.log('---------');
        for (let i = 0; i < 3; i++) {
            let row = '|';
            for (let j = 0; j < 3; j++) {
                row += ` ${this.board[i][j]} |`;
            }
            console.log(row);
            console.log('---------');
        }
    }
}
const numbers = [1, 2, 3, 4, 5, 6];
console.log('Sum of even numbers:', sumEvenNumbers(numbers)); // Output: 12

const string = 'Hello, World!';
console.log('Reversed string:', reverseString(string)); // Output: '!dlroW ,olleH'

const strings = ['hello', 'world'];
console.log('Capitalized strings:', capitalizeStrings(strings)); // Output: ['HELLO', 'WORLD']

const game = new TicTacToe();
game.makeMove(0, 0); // X makes a move
game.makeMove(1, 1); // O makes a move
game.makeMove(0, 1); // X makes a move
game.makeMove(1, 0); // O makes a move
game.makeMove(0, 2); // X makes a move
game.makeMove(1, 2);
game.makeMove(2, 0);
console.log('Winner:', game.checkWinner()); // Output: X
game.printBoard();
