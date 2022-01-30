var slideIndex = 0;
auto();

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("Slides");
  var dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }

  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
     if (n > slides.length) {slideIndex = 1}
     if (n < 1) {slideIndex = slides.length}
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function auto()
{
    showSlides(slideIndex+=1);
    setTimeout(auto, 5000);
}

//preloader
var preloader=document.getElementById('loading');
function myFunction()
{
    preloader.style.display='none';
}