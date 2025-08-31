const numbers = [4, 8, 2, 3, 5];

// const doubled = [];
// for (const num of numbers) {
//   const result = num * 2;
//   doubled.push(result);
// }

// const doubleIt = (x) => x * 2;
// const doubled = numbers.map(doubleIt);

const double = numbers.map((x) => x * 2);
const fiveTimes = numbers.map((num) => num * 5);
const squared = numbers.map((num) => num * num);

// console.log(double);
// console.log(fiveTimes);
// console.log(squared);

const friends = ["zaved", "pavel", "Nobel", "kabell"];

const nameLengths = friends.map((name) => name.length);
const firstLetters = friends.map((name) => name[0]);

const result = numbers.map((num, index) => {
  console.log(num * index);
  return index;
});

console.log(nameLengths);
console.log(firstLetters);
