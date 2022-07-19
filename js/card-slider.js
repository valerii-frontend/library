const cards = document.querySelectorAll(".cards__card");
const cardsWrapper = document.querySelector(".cards");
document.querySelector(".wow-audio").volume = 0.05;

cards.forEach((card, index) => {
	card.addEventListener("click", function (e) {
		removeActiveClasses();
		bodyBg(index);
		card.classList.add("cards__card_active");
	});
});
function removeActiveClasses() {
	cards.forEach((card) => {
		card.classList.remove("cards__card_active");
		cardsWrapper.classList.remove("active");
	});
}

const bodyBg = (index) => {
	cardsWrapper.style.backgroundImage = `url(./img/load${index}.jpg)`;
	cardsWrapper.classList.add("active");
};
