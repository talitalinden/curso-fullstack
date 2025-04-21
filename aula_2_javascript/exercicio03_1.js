const temperaturas = [25, 18, 32, 10];
var todas_as_temperaturas = temperaturas;
var celsius = (temperaturas[0])

console.log (`Todas as temperaturas em  °C: ${todas_as_temperaturas}`)

const tempAleatoria = temperaturas[Math.floor(Math.random() * temperaturas.length)];

// Converter para Fahrenheit
function celsiusParaFahrenheit(c) {
    return (c * 9/5) + 32;
}

const tempFahrenheit = celsiusParaFahrenheit(tempAleatoria);

console.log(`\nTemperatura selecionada aleatoriamente:` );
console.log(`${tempAleatoria}°C equivale a ${tempFahrenheit.toFixed(1)}°F`);