const address = "sirajgonj";
const part = address.slice(2, 4);
console.log(part);

const sentence = "I am a good and hardworking person.";
// console.log(sentence.split(" "));
console.log(sentence.split("a"));

const friendsStr = "Rahim,kahim,dahim,fahim,sahim";
const friends = friendsStr.split(",");
console.log(friends);

const realFriends = ["Rahim", "kahim", "dahim", "fahim", "sahim"];
console.log(realFriends.join(" "));
console.log(realFriends.join("|"));
console.log(realFriends.join("-"));
