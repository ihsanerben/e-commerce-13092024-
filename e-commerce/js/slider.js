//! slider start
const slides = document.getElementsByClassName("slider-item");
const sliderDots = document.getElementsByClassName("slider-dot");
let slideIndex = 0;
showSlides();

setInterval(() => {
  plusSlide(1);
}, 4000);

function plusSlide(n) {
  slideIndex += n;
  if (slideIndex == -1) {
    slideIndex = slides.length - 1;
  } else if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlides();
}

function currentSlide(n) {
  slideIndex = n;
  showSlides();
}

function showSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < sliderDots.length; i++) {
    sliderDots[i].className = sliderDots[i].className.replace(" active", "");
  }

  slides[slideIndex].style.display = "flex";
  sliderDots[slideIndex].className += " active";
}
//! slider end
