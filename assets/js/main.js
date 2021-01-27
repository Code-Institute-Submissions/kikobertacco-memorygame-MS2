// Cards images
let images = [];

for (let i = 1; i <= 8; i++)
    images.push(`https://picsum.photos/seed/${i}/80/80`);
let backDeck = 'https://picsum.photos/id/1056/80/80?grayscale';

// Game state
let cards = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
let blockClick = false;
let flippedCard = false;
let positionFlippedCard = -1;
let imageFlippedCard = 0;
let score = 0;
const timerGame = new timer('#timer');

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
    // Creates event of shuffle cards/start game
    //-------------------------------------------
    document.querySelector('#start').onclick = restartGame;
};
const restartGame = () => {
    alert('Try to match all cards as fast as you can! Once you start the game, you can not restart it until you match all the cards. Good luck!');

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
        img.src = backDeck;
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
document.querySelector('#timer').style.backgroundColor = 'yellow';
timerGame.start();

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

    }, 1000);

        }

    flippedCard = false;
    positionFlippedCard = -1;
    imageFlippedCard = 0;
    }    

    if (score == 8) {
        
        document.querySelector('#start').disabled = false;
        document.querySelector('#timer').style.backgroundColor = 'lightgreen';
        timerGame.stop ();
        
        
    }
    
};

    
//----------------------------------------
//Timer
//----------------------------------------
function timer (e) {
    this.element = e;
    this.time = 0;
    this.control = null;
    this.start = () => {
        this.time = 0;
        this.control = setInterval( () => {
            this.time++;
            const minutes = Math.trunc(this.time/60);
            const seconds = this.time % 60;
            document.querySelector(this.element).innerHTML = 
            (minutes < 10 ? '0':'') + 
             minutes +
             ':' + 
            (seconds < 10 ? '0':'') + 
            seconds;  
        }, 1000);
    };
    this.stop = () => {
        clearInterval(this.control);
        this.control = null;
    };
      
}

