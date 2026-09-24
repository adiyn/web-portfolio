const startMenuBtn = document.getElementById("start-menu-btn");
const startMenu = document.getElementById("start-menu");
let highestZ = 10;

function bringToFront(windowElement) {
    highestZ++;
    windowElement.style.zIndex = highestZ;
}

function openWindow(windowId) {
    const win = document.getElementById(windowId);
    if (!win) return;
    win.removeAttribute("hidden");
    bringToFront(win);
    closeStartMenu();
}

function closeWindow(windowId) {
    const win = document.getElementById(windowId);
    if (win) {
        win.setAttribute("hidden", "");
    }
}

function toggleStartMenu() {
    const isOpen = !startMenu.hasAttribute("hidden");
    if (isOpen) {
        closeStartMenu();
    } else {
        startMenu.removeAttribute("hidden");
        startMenuBtn.setAttribute("aria-expanded", "true");
    }
}

function closeStartMenu() {
    startMenu.setAttribute("hidden", "");
    startMenuBtn.setAttribute("aria-expanded", "false");
}

// window behaviours
startMenuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleStartMenu();
});

document.addEventListener("click", (e) => {
    if (!startMenu.contains(e.target) && e.target !== startMenuBtn) {
        closeStartMenu();
    }
});

document.querySelectorAll("[data-target]").forEach((trigger) => {
    trigger.addEventListener("click", () => {
        const targetId = trigger.getAttribute("data-target");
        openWindow(targetId);
    });
});

document.querySelectorAll("[data-close]").forEach((btn) => {
    btn.addEventListener("click", () => {
        const targetId = btn.getAttribute("data-close");
        closeWindow(targetId);
    });
});

document.querySelectorAll(".window").forEach((win) => {
    win.addEventListener("mousedown", () => bringToFront(win));
});

initGame();