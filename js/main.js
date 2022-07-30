const buttons = document.querySelectorAll(".btn");
const modalCloseBtns = document.querySelectorAll(".modal__close");
const modalOpenBtns = document.querySelectorAll(".btn-open");

// add duplicate text to btn animations
buttons.forEach((btn) => {
	const text = btn.textContent;
	btn.innerHTML = `<span>${text}</span><strong>${text}</strong>`;
});
// modal logic
modalCloseBtns.forEach((btn) => {
	btn.addEventListener("click", function (e) {
		const data = btn.getAttribute("data-close");
		const modal = document.querySelector(`.modal[data-modal="${data}"]`);
		modal.classList.remove("modal_active");
	});
});
modalOpenBtns.forEach((btn) => {
	btn.addEventListener("click", function (e) {
		const data = btn.getAttribute("data-open");
		const modal = document.querySelector(`.modal[data-modal="${data}"]`);
		modal.classList.add("modal_active");
	});
});
