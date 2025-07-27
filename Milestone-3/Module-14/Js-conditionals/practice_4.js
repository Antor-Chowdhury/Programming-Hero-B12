const myScore = 84;
const friendScore = 82;

if (myScore > 80) {
    if (friendScore > 80) {
        console.log("Let's go for a lunch.");
    } else if (friendScore < 80 && friendScore >= 60) {
        console.log("Good luck next time");
    } else if (friendScore < 60 && friendScore >=40) {
        console.log("Message kept unseen");
    } else {
        console.log("Blocked friend number");
    }
} else {
    console.log("GO home and sleep and act sad.");
}