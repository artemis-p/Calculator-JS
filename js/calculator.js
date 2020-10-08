let runningTotal = 0;
let buffer = "0"; // what's on screen
let previousOperator; // the operator that was clicked 

const screen = document.querySelector('.screen');

// pareInt() => parses a string and returns an integer
// isNaN determines whether a value is an illegal number = > returns true if the value is not a number and false if the value is a number
function buttonClick(value) {
    if(isNaN(value)) {
        //this is not a number
        handleSymbol(value);
    } else {
        //this is a number
        handleNumber(value);
    }
}

// from the buttonClick function I would like to go to either handle a symbol or a number

function handleSymbol(symbol){}

function handleNumber(numberString){
    if (buffer === "0") {
        buffer = numberString; 
    } else {
        buffer += numberString;
    }
    screen.innerText = buffer;
}


function calcInit() {
    document.querySelector('.calc-buttons')
    .addEventListener('click', function(event) {
        buttonClick(event.target.innerText);
    })
}

calcInit();