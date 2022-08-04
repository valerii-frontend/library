const links = document.querySelectorAll("a");
const frame = document.querySelector(".frame");
const src = frame.querySelector("iframe");
const toggle = document.querySelector("#toggle");

toggle.addEventListener("change", function (e) {
	if (toggle.checked) src.classList.add("mobile");
	else src.classList.remove("mobile");
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
