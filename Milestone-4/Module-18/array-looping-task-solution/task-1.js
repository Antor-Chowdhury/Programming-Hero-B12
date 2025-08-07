const colors = ["red", "blue", "green", "yellow", "orange"];

const rev_colors = [];

for (let i = 0; i < colors.length; i++) {
  //   console.log(colors[i]);
  rev_colors.unshift(colors[i]);
}
console.log(rev_colors);
