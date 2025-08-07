const arr1 = [1, 2, 3];
const arr2 = [];

for (const result of arr1) {
  arr2.push(result);
}
console.log(arr1);
arr2[0] = 99;
console.log(arr2);
