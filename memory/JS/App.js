const dimension = 150;
const imgStart = Math.floor(Math.random() * 100) + 1;
const images = [];

for (let i = 0; i < 8; i++) {
    images[i] = `https://picsum.photos/id/${imgStart + i}/${dimension}`;
}

let cards = [...images, ...images];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

shuffle(cards);
console.log(cards);

function initGame() {
    shuffle(cards);

    gameBoard.innerHTML = "";

    cards.forEach(imgUrl => {
        const card = document.createElement("div");
        card.classList.add("card");
        
        card.dataset.value = imgUrl;
        card.setAttribute("role", "button");
        card.setAttribute("tabindex", "0");

        gameBoard.appendChild(card);
    });
}

initGame();