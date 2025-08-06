const numbers = [1, 2, 3, 4, 5, 6];
// reverse = [6, 5, 4, 3, 2, 1]

// ***  for method

const reversed = [];

// ** method: 1

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
//   reversed.unshift(numbers[i]);
// }
// console.log(reversed);

// ** method: 2

// for (let i = numbers.length - 1; i >= 0; i--) {
//   // console.log(numbers[i]);
//   reversed.push(numbers[i]);
// }
// console.log(reversed);

// ** method: 3

// for (const num of numbers) {
//   reversed.unshift(num);
// }
// console.log(reversed);

// ** method: 4

console.log(numbers);
numbers.reverse();
console.log(numbers);
