var slideIndex = 1;
var slideContentIndex = 1;
showSlide(slideIndex);
showSlideContent(slideContentIndex);

function plusSlides(n) {
  showSlide(slideIndex += n);
  showSlideContent(slideContentIndex += n);
}

function showSlide(n) {
  var i;
  var slides = document.getElementsByClassName('slider-image');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.opacity = "0";
  }
  slides[slideIndex-1].style.opacity = "1";
}
function showSlideContent(n) {
  var j;
  var slideContents = document.getElementsByClassName('slideContent');
  if (n > slideContents.length) {
    slideContentIndex = 1;
  }
  if (n < 1) {
    slideContentIndex = slideContents.length;
  }
  for (j = 0; j < slideContents.length; j++) {
    slideContents[j].style.display = "none";
  }
  slideContents[slideContentIndex-1].style.display = "block";
}