const display = document.querySelector('#display');
const btnClear = document.querySelector('#btn-clear');
const btnDel = document.querySelector('#btn-del');
const btnDecimal = document.querySelector('#btn-decimal');
const btnPlusMinus = document.querySelector('#btn-plus-minus');
const btnEquals = document.querySelector('#btn-equals');
const btnAdd = document.querySelector('#btn-add');
const btnSubtract = document.querySelector('#btn-subtract');
const btnMultiply = document.querySelector('#btn-multiply');
const btnDivide = document.querySelector('#btn-divide');

const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');

function add(num1, num2) {
  return  num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate() {
 
  newOperand = Number(display.textContent);
  
  if (currentOperator === 'btn-add') display.textContent = parseFloat(add(calcTotal, newOperand).toPrecision(11));
  if (currentOperator === 'btn-subtract') display.textContent = parseFloat(subtract(calcTotal, newOperand).toPrecision(11));
  if (currentOperator === 'btn-multiply') display.textContent = parseFloat(multiply(calcTotal, newOperand)).toPrecision(11);
  if (currentOperator === 'btn-divide') {
    if (newOperand === 0) {
      display.textContent = 'Nope!'; }
      else display.textContent = parseFloat(divide(calcTotal, newOperand).toPrecision(11));
    
    calcTotal = display.textContent;
}
}

function clear() {
  calcTotal = null;
  newOperand = null;
  operators.forEach((operator) => {
  operator.classList.remove('current-op');
  })
  display.textContent = 0;
  
  console.log(`${calcTotal}, ${newOperand}`);
}

function deleteLastChar (string) {
  if (string === 'Nope!' || string.length === 1) {
   clear();
   return display.textContent = 0;
  }
  else return string.slice(0, -1);
}

let calcTotal = null;
let newOperand = null;
let currentOperator = null;
display.textContent = '0';

btnClear.addEventListener('click', clear);

btnDel.addEventListener('click', () => {
  display.textContent = deleteLastChar(display.textContent);
});

btnPlusMinus.addEventListener('click', () => {
  display.textContent = Number(display.textContent) * -1;
})

numbers.forEach((number) => {
  number.addEventListener('click', () => {
    if (display.textContent === 'Nope!') clear();
    if (display.textContent === '0') display.textContent = '';
   
    /*
   if (calcTotal !== null) {
      display.textContent = '';
   }
   */
    
   if (display.textContent.length < 11) {
     display.textContent += number.innerText;
   } else return;
});
});

btnDecimal.addEventListener('click', () => {
  if(display.textContent.includes('.') === true) {
    return;
  } else display.textContent += '.';
});

operators.forEach((operator) => {
  operator.addEventListener('click', () => {
    
    if(!calcTotal === null && !newOperand === null) {
      calcTotal = operate();
    }
    
    if (calcTotal !== null) {
      newOperand = Number(display.textContent);
    } else calcTotal = Number(display.textContent);
    
    currentOperator = (operator.id);
    operator.classList.add('current-op');
    display.textContent = '';
    
    console.log(`${calcTotal}, ${newOperand}`);
  })
});

btnEquals.addEventListener('click', () => {
  
  if (newOperand === null) newOperand = Number(display.textContent);
  operate();
  console.log(`${calcTotal}, ${newOperand}`);
  operators.forEach((operator) => {
    operator.classList.remove('current-op');
    })
  calcTotal = null;
  newOperand = null;
  
});

btnAdd.addEventListener('click', () => {
  btnSubtract.classList.remove('current-op');
  btnMultiply.classList.remove('current-op');
  btnDivide.classList.remove('current-op');
})


btnSubtract.addEventListener('click', () => {
  btnAdd.classList.remove('current-op');
  btnMultiply.classList.remove('current-op');
  btnDivide.classList.remove('current-op');
})


btnMultiply.addEventListener('click', () => {
  btnAdd.classList.remove('current-op');
  btnSubtract.classList.remove('current-op');
  btnDivide.classList.remove('current-op');
})


btnDivide.addEventListener('click', () => {
  btnAdd.classList.remove('current-op');
  btnSubtract.classList.remove('current-op');
  btnMultiply.classList.remove('current-op');
})