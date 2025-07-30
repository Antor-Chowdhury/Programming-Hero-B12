// continue --> skip rest of the code for this iteration
// break --> done with this loop

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 !== 0) {
//     continue;
//   }
//   console.log(i);
// }

// while

let n = 0;
while (n < 15) {
  n++;
  if (n % 5 !== 0) {
    continue;
  }
  console.log(n);
}
