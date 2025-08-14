function sortMaker(arr) {
  let [a, b] = arr;

  if (a < 0 || b < 0) {
    return "Invalid Input";
  }

  if (a === b) {
    return "equal";
  }

  if (b > a) {
    return [b, a];
  } else {
    return [a, b];
  }
}

const arr = sortMaker([4, -2]);
console.log(arr);
