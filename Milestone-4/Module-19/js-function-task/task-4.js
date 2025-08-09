// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(str) {
  let value = 0;
  for (const count of str) {
    console.log(count);
    if (count === "0") {
      value += 1;
    }
  }
  return value;
}

const str = "1010110";
const result = count_zero(str);
console.log("Number of zero's:", result);
