function tenTimes(number) {
  const result = number * 10;
  return result;
}

function cutHalf(number) {
  const half = number / 2;
  return half;
}

const output = tenTimes(5);
console.log(output);

const half = cutHalf(output);
console.log(half);
