const numbers = [12, 98, 5, 41, 23, 78, 46];

const even = [];

for (let i = 0; i < numbers.length; i++) {
  //   console.log(numbers[i]); // gives value not in an array format
  if (numbers[i] % 2 === 0) {
    even.push(numbers[i]);
  }
}
console.log(even);
