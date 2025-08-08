function doubleIt(number) {
  const doubled = number * 2;
  console.log(number, doubled);
}

console.log("I will call the function");
doubleIt(15);

const number = 55;
doubleIt(number);

function difference(num1, num2) {
  const diff = num1 - num2;
  console.log(num1, num2, "difference is:", diff);
}
const fatherAge = 50;
const myAge = 25;
difference(fatherAge, myAge);
