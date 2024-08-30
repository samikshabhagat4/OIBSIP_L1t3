function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const type = document.getElementById('type').value;
    const convertTo = document.getElementById('convertTo').value;
    let result;

    if (isNaN(temperature)) {
        alert('Please enter a valid number');
        return;
    }

    if (type === convertTo) {
        result = temperature;
    } else if (type === 'Fahrenheit' && convertTo === 'Celsius') {
        result = (temperature - 32) * 5/9;
    } else if (type === 'Fahrenheit' && convertTo === 'Kelvin') {
        result = (temperature - 32) * 5/9 + 273.15;
    } else if (type === 'Celsius' && convertTo === 'Fahrenheit') {
        result = (temperature * 9/5) + 32;
    } else if (type === 'Celsius' && convertTo === 'Kelvin') {
        result = temperature + 273.15;
    } else if (type === 'Kelvin' && convertTo === 'Celsius') {
        result = temperature - 273.15;
    } else if (type === 'Kelvin' && convertTo === 'Fahrenheit') {
        result = (temperature - 273.15) * 9/5 + 32;
    }

    document.getElementById('result').value = `${result.toFixed(2)} °${convertTo.charAt(0)}`;
}
