const firstName = "Oskar";
const age = "25";
console.log(`Cześć jestem ${firstName} i mam ${age}lat`);

const heroText = document.querySelector(".header-hero__text--js");

console.log(heroText.innerHTML);

heroText.innerHTML = "hejka!";

console.log(heroText.innerHTML);
