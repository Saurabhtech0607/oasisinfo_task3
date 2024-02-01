function convertTemperature() {
    const celsius = parseFloat(document.getElementById('celsiusInput').value);
    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9/5) + 32;
        const kelvin = celsius + 273.15;
        const resultElement = document.getElementById('result');
        resultElement.innerHTML = `${celsius}°C is ${fahrenheit.toFixed(2)}°F and ${kelvin.toFixed(2)}K`;
    } else {
        alert("Please enter a valid temperature in Celsius.");
    }
}