const isLeader = true;

// if (isLeader) {
//     console.log('Leader Came');
// } else {
//     console.log('Leader did not come');
// }

const isPassed = false;
// (isPassed === false) = (!isPassed)
if (!isPassed) {
    console.log('failed');
} else {
    console.log('passed');
}

// Toggling Boolean Values
let isEnabled = true;
isEnabled = !isEnabled;
console.log(isEnabled);