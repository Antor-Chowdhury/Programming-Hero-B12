/**
 * Ternary --> three parts
 * 
 * ?   :
 * 
 * condition ? do something when true : do something when false
*/


const age = 20;

// if (age > 18) {
//     console.log('Eligible to vote');
// } else {
//     console.log('Not eligible to vote');
// }


// Ternary way

// age >= 18 ? console.log('Can vote') : console.log("Can't vote");


let price = 500;
const isLeader = false;

// if (isLeader === true) {
//     price = 0;
// } else {
//     price += 100;
// }
// console.log(price);

// price = isLeader === true ? 0 : price + 100;
// console.log(price);

// Optional: semi-advanced ternary

if (isLeader === true) {
    if(price > 1000) {
        price = price / 2;
    } else {
        price = 0;
    }
} else {
    price +=1000;
}

// price > 1000 ? price / 2 : 0;

price = isLeader === true ? 
     price > 1000 ? 
         price / 2 : 0 
    : price +=1000;

 