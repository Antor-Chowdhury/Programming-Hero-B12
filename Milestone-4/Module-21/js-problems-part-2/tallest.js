// max number

function tallest(arr) {
  let max = arr[0];

  for (const num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

const heights = [65, 66, 68, 72, 78, 60];
const result = tallest(heights);
console.log("Max Number:", result);

// homework: min number

function smallest(numbers) {
  let min = numbers[0];

  for (const item of numbers) {
    if (item < min) {
      min = item;
    }
  }
  return min;
}

const height = [65, 68, 72, 78, 60, 45];
const output = smallest(height);
console.log("Lowest Number:", output);
