// function declaration

function add(num1, num2) {
  return num1 + num2;
}

// function expression

const addition = function (num1, num2) {
  return num1 + num2;
};

// arrow function

const add2 = (num1, num2) => num1 + num2;
const multiply = (a, b) => a * b;
const isFirstBig = (x, y) => x > y;

// multiline arrow function

const doMath = (x, y) => {
  const makeDouble = x * 2;
  const againDouble = y * 2;
  const result = makeDouble + againDouble;
  return result;
};

const result = add2(17, 13);
console.log(result);

const multi = multiply(3, 5);
console.log(multi);

const isBig = isFirstBig(45, 12);
console.log(isBig);
