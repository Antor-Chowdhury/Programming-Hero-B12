// document.getElementById('players-container').childNodes[3].childNodes[1].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode

// 1st step: create element and set innerText or innerHTML

const newChild = document.createElement("li");
newChild.innerText = "new baby is born";

// 2nd step: find the parent where you will add the child

const playersList = document.getElementById("player-list");

// 3rd step: append the child to the parent
playersList.appendChild(newChild);
//
