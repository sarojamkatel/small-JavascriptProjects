// Select display elements
const previousDisplay = document.getElementById("previousDisplay");
const currentOperand = document.getElementById("currentOperand");

// Variables to store the current state
let currentOperation = '';
let previousOperation = '';
let operation = undefined;

// Function to append a number or dot to the current operand
function appendNumber(number) {
    if (number === '.' && currentOperand.textContent.includes('.')) return;
    currentOperand.textContent += number;
}

// Function to choose an operation
function chooseOperation(op) {
    if (currentOperand.textContent === '') return;
    if (previousOperation !== '') {
        compute();
    }
    operation = op;
    previousOperation = currentOperand.textContent;
    currentOperand.textContent = '';
    updateDisplay();
}

// Function to compute the result
function compute() {
    let computation;
    const prev = parseFloat(previousOperation);
    const current = parseFloat(currentOperand.textContent);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        case '%':
            computation = prev % current;
            break;
        default:
            return;
    }
    currentOperand.textContent = computation;
    operation = undefined;
    previousOperation = '';
}

// Function to update the display
function updateDisplay() {
    previousDisplay.textContent = previousOperation + ' ' + (operation || '');
}

// Function to clear the display
function clearDisplay() {
    currentOperand.textContent = '';
    previousOperation = '';
    operation = undefined;
    previousDisplay.textContent = '';
}

// Function to delete the last character in the current operand
function deleteLast() {
    currentOperand.textContent = currentOperand.textContent.toString().slice(0, -1);
}

// Function to compute the logarithm
function computeLn() {
    if (currentOperand.textContent !== '') {
        currentOperand.textContent = Math.log(parseFloat(currentOperand.textContent));
    }
}

// Function to compute the square root
function computeSqrt() {
    if (currentOperand.textContent !== '') {
        currentOperand.textContent = Math.sqrt(parseFloat(currentOperand.textContent));
    }
}

// Function to insert ANS
function insertAns() {
    currentOperand.textContent = previousOperation || '0';
}

// Event listeners for the buttons
document.querySelectorAll('.numbers').forEach(button => {
    button.addEventListener('click', () => {
        appendNumber(button.textContent);
    });
});

document.querySelectorAll('.operation').forEach(button => {
    button.addEventListener('click', () => {
        chooseOperation(button.textContent);
    });
});

document.getElementById('equals').addEventListener('click', compute);
document.getElementById('clear').addEventListener('click', clearDisplay);
document.getElementById('delete').addEventListener('click', deleteLast);
document.getElementById('dot').addEventListener('click', () => appendNumber('.'));
document.getElementById('ans').addEventListener('click', insertAns);
document.getElementById('openBracket').addEventListener('click', () => appendNumber('('));
document.getElementById('closeBracket').addEventListener('click', () => appendNumber(')'));






