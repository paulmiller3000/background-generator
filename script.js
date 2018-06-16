var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.getElementById("random");
var test = document.querySelector("h1");

window.onload = function() {
	var initialColor = window.getComputedStyle(body, null).getPropertyValue("background-image");
	
	var startPos = initialColor.indexOf(",") + 1;
	var endPos = initialColor.indexOf(",", startPos);
	
	initialColor1 = initialColor.substring(startPos, endPos).trim();
	initialColor2 = initialColor.substring(endPos + 1, initialColor.length - 1).trim();

	d = document.createElement("div");
	d.style.color = initialColor1;
	document.body.appendChild(d);
	initialColor1 = rgb2hex(window.getComputedStyle(d).color);

	d.style.color = initialColor2;
	initialColor2 = rgb2hex(window.getComputedStyle(d).color);
	document.body.removeChild(d);

	color1.value = initialColor1;
	color2.value = initialColor2;

	css.textContent = initialColor;
}

var hexDigits = new Array ("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"); 

// Function to convert rgb color to hex format
function rgb2hex(rgb) {
	rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
	return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function hex(x) {
	return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
 }

function setGradient() {
	body.style.background = 
		"linear-gradient(to right, " 
		+ color1.value 
		+ ", " 
		+ color2.value + ")";

		css.textContent = body.style.background + ";";
}

function getRandomColor() {
	var letters = "0123456789ABCDEF";
	var color = "#";
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function setRandomColor() {
	var newcolor1 = getRandomColor();
	var newcolor2 = getRandomColor();

	color1.value = newcolor1;
	color2.value = newcolor2;
}

color1.addEventListener("input", setGradient)

color2.addEventListener("input", setGradient)

btn.addEventListener("click", function() {
	setRandomColor();
	setGradient();
})