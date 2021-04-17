'use strict';

let heroimg = document.getElementById('heroimg');
let photo1 = document.getElementById('first');
let photo2 = document.getElementById('second');
let photo3 = document.getElementById('third');
let photo4 = document.getElementById('fourth');
let photo5 = document.getElementById('fifth');
let photo6 = document.getElementById('sixth');

photo1.addEventListener('click', replace)

function replace(event){
    heroimg.src = '../img/project1.jpg';
}

photo2.addEventListener('click', replace2)

function replace2(){
    heroimg.src = '../img/project2.jpg'
}

photo3.addEventListener('click', replace3)

function replace3(){
    heroimg.src = '../img/project3.jpg'
}

photo4.addEventListener('click', replace4)

function replace4(){
    heroimg.src = '../img/project4.jpg'
}

photo5.addEventListener('click', replace5)

function replace5(){
    heroimg.src = '../img/project5.jpg'
}

photo6.addEventListener('click', replace6)

function replace6(){
    heroimg.src = '../img/project6.jpg'
}