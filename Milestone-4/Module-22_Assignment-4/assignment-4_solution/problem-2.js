function onlyCharacter(str) {
  if (typeof str !== "string") {
    return "Invalid";
  } else {
    const output = str.replaceAll(" ", "");
    return output.toUpperCase();
  }
}

const input = onlyCharacter("  h e llo wor   ld");
console.log(input);

/**
 * ------- Output Similarity ------
 *
 * HELLOWORLD
 * HELLOWORLD
 *
 * CYBAR-ATTACK
 * CYBAR-ATTACK
 *
 * HACKME1@RU.CN
 * HACKME1@RU.CN
 *
 * SERVER::DOWN
 * SERVER::DOWN
 *
 * ["hack", "me"]
 * Invalid
 *
 * true
 * Invalid
 */
