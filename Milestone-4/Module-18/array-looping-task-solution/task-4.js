const statement = "I am a hard working person";

const reverse = statement.split(" ");
// console.log(reverse);

let result = "";
for (let i = 0; i < reverse.length; i++) {
  result = reverse[i] + " " + result;
}
console.log(result);
