const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const startButton = document.getElementById('startButton');
const restartButton = document.getElementById('restartButton');
const gameOverScreen = document.getElementById('gameOverScreen');
const finalScore = document.getElementById('finalScore');

const bird = {
    x: 50,
    y: canvas.height / 2,
    width: 20,
    height: 20,
    velocity: 0,
    gravity: 0.6,  // Increased gravity for faster fall
    lift: -15,     // Stronger upward force for higher jump
    jumpHeight: -12 // Adjusted jump impulse for smoother curve
};

const pipes = [];
const pipeWidth = 50;
const pipeGap = 200;
let score = 0;
let gameLoopInterval;
let gameRunning = false;

function resetGame() {
    bird.y = canvas.height / 2;
    bird.velocity = 0;
    pipes.length = 0;
    score = 0;
    gameOverScreen.classList.add('hidden');
    finalScore.textContent = score;
}

function drawBird() {
    ctx.fillStyle = '#00F5C9';
    ctx.fillRect(bird.x, bird.y, bird.width, bird.height);
}

function drawPipes() {
    pipes.forEach(pipe => {
        ctx.fillStyle = '#00F5C9';
        ctx.fillRect(pipe.x, 0, pipeWidth, pipe.topHeight);
        ctx.fillRect(pipe.x, pipe.topHeight + pipeGap, pipeWidth, canvas.height - pipe.topHeight - pipeGap);
    });
}

function drawScore() {
    ctx.fillStyle = '#00F5C9';
    ctx.font = '20px Orbitron';
    ctx.fillText('Score: ' + score, 10, 30);
}

function update() {
    bird.velocity += bird.gravity;
    bird.y += bird.velocity;

    if (bird.y + bird.height > canvas.height || bird.y < 0) {
        endGame();
    }

    pipes.forEach(pipe => {
        pipe.x -= 2;

        if (pipe.x + pipeWidth < 0) {
            pipes.shift();
        }

        if (pipe.x === bird.x) {
            score++;
        }

        if (
            bird.x + bird.width > pipe.x &&
            bird.x < pipe.x + pipeWidth &&
            (bird.y < pipe.topHeight || bird.y + bird.height > pipe.topHeight + pipeGap)
        ) {
            endGame();
        }
    });
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBird();
    drawPipes();
    drawScore();
    update();
}

function startGame() {
    if (gameRunning) return;
    resetGame();
    gameRunning = true;
    startButton.disabled = true;
    gameOverScreen.classList.add('hidden');
    if (gameLoopInterval) clearInterval(gameLoopInterval);
    gameLoopInterval = setInterval(gameLoop, 1000 / 60);
}

function endGame() {
    gameRunning = false;
    clearInterval(gameLoopInterval);
    gameOverScreen.classList.remove('hidden');
    finalScore.textContent = score;
    startButton.disabled = false;
}

function createPipe() {
    const topHeight = Math.floor(Math.random() * (canvas.height - pipeGap));
    pipes.push({ x: canvas.width, topHeight });
}

function handleKeyDown(event) {
    if (event.key === 'Enter' && !gameRunning) {
        startGame();
    }
    if (event.key === ' ' || event.key === 'ArrowUp') {
        bird.velocity = bird.jumpHeight;
    }
}

startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', startGame);
document.addEventListener('keydown', handleKeyDown);

setInterval(createPipe, 2000);
