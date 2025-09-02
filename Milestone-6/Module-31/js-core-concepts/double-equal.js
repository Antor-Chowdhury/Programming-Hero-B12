// type coercion (type convert)

/**
 * if one value is string, another is number: converts string --> number then compare. --> only for ==
 *
 *
 * if one is boolean and another is number. converts boolean to number. if true --> 1 , if false --> 0
 *
 *
 */

// console.log(2 == 2);

// console.log(2 == "2"); // true
// console.log(1 == "1");

// console.log(1 === 2);

// console.log(true == 1); // true
// console.log(false == 0);

// console.log(true == "1"); // 1 == '1' --> 1 == 1 --> returns true
// console.log(false == "0"); // 0 == '0' --> 0 == 0 --> true

// console.log(null == undefined); // true

// console.log(NaN === NaN); // false
// console.log(NaN == NaN); // false

// console.log(0 === "");

// console.log([] == ""); // true
// console.log([5] == "5"); // true

// console.log([5].toString()); // converts the array to string and then compare it with "5"

// console.log({} == {}); // false because they are not primitive

console.log([] == []); // false because they are not primitive

console.log([5] == [5]); // false , reference is different
