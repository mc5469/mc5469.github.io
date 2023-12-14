// by Mengyao Chen 2023/12/14
const poBtn = document.getElementById('po');
const staBtn = document.getElementById('sta');
const theBtn =document.getElementById('the')
const busBtn = document.getElementById('bus');
const muBtn =document.getElementById('mu')
const imgList = document.querySelector('.slider');
let currentIndex = 0;
let slides = document.querySelectorAll('.slide');

function showSlide(index) {
  const slider = document.querySelector('.slider');
  const slideWidth = slides[0].clientWidth;
  slider.style.transform = `translateX(${-index * slideWidth}px)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

function loadImages(start, end) {
    imgList.innerHTML = ''; // Clear existing images
    for (let i = start; i <= end; i++) {
        let imgBox = document.createElement('div');
        imgBox.className = 'slide';
        let img = document.createElement('img');
        img.src = `image/type/img${i}.jpg`;
        imgBox.appendChild(img);
        imgList.appendChild(imgBox);
    }

    slides = document.querySelectorAll('.slide'); // Update slides
    currentIndex = 0; // Reset index
    showSlide(0); // Show first slide of new set
}

poBtn.addEventListener('click', () => loadImages(1, 4));
staBtn.addEventListener('click', () => loadImages(5, 9));
theBtn.addEventListener('click', () => loadImages(10, 12));
busBtn.addEventListener('click', () => loadImages(13, 19));
muBtn.addEventListener('click', () => loadImages(20, 25));

loadImages(1, 20); // Load initial images