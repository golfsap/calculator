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

const display = document.getElementById("display");
const numbers = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".operator");

// initialize variables 
let num1 = '';
let num2 = '';
let op = '';
let eval = '';

// event listeners
numbers.forEach(number => {
    number.addEventListener('click', () => handleClickNumbers(number));
});

operators.forEach(operator => {
    operator.addEventListener('click', () => handleClickOperators(operator));
})

eval = _equals.addEventListener('click', () => evaluateExpression());

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
    // console.log("evaluating expression");
    switch(operator) {
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case 'X':
            return multiply(a,b);
        case '/':
            return divide(a,b);
        default:
            console.log('No operator provided');
    }
} 

function handleClickNumbers(number) {
    if (!op) {
        num1+= number.innerText;
        display.innerText = num1;
        console.log(num1);
    }
    else {
        num2+= number.innerText;
        display.innerText = num2;
        console.log(num2);
    }
}

function handleClickOperators(operator) {
    op = operator.innerText;
    display.innerText += op;
    console.log(op);
}

function evaluateExpression() {
    let result = operate(Number(num1), Number(num2), op);
    display.innerText = result;
    console.log(result);
    num1 = result;
    num2 = '';
    op = '';
}

function handleClick() {
    
}

// console.log(divide(1,2));
