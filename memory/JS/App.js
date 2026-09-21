const dimension = 150;
const imgStart = Math.floor(Math.random() * 100) + 1;
const images = [];

for (let i = 0; i < 8; i++) {
    images[i] = `https://picsum.photos/id/${imgStart + i}/${dimension}`;
}

let cards = [...images, ...images];
const gameBoard = document.getElementById("game-board");

let firstCard = null;
let secondCard = null;
let lockBoard = false;
let moves = 0;
let matchedCount = 0;

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

function checkMatch() {
    const isMatch = firstCard.dataset.value === secondCard.dataset.value;

    if (isMatch) {
        firstCard.classList.add("matched");
        secondCard.classList.add("matched");
        matchedCount += 2;
        resetBoard();
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

function initGame() {
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
}

initGame();