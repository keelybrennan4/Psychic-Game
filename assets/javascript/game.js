//any letter of the alphabet may be the answer.
var computerChoices = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//set variables for definining wins, losses and guess count, remaining guesses, and list guesses so far. 
///var wins = 0;
///var losses = 0;
var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var guessesCount = 9;
var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');
//var userGuess = null;

var guessCount = 1;
var resetButton;

//computer picks a random letter
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

function checkGuess() {
    var userGuess = String(fromCharCode(event.keyCode).toLowerCase();
guessSubmit.addEventListener('click', checkGuess);

    if (guessCount === 1) {
        guesses.textContent = 'Previous guesses: ';
    }
    guesses.textContent += userGuess + ' ';

    if (userGuess === computerGuess) {
        last.Result.textContent = 'Congratulations! You are a psychic!';
        setGameOver();
    }else if (guessCount === 0) {
        lastResult.textContent = 'You Lost! Try Again?'
        setGameOver();
    }
    guessCount++;
    guessField.value = '';
    guessField.focus();
}

//when game is over
function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    resetButton.addEventListener('click', resetGame);
}

//to play again
function resetGame() {
    guessCount = 9;
    var resetParas = document.querySelectorAll('resultParas p');
    for (var i = 0 ; i < resetParas.length ; i++){
        resetParas[i].textContent = '';
    }
    guessField.value = '';
    guessField.focus();
    guessField.disabled = false;
    guessSubmit.disabled = false;
   
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}