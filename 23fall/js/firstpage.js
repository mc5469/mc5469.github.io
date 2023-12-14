// by Mengyao Chen 2023/12/14
document.addEventListener("DOMContentLoaded", function () {
    const follow = document.getElementById("follow");
    const pageContainer = document.getElementById('page-container');
    const reloadButton = document.getElementById('reload-button');
    const numImages = 103;

    const isTouchDevice = () => {
        try {
            document.createEvent("TouchEvent");
            return true;
        } catch (e) {
            return false;
        }
    };
    const move = (e) => {
        try {
            const touches = e.touches || []; 
            const x = isTouchDevice() ? (touches[0] ? touches[0].pageX : 0) : e.pageX;
            const y = isTouchDevice() ? (touches[0] ? touches[0].pageY : 0) : e.pageY;    
            follow.style.left = x - 40 + "px";
            follow.style.top = y - 40 + "px";
        } catch (error) {
            console.error(error);
        }
    };
    const generateRandomImages = () => {
        pageContainer.innerHTML = '';

        for (let i = 1; i <= numImages; i++) {
            const imageContainer = document.createElement('div');
            imageContainer.className = 'image-container bounce-in-top ';
            const image = document.createElement('img');
            image.src = `image/whole/img${i}.jpg`;
            image.alt = `Image ${i}`;

            const randomHeight = Math.floor(Math.random() * 5) + 6;
            const randomPositionX = Math.random() * (100 - randomHeight);
            const randomPositionY = Math.random() * (90 - randomHeight)+5;

            image.style.maxHeight = '100%';

            imageContainer.style.height = `${randomHeight}%`;
            imageContainer.style.position = 'absolute';
            imageContainer.style.left = `${randomPositionX}%`;
            imageContainer.style.top = `${randomPositionY}%`;
            imageContainer.style.border = '0.2em solid yellow';
            imageContainer.appendChild(image);
            pageContainer.appendChild(imageContainer);
        }
        const randomButtonX = Math.random() * (80 - 3);
        const randomButtonY = Math.random() * (70 - 3);
        reloadButton.style.position = 'fixed';
        reloadButton.style.bottom = `${randomButtonY}%`;
        reloadButton.style.right = `${randomButtonX}%`;
    };
    generateRandomImages();
    reloadButton.addEventListener('click', generateRandomImages);
    document.addEventListener("mousemove", move);
    document.addEventListener("touchmove", move);
  window.addEventListener('load', function () {
    var loader = document.getElementById('loader');
    var pageContainer = document.getElementById('page-container');
    setTimeout(function () {
      loader.style.display = 'none';
      pageContainer.style.display = 'block';
    }, 1800);
});
});
