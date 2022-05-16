const display = document.querySelector('#display');
display.textContent = '0';

const btnClear = document.querySelector('#btn-clear');
btnClear.addEventListener('click', clear);

const btnEquals = document.querySelector('#btn-equals');
btnEquals.addEventListener('click', () => {
  operate();
  operators.forEach((operator) => {
    operator.classList.remove('current-op');
    })
});

const btnDel = document.querySelector('#btn-del');
btnDel.addEventListener('click', () => {
  display.textContent = deleteLastChar(display.textContent);
});

const btnDecimal = document.querySelector('#btn-decimal');
btnDecimal.addEventListener('click', () => {
  if(display.textContent.includes('.') == true) {
    return;
  } else display.textContent += '.';
});

let initialNum = null;
let previousOperand = null;
let nextOperand = null;
let currentOperator;

const numbers = document.querySelectorAll('.number');
numbers.forEach((number) => {
  number.addEventListener('click', () => {
    if (display.textContent === '0') display.textContent = '';
    
    if (initialNum !== null) {
      previousOperand = initialNum;
      initialNum = null;
      display.textContent = '';
    }
    
    if (display.textContent.length >= 11)  {
      return;
    } else display.textContent += number.value;
});
});

const operators = document.querySelectorAll('.operator');
operators.forEach((operator) => {
  operator.addEventListener('click', () => {
   initialNum = Number(display.textContent);
    currentOperator = (operator.id);
    operator.classList.add('current-op');
    console.log(initialNum);
  })
});

function clear() {
  display.textContent = 0;
  operators.forEach((operator) => {
  operator.classList.remove('current-op');
  })
}

function deleteLastChar (string) {
  if (display.textContent === 'Stop it!') clear();
  let delString = string.slice(0, -1); 
  if (string.length == 1) {
    return 0;
  }
    else return delString;
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    if (num2 === 0) {
      return 'Stop it!';
    } else return num1 / num2;
}

function operate(currentOperator, previousOperand, nextOperand) {
  let operator = (currentOperator.value);
  nextOperand = display.textContent;
  if (operator === '+') return add(previousOperand, nextOperand);
  if (operator === '-') return subtract(previousOperand, nextOperand);
  if (operator === '*') return multiply(previousOperand, nextOperand);
  if (operator === '/') return divide(previousOperand, nextOperand);
}

const btnAdd = document.querySelector('#btn-add');
btnAdd.addEventListener('click', () => {
  btnSubtract.classList.remove('current-op');
  btnMultiply.classList.remove('current-op');
  btnDivide.classList.remove('current-op');
})

const btnSubtract = document.querySelector('#btn-subtract');
btnSubtract.addEventListener('click', () => {
  btnAdd.classList.remove('current-op');
  btnMultiply.classList.remove('current-op');
  btnDivide.classList.remove('current-op');
})

const btnMultiply = document.querySelector('#btn-multiply');
btnMultiply.addEventListener('click', () => {
  btnAdd.classList.remove('current-op');
  btnSubtract.classList.remove('current-op');
  btnDivide.classList.remove('current-op');
})

const btnDivide = document.querySelector('#btn-divide');
btnDivide.addEventListener('click', () => {
  btnAdd.classList.remove('current-op');
  btnSubtract.classList.remove('current-op');
  btnMultiply.classList.remove('current-op');
})