let runningTotal = 0;
let buffer = '0'; // what's on screen
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
    screen.innerText = buffer; // it's always going to rerender the screen no matter what's in the buffer
}

// from the buttonClick function I would like to go to either handle a symbol or a number

function handleSymbol(symbol){
    switch (symbol) {
        case 'C':
            buffer = '0';
            runningTotal = 0;
            break;
        case '+':
        case '−':
        case '×':
        case '÷':
            handleMath(symbol);
            break;
    }
}

function handleMath(symbol) {
    if (buffer === '0') {
        //do nothing
        return;
    }

    const intBuffer = parseInt(buffer); //turns string into a number, so this is going to be a number

    if (runningTotal === 0) {
        runningTotal = intBuffer;
    } else {
        flushOperation(intBuffer);
    }

    previousOperator = symbol;

    buffer = '0';
}

function flushOperation(intBuffer){
    console.log(intBuffer);
    if (previousOperator === '+') {
        runningTotal += intBuffer;
    } else if (previousOperator === '−') {
        runningTotal -= intBuffer;
    } else if (previousOperator === '×') {
        runningTotal *= intBuffer;
    } else {
        runningTotal /= intBuffer;
    }
    console.log('previousOperator', previousOperator);
    console.log('running total', runningTotal);
}



function handleNumber(numberString){
    if (buffer === '0') {
        buffer = numberString; 
    } else {
        buffer += numberString;
    }
}


function calcInit() {
    document.querySelector('.calc-buttons')
    .addEventListener('click', function(event) {
        buttonClick(event.target.innerText);
    })
}

calcInit();