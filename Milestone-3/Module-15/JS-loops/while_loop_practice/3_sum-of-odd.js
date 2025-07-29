// Display sum of all the odd numbers from 81 to 131.

let num1 = 81;
let sum = 0;

while(num1 <=  131) {
    // console.log(num1);
    
    if(num1 % 2 !== 0){
        // console.log('Odd:', num1);
        sum = sum + num1;
        // console.log('Sum of odd: ',sum);
    }
    num1++;
}
console.log('Sum of odd: ',sum);

