// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.

function value(num) {
  if (num % 2 !== 0) {
    num = num * 2;
    return num;
  } else {
    num = num / 2;
    return num;
  }
}

console.log(value(5));
console.log(value(10));
