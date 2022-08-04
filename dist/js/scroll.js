let blocks = document.querySelectorAll(".block");
window.addEventListener("scroll", checkBlocks);
checkBlocks();
function checkBlocks() {
	let bottomPoint = (window.innerHeight / 5) * 4;
	blocks.forEach((block, index) => {
		let blockTop = block.getBoundingClientRect().top;
		if (blockTop < bottomPoint) {
			block.style.backgroundImage = `url('https://source.unsplash.com/random/800x600?sig=${index}`;
			block.classList.add("show");
		} else {
			block.style.backgroundImage = `none`;
			block.classList.remove("show");
		}
	});
}
