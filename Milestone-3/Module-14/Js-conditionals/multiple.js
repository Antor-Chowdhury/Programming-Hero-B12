const salary = 20000;
const isBCS = true;
const height = 68;
const hasCar = false;

// if (salary > 20000 && height > 66) {
//     console.log('Suu----patro');
// } else {
//     console.log('onno patro khuji');
// }

// if (salary > 25000 || height > 70) {
//     console.log('approved');
// } else {
//     console.log('Not approved');
// }

if (salary > 25000 || height > 70 || isBCS == true) {
    console.log('approved');
} else {
    console.log('Not approved');
}

// ---------COMPLEX CONDITION----------

if ((salary > 25000 && hasCar == false) || isBCS == true) {
    console.log('approved');
} else {
    console.log('Not approved');
}