const Color = document.querySelectorAll('#color1 img');

const backBtn2 = document.querySelectorAll('.backbtn2');
const nextBtn2 = document.querySelectorAll('.nextbtn2');


let Count = 1;
ImgSlider(Count)

function Plus() {
    ImgSlider(Count += 1)
}

for (i =0; i < nextBtn2.length; i++) {
    nextBtn2[i].addEventListener('click',Plus);
}

function Back() {
    ImgSlider(Count -= 1)
}


for (i =0; i < nextBtn2.length; i++) {
    backBtn2[i].addEventListener('click',Back);
}

function ImgSlider(n) {
    if (n > Color.length) {
        Count = 1
    }
    if (n < 1) {
        Count = Color.length
    }
    for (i=0; i < Color.length; i++) {
        Color[i].style.display = 'none'
    }
    Color[Count -1].style.display = 'block'
}

// backBtn2.addEventListener('click', Back);
// nextBtn2.addEventListener('click', Plus);
