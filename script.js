//your JS code here. If required.
window.addEventListener('resize',getWindowSize);
const heading=document.createElement("h1");
function getWindowSize() {
	let width=window.innerWidth;
	let height=window.innerHeight;

  const div = document.getElementById('sizeInfo');
  
  heading.innerText = 'Width: ' + width +' and Height: ' + height;
	div.append(heading);
}
getWindowSize();