const Slider = document.querySelectorAll('.slider');
const backBtn = document.querySelector('.backbtn');
const nextBtn = document.querySelector('.nextbtn');

var slideIndex = 1;
showSlides();

function plusSlides(n) {
  showSlides(slideIndex += n);
}


function showSlides() {
  if (slideIndex > Slider.length) {    //slideIndex = 1
    slideIndex = 1
  }    
  if (slideIndex < 1) {                 
    slideIndex = Slider.length        //slideIndex = 1
  }
  for (i = 0; i < Slider.length; i++) {
    Slider[i].style.display = "none";  
  }
  Slider[slideIndex-1].style.display = "block";  
}