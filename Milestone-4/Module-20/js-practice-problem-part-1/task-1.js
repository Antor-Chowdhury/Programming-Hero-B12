// Write a function to convert temperature from Celsius to Fahrenheit.

function toFahrenheit(celsius) {
  const temp = (celsius * 9) / 5 + 32;
  return temp;
}

console.log(toFahrenheit(25), "°F");
console.log(toFahrenheit(37), "°F");
console.log(toFahrenheit(100), "°F");
