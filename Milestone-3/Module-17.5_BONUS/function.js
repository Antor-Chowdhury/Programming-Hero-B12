function hello() {
  console.log("I am a function");
}
hello();

function moneyBag() {
  var money = 4500;
  console.log("I have " + money + " Taka");
}
moneyBag();

function calculator(input1, input2) {
  let sum = input1 + input2;
  console.log(sum);
  return sum; // run without return and with return to see the difference.
}
const result = calculator(10, 12);
console.log(result);
