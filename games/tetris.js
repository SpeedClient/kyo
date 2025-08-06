const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const blockSize = 30;
canvas.width = blockSize * 10;
canvas.height = blockSize * 20;
ctx.scale(blockSize, blockSize);

const colors = [
    null,
    "#cf0000", // red
    "blue",     // blue
    "#83d9dc",  // light blue
    "#38963c",  // green
    "#ebcc34",  // yellow
    "#7b2db3",  // purple
    "#fa0cd6"   // pink
];

const tetrominoes = [
    [[1, 1, 1], [0, 1, 0]], // T
    [[1, 1], [1, 1]],       // O
    [[1, 1, 0], [0, 1, 1]], // S
    [[0, 1, 1], [1, 1, 0]], // Z
    [[1, 0, 0], [1, 1, 1]], // L
    [[0, 0, 1], [1, 1, 1]], // J
    [[1, 1, 1, 1]]          // I
];

let board = Array.from({ length: 20 }, () => Array(10).fill(null));
let currentPiece = generatePiece();
let gameInterval;
let score = 0;

function generatePiece() {
    const shape = tetrominoes[Math.floor(Math.random() * tetrominoes.length)];
    const color = colors[Math.floor(Math.random() * colors.length)];
    return { shape, color, x: Math.floor(10 / 2) - Math.floor(shape[0].length / 2), y: 0 };
}

function drawBoard() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    board.forEach((row, y) => row.forEach((cell, x) => {
        if (cell) {
            ctx.fillStyle = cell;
            ctx.fillRect(x, y, 1, 1);
        }
    }));
}

function drawPiece() {
    currentPiece.shape.forEach((row, y) => row.forEach((cell, x) => {
        if (cell) {
            ctx.fillStyle = currentPiece.color;
            ctx.fillRect(currentPiece.x + x, currentPiece.y + y, 1, 1);
        }
    }));
}

function rotatePiece() {
    const newShape = currentPiece.shape[0].map((_, index) => currentPiece.shape.map(row => row[index])).reverse();
    if (!isCollision(newShape, currentPiece.x, currentPiece.y)) {
        currentPiece.shape = newShape;
    }
}

function isCollision(shape, x, y) {
    return shape.some((row, dy) => row.some((cell, dx) => {
        if (cell) {
            const nx = x + dx;
            const ny = y + dy;
            return nx < 0 || nx >= 10 || ny >= 20 || (ny >= 0 && board[ny][nx]);
        }
        return false;
    }));
}

function placePiece() {
    currentPiece.shape.forEach((row, y) => row.forEach((cell, x) => {
        if (cell) {
            board[currentPiece.y + y][currentPiece.x + x] = currentPiece.color;
        }
    }));
    clearFullLines();
    currentPiece = generatePiece();
    if (isCollision(currentPiece.shape, currentPiece.x, currentPiece.y)) {
        clearInterval(gameInterval);
        document.getElementById("finalScore").textContent = score;
        document.getElementById("gameOverScreen").classList.remove("hidden");
    }
}

function clearFullLines() {
    for (let y = 19; y >= 0; y--) {
        if (board[y].every(cell => cell)) {
            board.splice(y, 1);
            board.unshift(Array(10).fill(null));
            score += 100;
        }
    }
}

function movePiece(dx, dy) {
    if (!isCollision(currentPiece.shape, currentPiece.x + dx, currentPiece.y + dy)) {
        currentPiece.x += dx;
        currentPiece.y += dy;
    } else if (dy) {
        placePiece();
    }
}

function gameLoop() {
    drawBoard();
    drawPiece();
    movePiece(0, 1);
}

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") movePiece(-1, 0);
    if (e.key === "ArrowRight") movePiece(1, 0);
    if (e.key === "ArrowDown") movePiece(0, 1);
    if (e.key === "ArrowUp") rotatePiece();
});

document.getElementById("startButton").addEventListener("click", () => {
    board = Array.from({ length: 20 }, () => Array(10).fill(null));
    currentPiece = generatePiece();
    score = 0;
    document.getElementById("gameOverScreen").classList.add("hidden");
    gameInterval = setInterval(gameLoop, 500);
});

document.getElementById("restartButton").addEventListener("click", () => {
    board = Array.from({ length: 20 }, () => Array(10).fill(null));
    currentPiece = generatePiece();
    score = 0;
    document.getElementById("gameOverScreen").classList.add("hidden");
    gameInterval = setInterval(gameLoop, 500);
});
    