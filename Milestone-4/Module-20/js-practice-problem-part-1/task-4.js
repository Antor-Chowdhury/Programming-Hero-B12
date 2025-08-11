// Write a function to find the longest word in a given string.

// sample-input: I am learning Programming to become a programmer

// sample-output: Programming

// ---------------------- CODE ---------------------

function longestWord(str) {
  let longWord = "";
  for (const word of str.split(" ")) {
    if (word.length > longWord.length) {
      longWord = word;
    }
  }
  return longWord;
}

const sampleInput = "I am learning Programming to become a programmer";
const output = longestWord(sampleInput);
console.log(output);
