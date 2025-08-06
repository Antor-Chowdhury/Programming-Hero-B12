/**
 * 1. const --> value not going to change
 * 2. let --> value might change
 * 3. var --> should not use(unless exceptional cases)
 */

const price = 600;
// console.log(price);
const name = "kirkir ali khan"; // string
const isPoor = false; // boolean
const friends = ["Elon", "Mark", "Bill", "Jeff"]; // array

const student = {
  class: 9,
  name: "Tomi khan",
  age: 17,
  address: "kochu khet",
}; // object

// condition
if (price > 1000) {
  console.log("Too expensive");
} else if (price > 500) {
  console.log("May be i can buy this");
} else {
  console.log("within my budget");
}

// Loop
let pushUp = 0;

while (pushUp < 10) {
  console.log("push up", pushUp);
  pushUp++;
}

// for
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
