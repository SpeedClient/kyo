const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let basket = { x: 160, y: 550, width: 80, height: 20, speed: 8 };
let items = [];
let score = 0;
let misses = 0;
let maxMisses = 3;
let keys = {};
let gameRunning = false;
let gameOver = false;
let animationId;
let spawnInterval;

const scoreDisplay = document.getElementById("score");
const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");

document.addEventListener("keydown", (e) => keys[e.key] = true);
document.addEventListener("keyup", (e) => keys[e.key] = false);

function spawnItem() {
    if (!gameRunning || gameOver) return;
    items.push({
        x: Math.random() * (canvas.width - 20),
        y: 0,
        size: 20,
        speed: 3 + Math.random() * 3,
    });
}

function drawBasket() {
    ctx.fillStyle = "#00F5C9";
    ctx.fillRect(basket.x, basket.y, basket.width, basket.height);
}

function drawItems() {
    ctx.fillStyle = "#FFD700";
    items.forEach(item => {
        ctx.beginPath();
        ctx.arc(item.x, item.y, item.size, 0, Math.PI * 2);
        ctx.fill();
    });
}

function updateItems() {
    for (let i = 0; i < items.length; i++) {
        items[i].y += items[i].speed;

        if (
            items[i].y + items[i].size > basket.y &&
            items[i].x > basket.x &&
            items[i].x < basket.x + basket.width
        ) {
            items.splice(i, 1);
            score++;
            scoreDisplay.textContent = score;
            i--;
        } else if (items[i].y > canvas.height) {
            items.splice(i, 1);
            misses++;
            i--;

            if (misses >= maxMisses) {
                triggerGameOver();
                return;
            }
        }
    }
}

function drawGameOver() {
    ctx.fillStyle = "#FF4C4C";
    ctx.font = "24px 'Press Start 2P', cursive";
    ctx.textAlign = "center";
    ctx.fillText("GAME OVER", canvas.width / 2, canvas.height / 2 - 20);
    ctx.fillStyle = "#00F5C9";
    ctx.font = "16px 'Press Start 2P', cursive";
    ctx.fillText("Score: " + score, canvas.width / 2, canvas.height / 2 + 20);
    ctx.font = "12px 'Press Start 2P', cursive";
    ctx.fillText("Press Restart or Start", canvas.width / 2, canvas.height / 2 + 60);
}

function moveBasket() {
    if (gameOver) return;

    if (keys["ArrowLeft"]) basket.x -= basket.speed;
    if (keys["ArrowRight"]) basket.x += basket.speed;

    if (basket.x < 0) basket.x = 0;
    if (basket.x + basket.width > canvas.width) basket.x = canvas.width - basket.width;
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    moveBasket();
    drawBasket();
    drawItems();
    updateItems();

    if (gameOver) {
        drawGameOver();
    }

    animationId = requestAnimationFrame(gameLoop);
}

function startGame() {
    if (gameRunning && !gameOver) return;

    gameRunning = true;
    gameOver = false;
    spawnInterval = setInterval(spawnItem, 1000);
    gameLoop();
}

function restartGame() {
    cancelAnimationFrame(animationId);
    clearInterval(spawnInterval);

    // Reset game state
    basket.x = 160;
    items = [];
    score = 0;
    misses = 0;
    gameRunning = true;
    gameOver = false;
    scoreDisplay.textContent = score;

    gameLoop();
    spawnInterval = setInterval(spawnItem, 1000);
}

function triggerGameOver() {
    clearInterval(spawnInterval);
    cancelAnimationFrame(animationId);
    gameOver = true;
    gameRunning = false;
    drawGameOver(); // make sure it draws even if not in gameLoop
}

startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", restartGame);
