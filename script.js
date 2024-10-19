function play() {
  document.getElementById("transparent").style.visibility = "unset";
}
function hideVideo() {
  document.getElementById("transparent").style.visibility = "hidden";
}

function changeVideo(link) {
  document.getElementById("bigVideo").src = link;
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function showRight(item) {
  document.getElementById("felina").style.display = "none";
  document.getElementById("mobileApp").style.display = "none";
  document.getElementById("reloadRanked").style.display = "none";
  document.getElementById("fortniteRanked").style.display = "none";
  document.getElementById(item).style.display = "block";
}
