let form = document.querySelector(".search");
let input = document.querySelector(".search__input");
let btn = document.querySelector(".search__btn");

btn.addEventListener("click", function (e) {
	form.classList.toggle("search_active");
	input.focus();
});
