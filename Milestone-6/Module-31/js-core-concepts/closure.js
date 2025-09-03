// function counter() {
//   let count = 0;
//   function innerFunction() {
//     console.log("inside the inner function, some one called me");
//   }
//   return innerFunction;
// }

// const output = counter();
// console.log(output());

function counter() {
  let count = 10;

  return function (person) {
    count = count + 1;
    console.log("inside the inner function", person, count);
  };
}

const innerFunc = counter();
innerFunc();
innerFunc();
innerFunc();

const rahimCounter = counter();
rahimCounter("rahim");
rahimCounter("rahim");
rahimCounter("rahim");
rahimCounter("rahim");

console.log("-------------------------");

const karimCounter = counter();
karimCounter("karim");

rahimCounter("rahim");

karimCounter("karim");
karimCounter("karim");
karimCounter("karim");
