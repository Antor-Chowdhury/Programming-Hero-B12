function cubeNumber(number) {
  if (typeof number !== "number") {
    return "Please enter a valid number";
  } else {
    number = number * number * number;
    return number;
  }
}

const output = cubeNumber(4);
console.log(output);
