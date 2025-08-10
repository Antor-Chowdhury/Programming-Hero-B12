/**
 * write a code to remove duplicate elements from an array.
 */

const biryanikhor = [
  "abul",
  "babul",
  "cabul",
  "abul",
  "babul",
  "dabul",
  "kabul",
  "cabul",
];
const numbers = [1, 5, 61, 5, 87, 7, 5, 81, 61];

// *** Code

function noDuplicate(arr) {
  //   console.log(arr);
  const unique = [];
  for (const item of arr) {
    if (unique.includes(item) === false) {
      unique.push(item);
    }
  }
  return unique;
}

const uniqueArray = noDuplicate(biryanikhor);
console.log(uniqueArray);
