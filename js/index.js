function bodyMassIndexCalc() {
    let weight = document.querySelector('#weight');
    let height = document.querySelector('#height');
    
    const bodyMassIndexSubmit = document.querySelector('#bmi-calculation');

    function bodyMassIndexCalculation(event) {
        event.preventDefault();
        let bodyMassIndex = weight.value / (height.value * height.value);
        if (bodyMassIndex < 20) {
            alert(`Seu IMC é ${bodyMassIndex.toFixed(2)} e você está abaixo do peso.`)
        } else if (bodyMassIndex >= 20 && bodyMassIndex < 25) {
            alert(`Seu IMC é ${bodyMassIndex.toFixed(2)} e você está no peso ideal.`)
        } else if (bodyMassIndex >= 25 && bodyMassIndex < 30) {
            alert(`Seu IMC é ${bodyMassIndex.toFixed(2)} e você está acima do peso.`)
        } else if (bodyMassIndex >= 30 && bodyMassIndex < 40) {
            alert(`Seu IMC é ${bodyMassIndex.toFixed(2)} e você tem obesidade.`)
        } else {
            alert(`Seu IMC é ${bodyMassIndex.toFixed(2)} e você tem obesidade mórbida.`)
        }

        weight.value = '';
        height.value = '';

    }

    bodyMassIndexSubmit.addEventListener('click', bodyMassIndexCalculation)
}

bodyMassIndexCalc()