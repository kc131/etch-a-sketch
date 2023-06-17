function createSquare() {
    const mainContainer = document.getElementById("main-container");
    const newSquare = document.createElement('div');
    newSquare.classList.add("square-style");
    mainContainer.appendChild(newSquare);
}

createSquare();