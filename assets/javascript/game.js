//any letter of the alphabet may be the answer
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//set variables for definining wins, losses and guess count, remaining guesses, and list guesses so far. 
var wins = 0;
var losses = 0;
var guesses = 10;
var guessedLetters = [];

//computer guess
var computerGuess = alphabet[Math.floor(Math.random()*alphabet.length)];
console.log("Random Computer Guess: " + computerGuess)

document.onkeyup = function() {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase()
    guessedLetters.push(userGuess);

//if user wins
    if (userGuess === computerGuess) {
        wins++;
        alert("You Win!");
        resetGame()
//if user guesses incorrectly, and still has guesses remaining
    } else {
        guesses--;
    }
//if user is out of guesses, she loses
    if (guesses===0) {
        losses++;
        alert("You lose!");
        resetGame()
    }
//function to reset the game 
    function resetGame() {
        guesses = 10;
        guessedLetters = [];
        computerGuesses = alphabet[Math.floor(Math.random()*alphabet.length)];
        console.log("Letter I'm thinking of: " + computerGuess);
    }
//update html counts 
    var gameHtml = "Guess what letter I'm thinking of!" +
        "<p>Wins: " + wins + "</p>"+
        "<p>Losses: " + losses + "</p>" +
        "Guesses Remaining: " + guesses + "</p>" +
        "Guessed Letters: " + guessedLetters.join(',') + "</p>" ;
        document.getElementById("game-html").innerHTML = gameHtml;
}