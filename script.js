const calcDisplay = document.querySelector('#calc-display');
const btnClear = document.querySelector('#btn-clear');
const btnDel = document.querySelector('#btn-del');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const btnDecimal = document.querySelector('#btn-decimal');

calcDisplay.textContent = '0';

let calcTotal;

numbers.forEach((number) => {
  number.addEventListener('click', () => {
    if (calcDisplay.textContent === '0') calcDisplay.textContent = '';
    if (calcDisplay.textContent.length >= 11)  {
      return;
    } else calcDisplay.textContent += number.value;
});
});

btnClear.addEventListener('click', () => {
  calcDisplay.textContent = '0';
});

btnDel.addEventListener('click', () => {
  calcDisplay.textContent = deleteLastChar(calcDisplay.textContent);
});

btnDecimal.addEventListener('click', () => {
  if(calcDisplay.textContent.includes('.') == true) {
    return;
  } else calcDisplay.textContent += '.';
});

operators.forEach((operator) => {
  operator.addEventListener('click', () => {
  storeFirstOperand();
  })
});

function storeFirstOperand(num) {
  let firstOperand = (parseInt(calcDisplay.textContent));
  displayValue = '';
  return;
}


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

const deleteLastChar = function (string) {
  let delString = string.substring(0, string.length -1);
  if (string.length == 1) {
    return 0;
  }
    else return delString;
}

/*
How to add:
Input one number, then press plus 
Calc stores the number in previously empty variable
Input next number, then press equals 
On hitting equals, returns value of operate() function
*/