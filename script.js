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

  switch (currentOperator) {
    case 'btn-add':
      calcTotal = parseFloat(add(calcTotal, newOperand).toPrecision(11));
      break;
    case 'btn-subtract':
      calcTotal = parseFloat(subtract(calcTotal, newOperand).toPrecision(11));
      break;
    case 'btn-multiply':
      calcTotal = parseFloat(multiply(calcTotal, newOperand).toPrecision(11));
      break;
    case 'btn-divide':
      if(newOperand === 0) {
        calcTotal = 'Nope!';
  } else calcTotal = parseFloat(divide(calcTotal, newOperand).toPrecision(11));
      break;
} 
  
  display.textContent = calcTotal;
  newOperand = null;
  currentOperator = null;
  
}

function clear() {
  calcTotal = null;
  newOperand = null;
  operators.forEach((operator) => {
  operator.classList.remove('current-op');
  })
  display.textContent = 0;
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
  if (calcTotal !== null && currentOperator === null) {
    return;
  } else display.textContent = deleteLastChar(display.textContent);
});

btnPlusMinus.addEventListener('click', () => {
  if (calcTotal !== null && currentOperator === null) return;
  else display.textContent = Number(display.textContent) * -1;
})

numbers.forEach((number) => {
  number.addEventListener('click', () => {
    if (display.textContent === 'Nope!') clear();
    if (calcTotal !== null && currentOperator === null) clear();
    if (display.textContent === '0') display.textContent = ''; 

    // Clears display between hitting operator and inputting new numbers
    if (currentOperator !== null && btnAdd.classList.contains('current-op') 
        || currentOperator !== null && btnSubtract.classList.contains('current-op') 
        || currentOperator !== null && btnMultiply.classList.contains('current-op') 
        || currentOperator !== null && btnDivide.classList.contains('current-op')) {
      display.textContent = '';
    }

    // Clears display between equals and starting new operation
    if (calcTotal === display.textContent) {
      display.textContent = '';
    }
    
    operators.forEach((operator) => {
      operator.classList.remove('current-op');
  });

   if (display.textContent.length < 11) {
     display.textContent += number.innerText;
   } else return;
});
});

btnDecimal.addEventListener('click', () => {
  if (display.textContent.includes('.') || calcTotal !== null && currentOperator === null) {
    return;
  } else display.textContent += '.';
});

operators.forEach((operator) => {
  operator.addEventListener('click', () => {
    
    if (calcTotal === null && display.textContent === '0') return;

    calcTotal === null ? calcTotal = Number(display.textContent) : operate();
    currentOperator = (operator.id);
    operator.classList.add('current-op');
  
  })
});

btnEquals.addEventListener('click', () => {
  if (calcTotal === null || currentOperator === null) {
    return;
  } else operate();
  
  operators.forEach((operator) => {
    operator.classList.remove('current-op');
    })
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