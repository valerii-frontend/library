const cards = document.querySelectorAll(".cards__card");
const body = document.querySelector(".cards");
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
		body.classList.remove("active");
	});
};
const bodyBg = (index) => {
	body.style.backgroundImage = `url(./img/cards/load${index}.jpg)`;
	body.classList.add("active");
};

// scroll
window.addEventListener("scroll", function (e) {
	if (body.clientHeight - e.target.scrollTop < body.clientHeight - 200) audioWow.classList.add("hide");
	else audioWow.classList.remove("hide");
});
