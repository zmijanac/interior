function myFunction(x) {
  if (x.matches) { // If media query matches
    document.getElementsByClassName('sidebar')[0].style.display = "none";
  } else {
    document.getElementsByClassName('sidebar')[0].style.display = "block"; //rolls back the style that stayed under JS
    document.getElementById("shadow").style.display = "none"; //rolls back the style that stayed under JS
  }
}

var x = window.matchMedia("(max-width: 993px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes

function closeDiv(){
    if (x.matches) {
    document.getElementsByClassName('sidebar')[0].style.display = "none";
    document.getElementById("shadow").style.display = "none";
}
}
function openDiv() {
    document.getElementsByClassName('sidebar')[0].style.display = "block";
    document.getElementById("shadow").style.display = "block";
}

// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img1 = document.getElementById('myImg1');
var img2 = document.getElementById('myImg2');
var img3 = document.getElementById('myImg3');
var img4 = document.getElementById('myImg4');
var img5 = document.getElementById('myImg5');
var img6 = document.getElementById('myImg6');

var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

function openImage1() {
  modal.style.display = "block";
  modalImg.src = img1.src;
  captionText.innerHTML = img1.alt;
}
function openImage2() {
  modal.style.display = "block";
  modalImg.src = img2.src;
  captionText.innerHTML = img2.alt;
}
function openImage3() {
  modal.style.display = "block";
  modalImg.src = img3.src;
  captionText.innerHTML = img3.alt;
}

function openImage4() {
  modal.style.display = "block";
  modalImg.src = img4.src;
  captionText.innerHTML = img4.alt;
}

function openImage5() {
  modal.style.display = "block";
  modalImg.src = img5.src;
  captionText.innerHTML = img5.alt;
}

function openImage6() {
  modal.style.display = "block";
  modalImg.src = img6.src;
  captionText.innerHTML = img6.alt;
}

// When the user clicks on modal background, close the modal
modal.onclick = function() {
  modal.style.display = "none";
}


function getOff() //geting the height-css value of wrapper(div) and storing it into function getOff()
{
	return document.getElementById('wrapper').offsetHeight;
}

function changeOff()
{
	var yy = getOff() + 42; // creating variable yy with the value of getOff()
	document.getElementById("shadow").style.height = yy + "px"; //putting the height value into shadow(div)
  console.log(yy);
}
