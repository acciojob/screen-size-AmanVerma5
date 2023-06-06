//your JS code here. If required.
window.addEventListener('resize',getWindowSize);

function getWindowSize() {
	let width=document.getElementById("width");
	let height=document.getElementById("height");

	width.innerText=window.innerWidth;
	height.innerText=window.innerHeight;
}
getWindowSize();