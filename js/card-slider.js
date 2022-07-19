const cards = document.querySelectorAll(".cards__card");
const cardsWrapper = document.querySelector(".cards");
const audioWow = document.querySelector(".wow-audio");

audioWow.volume = 0.05;

// cards logic, bg change
cards.forEach((card, index) => {
	card.addEventListener("click", function (e) {
		removeActiveClasses();
		bodyBg(index);
		card.classList.add("cards__card_active");
	});
});

// subfunctions
const removeActiveClasses = () => {
	cards.forEach((card) => {
		card.classList.remove("cards__card_active");
		cardsWrapper.classList.remove("active");
	});
};
const bodyBg = (index) => {
	cardsWrapper.style.backgroundImage = `url(./img/load${index}.jpg)`;
	cardsWrapper.classList.add("active");
};

// scroll
window.addEventListener("scroll", function (e) {
	if (cardsWrapper.clientHeight - this.scrollY < 200) audioWow.classList.add("hide");
	else audioWow.classList.remove("hide");
});
