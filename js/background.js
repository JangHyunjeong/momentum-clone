const images = ['1.jpg','2.jpg','3.jpg'];
const chosenImage = Math.ceil(Math.random() * images.length);

const bgImage = document.createElement('img');
bgImage.classList.add('background');

bgImage.src = `./img/${chosenImage}.jpg`;
document.querySelector('.container').appendChild(bgImage);
