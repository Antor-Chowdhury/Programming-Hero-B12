function hello() {
  console.log("I am a function");
}
hello();

function moneyBag() {
  var money = 4500;
  console.log("I have " + money + " Taka");
}
moneyBag();

// addition
function addition(input1, input2) {
  let sum = input1 + input2;
  // console.log(sum);
  return sum; // run without return and with return to see the difference.
}
const result = addition(10, 12);
console.log(result);

// subtraction
function subtraction(input1, input2) {
  let sub = input1 - input2;
  return sub;
}
const sub = subtraction(20, 10);
console.log(sub);

// multiplication
function multiplication(input1, input2) {
  let multi = input1 * input2;
  return multi;
}
const multi = multiplication(20, 10);
console.log(multi);

// division
function division(input1, input2) {
  let div = input1 / input2;
  return div;
}
const div = division(20, 10);
console.log(div);
