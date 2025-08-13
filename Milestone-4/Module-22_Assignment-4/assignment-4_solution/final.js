// Problem - 1

function totalFine(fare) {
  if (typeof fare !== "number" || 0 >= fare) {
    return "Invalid";
  } else {
    const fine = fare + fare * (20 / 100) + 30;
    return fine;
  }
}

// Problem - 2

function onlyCharacter(str) {
  if (typeof str !== "string") {
    return "Invalid";
  } else {
    const output = str.replaceAll(" ", "");
    return output.toUpperCase();
  }
}

// Problem - 3

function bestTeam(player1, player2) {
  if (typeof player1 !== "object" || typeof player2 !== "object") {
    return "Invalid";
  } else {
    const team1 = player1.foul + player1.cardY + player1.cardR;
    const team2 = player2.foul + player2.cardY + player2.cardR;
    if (team1 < team2) {
      return player1.name;
    } else if (team1 === team2) {
      return "Tie";
    } else {
      return player2.name;
    }
  }
}

// Problem - 4

function isSame(arr1, arr2) {
  if (Array.isArray(arr1) !== true || Array.isArray(arr2) !== true) {
    return "Invalid";
  } else {
    if (arr1.length !== arr2.length) {
      return false;
    }
    for (let i = 0; i < arr1.length; i++) {
      const val1 = arr1[i];
      const val2 = arr2[i];
      if (typeof val1 !== typeof val2) {
        return false;
      }
    }
  }
  return true;
}

// Problem - 5

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
