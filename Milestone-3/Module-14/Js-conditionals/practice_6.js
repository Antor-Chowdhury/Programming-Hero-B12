// Ticket fare Calculator

const ticketPrice = 800;
const age = 25;
const student = true;

let discount;
let afterDiscountPrice;

if (age < 10) {
    console.log("Ticket is free");
} else if (student === true) {
    discount = ticketPrice * 50 / 100;
    afterDiscountPrice = ticketPrice - discount;
    console.log("Ticket price is: ", afterDiscountPrice);
} else if(age >= 60) {
    discount = ticketPrice * 15 / 100;
    afterDiscountPrice = ticketPrice - discount;
    console.log("Ticket price is: ", afterDiscountPrice);
} else {
    console.log("Regular ticket price: ",ticketPrice);
}