// console.log("file connected");

// const sections = document.getElementsByTagName("section");

const sections = document.querySelectorAll("section");
// console.log(sections);

// ----- Inline CSS Type ------
for (const section of sections) {
  console.log(section);
  section.style.backgroundColor = "lightblue";
  section.style.border = "2px solid tomato";
  section.style.marginBottom = "5px";
  section.style.borderRadius = "10px";
  section.style.padding = "15px";
}

// ---- Dynamic Class ----
for (const section of sections) {
  //   section.classList.add("section-card");
}
