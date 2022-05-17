// Status:
// Calc can return integer operations after hitting equals
// Calc cannot chain operations without hitting equals
// Calc breaks when hitting zero after first operation
// Calc can't handle decimal operations

const display = document.querySelector('#display');
display.textContent = '0';

const btnClear = document.querySelector('#btn-clear');
btnClear.addEventListener('click', clear);

const btnEquals = document.querySelector('#btn-equals');
btnEquals.addEventListener('click', () => {
  if (newOperand === null) return;
  operate();
  operators.forEach((operator) => {
    operator.classList.remove('current-op');
    })
  calcTotal = display.textContent;
  newOperand = null;
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

let calcTotal = null;
let newOperand = null;
let currentOperator = null;

const numbers = document.querySelectorAll('.number');
numbers.forEach((number) => {
  number.addEventListener('click', () => {
    if (display.textContent === '0') display.textContent = '';
    
    if (calcTotal !== null) {
      display.textContent = '';
      newOperand = display.textContent;
    }
    
    if (display.textContent.length >= 11)  {
      return;
    } else display.textContent += number.value;
});
});

const operators = document.querySelectorAll('.operator');
operators.forEach((operator) => {
  operator.addEventListener('click', () => {
    calcTotal = Number(display.textContent);
    currentOperator = (operator.id);
    operator.classList.add('current-op');
  })
});

function clear() {
  display.textContent = 0;
  calcTotal = null;
  newOperand = null;
  operators.forEach((operator) => {
  operator.classList.remove('current-op');
  })
}

function deleteLastChar (string) {
  if (display.textContent === 'Nope!') clear();
  let delString = string.slice(0, -1); 
  if (string.length == 1) {
    return 0;
  }
    else return delString;
}

function add(calcTotal, newOperand) {
    calcTotal += newOperand;
    display.textContent = parseFloat(calcTotal);
}

function subtract(calcTotal, newOperand) {
    calcTotal -= newOperand;
    display.textContent = parseFloat(calcTotal);
}

function multiply(calcTotal, newOperand) {
    calcTotal *= newOperand;
    display.textContent = parseFloat(calcTotal);
}

function divide(calcTotal, newOperand) {
    if (newOperand === 0) {
      display.textContent = 'Nope!';
    } else calcTotal /= newOperand;
      display.textContent = parseFloat(calcTotal);
}

function operate() {
  newOperand = Number(display.textContent);
  console.log(calcTotal);
  console.log(newOperand);
  if (currentOperator === 'btn-add') return add(calcTotal, newOperand);
  if (currentOperator === 'btn-subtract') return subtract(calcTotal, newOperand);
  if (currentOperator === 'btn-multiply') return multiply(calcTotal, newOperand);
  if (currentOperator === 'btn-divide') return divide(calcTotal, newOperand);
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