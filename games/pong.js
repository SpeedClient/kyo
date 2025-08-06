const canvas = document.getElementById('pongCanvas');
const ctx = canvas.getContext('2d');

// Paddle Variables
const paddleWidth = 10;
const paddleHeight = 100;
let paddle1Y = canvas.height / 2 - paddleHeight / 2;
let paddle2Y = canvas.height / 2 - paddleHeight / 2;

// Ball Variables
const ballSize = 10;
let ballX = canvas.width / 2;
let ballY = canvas.height / 2;
let ballSpeedX = 5;
let ballSpeedY = 5;

// Score Variables
let playerScore = 0;
let aiScore = 0;

// Game State
let gameStarted = false;
let gameOver = false;

// Draw Functions
function drawRect(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);
}

function drawCircle(x, y, radius, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.fill();
}

function drawText(text, x, y, font = '20px Arial', color = 'white') {
    ctx.fillStyle = color;
    ctx.font = font;
    ctx.fillText(text, x, y);
}

function draw() {
    // Clear Canvas
    drawRect(0, 0, canvas.width, canvas.height, 'black');

    // Draw Paddles
    drawRect(0, paddle1Y, paddleWidth, paddleHeight, 'white');
    drawRect(canvas.width - paddleWidth, paddle2Y, paddleWidth, paddleHeight, 'white');

    // Draw Ball
    drawCircle(ballX, ballY, ballSize, 'white');

    // Draw Scoreboard
    drawText(`Player: ${playerScore}`, 50, 30);
    drawText(`AI: ${aiScore}`, canvas.width - 100, 30);

    // Draw Start Screen
    if (!gameStarted) {
        drawText('Press Enter to Start', canvas.width / 2 - 100, canvas.height / 2);
    }

    // Draw Game Over Screen
    if (gameOver) {
        drawText('Game Over! Press Enter to Restart', canvas.width / 2 - 150, canvas.height / 2);
    }
}

// Update Function
function update() {
    if (gameStarted && !gameOver) {
        // Move Ball
        ballX += ballSpeedX;
        ballY += ballSpeedY;

        // Ball Collision with Top and Bottom Walls
        if (ballY - ballSize < 0 || ballY + ballSize > canvas.height) {
            ballSpeedY = -ballSpeedY;
        }

        // Ball Collision with Paddles
        if (ballX - ballSize < paddleWidth && ballY > paddle1Y && ballY < paddle1Y + paddleHeight ||
            ballX + ballSize > canvas.width - paddleWidth && ballY > paddle2Y && ballY < paddle2Y + paddleHeight) {
            ballSpeedX = -ballSpeedX;
            if (ballX - ballSize < paddleWidth) {
                playerScore += 100;
            } else {
                aiScore += 100;
            }
        }

        // Ball Out of Bounds
        if (ballX - ballSize < 0 || ballX + ballSize > canvas.width) {
            resetBall();
        }
    }
}

// Reset Ball Position
function resetBall() {
    ballX = canvas.width / 2;
    ballY = canvas.height / 2;
    ballSpeedX = -ballSpeedX;

    // Check for Game Over
    if (playerScore >= 1000 || aiScore >= 1000) {
        gameOver = true;
    }
}

// Mouse Move Handler
canvas.addEventListener('mousemove', function (event) {
    if (gameStarted && !gameOver) {
        const mousePos = calculateMousePos(event);
        paddle1Y = mousePos.y - paddleHeight / 2;
    }
});

// Calculate Mouse Position
function calculateMousePos(event) {
    const rect = canvas.getBoundingClientRect();
    const root = document.documentElement;
    const mouseX = event.clientX - rect.left - root.scrollLeft;
    const mouseY = event.clientY - rect.top - root.scrollTop;
    return { x: mouseX, y: mouseY };
}

// Keyboard Event Listener
document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        if (!gameStarted || gameOver) {
            startGame();
        }
    }
});

// Start Game Function
function startGame() {
    playerScore = 0;
    aiScore = 0;
    gameStarted = true;
    gameOver = false;
    resetBall();
    gameLoop();
}

// Game Loop
function gameLoop() {
    draw();
    update();
    requestAnimationFrame(gameLoop);
}

// Start the Game
startGame();
    