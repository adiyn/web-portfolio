const dimension = 150;
const imgStart = Math.floor(Math.random() * 100) + 1;
const images = [];

// fetching images
const gameBoard = document.getElementById("game-board");
const timerDisplay = document.getElementById("timer");
const resultDisplay = document.getElementById("result");
const resetBtn = document.getElementById("reset-btn");

// states
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let moves = 0;
let matchedCount = 0;
let seconds = 0;
let timerInterval = null;
for (let i = 0; i < 8; i++) {
    images[i] = `https://picsum.photos/id/${imgStart + i}/${dimension}`;
}

let cards = [...images, ...images];

// game funcions
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function resetBoard() {
    [firstCard, secondCard] = [null, null];
    lockBoard = false;
}

function formatTime(sec) {
    const minutes = Math.floor(sec / 60);
    const remainingSeconds = sec % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

function startTimer() {
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        seconds++;
        timerDisplay.textContent = formatTime(seconds);
    }, 1000);
}

function checkVictory() {
    if (matchedCount === cards.length) {
        clearInterval(timerInterval);
        resultDisplay.textContent = `You won in ${moves} moves and ${formatTime(seconds)} !`;
    }
}

function checkMatch() {
    const isMatch = firstCard.dataset.value === secondCard.dataset.value;

    if (isMatch) {
        firstCard.classList.add("matched");
        secondCard.classList.add("matched");
        matchedCount += 2;
        resetBoard();
        checkVictory();
    } else {
        setTimeout(() => {
            firstCard.innerHTML = "";
            secondCard.innerHTML = "";
            resetBoard();
        }, 800);
    }
}

function handleCardClick(card) {
    if (lockBoard || card === firstCard || card.classList.contains("matched")) {
        return;
    }

    card.innerHTML = `<img src="${card.dataset.value}" alt="Memory Card" style="width:100%;height:100%;">`;

    if (!firstCard) {
        firstCard = card;
        return;
    }
    
    secondCard = card;
    lockBoard = true;
    moves++;
    checkMatch();
}

// ai stuff
function randomMove() {
    return Math.floor(Math.random() * 12);
}

// game init
function initGame() {
    clearInterval(timerInterval);
    seconds = 0;
    moves = 0;
    matchedCount = 0;
    firstCard = null;
    secondCard = null;
    lockBoard = false;

    timerDisplay.textContent = "00:00";
    resultDisplay.textContent = "";

    shuffle(cards);
    gameBoard.innerHTML = "";

    cards.forEach(imgUrl => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.value = imgUrl;
        card.setAttribute("role", "button");
        card.setAttribute("tabindex", "0");

        card.addEventListener("click", () => handleCardClick(card));
        gameBoard.appendChild(card);
    });

    startTimer();
}

if (resetBtn) {
    resetBtn.addEventListener("click", initGame);
}

initGame();