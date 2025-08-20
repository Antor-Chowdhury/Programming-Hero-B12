// console.log("append file connected

// 1. parent node
const mainContainer = document.getElementById("main-container");

// 2. create child node
const placesSection = document.createElement("section");

// create h1
const h1 = document.createElement("h1");
h1.innerText = "Places i want to visit";
placesSection.appendChild(h1);

const ul = document.createElement("ul");
placesSection.appendChild(ul);

const li1 = document.createElement("li");
li1.innerText = "bandorbon";
ul.appendChild(li1);

const li2 = document.createElement("li");
li2.innerText = "sundorbon";
ul.appendChild(li2);

const li3 = document.createElement("li");
li3.innerText = "Coxs-bazar";
ul.appendChild(li3);

// 3. append placeSection to the mainContainer
mainContainer.appendChild(placesSection);

// easier to create HTML
const booksSection = document.createElement("section");

booksSection.innerHTML = `
<h1>Books i need to read</h1>
<ul>
<li>Physics</li>
<li>Chemistry</li>
<li>Biology</li>
<li>Math</li>
</ul>
`;

mainContainer.appendChild(booksSection);
