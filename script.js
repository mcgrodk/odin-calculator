const calcDisplay = document.querySelector('#calc-display');
const clearBtn = document.querySelector('#btn-ac');
const buttons = document.querySelectorAll('button');

let displayValue = document.createElement('p');
calcDisplay.appendChild(displayValue);

displayValue.textContent = '0';

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (displayValue.textContent === '0') displayValue.textContent = '';
    if (displayValue.textContent.length >= 10)  {
      return;
    } else displayValue.textContent += button.value;
});
});

clearBtn.addEventListener('click', () => {
  displayValue.textContent = '0';
});


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

