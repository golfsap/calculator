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

const display = document.getElementById("display");
const numbers = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".operator");

// initialize variables 
let num1 = '';
let num2 = '';
let op = '';

numbers.forEach(number => {
    number.addEventListener('click', () => handleClickNumbers(number));
});

operators.forEach(operator => {
    operator.addEventListener('click', () => handleClickOperators(operator));
})

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
            add(a,b);
            break;
        case '-':
            subtract(a,b);
            break;
        case '*':
            multiply(a,b);
            break;
        case '/':
            divide(a,b);
            break;
        default:
            console.log('No operator provided');
    }
} 

function handleClickNumbers(number) {
    const numFromText = number.innerText;
    num1+= numFromText;
    display.innerText = num1;
}

function handleClickOperators(operator) {
    op = operator.innerText;
    // operator = operatorFromText;
    console.log(op);
    // display.innerText = num1;
}

console.log(numbers);
