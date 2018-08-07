# Typing Speed Game
The game objective is to mesure the number of caracters and words the user can type in a given time.

## Project Content
The project is divided in two parts.
* Back-end in NodeJs
* Front-end in HTML, CSS and JavaScript(jQuery)

## How the game works
The game initiate when the user change the activate the text area. After it, the counter starts and the user needs to type as much characters and he can before the time runs out.

![Game Inital Screen](https://github.com/danielndias/TypingSpeed/blob/master/public/img/screenShots/InitialScreen.jpg)

While the user is typing correctly, the textarea border changes to green.
![Green border indicating the user is right](https://github.com/danielndias/TypingSpeed/blob/master/public/img/screenShots/rightScreen.jpg)


When the user make a mistake, the border changes to red.
![Green border indicating the user made a mistake](https://github.com/danielndias/TypingSpeed/blob/master/public/img/screenShots/errorScreen.jpg)

After the times runs out, if the user typed correctly, it adds to the scoreboard the username and the amount of correct words typed
![Scoreboard](https://github.com/danielndias/TypingSpeed/blob/master/public/img/screenShots/errorScreen.jpg)

#### Buttons:  
![Back Button](https://github.com/danielndias/TypingSpeed/blob/master/public/img/screenShots/backButton.jpg)  
Is activated after the game is finished. Restarts the game with the same word.

![Back Button](https://github.com/danielndias/TypingSpeed/blob/master/public/img/screenShots/backButton.jpg)  
Is activated after the game is finished. Restarts the game with the same word.

![Scoreboard Button](https://github.com/danielndias/TypingSpeed/blob/master/public/img/screenShots/scoreboardButton.jpg)  
Open or close the scoreboard

![Change Sentece Button](https://github.com/danielndias/TypingSpeed/blob/master/public/img/screenShots/changeButton.jpg)  
Change the sentence. When the user clicks, a request is sent to the server and a new sentence is received. The number of words and allowed time is updated.

![Scoreboard Button](https://github.com/danielndias/TypingSpeed/blob/master/public/img/screenShots/syncButton.jpg)  
Sync the scoreboard content with the server. Used to save the game scores. When the save is completed, a message is shown.
![Scoreboard Button](https://github.com/danielndias/TypingSpeed/blob/master/public/img/screenShots/syncButtonMessage.jpg)  
 
 
 ## Authors
 * Daniel Dias
