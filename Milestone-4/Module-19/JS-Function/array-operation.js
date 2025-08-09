/***
 * Objective: write a function to give me the sum of all numbers in an array.
 */

function sumOfNumbers(numbers) {
  //   console.log(numbers);
  let sum = 0;
  for (const number of numbers) {
    console.log(number);
    sum = number + sum;
  }
  return sum;
}

const num = [54, 62, 12, 6];
const sum = sumOfNumbers(num);
console.log("Sum of numbers is", sum);
