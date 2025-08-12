function addition(num1, num2) {
  return num1 + num2;
}

function subtraction(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function division(num1, num2) {
  return num1 / num2;
}

// calling those above function inside another function below

function calculator(a, b, operation) {
  if (operation === "addition") {
    const result = addition(a, b);
    return result;
  } else if (operation === "subtraction") {
    const result = subtraction(a, b);
    return result;
  } else if (operation === "multiply") {
    const result = multiply(a, b);
    return result;
    // return multiply(a, b); --> in-short form
  } else if (operation === "division") {
    const result = division(a, b);
    return result;
  } else {
    return "only 'add', 'subtract', 'multiply', 'divide' operation is allowed";
  }
}

console.log(calculator(10, 5, "addition"));
console.log(calculator(10, 5, "subtraction"));
console.log(calculator(10, 5, "multiply"));
console.log(calculator(15, 5, "division"));
