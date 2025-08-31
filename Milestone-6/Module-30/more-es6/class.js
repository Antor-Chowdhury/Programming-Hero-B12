/**
 * class --> template
 * properties
 * method (a special type of function inside a class without the function keyword)
 *
 *
 * object
 *
 *
 */

class Player {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.location = "Bangladesh";
    // console.log("calling the constructor method", name);
  }
  goal() {
    console.log("score a goal");
  }
  getTeamName() {
    return "Barcelona";
  }
}
const player1 = new Player("Tom Brady", 35);

console.log(player1 instanceof Player);
console.log(player1);
// player1.goal();
// console.log(player1);
