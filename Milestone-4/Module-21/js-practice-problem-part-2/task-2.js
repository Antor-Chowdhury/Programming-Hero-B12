// Find the friend with the smallest name.

const name = ["rahim", "robin", "rafi", "ron", "rashed"];

function smallestName(arr) {
  let smallest = arr[0];

  for (const item of arr) {
    if (item.length < smallest.length) {
      smallest = item;
    }
  }
  return smallest;
}

const output = smallestName(name);
console.log(output);
