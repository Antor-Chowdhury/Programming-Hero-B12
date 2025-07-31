// Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)

let square = 0;

for (let i = 1; i <= 100; i++) {
  square = i ** i;

  if ([4, 9, 16].includes(square)) {
    console.log("Found square number:", i);
    break;
  }

  console.log(i);
}
