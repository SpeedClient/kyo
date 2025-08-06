const emojis = ['🍎', '🍌', '🍇', '🍒', '🍉', '🍍', '🥝', '🍑'];
const boardEl = document.getElementById('board');
const movesEl = document.getElementById('moves');
const resetBtn = document.getElementById('reset-btn');
const gameOverEl = document.getElementById('game-over');
const finalMovesEl = document.getElementById('final-moves');
const playAgainBtn = document.getElementById('play-again-btn');

let flipped = [], matched = 0, moves = 0, cardEls = [];

function shuffle(arr) { return arr.sort(() => Math.random() - 0.5); }

function startGame() {
  const pairList = shuffle([...emojis, ...emojis]);
  cardEls = [];
  boardEl.innerHTML = '';
  flipped = [];
  matched = 0;
  moves = 0;
  movesEl.textContent = moves;
  gameOverEl.classList.add('hidden');

  pairList.forEach(symbol => {
    const div = document.createElement('div');
    div.className = 'card';
    div.textContent = '';
    div.dataset.emoji = symbol;
    div.addEventListener('click', () => onCardClick(div));
    boardEl.appendChild(div);
    cardEls.push(div);
  });
}

function onCardClick(el) {
  if (flipped.length === 2 || el.classList.contains('flipped') || el.classList.contains('matched')) return;
  el.classList.add('flipped');
  el.textContent = el.dataset.emoji;
  flipped.push(el);
  if (flipped.length === 2) {
    moves++;
    movesEl.textContent = moves;
    setTimeout(checkMatch, 600);
  }
}

function checkMatch() {
  const [a, b] = flipped;
  if (a.dataset.emoji === b.dataset.emoji) {
    a.classList.add('matched');
    b.classList.add('matched');
    matched += 2;
    if (matched === cardEls.length) {
      finalMovesEl.textContent = moves;
      gameOverEl.classList.remove('hidden');
    }
  } else {
    flipped.forEach(c => {
      c.classList.remove('flipped');
      c.textContent = '';
    });
  }
  flipped = [];
}

resetBtn.addEventListener('click', startGame);
playAgainBtn.addEventListener('click', startGame);
document.addEventListener('keydown', e => {
  if (e.key === 'Enter') startGame();
});

startGame();
