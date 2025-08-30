function sum(num1 = 0, num2 = 0) {
  const total = num1 + num2;
  console.log(num1, num2, total);
}
// NaN --> Not a Number
sum(10); // default parameter
sum(10, 40);

function multiply(num1 = 1, num2 = 1) {
  const result = num1 * num2;
  console.log(result);
}

multiply(10, 10);
multiply(10); // default parameter

function fullName(first, last = "") {
  const name = first + " " + last;
  console.log(name);
}
fullName("Antor");
fullName("Antor", "Chowdhury");

/**
 * --- Some thumb rule of default value.
 *
 * add, subtract --> 0
 *
 * multiply --> 1
 *
 * string --> ''
 *
 * array = []
 *
 * object = {}
 */
