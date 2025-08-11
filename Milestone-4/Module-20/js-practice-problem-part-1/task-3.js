// Write a function to count the number of vowels in a string.

function findVowel(str) {
  console.log(str);
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"];

  for (const char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

const str = "ChatGPT is awesome";
const output = findVowel(str);
console.log(output);
