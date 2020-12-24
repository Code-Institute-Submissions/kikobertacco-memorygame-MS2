# Memory Card Game
This is a memory card game where the player must click on a card and try to match it's pair as fast as possible.
Once the player clicks on the start button, a message will pop-up with a short explanation of the game. When the message tab is closed the timer starts running. Once the game starts the player can not restart it until all cards  pairs are matched. This feature was made on purpose so it will make a little harder for the player. However, if the player wats restart the game that xan be done by refreshing the page.
When the last pair of cards is matched, a message pops up informing the player that all pairs where found and timer stops couting.
It's also relevant to to say that only 2(two) cards can be flipped per play.

# UX
The goal of this project is to create a simple memory card game using Javascript language. This game can be played by adults and children above 10 years old.

### Player Goals
The player should match all 8(eight) pairs of cards as fast as possible, exercising his/her memory skills.
As an user of this game I would like to be able to entertain myself and practice memory skills on any device and have direct and precise information about the game.
I've decided to design this game with a card board of 16 cards and a timer that runs progressively, allowing the players to follow their progress and to stimulate them to play more than once.
The mockup of this project can be found on the mockup folder.

# Features
The game has a card borad 16 cards with 8 different images. Also, besides a timer that runs progressively there's a start button, that when is clicked shows a message with instructions.
As soon as all the cards are matched, the timer stops running, and a message pops up saying that the game has been complete.

### Features to be implemented
For the future I would like to change the timer to a regressive mode(for ex. 02:00 minutes to find all cards) and then I would like to create new levels increasing difficulty with less time (for ex. 01:00 minute to match all cards). I think that would estimulate the player to think faster and improve memory skills.
Also, it could be interesting to have a table with player's best times, so they can keep track of their progress.
For last, I also would like to implement the style of the pop-up messages.

# Technologies used
* HTML 5
* CSS 3
* Javascript
* Google Fonts
* Picsum photo
* Bootstrap 4
* Git - Version control
* Github - For repository
* Gitpod - IDE for game construction
* Github pages - Game displaying

# Testing
In order to check its funcionality, I tested the game on different browsers: Chrome, Firefox and Safari.
Responsiveness was checked by Chrome dev tools, and it looked right, but when I tested in devives Samsung 8, Samsung S10 and Samsung J6, the display was a bit out of place, but it could be easily adjusted by a little zoom out.
I also tested on Samsung Galaxy pad, and no major problems were detect.
For HTML was used W3c Markup validator service, and it pointed 16 errors reffering to element img(missing required "src" atribute), but that was expected as all the images were imported by "picsum.photo" api and processed on the main.js file.
CSS 3 was validated through W3C validation service and no errors were detected.
JShint was used to validate javascript code, and despite detecting 33 warnings, no erros were found.
Screen shots of validation can be seeing on the validation paste.

# Deployment
The site is deployed on GitHub pages from the master branch and will update automatically upon new commits. It can be accessed via https://kikobertacco.github.io/memorygame-MS2/.

# Credits
The content of this game was mostly created by me. 
The images were taken from picsum.photos api.
Inspiration for this project came from youtube videos as:
https://www.youtube.com/watch?v=Rk4J-d7sPKQ&t=1179s&ab_channel=C%C3%B3digodeEstagi%C3%A1rio
https://www.youtube.com/watch?v=Y4lOwOOK7yE&ab_channel=CodingHack
https://www.youtube.com/watch?v=28VfzEiJgy4&ab_channel=WebDevSimplified

## Acknowledgements
This game is part of the Interactive Fronted Development milestone Project from Code Institute, and it has only educational purposes.
Would like to thank Professor Marcos Kutova for his precious tips and advices on Javascript and for suggesting me to use https://picsum.photos/ for randon images.
I also would like to give an special thanks to my mentor Brian Macharia, for helping me and most of all given me the motivation that was missing at the beggining of this project. 
