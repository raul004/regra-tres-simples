const calculateButton = document.querySelector('.calculate');
const resetButton = document.querySelector('.reset');

const resultX = document.querySelector('.result');

let result = 0;

calculateButton.addEventListener("click", function() {

    const num1 = document.querySelector('.num1').value;
    const num2 = document.querySelector('.num3').value;
    const num3 = document.querySelector('.num3').value;

    if (num1 === '' || num2 === '' || num3 === '' || num1 === 0) {
        resultX.textContent = 'Inválido';

        calculateButton.classList.remove("block");
        calculateButton.classList.add("none");
    
        resetButton.classList.remove("none");
        resetButton.classList.add("block");
        return;
    }

    result = (num3 * num2)/ num1;

    if (Number.isInteger(result)) {
        resultX.textContent = result;
    } else {
        resultX.textContent = result.toFixed(2).replace('.', ',');
    }

    calculateButton.classList.remove("block");
    calculateButton.classList.add("none");
    
    resetButton.classList.remove("none");
    resetButton.classList.add("block");
});

resetButton.addEventListener("click", function() {

    result = 0;

    clearInputUrlNumberText("entrada");

    const itemX = document.createElement("i");
    itemX.classList.add("fa-solid");
    itemX.classList.add("fa-xmark");

    resultX.textContent = '';
    resultX.appendChild(itemX);

    calculateButton.classList.remove("none");
    calculateButton.classList.add("block");
    
    resetButton.classList.remove("block");
    resetButton.classList.add("none");
});

function clearInputUrlNumberText(name) {
    const entradas = document.querySelectorAll("input[name='"+name+"']");
    [].map.call(entradas, entrada => entrada.value = '');
};