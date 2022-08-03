let percent = document.querySelector(".loading-progress");
let bg = document.querySelector(".background");
let load = 0;
let int = setInterval(blurring, 50);
// A function to change a property
// from a larger value to a smaller
const scale = (number, inMin, inMax, outMin, outMax) => {
	return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};
function blurring() {
	load++;
	if (load > 99) {
		clearInterval(int);
	}
	percent.innerText = `${load}%`;
	percent.style.opacity = scale(load, 0, 100, 1, 0);
	bg.style.filter = `blur(${scale(load, 0, 100, 60, 0)}px)`;
}
