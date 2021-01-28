window.addEventListener("DOMContentLoaded", loadDOM);

let buttonClicks = 1;

let colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
                '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
                '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
                '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
                '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
                '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
                '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
                '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
                '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
                '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

function loadDOM() {

    let buttonContainer = document.createElement("div")
    buttonContainer.className = "buttonContainer"
    buttonContainer.id = "0"
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
    square.className = "square";
    square.id = buttonClicks;
    let squareText = document.createTextNode(buttonClicks);
    square.appendChild(squareText);
    
    document.body.appendChild(square);
    buttonClicks++;

    square.addEventListener("click", colorChanger);
    square.addEventListener("dblclick", squareRemover);
}

function colorChanger() {
    let randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
    event.target.style.backgroundColor = randomColor;
    };

function squareRemover() {
    let x = event.target.nextSibling
    let y = event.target.previousSibling
    if(x == null || y == null || y.id == 0) {
        alert("No square to remove.");
    } else if(event.target.id % 2 == 0) {
        x.remove();
    }
    else if(event.target.id % 2 == 1 && y.id > 0) {
        y.remove();
    }
}