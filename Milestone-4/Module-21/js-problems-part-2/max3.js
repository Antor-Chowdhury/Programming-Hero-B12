const jim = 65;
const tim = 89;
const kim = 56;

if (jim > tim && jim > kim) {
  console.log("Jim is the ultimate boss");
} else if (tim > jim && tim > kim) {
  console.log("Tim is the ultimate boss");
} else {
  console.log("Kim is the ultimate boss");
}

// with function

function maxOfThree(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else {
    return num3;
  }
}
const value = maxOfThree(200, 22, 201);
console.log(value, "is the biggest number");

const max = Math.max(12, 1, 56, 5, 65, 7, 1, 99);
console.log("Max is using Math.max()", max);
