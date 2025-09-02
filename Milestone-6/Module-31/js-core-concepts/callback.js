// callback

function pakhiBhai(callMeBack, patro, patri) {
  console.log("value of patro", patro);
  //   console.log("callMeBack parameter", callMeBack);
  if (patri) {
    // console.log(callMeBack);
    callMeBack(patro);
  } else {
    console.log("tor kopale biya nai");
  }
}

function callSomeone(person) {
  console.log("calling", person);
}

// callSomeone("jodu");

pakhiBhai(callSomeone, "jodu", "modhu");

const addFive = (x) => x + 5;
[1, 2, 3, 4].map(addFive); // map also use callback function
