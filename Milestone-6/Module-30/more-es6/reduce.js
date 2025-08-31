const numbers = [1, 5, 16, 10, 45, 2, 7];

// let sum = 0;

// for (const num of numbers) {
//   sum = sum + num;
// }
// console.log(sum);

const total = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(total);
