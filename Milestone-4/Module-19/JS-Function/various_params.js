/**
 * for a given string tell me whether it has even number of characters or not.
 */

// for String
function evenSizedString(str) {
  const size = str.length;
  console.log(str, size);
  if (size % 2 === 0) {
    // console.log("even size");
    return "even size";
  } else {
    // console.log("odd size");
    return "odd size";
  }
}
// console.log(evenSizedString("Dhaka"));

// for Boolean
function doubleOrTriple(number, doDouble) {
  if (doDouble === true) {
    const result = number * 2;
    return result;
  } else {
    const result = number * 3;
    return result;
  }
}
// console.log(doubleOrTriple(5, true));
// console.log(doubleOrTriple(5, false));

// for array
function numberOfElements(arr) {
  const len = arr.length;
  return len;
}
console.log(numberOfElements([12, 45, 33, 89, 92]));

// for object
function getAge(person) {
  const age = person.age;
  return age;
}

const person = {
  name: "Antor",
  age: 25,
  occupation: "student",
};

console.log(getAge(person));
