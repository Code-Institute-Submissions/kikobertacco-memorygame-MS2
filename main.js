// Cards images
let images = [];

for (let i = 1; i <= 8; i++)
    images.push(`http://picsum.photos/id/${i}/80/90`);
let backDeck = 'http://picsum.photos/80/90?grayscale';

// Game state
let cards = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
let blockClick = false;
let flippedCard = false;
let positionFlippedCard = -1;
let imageFlippedCard = 0;
let score = 0;

onload = () => {
    // Load backDeck images
    let elemImages = document.querySelectorAll('#memory img');
    elemImages.forEach(
        (img, i) => {
            img.src = backDeck;
            img.setAttribute('data-value', i);
            img.style.opacity = 0.5;
        });
     //------------------------------------------   
    // Creates event of shuffle cards-restart game
    //-------------------------------------------
    document.querySelector('#start').onclick = restartGame;
};
const restartGame = () => {

    for (let i = 0; i < cards.length; i++) {
        let p = Math.trunc(Math.random() * cards.length);
        let aux = cards[p];
        cards[p] = cards[i];
        cards[i] = aux;
    }
    // associate events to the images
    let elemImages = document.querySelectorAll('#memory img');
    elemImages.forEach((img, _i) => {
        img.onclick = clickImage;
        img.style.opacity = 1;
    });
//-----------------------------
// redefinition of game state
//-----------------------------
blockClick = false;
flippedCard = false;
positionFlippedCard = -1;
imageFlippedCard = 0;
score = 0;

// interface adjust
document.querySelector('#start').disabled = true;

};
// process click event on image
const clickImage = (e) => {
    if (blockClick) return;
    const p = +e.target.getAttribute('data-value');
    const value = cards[p];
    e.target.src = images[value - 1];
    e.target.onclick = null;

    if(!flippedCard) {
        flippedCard = true;
        positionFlippedCard = p;
        imageFlippedCard = value;
    } else {
        if(value == imageFlippedCard) {
            score ++;
        } else {
            const p0 = positionFlippedCard;
            blockClick = true;

    setTimeout(() => {
        e.target.src = backDeck;
        e.target.onclick = clickImage;
        let img = document.querySelector('#memory #i'+ p0);
        img.src = backDeck;
        img.onclick = clickImage;
        blockClick = false;

    }, 3000);

        }

    flippedCard = false;
    positionFlippedCard = -1;
    imageFlippedCard = 0;
    }    

    if (score == 8) {
        document.querySelector('#start').disabled = false;
    }

};

