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

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calculateResult(calculationType) {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let mathOperator;

    if(calculationType === 'ADD'){
        currentResult += enteredNumber;
        mathOperator = '+';
    } else if(calculationType === 'SUBTRACT'){
        currentResult -= enteredNumber;
        mathOperator = '-';
    } else if(calculationType === 'MULTIPLY'){
        currentResult *= enteredNumber;
        mathOperator = '*';
    } else if(calculationType === 'DIVIDE'){
        currentResult /= enteredNumber;
        mathOperator = '/';
    }

    createAndWriteOutput(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, currentResult, initialResult, enteredNumber);

}

function add() {
    calculateResult('ADD');
}

function subtract() {
    calculateResult('SUBTRACT')
}

function multiply() {
    calculateResult('MULTIPLY');
}

function divide() {
    calculateResult('DIVIDE')
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


// function add() {
//     const enteredNumber = getUserNumberInput();
//     const initialResult = currentResult;
//     currentResult = currentResult + enteredNumber;
//     createAndWriteOutput('+', initialResult, enteredNumber);
//     const logEntry = {
//         operation: 'ADD',
//         prevResult: initialResult,
//         number: enteredNumber,
//         result: currentResult
//     };
//     logEntries.push(logEntry);

//     console.log(logEntries);
// }