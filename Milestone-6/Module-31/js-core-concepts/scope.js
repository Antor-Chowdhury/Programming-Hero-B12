const name = "antor"; // this is global scope

console.log("location", location);

if (true) {
  const data = 58;
  console.log("Inside the if block", data, name);
  doMath(88, 999);
}
// console.log(data);

// while(true){

// }

// for(const num of [1,2,3,4,5]){

// }

// function scope or local scope
function doMath(a, b) {
  console.log(a, b);
  const sum = a + b;
  const total = sum + 10;
  console.log("Calling double it", doubleIt(450));
  function doubleIt(x) {
    return x * 2;
  }
}
// console.log(a, b);

// var location = 'balur ghat'

// Temporal dead zone
let location = "balur ghat";
