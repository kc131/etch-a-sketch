function createSquare() {
    const mainContainer = document.getElementById("main-container");
    let newSquare = document.createElement('div');
    newSquare.classList.add("square-style");
    mainContainer.appendChild(newSquare);
}

function createAllSquares() {
for (i=1; i<=256; i++) {
    createSquare();
    /*let tempVar = "square" + i;  //delete this part if you end up not needing it
    console.log(tempVar); */

}


}


createAllSquares();