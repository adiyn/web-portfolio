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