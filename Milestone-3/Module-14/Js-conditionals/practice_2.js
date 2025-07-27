const  weight = 54;
const height = 1.62;

const BMI = weight / height ** 2;
console.log(BMI.toFixed(1));

if (BMI < 18) {
    console.log("You are underweight");
} else if (BMI >= 18.5 && BMI <= 24.9) {
    console.log("you are normal");
} else if(BMI >= 25 && BMI <= 29.9) {
    console.log("you are overweight");
} else {
    console.log("you are obese");
}
