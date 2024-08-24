var c = document.getElementById('cInput');
var f = document.getElementById('fInput');
var submit = document.getElementById('convert');

function calculateFahrenheit(celsius) {
    return 1.8 * celsius + 32;
}

function calculateCelsius(fahrenheit) {
    return (fahrenheit - 32) / 1.8;
}

submit.addEventListener('click', () => {
    if (c.value !== "") {
        f.value = calculateFahrenheit(parseFloat(c.value)).toFixed(2);
    } else if (f.value !== "") {
        c.value = calculateCelsius(parseFloat(f.value)).toFixed(2);
    }
});