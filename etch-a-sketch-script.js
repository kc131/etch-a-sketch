function createSquare() {
    const mainContainer = document.getElementById("main-container");
    let newSquare = document.createElement('div');
    newSquare.classList.add("square-style");
    mainContainer.appendChild(newSquare);
}

function createAllSquares() {
for (i=1; i<=256; i++) {
    createSquare();
}
}

createAllSquares();
const squareCollection = document.getElementsByClassName("square-style");

for (i=0; i<squareCollection.length; i++) {
    let aSquare = squareCollection[i];
    aSquare.addEventListener("mouseover", function() {
        mouseOver(aSquare);
      });

};

function mouseOver(chosenDiv) {
    chosenDiv.style.backgroundColor = "red";

}







