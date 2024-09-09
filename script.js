let image1 = document.getElementById('image1');
let image2 = document.getElementById('image2');
let image3 = document.getElementById('image3');
let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');
let headline = document.getElementById('headline');

function showImage1() {
    img1.style.display = 'block';
    image1.style.bacgroundColor = 'purple';
    
}

function showImage2() {
    img2.style.display = 'block';
}

function showImage3() {
    img3.style.display = 'block';
}

function change () {
    headline.style.color = 'blue';
}

image1.addEventListener('click',showImage1);
image2.addEventListener('click',showImage2);
image3.addEventListener('click',showImage3);

document.getElementById("headline").addEventListener('mouseover',change);