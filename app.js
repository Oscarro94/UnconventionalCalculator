const defaultResult = 0;
let recentResult = defaultResult;
let logEntries = [];

function getUserInput() {
  return parseInt(userIntake.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcShown = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(recentResult, calcShown);
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

function add() {
  const enteredNumber = getUserInput();
  const startResult = recentResult;
  recentResult = recentResult + enteredNumber;
  createAndWriteOutput('+', startResult, enteredNumber);
  writeToLog('ADD', startResult, enteredNumber, recentResult);
}

function subtract() {
  const enteredNumber = getUserInput();
  const startResult = recentResult;
  recentResult = recentResult - enteredNumber;
  createAndWriteOutput('-', startResult, enteredNumber);
  writeToLog('SUBTRACT', startResult, enteredNumber, recentResult);
}

function multiply() {
  const enteredNumber = getUserInput();
  const startResult = recentResult;
  recentResult = recentResult * enteredNumber;
  createAndWriteOutput('*', startResult, enteredNumber);
  writeToLog('MULTIPLY', startResult, enteredNumber, recentResult);
}

function divide() {
  const enteredNumber = getUserInput();
  const startResult = recentResult;
  recentResult = recentResult / enteredNumber;
  createAndWriteOutput('/', startResult, enteredNumber);
  writeToLog('DIVIDE', startResult, enteredNumber, recentResult);
  
}

addButton.addEventListener('click', add);
subtractButton.addEventListener('click', subtract);
multiplyButton.addEventListener('click', multiply);
divideButton.addEventListener('click', divide);
