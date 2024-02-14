document.querySelector('.calculate').addEventListener("click", function() {

    const num1 = document.querySelector('.num1').value;
    const num2 = document.querySelector('.num3').value;
    const num3 = document.querySelector('.num3').value;

    if (num1 === '' || num2 === '' || num3 === '' || num1 === 0) {
        document.querySelector('.result').textContent = 'Inválido';
        return;
    }

    let result = (num3 * num2)/ num1;

    if (Number.isInteger(result)) {
        document.querySelector('.result').textContent = result;
    } else {
        document.querySelector('.result').textContent = result.toFixed(2).replace('.', ',');
    }
});