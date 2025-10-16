const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumberInput() {
    return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcDescription) {
    const calcDescriptionText = `${resultBeforeCalc} ${operator} ${calcDescription}`;
    outputResult(currentResult, calcDescriptionText);
}

function add() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult + enteredNumber;
    createAndWriteOutput('+', initialResult, enteredNumber);
    const logEntry = {
        operation: 'ADD',
        prevResult: initialResult,
        number: enteredNumber,
        result: currentResult
    };
    logEntries.push(logEntry);

    console.log(logEntries);
}

function subtract() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult - enteredNumber;
    createAndWriteOutput('-', initialResult, enteredNumber);
}

function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult * enteredNumber;
    createAndWriteOutput('*', initialResult, enteredNumber);
}

function divide() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult = currentResult / enteredNumber;
    createAndWriteOutput('/', initialResult, enteredNumber);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);


// function subtract(num1, num2) {
//   const result = num1 - num2;
//   return result;    
// }

// function stringify(num1) {
//   return `Result: ${num1}`;
// }

// add(4, 9);
// subtract(4, 9);
// stringify(add(4, 9));

// currentResult = add(5, 7);

// let calculationDescription = '5 + 7';