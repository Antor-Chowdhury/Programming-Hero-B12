function matchFinder(string1, string2) {
  //   console.log(string1, string2);

  if (typeof string1 !== "string" && typeof string2 !== "string") {
    return "Enter a valid String";
  } else {
    if (string1.includes(string2)) {
      return true;
    } else {
      return false;
    }
  }
}

const result = matchFinder("Peter Parker", "pet");
console.log(result);
