// global variables
var lettersGuessed = 0;
var letterToGuess = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];
var selectedLetter = "";
var numBlanks = 0;
var blanksAndSuccesses = []; 
// counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 0;
// Functions
function startGame () {
    selectedLetter = letterToGuess[Math.floor(Math.random() * letterToGuess.length)];    //reset
    lettersGuessed = 0;
    guessesLeft = 9;
    wrongLetters = [];
    blanksAndSuccesses = [];
    console.log(selectedLetter);
    //blanks and successes
    for (var i=0; i<numBlanks; i++){
        blanksAndSuccesses[i].push("_");
}

    document.getElementById("letterToGuess").innerHTML = blanksAndSuccesses.join("  ");
    document.getElementById("wrongGuesses").innerHTML = wrongLetters; 
    document.getElementById("lettersGuessed").innerHTML = lettersGuessed; 
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("lossCounter").innerHTML = lossCount;
    document.getElementById("winCounter").innerHTML = winCount;

}
function checkLetter(letter) {
    //test check letter is true
    // alert(letter);
    return letter === selectedLetter;
    }
function roundComplete (){
    console.log("Win Count: "+ winCount + " | Loss Count: " +  lossCount + " | Guesses Left" + numGuesses);

}
// populating blankandsucc array


  


    //test/debug
    // console.log(selectedLetter);
    // console.log(letterToGuess);
    // console.log(numBlanks);
    // console.log(blanksAndSuccesses);
    // console.log


//initiate code for first time
startGame();



//keystrokes
document.onkeyup = function(event){
    var letterGuessed = String.fromCharCode(event.keyCode).toUpperCase();
    lettersGuessed++;
    document.getElementById("lettersGuessed").innerHTML = lettersGuessed; 
    if (checkLetter(letterGuessed)) {
        winCount++;
        document.getElementById("winCounter").innerHTML = winCount;
        alert("You Win!")
        startGame();
    }
        //letter not found
    else { 
        wrongLetters.push(letterGuessed);
        document.getElementById("wrongGuesses").innerHTML = wrongLetters.join(" ");
        guessesLeft--;
    if (guessesLeft === 0){
        alert("You Lost!");
        lossCount++;
        document.getElementById("lossCounter").innerHTML = lossCount;
        startGame();
    }
    }
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    //test
    console.log(lettersGuessed);
}

// <!-- var letters = ["a", "b", "c"];

// // This array will hold what we guess
// var guessedLetters = [];

// // This variable will be randomly assigned one of the three letters
// var letterToGuess = null;

// // This is what we'll use to count down
// var guessesLeft = 9;

// // This is the counter for wins/losses
// var wins = 0;
// var losses = 0;

// // Below we created three functions to updateGuesses, updateGuessesLeft, and updateGuessesSoFar
// var updateGuessesLeft = function() {
//   // Here we are grabbing the HTML element and setting it equal to the guessesLeft.
//   // (i.e. guessesLeft will get displayed in HTML)
//   document.querySelector("#guesses-left").innerHTML = guessesLeft;
// };

// var updateLetterToGuess = function() {
//   // Here we get a random letterToGuess and assign it based on a random generator (only looking at a, b, or c)
//   letterToGuess = letters[Math.floor(Math.random() * letters.length)];
// };

// var updateGuessesSoFar = function() {
//   // Here we take the guesses the user has tried -- then display it as letters separated by commas.
//   document.querySelector("#guesses-so-far").innerHTML = guessedLetters.join(", ");
// };

// // Function will be called when we reset everything
// var reset = function() {
//   guessesLeft = 9;
//   guessedLetters = [];
//   updateLetterToGuess();
//   updateGuessesLeft();
//   updateGuessesSoFar();
// };

// // Execute on page load.
// updateLetterToGuess();
// updateGuessesLeft();

// // This function will capture the keyboard clicks.
// document.onkeydown = function(event) {
//   // It's going to reduce the guesses by one
//   guessesLeft--;

//   // Lowercase the letter
//   var letter = event.key.toLowerCase();

//   // Then add the guess to the guessedLetters array
//   guessedLetters.push(letter);

//   // Then its going to run the update functions
//   updateGuessesLeft();
//   updateGuessesSoFar();


//   // We'll check if there's a match.
//   if (letter === letterToGuess) {

//     // If there is then we win and we'll update the HTML to display the win.
//     wins++;
//     document.querySelector("#wins").innerHTML = wins;

//     // Then we'll reset the game
//     reset();
//   }

//   // If we are out of guesses...
//   if (guessesLeft === 0) {

//     // Then we will loss and we'll update the HTML to display the loss.
//     losses++;
//     document.querySelector("#losses").innerHTML = losses;

//     // Then we'll call the reset.
//     reset();
//   }
// }; -->
