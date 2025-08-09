// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

function make_avg(arr) {
  let average = 0;
  for (const total of arr) {
    console.log(total);
    average = total + average;
  }
  return average / arr.length;
}

const arr = [10, 20, 30, 40, 50];
const result = make_avg(arr);
console.log("Average of the array value is:", result);
