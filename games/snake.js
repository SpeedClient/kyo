const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const startButton = document.getElementById('startButton');
const restartButton = document.getElementById('restartButton');
const gameOverScreen = document.getElementById('gameOverScreen');
const finalScore = document.getElementById('finalScore');

const gridSize = 20;
let snake;
let food;
let dx;
let dy;
let score;
let gameLoopInterval;
let gameRunning = false;

function resetGame() {
    snake = [{ x: 200, y: 200 }];
    food = { x: Math.floor(Math.random() * 20) * gridSize, y: Math.floor(Math.random() * 20) * gridSize };
    dx = gridSize;
    dy = 0;
    score = 0;
    gameOverScreen.classList.add('hidden');
    finalScore.textContent = score;
}

function update() {
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };
    snake.unshift(head);

    // Eat food
    if (head.x === food.x && head.y === food.y) {
        score++;
        food = { x: Math.floor(Math.random() * 20) * gridSize, y: Math.floor(Math.random() * 20) * gridSize };
    } else {
        snake.pop();
    }

    // Check collisions
    if (
        head.x < 0 || head.x >= canvas.width ||
        head.y < 0 || head.y >= canvas.height ||
        checkCollision(head)
    ) {
        endGame();
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawFood();
    drawSnake();
    drawScore();
}

function drawSnake() {
    snake.forEach(segment => {
        ctx.fillStyle = 'green';
        ctx.fillRect(segment.x, segment.y, gridSize, gridSize);
    });
}

function drawFood() {
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x, food.y, gridSize, gridSize);
}

function drawScore() {
    ctx.fillStyle = 'white';
    ctx.font = '20px Arial';
    ctx.fillText('Score: ' + score, 10, 30);
}

function gameLoop() {
    if (!gameRunning) return;
    update();
    draw();
}

function changeDirection(event) {
    const LEFT_KEY = 37;
    const UP_KEY = 38;
    const RIGHT_KEY = 39;
    const DOWN_KEY = 40;

    const keyPressed = event.keyCode;
    const goingUp = dy === -gridSize;
    const goingDown = dy === gridSize;
    const goingRight = dx === gridSize;
    const goingLeft = dx === -gridSize;

    if (keyPressed === LEFT_KEY && !goingRight) { dx = -gridSize; dy = 0; }
    if (keyPressed === UP_KEY && !goingDown) { dy = -gridSize; dx = 0; }
    if (keyPressed === RIGHT_KEY && !goingLeft) { dx = gridSize; dy = 0; }
    if (keyPressed === DOWN_KEY && !goingUp) { dy = gridSize; dx = 0; }
}

function checkCollision(head) {
    // Check if head hits the body
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) return true;
    }
    return false;
}

function startGame() {
    if (gameRunning) return; // prevent double starts
    resetGame();
    gameRunning = true;
    startButton.disabled = true;
    gameOverScreen.classList.add('hidden');
    if (gameLoopInterval) clearInterval(gameLoopInterval);
    gameLoopInterval = setInterval(gameLoop, 100);
}

function endGame() {
    gameRunning = false;
    clearInterval(gameLoopInterval);
    gameOverScreen.classList.remove('hidden');
    finalScore.textContent = score;
    startButton.disabled = false;
}

startButton.addEventListener('click', () => {
    startGame();
});

restartButton.addEventListener('click', () => {
    startGame();
});

document.addEventListener('keydown', (event) => {
    if (!gameRunning && event.key === 'Enter') {
        startGame();
    }
    if (gameRunning) {
        changeDirection(event);
    }
});
function drawSnake() {
    snake.forEach((segment, index) => {
        const alpha = Math.min(1, 1 - index * 0.1); // Fade tail segments
        ctx.fillStyle = `rgba(0, 255, 0, ${alpha})`; // Electric Green with fading effect
        ctx.shadowColor = 'rgba(0, 255, 0, 0.8)';
        ctx.shadowBlur = 10;
        ctx.fillRect(segment.x, segment.y, gridSize, gridSize);
        ctx.shadowBlur = 0; // Reset shadow
    });
}

function drawFood() {
    ctx.fillStyle = '#FF00FF'; // Neon Pink
    ctx.shadowColor = 'rgba(255, 0, 255, 0.8)';
    ctx.shadowBlur = 15;
    ctx.fillRect(food.x, food.y, gridSize, gridSize);
    ctx.shadowBlur = 0; // Reset shadow
}
