// ### 1. Given an array of numbers, create a new array where each number is doubled. (use map)

const numbers = [1, 5, 7, 8];

const doubled = numbers.map((num) => num * 2);
console.log(doubled);

// ### 2. From an array of numbers, get only the even numbers. (use filter)

const numbers = [1, 5, 7, 8, 12];

const even = numbers.filter((num) => num % 2 === 0);
console.log(even);

// ### 3. From an array of numbers, find the first number that is greater than 50. (use find)

const numbers = [1, 5, 7, 8, 12, 48, 52, 89];

const firstNumber = numbers.find((num) => num > 50);
console.log(firstNumber);

// ### 4. Given an array of strings (names), print each name with "Hello, " in front. (use forEach)

const names = ["abul", "kabul", "babul"];

names.forEach((name) => {
  console.log(`Hello, ${name}`);
});

// ### 5. Given an array of numbers, create a new array of their squares. (use map)

const numbers = [1, 5, 7, 8];

const squares = numbers.map((num) => num * num);
console.log(squares);

// ### 6. From an array of ages, return only the ages that are 18 or older. (use filter)

const ages = [34, 54, 52, 86, 12, 17, 19];

const moreThan18 = ages.filter((age) => age > 18);
console.log(moreThan18);

// ### 7. From an array of numbers, find the first number that is divisible by 7. (use find)

const numbers = [1, 5, 49, 7, 8, 14];

const divisibleBy7 = numbers.find((num) => num % 7 === 0);
console.log(divisibleBy7);

// ### 8. From an array of words, print the length of each word. (use forEach)

const names = ["abul", "kabul", "babull"];

const length = names.forEach((name) => {
  console.log(name.length);
});

// ### 9. Given an array of temperatures in Celsius, create a new array with the values converted to Fahrenheit. (use map)

const tempInCelsius = [30, 24, 67];

const tempInFahrenheit = tempInCelsius.map((temp) => {
  return (temp * 9) / 5 + 32;
});
console.log(tempInFahrenheit);

// ### 10. From an array of products with prices, filter out only the products that cost more than 100. (use filter)

const prices = [100, 43, 58, 12, 1943, 324, 223];

const moreThan100 = prices.filter((price) => price > 100);
console.log(moreThan100);
