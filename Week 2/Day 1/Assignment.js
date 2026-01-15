let Display = '';

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return ('Cannot divide by zero'); 
  }
  else{
   return a / b;
  } 
}

function updateDisplay() {
  document.querySelector('#display').value = Display;
}

function appendToDisplay(value) {
  Display += value;
  updateDisplay();
}

function clearDisplay() {
  Display = '';
  updateDisplay();
}

function calculate() {
  if (Display === '') {
    alert('Please enter a valid expression');
    return;
  }


  let Position = -1;
  let operator = '';
  
  
  for (let i = 1; i < Display.length; i++) {
    if (Display[i] === '+' || Display[i] === '-' || 
        Display[i] === '*' || Display[i] === '/') {
      operator = Display[i];
      Position = i;
      break;
    }
  }

  if (Position === -1) {
    alert('Invalid expression');
    return;
  }

  let leftNumber = parseFloat(Display.substring(0, Position));
  let rightNumber = parseFloat(Display.substring(Position + 1));

  
  if (isNaN(leftNumber) || isNaN(rightNumber)) {
    alert('Invalid numbers');
    Display = '';
    updateDisplay();
    return;
  }

  let result;

  
  switch (operator) {
    case '+':
      result = add(leftNumber, rightNumber);
      break;
    case '-':
      result = subtract(leftNumber, rightNumber);
      break;
    case '*':
      result = multiply(leftNumber, rightNumber);
      break;
    case '/':
      result = divide(leftNumber, rightNumber);
      break;
    default:
      alert('Invalid operator');
      return;
  }

  Display = result.toString();
  updateDisplay();
}