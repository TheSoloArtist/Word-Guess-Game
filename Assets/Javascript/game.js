// global variables
var lettersGuessed
var letterOptions = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];
var selectedLetter = "";
var numBlanks = 0;
var blanksAndSuccesses = []; 

// counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 0;
// Functions
function startGame () {
    selectedLetter = letterOptions [Math.floor(Math.random() * letterOptions.length)];
    letters = selectedLetter.length;

function checkLetter(letter) {
    //test check letter is true
    alert(letter);

    var isLetter = false;
    
    for (var i=0; i<numBlanks; i++){
        if(selectedLetter[i] == letter) {
           isLetter = true;
           alert("Letter found");
        }
    }
}

    //reset
    guessesLeft = 5;
    wrongLetters = [];
    blanksAndSuccesses = [];
    
    //blanks and successes
    for (var i=0; i<numBlanks; i++){
        blanksAndSuccesses[i].push("_");
}

    document.getElementById("letterToGuess").innerHTML = blanksAndSuccesses.join("  ");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("lossCounter").innerHTML = lossCount;
    document.getElementById("winCounter").innerHTML = winCount;



    //test/debug
    console.log(selectedLetter);
    console.log(letters);
    console.log(numBlanks);
    console.log(blanksAndSuccesses);
    console.log
}




// Main process

//initiate code for first time
startGame();


//keystrokes
document.onkeyup = function(event){
    var lettersGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetter(lettersGuessed);

    //test
    console.log(lettersGuessed);
}

