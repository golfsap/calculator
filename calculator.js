// UI elements
const _equals = document.getElementById("equals");
const _clear = document.getElementById("clear");
const _delete = document.getElementById("delete");
const _dot = document.getElementById("dot");

const display = document.getElementById("display-top");
const displayBottom = document.getElementById("display-bottom");
const numbers = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".operator");

// initialize variables 
let num1 = '';
let num2 = '';
let op = '';
let eval = false;

// event listeners
numbers.forEach(number => {
    number.addEventListener('click', () => handleClickNumbers(number.innerText));
});

operators.forEach(operator => {
    operator.addEventListener('click', () => handleClickOperators(operator.innerText));
})

_equals.addEventListener('click', () => handleClickEquals());

_clear.addEventListener('click', () => clear());

_delete.addEventListener('click', () => handleDelete());

_dot.addEventListener('click', () => addDecimal());

document.addEventListener('keydown', (e) => handleKeyboardInput(e));

function add(a,b) {
    return a+b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b;
}

function operate(a,b,operator) {
    switch(operator) {
        case '+':
            // eval = true;
            return add(a,b);
        case '-':
            // eval = true;
            return subtract(a,b);
        case 'X':
            // eval = true;
            return multiply(a,b);
        case '/':
            // eval = true;
            return divide(a,b);
        default:
            console.log('No operator provided');
            return '';
    }
} 

function handleClickNumbers(number) {
    if (eval === true) {
        num1 = '';
        eval = false;
    }
    if (!op) {
        num1+= number;
        updateDisplay();
        // display.innerText = num1;
        console.log('Num1: '+ num1);
        displayBottom.innerText = num1;
    }
    else {
        num2+= number;
        //display.innerText += num2;
        updateDisplay();
        console.log('Num2: '+ num2);
        displayBottom.innerText = num2;
    }
}

function handleClickOperators(operator) {
    if (!num1) {
        num1 = '0';
    }
    else if (num1 && op && num2) {
        evaluateExpression();
    }
    op = operator;
    //display.innerText += op;
    updateDisplay();
    console.log(op);
    eval = false;
}

function handleClickEquals() {
    if (op === '/' && num2 === '0') {
        alert("Cannot divide by zero");
        return;
    }
    else if (!num1 || !num2 || !op) {
        console.log("missing operator or operand");
        return;
    }
    evaluateExpression();
}

function addDecimal() {
    if (displayBottom.innerText.includes('.')) {
        return;
    }
    else if (!op) {
        displayBottom.innerText += '.';
        num1 = displayBottom.innerText;
    }
    else {
        displayBottom.innerText += '.';
        num2 = displayBottom.innerText;
    }
}

function evaluateExpression() {
    let result = operate(Number(num1), Number(num2), op);
    console.log(result);
    displayBottom.innerText = Math.round(result*10000)/10000;
    updateDisplay();
    display.innerText += `= `;
    // display.innerText = Math.round(result*10000)/10000;
    eval = true;
    num1 = result;
    num2 = '';
    op = '';
}

function updateDisplay() {
    display.innerText = `${Math.round(num1*10000)/10000}${op}${num2}`;
}

function clear() {
    num1 = '';
    num2 = '';
    op = '';
    display.innerText = '';
    displayBottom.innerText = '';
    eval = false;
}

function handleDelete() {
    if (!displayBottom.innerText) {
        console.log("Empty string");
        return;
    }
    else if (!op) {
        displayBottom.innerText = displayBottom.innerText.slice(0,-1);
        num1 = displayBottom.innerText;
        console.log('Num1: '+ num1);
        updateDisplay();
    }
    else {
        displayBottom.innerText = displayBottom.innerText.slice(0,-1);
        num2 = displayBottom.innerText;
        console.log('Num2: '+ num2);
        updateDisplay();
    }
}

function handleKeyboardInput(e) {
    if (e.key >= 0 && e.key <= 9) {
        handleClickNumbers(e.key);
    }
    else if (e.key === '.') addDecimal();
    else if (e.key === 'Backspace') handleDelete();
    else if (e.key === '=' || e.key === 'Enter') handleClickEquals();
    else if (e.key === 'Escape') clear();
    else if (e.key === '/') handleClickOperators('/');
    else if (e.key === 'x' || e.key === 'X' || e.key === '*') handleClickOperators('X');
    else if (e.key === '-') handleClickOperators('-');
    else if (e.key === '+') handleClickOperators('+');
}

