// Find the lowest number in the array below.

const heights2 = [167, 190, 120, 165, 137];

function height(arr) {
  let lowest = arr[0];

  for (const num of arr) {
    // console.log(num);
    if (num < lowest) {
      lowest = num;
    }
  }
  return lowest;
}

const result = height(heights2);
console.log(result);
