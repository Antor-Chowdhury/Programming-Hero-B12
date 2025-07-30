// odd numbers

for (i = 0; i < 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// give me the list numbers between 1 to 30 divisible by 5.

for (i = 1; i <= 30; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}

// divisible by 3 and 5.

for (i = 1; i <= 30; i++) {
  if (i % 5 === 0 || i % 3 === 0) {
    console.log(i);
  }
}

for (i = 1; i <= 30; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    console.log(i);
  }
}
