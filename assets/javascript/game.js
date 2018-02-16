//define variables. any letter of the alphabet may be the answer.
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l',
    'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//set initial global variables for definining wins, losses and guess count.  
var wins = 0;
var losses = 0;
var guessesRemaining = 10;
//will hold all the users guesses in each round
var guessesSoFar = [];
//userGuess is what the letter the user picks by pressing a key
var userGuess = null;
//computer picks a random guess and stores in computerChoice 
var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log("Wins: " + wins + " Losses: " + losses +  "Guesses Remaining: " + guessesRemaining + "Guesses so far: " + guessesSoFar + " Computer Choice: " + computerChoice);
var guessCount = 1;
var resetButton;

//When user presses a key, record and save to userGuess then run function to check if guess is correct. 
document.onkeypress = function(checkGuess) {

    // When user presses a key, it records it and saves to userGuess
    var userGuess = checkGuess.key;

    // Add user's guess to the guessSoFar array. Make sure the user's pick is within the alphabet variables 
    if (guessesSoFar.indexOf(userGuess) < 0 && alphabet.indexOf(userGuess) >= 0) {
        guessesSoFar.push[userGuess];
        // if it is a new letter then decrease remaining guesses by 1
		guessesRemaining--;
    }

    //If correct, user wins. If incorrect, subtract one from guesses remaining value.    
    if (userGuess == computerChoice){
        wins++
        console.log(Woohoo!);
        guesses
        document.getElementById('wins').innerHTML = "Wins: " + wins;
        
    }else{
        guessesRemaining--;
    }
//If user loses, add one to user's loss count. 
    if(guessCount === 0){
        losses++
    }
}
document.getElementById('wins').innerHTML = "Wins: " + wins;
document.getElementById('losses').innerHTML = "Losses: " + losses;
document.getElementById('guessesRemaining').innerHTML = "Guesses Remaining: " + guessesRemaining;