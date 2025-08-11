const disha = 45;
const salman = 90;

if (disha > salman) {
  console.log("Disha will get the food");
} else {
  console.log("Salman will get the food");
}

// Inside a function
function getMax(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

const max = getMax(78, 98);
console.log(max);
