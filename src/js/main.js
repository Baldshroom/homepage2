// const firstName = "Oskar";
// const age = "25";
// console.log(`Cześć jestem ${firstName} i mam ${age}lat`);
import podatek, {calculate as superCalculate} from "./calculate";
import { differenceInDays } from "date-fns";

console.log(podatek)	

const heroText = document.querySelector(".header-hero__text--js");

console.log(heroText.innerHTML);

heroText.innerHTML = "hejka!";

console.log(heroText.innerHTML);

// Pierwsza funkcja
// function hello(firstName, age) {
// 	console.log(`Cześć mam na imię ${firstName} i mam ${age} lat`);
// };



// function hello2() {
// 	firstName2 = "Oskar";
// 	age2 = 25;
// 	// return `Cześć mam na imię ${firstName2} i mam ${age2} lat.`;
// 	console.log(`Cześć mam na imię ${firstName2} i mam ${age2} lat.`);
// }

const result = differenceInDays(
  new Date(),
  new Date(1998, 6, 5, 24, 0)
);

console.log(result);