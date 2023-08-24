// UI elements
const _0 = document.getElementById("zero");
const _1 = document.getElementById("one");
const _2 = document.getElementById("two");
const _3 = document.getElementById("three");
const _4 = document.getElementById("four");
const _5 = document.getElementById("five");
const _6 = document.getElementById("six");
const _7 = document.getElementById("seven");
const _8 = document.getElementById("eight");
const _9 = document.getElementById("nine");
const _add = document.getElementById("add");
const _subtract = document.getElementById("subtract");
const _multiply = document.getElementById("multiply");
const _divide = document.getElementById("divide");
const _equals = document.getElementById("equals");
const _clear = document.getElementById("clear");
const _delete = document.getElementById("delete");

const display = document.getElementById("display");
const numbers = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".operator");

// initialize variables 
let num1 = '';
let num2 = '';
let op = '';
let eval = false;

// event listeners
numbers.forEach(number => {
    number.addEventListener('click', () => handleClickNumbers(number));
});

operators.forEach(operator => {
    operator.addEventListener('click', () => handleClickOperators(operator));
})

_equals.addEventListener('click', () => handleClickEquals());

_clear.addEventListener('click', () => clear());

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
        num1+= number.innerText;
        updateDisplay();
        // display.innerText = num1;
        console.log(num1);
    }
    else {
        num2+= number.innerText;
        //display.innerText += num2;
        updateDisplay();
        console.log(num2);
    }
}

function handleClickOperators(operator) {
    if (num1 && op && num2) {
        evaluateExpression();
    }
    op = operator.innerText;
    //display.innerText += op;
    updateDisplay();
    console.log(op);
    eval = false;
}

function handleClickEquals() {
    if (!num1 || !num2 || !op) {
        console.log("missing operator or operand");
        return;
    }
    evaluateExpression();
}

function evaluateExpression() {
    let result = operate(Number(num1), Number(num2), op);
    console.log(result);
    display.innerText = result;
    eval = true;
    num1 = result;
    num2 = '';
    op = '';
}

function updateDisplay() {
    display.innerText = `${num1}${op}${num2}`;
}

function clear() {
    num1 = '';
    num2 = '';
    op = '';
    display.innerText = '';
    eval = false;
}

// handle overflow, rounding, divide by zero

