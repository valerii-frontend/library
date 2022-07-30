const cards = document.querySelectorAll(".cards__card");
const cardsWrapper = document.querySelector(".cards");
const audioWow = document.querySelector(".wow-audio");
const modalCards = document.querySelector(`.modal[data-modal='cards']`);
const modalCardsBody = modalCards.querySelector(`.modal[data-modal='cards'] .modal__body`);
const modalCardsOpenBtn = document.querySelector(`.btn[data-open='cards']`);

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
	cardsWrapper.style.backgroundImage = `url(./img/cards/load${index}.jpg)`;
	cardsWrapper.classList.add("active");
};

// scroll
modalCardsBody.addEventListener("scroll", function (e) {
	if (cardsWrapper.clientHeight - e.target.scrollTop < cardsWrapper.clientHeight - 200) audioWow.classList.add("hide");
	else audioWow.classList.remove("hide");
});

modalCards.addEventListener("click", function (e) {
	if (e.target.classList.contains("modal__close")) audioWow.pause();
});
modalCardsOpenBtn.addEventListener("click", () => audioWow.play());
;