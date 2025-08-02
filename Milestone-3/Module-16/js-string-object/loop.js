const mobile = {
  brand: "Samsung",
  price: 80000,
  color: "gray",
  camera: "200mp",
  isNew: true,
};
// console.log(mobile);

// for of : array
// for in : Object
for (const prop in mobile) {
  //   console.log(prop);
  //   console.log(mobile[prop]);
}

const keys = Object.keys(mobile);
console.log(keys);

for (const key of keys) {
  console.log(key, ":", mobile[key]);
}
