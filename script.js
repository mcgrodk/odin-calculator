const calcDisplay = document.querySelector('#calc-display');
const buttons = document.querySelectorAll('button');

const add = function (num1, num2) {
    return num1 + num2;
}

const subtract = function (num1, num2) {
    return num1 - num2;
}

const multiply = function (num1, num2) {
    return num1 * num2;
}

const divide = function (num1, num2) {
    return num1 / num2;
}

const operate = function (operator, num1, num2) {
    if (operator === '+') return add(num1, num2);
    if (operator === '-') return subtract(num1, num2);
    if (operator === '*') return multiply(num1, num2);
    if (operator === '/') return divide(num1, num2);
}