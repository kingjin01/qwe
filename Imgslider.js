const Slider = document.querySelectorAll('.slider');
const backBtn = document.querySelector('.backbtn');
const nextBtn = document.querySelector('.nextbtn');

let slideIndex = 1;
showSlides(slideIndex);

function maisusSlides() {
  showSlides(slideIndex -= 1);
}

function PlusSlider() {
  showSlides(slideIndex += 1);
}


function showSlides(n) {
  if (n > Slider.length) {    //slideIndex = 1
    slideIndex = 1
  }    
  if (n < 1) {                 
    slideIndex = Slider.length        //slideIndex = 1
  }
  for (i = 0; i < Slider.length; i++) {
    Slider[i].style.display = "none";  
  }
  Slider[slideIndex-1].style.display = "block";  
}

backBtn.addEventListener('click', maisusSlides);
nextBtn.addEventListener('click', PlusSlider);