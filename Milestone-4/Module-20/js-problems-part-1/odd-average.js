/**
 * function takes an array as parameter
 * give me the average of the odd numbers in the array
 */

// Solution - 1

// function oddAverage(numbers) {
//   //   console.log(numbers);
//   let average = 0;
//   let add = 0;
//   let count = 0;
//   for (const num of numbers) {
//     if (num % 2 !== 0) {
//       console.log(num);
//       add = num + add;
//       count++;
//       average = add / count;
//     }
//   }
//   //   console.log("add", add);
//   return average;
// }

// const number = [42, 13, 58, 65, 81, 96, 7];
// const result = oddAverage(number);
// console.log("Average of odd numbers:", result);

// Solution -2

function oddAverage(numbers) {
  const odds = [];
  for (const number of numbers) {
    if (number % 2 === 1) {
      // console.log(number);
      odds.push(number);
    }
  }
  // odds is the array that contains only the odd numbers
  // console.log(odds)
  let sum = 0;
  for (const number of odds) {
    sum = sum + number;
  }
  const count = odds.length;
  console.log(sum, count);
  const avg = sum / count;
  return avg;
}

const numbers = [42, 13, 58, 65, 81, 96, 7];
const avg = oddAverage(numbers);
console.log("average of the odd numbers is: ", avg);
