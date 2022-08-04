const links = document.querySelectorAll("a");
const frame = document.querySelector(".frame");
const src = frame.querySelector("iframe");
const mobileToggle = document.querySelector("#toggle");
const fullScreentoggle = document.querySelector("#full");

mobileToggle.addEventListener("change", function (e) {
	if (mobileToggle.checked) src.classList.add("mobile");
	else src.classList.remove("mobile");
});
fullScreentoggle.addEventListener("change", function (e) {
	if (fullScreentoggle.checked) frame.classList.add("full");
	else frame.classList.remove("full");
});

links.forEach((a) => {
	a.addEventListener("click", function (e) {
		e.preventDefault();
		frame.style.opacity = 1;
		src.classList.remove("show");
		src.style.opacity = 0;
		setTimeout(() => {
			src.classList.add("show");
		}, 100);
		src.setAttribute("src", a.getAttribute("href"));
	});
});
