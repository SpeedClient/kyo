const boardEl = document.getElementById('board'), msg = document.getElementById('message');
const restartBtn = document.getElementById('restart');
const winning = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
let board = Array(9).fill(null), turn = 'X', gameActive = true;

function render() {
    boardEl.innerHTML = '';
    board.forEach((v, i) => {
        const div = document.createElement('div');
        div.textContent = v || '';
        div.className = 'w-20 h-20 border border-gray-500 flex items-center justify-center text-2xl cursor-pointer';
        div.onclick = () => cellClick(i);
        boardEl.append(div);
    });
    msg.textContent = gameActive ? `${turn}'s turn` : '';
}

function cellClick(i) {
    if (!gameActive || board[i]) return;
    board[i] = turn;
    if (checkWin(turn)) {
        msg.textContent = `${turn} Wins!`;
        gameActive = false;
    } else if (!board.includes(null)) {
        msg.textContent = "Draw!";
        gameActive = false;
    } else {
        turn = turn === 'X' ? 'O' : 'X';
    }
    render();
}

function checkWin(player) {
    return winning.some(c => c.every(i => board[i] === player));
}

restartBtn.onclick = () => { board.fill(null); turn = 'X'; gameActive = true; render(); };

render();
