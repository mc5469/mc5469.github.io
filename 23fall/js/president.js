// by Mengyao Chen 2023/12/14
const maoBtn = document.getElementById('mao');
const dengBtn = document.getElementById('deng');
const jiangBtn =document.getElementById('jiang')
const huBtn = document.getElementById('hu');
const xiBtn =document.getElementById('xi')
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
        img.src = `image/whole/img${i}.jpg`;
        imgBox.appendChild(img);
        imgList.appendChild(imgBox);
    }

    slides = document.querySelectorAll('.slide'); // Update slides
    currentIndex = 0; // Reset index
    showSlide(0); // Show first slide of new set
}

maoBtn.addEventListener('click', () => loadImages(1, 20));
dengBtn.addEventListener('click', () => loadImages(21, 42));
jiangBtn.addEventListener('click', () => loadImages(43, 62));
huBtn.addEventListener('click', () => loadImages(63, 84));
xiBtn.addEventListener('click', () => loadImages(85, 103));

loadImages(1, 20); // Load initial images