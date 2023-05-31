const userIntake = document.getElementById('input-number');
const addButton = document.getElementById('btn-add');
const subtractButton = document.getElementById('btn-subtract');
const multiplyButton = document.getElementById('btn-multiply');
const divideButton = document.getElementById('btn-divide');


const currentResultShown = document.getElementById('current-result');
const currentCalculationShown = document.getElementById('current-calculation');

function outputResult(result, text){
    currentResultShown.textContent = result;
    currentCalculationShown.textContent = text;
}


