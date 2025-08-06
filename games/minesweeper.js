const boardEl = document.getElementById('board');
const startButton = document.getElementById('startButton');
const restartButton = document.getElementById('restartButton');

const gridSize = 10;
const totalMines = 20;
let board = [];
let revealedCount = 0;
let flaggedCount = 0;
let gameActive = false;

function createBoard() {
    board = [];
    revealedCount = 0;
    flaggedCount = 0;
    boardEl.innerHTML = '';
    for (let row = 0; row < gridSize; row++) {
        const rowArr = [];
        for (let col = 0; col < gridSize; col++) {
            const cell = {
                row,
                col,
                mine: false,
                revealed: false,
                flagged: false,
                adjacentMines: 0
            };
            rowArr.push(cell);
            const div = document.createElement('div');
            div.classList.add('cell');
            div.dataset.row = row;
            div.dataset.col = col;
            div.addEventListener('click', () => handleClick(cell));
            div.addEventListener('contextmenu', (e) => handleRightClick(e, cell));
            boardEl.appendChild(div);
        }
        board.push(rowArr);
    }
    placeMines();
    calculateAdjacentMines();
}

function placeMines() {
    let minesPlaced = 0;
    while (minesPlaced < totalMines) {
        const row = Math.floor(Math.random() * gridSize);
        const col = Math.floor(Math.random() * gridSize);
        if (!board[row][col].mine) {
            board[row][col].mine = true;
            minesPlaced++;
        }
    }
}

function calculateAdjacentMines() {
    for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
            if (board[row][col].mine) continue;
            let count = 0;
            for (let r = row - 1; r <= row + 1; r++) {
                for (let c = col - 1; c <= col + 1; c++) {
                    if (r >= 0 && r < gridSize && c >= 0 && c < gridSize && board[r][c].mine) {
                        count++;
                    }
                }
            }
            board[row][col].adjacentMines = count;
        }
    }
}

function handleClick(cell) {
    if (!gameActive || cell.revealed || cell.flagged) return;
    revealCell(cell);
    if (cell.mine) {
        endGame(false);
    } else if (revealedCount === gridSize * gridSize - totalMines) {
        endGame(true);
    }
}

function handleRightClick(e, cell) {
    e.preventDefault();
    if (!gameActive || cell.revealed) return;
    toggleFlag(cell);
}

function revealCell(cell) {
    if (cell.revealed) return;
    cell.revealed = true;
    revealedCount++;
    const div = getCellDiv(cell);
    div.classList.add('revealed');
    if (cell.mine) {
        div.classList.add('mine');
        div.textContent = '💣';
    } else {
        div.textContent = cell.adjacentMines || '';
        if (cell.adjacentMines === 0) {
            revealNeighbors(cell);
        }
    }
}

function revealNeighbors(cell) {
    for (let r = cell.row - 1; r <= cell.row + 1; r++) {
        for (let c = cell.col - 1; c <= cell.col + 1; c++) {
            if (r >= 0 && r < gridSize && c >= 0 && c < gridSize) {
                revealCell(board[r][c]);
            }
        }
    }
}

function toggleFlag(cell) {
    if (cell.revealed) return;
    cell.flagged = !cell.flagged;
    const div = getCellDiv(cell);
    if (cell.flagged) {
        div.classList.add('flag');
        div.textContent = '🚩';
        flaggedCount++;
    } else {
        div.classList.remove('flag');
        div.textContent = '';
        flaggedCount--;
    }
}

function getCellDiv(cell) {
    return boardEl.querySelector(`[data-row="${cell.row}"][data-col="${cell.col}"]`);
}

function endGame(won) {
    gameActive = false;
    if (won) {
        alert('Congratulations! You win!');
    } else {
        alert('Game Over! You hit a mine!');
        revealAllMines();
    }
}

function revealAllMines() {
    for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
            const cell = board[row][col];
            if (cell.mine && !cell.revealed) {
                revealCell(cell);
            }
        }
    }
}

function startGame() {
    gameActive = true;
    createBoard();
}

startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', startGame);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !gameActive) {
        startGame();
    }
});

startGame();
