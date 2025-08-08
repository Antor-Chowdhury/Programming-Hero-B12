function vaatkhao() {
  console.log("hand wash kore aso");
  console.log("boso");
  console.log("plate e khabar dhabar nao");
  console.log("gopat gopat kore khao");
}
// vaatkhao();

// 3 --> 3*3 = 9
// 5 --> 5*5 = 25
// 11 --> 11*11 = 121

function square(num) {
  const result = num * num;
  return result;
}
// console.log(square(12));

function add(num1, num2) {
  const sum = num1 + num2;
  console.log(sum);
}
add(10, 20);

function addAll(a, b, c, d, e) {
  const total = a + b + c + d + e;
  console.log(total);
}
addAll(2, 4, 5, 8, 1);
addAll(2, 4, 5, 8); // will show NaN because the last parameter value wasn't given.
