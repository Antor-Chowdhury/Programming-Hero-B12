// 20% discount
// 20/100*100
const getTax = (amount, taxRate) => (amount * taxRate) / 100;

const add = (p, q) => p + q;

// single parameter
const getSquare = (x) => x * x;
const getHalf = (num) => num / 2;
const firstElement = (nums) => nums[0];
const logIt = () => console.log(78);

console.log(getSquare(8));
console.log(getHalf(8));

console.log(firstElement([30, 33, 288]));
logIt();

// anonymous function

// document.getElementById("").addEventListener("click", () => {});

document.getElementById("").addEventListener("click", (event) => {});
