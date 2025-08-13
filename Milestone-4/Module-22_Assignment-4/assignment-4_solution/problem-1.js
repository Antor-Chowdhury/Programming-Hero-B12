function totalFine(fare) {
  if (typeof fare !== "number" || 0 >= fare) {
    return "Invalid";
  } else {
    const fine = fare + fare * (20 / 100) + 30;
    return fine;
  }
}

const output = totalFine(200);
console.log(output);
