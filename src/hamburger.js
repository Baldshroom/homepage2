const hamburger = document.querySelector(".hamburger--js");

hamburger.addEventListener("click", () => {
	const navigation = document.querySelector(".header-nav__navigation--js");
	navigation.classList.toggle("navigation--open");
});

console.log(navigation);
