let myObject = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
};

const keys = Object.keys(myObject);
const values = Object.values(myObject);

for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  const value = values[i];
  console.log("Key:", key + " | Type:", typeof value);
}
