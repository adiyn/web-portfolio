const victories = document.getElementById("victories");
const defeats = document.getElementById("defeats");
const nulls = document.getElementById("nulls");
const playButtons = document.getElementById("play_buttons");
const resetButton = document.getElementById("reset");
const result = document.getElementById("result");

const moves = {
    rock: 0,
    paper: 1,
    scissors: 2
};

const state = {
    victories: 0,
    defeats: 0,
    nulls: 0
};

function randomMove() {
    return Math.floor(Math.random() * 3);
}

function getResult(player, robot) {
    return (player - robot + 3) % 3;
}

function play(player) {
    const robot = randomMove();
    const res = getResult(player, robot);

    if (res === 0) {
        state.nulls++;
        result.textContent = "EGALITEEEEE";
    } else if (res === 1) {
        state.victories++;
        result.textContent = "VICTOIRE DUUU JOUEUUUUUUR";
    } else {
        state.defeats++;
        result.textContent = "DEFAITE TOTALE.";
    }
    show();
}

function show() {
    victories.textContent = state.victories;
    defeats.textContent = state.defeats;
    nulls.textContent = state.nulls;
}

function reset() {
    state.victories = 0;
    state.defeats = 0;
    state.nulls = 0;
    result.textContent = "Bienvenue sur ShiFuMi :)";
    show();
}

playButtons.addEventListener("click", event => {
    const btn = event.target.closest(".btn");
    if (!btn) return;

    const player = moves[btn.dataset.move];
    if (player !== undefined) {
        play(player);
    }
});

resetButton.addEventListener("click", reset);

reset();