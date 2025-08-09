function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// console.log(isEven(5));
// console.log(isEven(100));

function isOdd(number) {
  if (number % 2 !== 0) {
    return true;
  }
  return false;
}

console.log(isOdd(15));
console.log(isOdd(100));
