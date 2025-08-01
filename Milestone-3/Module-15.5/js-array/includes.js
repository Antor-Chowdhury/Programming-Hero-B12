const friends = ["salam", "rohim", "korim", "gelam", "pailam", "jailam"];

console.log(friends.includes("gelam"));
console.log(friends.includes("khailam"));

if (friends.includes("khailam")) {
  console.log("party");
} else {
  console.log("Fasting");
}
