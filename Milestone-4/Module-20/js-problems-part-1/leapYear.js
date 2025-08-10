/**
 * SIMPLE LOGIC
 * year will be leap year if the year is divisible by 4
 */

function isLeapYear(year) {
  if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

const isLipi = isLeapYear(2025);
const isLipi1 = isLeapYear(2052);
// console.log(isLipi);
// console.log(isLipi1);

/**
 * 1. Those year that is not divisible by 100, if the year is divisible by 4, then it will be leap Year.
 * 2.or the year is divisible by 400.
 */

function isLeapYear2(year) {
  if ((year % 100 !== 0 && year % 4 === 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isLeapYear2(2000));
console.log(isLeapYear2(2024));
console.log(isLeapYear2(1900));
console.log(isLeapYear2(2000));
console.log(isLeapYear2(2024));
