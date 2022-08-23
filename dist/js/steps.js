let progress = document.getElementById("progress");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let circles = document.querySelectorAll(".steps__circle");

let currentActive = 1;

next.addEventListener("click", function (e) {
	currentActive++;
	if (currentActive > circles.length) {
		currentActive = circles.length;
	}
	update();
});
prev.addEventListener("click", function (e) {
	currentActive--;
	if (currentActive < 1) {
		currentActive = 1;
	}
	update();
});

function update() {
	for (let index = 0; index < circles.length; index++) {
		const circle = circles[index];
		if (index < currentActive) {
			circle.classList.add("steps__circle_active");
		} else {
			circle.classList.remove("steps__circle_active");
		}
	}
	let actives = document.querySelectorAll(".steps__circle_active");
	progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
	if (currentActive == 1) {
		prev.disabled = true;
	} else if (currentActive == circles.length) {
		next.disabled = true;
	} else {
		prev.disabled = false;
		next.disabled = false;
	}
}
