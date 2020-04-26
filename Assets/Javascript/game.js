

// global variables

var letterOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];
var selectedLetter = "";
var numBlanks = 0;
var blanksAndSuccesses = []; 

// counters
var winCount = 0;
var lossCunt = 0;
var guessesLeft = 0;
// Functions
function startGame () {
    selectedLetter = letterOptions [Math.floor(Math.random() * letterOptions.length)];
    letters = selectedLetter.length;


    //test/debug
    console.log(selectedLetter);
    console.log(letters);
    console.log
    console.log
    console.log
}




// Main process
startGame();

