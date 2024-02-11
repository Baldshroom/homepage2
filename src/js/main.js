import { heroText } from "./heroText";
import { hello } from "./hello";
import podatek, { calculate as superCalculate } from "./calculate";
import { differenceInDays } from "date-fns";
import { substractNumbers } from "./substraction";

// heroText - Dodanie tekstu na stronę za pomocą JavaScript
console.log(heroText.innerHTML);
heroText.innerHTML = "hejka!";
console.log(heroText.innerHTML);

// Funkcja hello
console.log(hello("Oskar", 25));

//Funkcja wyeksportowana z node_modules
const daysSinceBirth = differenceInDays(
	new Date(),
	new Date(1998, 6, 5, 24, 0)
);

console.log(daysSinceBirth);

substractNumbers(20, 22);
