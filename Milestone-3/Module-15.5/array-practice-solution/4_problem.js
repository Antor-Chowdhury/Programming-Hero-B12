const age = 25;

const names = "Antor";

const arrayNum = [12, 13, 14, 15];

console.log(Array.isArray(age));
console.log(Array.isArray(names));
console.log(Array.isArray(arrayNum));

if (Array.isArray(age)) {
  console.log("age is an array.");
} else {
  console.log("age is NOT an array.");
}

if (Array.isArray(names)) {
  console.log("names is an array.");
} else {
  console.log("names is NOT an array.");
}

if (Array.isArray(arrayNum)) {
  console.log("arrayNum is an array.");
} else {
  console.log("arrayNum is NOT an array.");
}
