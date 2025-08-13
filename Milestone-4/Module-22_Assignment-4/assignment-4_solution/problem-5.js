function resultReport(marks) {
  let average = 0;
  let total = 0;
  let passCount = 0;
  let failCount = 0;

  if (Array.isArray(marks) !== true) {
    return "Invalid";
  } else if (marks.length === 0) {
    return { finalScore: 0, pass: 0, fail: 0 };
  } else {
    for (const mark of marks) {
      total += mark;
      average = Math.round(total / marks.length);
      if (mark >= 40) {
        passCount++;
      } else {
        failCount++;
      }
    }
  }
  return { finalScore: average, pass: passCount, fail: failCount };
}

const arr = resultReport([98, 87, 67, 91, 92, 33, 87]);
console.log(arr);

/**
 * ----------- OUTPUT -----------------
 * { finalScore: 0 , pass: 0, fail: 0 }
 * { finalScore: 0, pass: 0, fail: 0 }
 *
 * { finalScore: 79, pass: 6, fail: 1 }
 * { finalScore: 79, pass: 6, fail: 1 }
 *
 * { finalScore: 70, pass: 4, fail: 1 }
 * { finalScore: 70, pass: 4, fail: 1 }
 *
 * { finalScore: 99, pass: 1, fail: 0 }
 * { finalScore: 99, pass: 1, fail: 0 }
 */
