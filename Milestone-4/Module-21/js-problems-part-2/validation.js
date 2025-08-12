function multiply(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "please provide a number";
  }
  const multi = num1 * num2;
  return multi;
}

const result = multiply("5", "seven");
// console.log(result);

function fullName(first, second) {
  if (typeof first !== "string") {
    return "First name should be a string";
  } else if (typeof second !== "string") {
    return "second name should be a string";
  }
  const full = first + " " + second;
  return full;
}

const full = fullName(5, "Chowdhury");
console.log(full);
