/**
 * create a function that will return only the even numbers and store them in an array.
 */

function evenNumberOnly(number) {
  let arr = [];
  for (const num of number) {
    console.log(num);
    if (num % 2 === 0) {
      arr.push(num);
    }
  }
  return arr;
}

const arr = [12, 3, 5, 6, 18];
// const arr = [2, 3, 5, 6, 8];
const result = evenNumberOnly(arr);
console.log("even number is", result);

console.log("-----------------------------------");
// Sum of even numbers

function sumOfEvenNumber(number) {
  let sum = 0;
  for (const num of number) {
    console.log(num);
    if (num % 2 === 0) {
      sum = num + sum;
    }
  }
  return sum;
}

const arr2 = [2, 3, 5, 6, 8];
const sum = sumOfEvenNumber(arr);
console.log("Sum of even number is", sum);
