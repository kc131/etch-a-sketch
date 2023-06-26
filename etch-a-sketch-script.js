const canvasColorChoice = document.getElementById("canvas-color-choice");
const inkColorChoice = document.getElementById("ink-color-choice");
const submitButton = document.getElementById("submit-button");
let currentInkColor = "white";
let currentCanvasColor = "black";

function createSquare() {
    const gameCanvas = document.getElementById("game-canvas");
    let newSquare = document.createElement('div');
    newSquare.classList.add("square-style");
    gameCanvas.appendChild(newSquare);
}

function createAllSquares() {
for (i=1; i<=5000; i++) {
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


let ctrlKeyDown = false;
document.onkeydown = (event) => {

 if (event.key === 'Control') {
    ctrlKeyDown = true;
};
}; 

document.onkeyup = (event) => {
    if (event.key === 'Control') {
     ctrlKeyDown = false;  
    }
}


function mouseOver(chosenDiv) {
    if (ctrlKeyDown === true) {
    chosenDiv.style.backgroundColor = currentInkColor;
    } else {
        return;
    }
}

submitButton.addEventListener("click", resetColors);


function resetColors() {
    const gameCanvas = document.getElementById("game-canvas");
    let newCanvasColorChoice = canvasColorChoice.value;
    let newInkColorChoice = inkColorChoice.value;
    currentInkColor = newInkColorChoice;
    
    if (document.getElementById('reset-ink-yes').checked === true) {
    for (i=0; i<squareCollection.length; i++) {
        let aSquare = squareCollection[i];
        aSquare.removeAttribute('style');
    };
    };

    switch(newCanvasColorChoice) {
        case "black":
            gameCanvas.classList.remove(`bg-${currentCanvasColor}`);
            gameCanvas.classList.add(`bg-${newCanvasColorChoice}`);
            currentCanvasColor = newCanvasColorChoice;
            break;

        case "white":
            gameCanvas.classList.remove(`bg-${currentCanvasColor}`);
            gameCanvas.classList.add(`bg-${newCanvasColorChoice}`);
            currentCanvasColor = newCanvasColorChoice;
            break; 
            
        case "red":
            gameCanvas.classList.remove(`bg-${currentCanvasColor}`);
            gameCanvas.classList.add(`bg-${newCanvasColorChoice}`);
            currentCanvasColor = newCanvasColorChoice;
            break;
    
        case "green":
            gameCanvas.classList.remove(`bg-${currentCanvasColor}`);
            gameCanvas.classList.add(`bg-${newCanvasColorChoice}`);
            currentCanvasColor = newCanvasColorChoice;
            break;

        case "yellow":
            gameCanvas.classList.remove(`bg-${currentCanvasColor}`);
            gameCanvas.classList.add(`bg-${newCanvasColorChoice}`);
            currentCanvasColor = newCanvasColorChoice;
            break; 
                
        case "blue":
            gameCanvas.classList.remove(`bg-${currentCanvasColor}`);
            gameCanvas.classList.add(`bg-${newCanvasColorChoice}`);
            currentCanvasColor = newCanvasColorChoice;
            break;

        case "purple":
            gameCanvas.classList.remove(`bg-${currentCanvasColor}`);
            gameCanvas.classList.add(`bg-${newCanvasColorChoice}`);
            currentCanvasColor = newCanvasColorChoice;
            break;

        case "orange":
            gameCanvas.classList.remove(`bg-${currentCanvasColor}`);
            gameCanvas.classList.add(`bg-${newCanvasColorChoice}`);
            currentCanvasColor = newCanvasColorChoice;
            break;

    }
}

