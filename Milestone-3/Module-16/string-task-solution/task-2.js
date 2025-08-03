const str = "JavaScript is Amazing";

let count = 0;

for (const final of str) {
  if (final === "a" || final === "A") {
    count++;
  }
}
console.log(count);
