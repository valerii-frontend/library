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
		frame.classList.add("hide");
		e.preventDefault();
		src.setAttribute("src", a.getAttribute("href"));
		setTimeout(() => {
			frame.classList.remove("hide");
		}, 500);
	});
});
