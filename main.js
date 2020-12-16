// Cards images
let images = [];

for(let i=1; i<=8; i++)
    images.push(`http://picsum.photos/id/${i}/80/90`);
let backDeck = 'http://picsum.photos/80/90?grayscale';

onload = () => {
let elemImages = document.querySelectorAll('#memory img');
elemImages.forEach(
    (img, i) => {
        img.src = backDeck;
        img.setAttribute('data-value', i);
        img.style.opacity = 0.5;
    });
};