let currentPlayer = 'X';
let moves = ['-', '-', '-', '-', '-', '-', '-', '-', '-'];
let gameActive = true;

const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
];

const checkWinner = () => {
    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (moves[a] === currentPlayer && moves[b] === currentPlayer && moves[c] === currentPlayer) {
            gameActive = false;
            return true;
        }
    }
    if (!moves.includes('-')) {
        gameActive = false;
        return 'draw';
    }
    return false;
}

const handleMove = (index) => {
    if (gameActive && moves[index] === '-') {
        moves[index] = currentPlayer;
        document.getElementById('board').children[index].innerText = currentPlayer;
        const winner = checkWinner();
        if (winner === true) {
            document.getElementById('status').innerText = `Player ${currentPlayer} wins!`;
        } else if (winner === 'draw') {
            document.getElementById('status').innerText = `It's a draw!`;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            document.getElementById('status').innerText = `Player ${currentPlayer}'s turn`;
        }
    }
}

const resetGame = () => {
    currentPlayer = 'X';
    moves = ['-', '-', '-', '-', '-', '-', '-', '-', '-'];
    gameActive = true;
    document.getElementById('status').innerText = '';
    document.querySelectorAll('.cell').forEach(cell => cell.innerText = '');
}
