const greenButton = document.getElementById("green-btn");
const redButton = document.getElementById("red-btn");
const colorLabel = document.getElementById("color-label");

greenButton.addEventListener("click", () => {
	colorLabel.innerText = "Green";
	colorLabel.style.color = "green";
});

redButton.addEventListener("click", () => {
	colorLabel.innerText = "Red";
	colorLabel.style.color = "red";
});
