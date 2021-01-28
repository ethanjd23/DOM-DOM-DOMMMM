window.addEventListener("DOMContentLoaded", loadDOM);

let buttonClicks = 0;

function loadDOM() {

    let buttonContainer = document.createElement("div")
    buttonContainer.className = "buttonContainer"
    let button = document.createElement("button");
    button.className = "button"
    let buttonText = document.createTextNode("Add Square");
    button.appendChild(buttonText);
    buttonContainer.appendChild(button);
    document.body.appendChild(buttonContainer); // Creating button


    button.addEventListener("click", addSquare);
}


function addSquare() {
    let square = document.createElement("div")
    square.className = "div";
    square.id = buttonClicks;
    let squareText = document.createTextNode(buttonClicks);
    square.appendChild(squareText);
    document.body.appendChild(square);
    buttonClicks++;
}