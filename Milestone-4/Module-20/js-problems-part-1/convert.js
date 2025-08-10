// 12 inch = 1 feet

function inchToFeet(inch) {
  const feet = inch / 12;
  return feet;
}

const shuvoHeight = inchToFeet(75);
console.log(shuvoHeight);

// output will be 6 feet 3 inch --> below

function inchToFeet2(inch) {
  const feetFraction = inch / 12;
  const feetNumber = parseInt(feetFraction);
  const inchRemaining = inch % 12;
  const result = feetNumber + " feet " + inchRemaining + " inches.";
  return result;
}

const shuvoHeight2 = inchToFeet2(75);
console.log(shuvoHeight2);

// km to mile
function kiloMeterToMiles(kilo) {
  const mile = kilo * 0.621371;
  return mile;
}
const totalMile = kiloMeterToMiles(120);
console.log(totalMile.toFixed(2), "Mile");

// mile to km
function mileToKiloMeter(mile) {
  const kilo = mile * 1.60934;
  return kilo;
}
const totalKilo = mileToKiloMeter(140);
console.log(totalKilo.toFixed(2), "Kilometer");
