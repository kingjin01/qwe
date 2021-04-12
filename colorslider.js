const goodItems1 = document.querySelector ('#good-items1');
const goodItems2 = document.querySelector ('#good-items2');
const goodItems3 = document.querySelector ('#good-items3');
const Face = document.querySelector('#face');
const Lip = document.querySelector('#lip');
const Smell = document.querySelector('#smell');

Face.addEventListener('click', function(){
    goodItems1.style.transform = 'translateX(0)';
    goodItems1.style.display = 'block';
    goodItems2.style.transform = 'translateX(100%)';
    goodItems2.style.display = 'none';
    goodItems3.style.transform = 'translateX(100%)';
    goodItems3.style.display = 'none';
    Face.classList.add('active')
    Lip.classList.remove('active')
    Smell.classList.remove('active')
});

Lip.addEventListener('click', function(){
    goodItems1.style.transform = 'translateX(100%)';
    goodItems1.style.display = 'none';
    goodItems2.style.transform = 'translateX(0)';
    goodItems2.style.display = 'block';
    goodItems3.style.transform = 'translateX(100%)';
    goodItems3.style.display = 'none';
    Lip.classList.add('active')
    Face.classList.remove('active')
    Smell.classList.remove('active')
});

Smell.addEventListener('click', function(){
    goodItems1.style.transform = 'translateX(100%)';
    goodItems1.style.display = 'none';
    goodItems2.style.transform = 'translateX(100%)';
    goodItems2.style.display = 'none';
    goodItems3.style.transform = 'translateX(0)';
    goodItems3.style.display = 'block';
    Smell.classList.add('active')
    Lip.classList.remove('active')
    Face.classList.remove('active')
});