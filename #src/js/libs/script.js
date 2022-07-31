const lang = document.querySelector(".language");
const langItems = document.querySelectorAll(".language__item");
langItems.forEach((li) => {
	li.addEventListener("click", function (e) {
		if (lang.classList.contains("language_active")) {
			lang.classList.remove("language_active");
		} else lang.classList.add("language_active");
	});
});

const body = document.querySelector("body");
const burger = document.querySelector(".header__burger");
const navMenu = document.querySelector(".header__menu.menu");
const navMenuLinks = document.querySelectorAll(".menu__link");
const menuBg = document.querySelector(".header__column_menu");
burger.addEventListener("click", function (e) {
	const burgerActive = document.querySelector(".header__burger_active");
	if (burgerActive) {
		burger.classList.remove("header__burger_active");
		navMenu.classList.remove("menu_active");
		menuBg.classList.remove("header__column_menu_active");
		body.classList.remove("_lock");
		lang.classList.remove("language_active");
	} else {
		burger.classList.add("header__burger_active");
		navMenu.classList.add("menu_active");
		menuBg.classList.add("header__column_menu_active");
		body.classList.add("_lock");
		lang.classList.remove("language_active");
	}
});

navMenuLinks.forEach((menuLink) => {
	menuLink.addEventListener("click", function (e) {
		burger.classList.remove("header__burger_active");
		navMenu.classList.remove("menu_active");
	});
});

let header = document.querySelector(".header");
function headerScroll() {
	if (header) {
		if (pageYOffset > 255) {
			header.style.backgroundColor = "rgba(0,0,0,0.7)";
		} else {
			header.style.backgroundColor = `rgba(0,0,0, ${(0.1 * pageYOffset) / 35})`;
		}
	}
}
headerScroll();
window.addEventListener("scroll", headerScroll);

const fixedBtn = document.querySelector(".fixed__arrow");
const fixed = document.querySelector(".fixed");

fixedBtn.addEventListener("click", function (e) {
	e.preventDefault();
	fixed.classList.toggle("fixed_active");
	fixedBtn.classList.toggle("fixed__arrow_active");
});

const parallaxItems = document.querySelectorAll(".parallax__img");

parallaxItems.forEach((item) => {
	const getIndex = item.getAttribute("data-index");
	item.style.cssText = `z-index:${getIndex};`;
});

document.addEventListener("mousemove", function (e) {
	if (window.innerWidth > 768) {
		parallax(e);
	}
});

function parallax(e) {
	parallaxItems.forEach((item) => {
		const getSpeed = item.getAttribute("data-speed");
		const x = (window.innerWidth - e.pageX * getSpeed) / 100;
		const y = (window.innerHeight - e.pageY * getSpeed) / 100;
		item.style.transform = `translateY(${y}px) translateX(${x}px)`;
	});
}

const wrapper = document.querySelector(".wrapper");
wrapper.classList.add("wrapper_load");
