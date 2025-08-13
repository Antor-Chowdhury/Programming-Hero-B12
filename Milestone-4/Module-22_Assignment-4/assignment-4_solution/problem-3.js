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

const output = bestTeam(
  { name: "Brazil", foul: 5, cardY: 1, cardR: 0 },
  { name: "Argentina", foul: 7, cardY: 0, cardR: 0 }
);
console.log(output);

//   console.log(player1, player2);
//   console.log(typeof player1);

//   typeof player1 && typeof player2 !== "object"
