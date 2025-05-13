let memory = 0;

function appendValue(val) {
  const display = document.getElementById('display');
  if (display.value.length >= 20) return; // Prevent overload
  display.value += val;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function backspace() {
  const display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}

function calculate() {
  const display = document.getElementById('display');
  try {
    if (display.value.trim() === '') return;
    let result = eval(display.value);
    if (result === Infinity || isNaN(result)) {
      display.value = 'Math Error';
    } else {
      display.value = result;
    }
  } catch {
    display.value = 'Syntax Error';
  }
}

function calculateSqrt() {
  const display = document.getElementById('display');
  try {
    let value = parseFloat(display.value);
    if (value < 0) throw 'Invalid Input';
    display.value = Math.sqrt(value);
  } catch {
    display.value = 'Math Error';
  }
}

function calculatePercentage() {
  const display = document.getElementById('display');
  try {
    display.value = parseFloat(display.value) / 100;
  } catch {
    display.value = 'Math Error';
  }
}

function memoryAdd() {
  memory += parseFloat(document.getElementById('display').value || 0);
}

function memorySubtract() {
  memory -= parseFloat(document.getElementById('display').value || 0);
}

function memoryRecall() {
  document.getElementById('display').value = memory;
}

function memoryClear() {
  memory = 0;
}

// Keyboard support
document.addEventListener('keydown', function (e) {
  const display = document.getElementById('display');
  const validKeys = '0123456789+-*/.';
  if (validKeys.includes(e.key)) {
    appendValue(e.key);
  } else if (e.key === 'Enter' || e.key === '=') {
    calculate();
  } else if (e.key === 'Backspace') {
    backspace();
  } else if (e.key.toLowerCase() === 'c') {
    clearDisplay();
  }
});

// max limit for the number of characters to display 

function appendValue(val) {
    const display = document.getElementById('display');
    if (display.value.length >= 20) {
      alert("Too many digits! Max limit reached.");
      return;
    }
    display.value += val;
  }
  