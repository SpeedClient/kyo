// breakout.js
window.onload = function () {
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");

    const ballRadius = 8;
    let x = canvas.width / 2;
    let y = canvas.height - 30;
    let dx = 1.5;       // slower ball
    let dy = -1.5;

    const paddle = {
        height: 10,
        width: 110,       // wider for easier play
        x: (canvas.width - 110) / 2,
        speed: 7
    };

    let rightPressed = false;
    let leftPressed = false;

    const brickRowCount = 4;
    const brickColumnCount = 6;  // fewer bricks
    const brickWidth = 60;
    const brickHeight = 20;
    const brickPadding = 10;
    const brickOffsetTop = 30;
    const brickOffsetLeft = 35;

    let score = 0;
    let lives = 3;

    let intervalId = null;

    const bricks = [];
    for (let c = 0; c < brickColumnCount; c++) {
        bricks[c] = [];
        for (let r = 0; r < brickRowCount; r++) {
            bricks[c][r] = { x: 0, y: 0, status: 1 };
        }
    }

    document.addEventListener("keydown", keyDownHandler);
    document.addEventListener("keyup", keyUpHandler);
    document.addEventListener("mousemove", mouseMoveHandler);

    function keyDownHandler(e) {
        if (e.key === "ArrowRight") rightPressed = true;
        else if (e.key === "ArrowLeft") leftPressed = true;
    }
    function keyUpHandler(e) {
        if (e.key === "ArrowRight") rightPressed = false;
        else if (e.key === "ArrowLeft") leftPressed = false;
    }
    function mouseMoveHandler(e) {
        const relX = e.clientX - canvas.offsetLeft;
        if (relX > 0 && relX < canvas.width) {
            paddle.x = relX - paddle.width / 2;
        }
    }

    function collisionDetection() {
        for (let c = 0; c < brickColumnCount; c++) {
            for (let r = 0; r < brickRowCount; r++) {
                const b = bricks[c][r];
                if (b.status === 1 &&
                    x > b.x && x < b.x + brickWidth &&
                    y > b.y && y < b.y + brickHeight) {
                    dy = -dy;
                    b.status = 0;
                    score++;
                    if (score === brickRowCount * brickColumnCount) {
                        gameOver("You Win!");
                    }
                }
            }
        }
    }

    function drawBall() {
        ctx.beginPath();
        ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
        ctx.fillStyle = "#00f5c9";
        ctx.fill();
        ctx.closePath();
    }

    function drawPaddle() {
        ctx.beginPath();
        ctx.rect(paddle.x, canvas.height - paddle.height,
            paddle.width, paddle.height);
        ctx.fillStyle = "#00f5c9";
        ctx.fill();
        ctx.closePath();
    }

    function drawBricks() {
        for (let c = 0; c < brickColumnCount; c++) {
            for (let r = 0; r < brickRowCount; r++) {
                if (bricks[c][r].status === 1) {
                    const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
                    const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
                    bricks[c][r].x = brickX;
                    bricks[c][r].y = brickY;
                    ctx.beginPath();
                    ctx.rect(brickX, brickY, brickWidth, brickHeight);
                    ctx.fillStyle = "#0095DD";
                    ctx.fill();
                    ctx.closePath();
                }
            }
        }
    }

    function drawScore() {
        ctx.font = "16px Arial";
        ctx.fillStyle = "#00f5c9";
        ctx.fillText(`Score: ${score}`, 8, 20);
    }

    function drawLives() {
        ctx.font = "16px Arial";
        ctx.fillStyle = "#00f5c9";
        ctx.fillText(`Lives: ${lives}`, canvas.width - 85, 20);
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBricks();
        drawBall();
        drawPaddle();
        drawScore();
        drawLives();
        collisionDetection();

        if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
            dx = -dx;
        }
        if (y + dy < ballRadius) {
            dy = -dy;
        } else if (y + dy > canvas.height - ballRadius) {
            if (x > paddle.x && x < paddle.x + paddle.width) {
                dy = -dy;
            } else {
                lives--;
                if (!lives) {
                    gameOver("Game Over");
                } else {
                    // reset ball and paddle positions
                    x = canvas.width / 2;
                    y = canvas.height - 30;
                    dx = 1.5;
                    dy = -1.5;
                    paddle.x = (canvas.width - paddle.width) / 2;
                }
            }
        }

        if (rightPressed && paddle.x < canvas.width - paddle.width) {
            paddle.x += paddle.speed;
        } else if (leftPressed && paddle.x > 0) {
            paddle.x -= paddle.speed;
        }

        x += dx;
        y += dy;
        intervalId = requestAnimationFrame(draw);
    }

    function gameOver(message) {
        cancelAnimationFrame(intervalId);
        alert(message);
        document.location.reload();
    }

    document.getElementById("startButton").onclick = () => {
        document.getElementById("gameOverScreen").classList.add("hidden");
        draw();
    };
    document.getElementById("restartButton").onclick = () => {
        document.location.reload();
    };
};
