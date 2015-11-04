var gameTable = document.querySelector('table');
var clearTheBoard = document.getElementById('clearBoardButton');

var square1 = document.getElementById('sq1');
var square2 = document.getElementById('sq2');
var square3 = document.getElementById('sq3');
var square4 = document.getElementById('sq4');
var square5 = document.getElementById('sq5');
var square6 = document.getElementById('sq6');
var square7 = document.getElementById('sq7');
var square8 = document.getElementById('sq8');
var square9 = document.getElementById('sq9');



var gameCounter = 0;

var takeYourTurn = function(){
    var square = event.target;
        if (gameCounter === 0) {
            square.textContent = 'X';
            square.classList.add('x');
            gameCounter++;
            square.removeEventListener('click', takeYourTurn);
    } else if (gameCounter % 2 === 0) {
            square.textContent = 'X';
            square.classList.add('x');
            gameCounter++;
            square.removeEventListener('click', takeYourTurn);
    } else if (gameCounter % 2 !== 0) {
            square.textContent = 'O';
            square.classList.add('o');
            gameCounter++;
            square.removeEventListener('click', takeYourTurn);
    }
};


var clearBoardPlz = function(){
    location.reload(true);
};

square1.addEventListener('click', takeYourTurn);
square2.addEventListener('click', takeYourTurn);
square3.addEventListener('click', takeYourTurn);
square4.addEventListener('click', takeYourTurn);
square5.addEventListener('click', takeYourTurn);
square6.addEventListener('click', takeYourTurn);
square7.addEventListener('click', takeYourTurn);
square8.addEventListener('click', takeYourTurn);
square9.addEventListener('click', takeYourTurn);

clearTheBoard.addEventListener('click', clearBoardPlz);