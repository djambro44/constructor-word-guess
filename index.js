const Word = require("./word.js");

const inquirer = require("inquirer");

// letters entry
var letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// List of words to choose from
var ReggaeBands = ["sublime", "dirty heads", "slighty stoopid", "pepper", "soja", "sticky fingers", "the movement", "katastro", "rebelution", "fortunate youth", "collie buddz", "iration"];

// Pick Random index from ReggaeBands array
var randomWord = ReggaeBands[Math.floor(Math.random() * ReggaeBands.length)];
console.log(ReggaeBands, randomWord);




// Pass random word through Word constructor
computerWord = new Word(randomWord);

var requireNewWord = false;

// Array for guessed letters
var incorrectLetters = [];
var correctLetters = [];

// Guesses left
var guessesLeft = 10;



function knowledge() {

    // Generates new word for Word constructor if true
    if (requireNewWord === true) {
        // Selects random ReggaeBands array
        var randomIndex = Math.floor(Math.random() * ReggaeBands.length);
        var randomWord = ReggaeBands[randomIndex];


        // Passes random word through the Word constructor
        computerWord = new Word(randomWord);


        requireNewWord = false;
    }


    // TestS if a letter guessed is correct
    var wordComplete = [];
    console.log(randomWord);
    computerWord.letters.forEach(completeCheck);

    // letters remaining to be guessed
    if (wordComplete.filter(letter => letter.guessed === false).length > 0) {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "Guess a letter between A-Z!",
                    name: "userinput"
                }
            ])
            .then(function (input) {


                if (!letterArray.includes(input.userinput) || input.userinput.length > 1) {
                    console.log("\nPlease try again!\n");
                    knowledge();
                } else {


                    if (incorrectLetters.includes(input.userinput) || correctLetters.includes(input.userinput) || input.userinput === "") {
                        console.log("\nAlready Guessed or Nothing Entered\n");
                        knowledge();
                    } else {

                        // Checks if guess is correct
                        var wordCheckArray = [];


                        computerWord.userGuess(input.userinput);

                        // Checks if guess is correct
                        computerWord.letters.forEach(wordCheck);
                        console.log(wordCheckArray);
                        console.log(wordComplete);
                        if (wordCheckArray.join('') === wordComplete.map(letter => {if (letter.guessed === true){
                            return letter.letter; 
                        } }).join("")) {
                            console.log("\nCorrect! You completed the whole word!\n");
                            
                            correctLetters.push(input.userinput);
                        } 
                        else if(wordComplete.map(letter => letter.letter).join("").includes(input.userinput))  {
                            console.log("\nCorrect!\n");
                            
                            correctLetters.push(input.userinput);
                        }
                        
                        else {
                            console.log("\nIncorrect\n");

                            incorrectLetters.push(input.userinput);
                            guessesLeft--;
                        } 


                        // computerWord.log();

                        // Print guesses left
                        console.log("Guesses Left: " + guessesLeft + "\n");

                        // Print letters guessed already
                        console.log("Letters Guessed: " + incorrectLetters.join(" ") + "\n");

                        // Guesses left
                        if (guessesLeft > 0) {
                            // Call function 
                            knowledge();
                        } else {
                            console.log("Sorry, you lose!\n");

                            restartGame();
                        }



                        function wordCheck(key) {
                            wordCheckArray.push(key.letter);
                        }
                    }
                }
            })
    } else {
 //first if block ends
        console.log("YOU WIN!\n");

        restartGame();
    }


    function completeCheck(key) {
        wordComplete.push(key);
    }

}

function restartGame() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "Would you like to:",
                choices: ["Play Again", "Exit"],
                name: "restart"
            }
        ])
        .then(function (input) {
            if (input.restart === "Play Again") {
                requireNewWord = true;
                incorrectLetters = [];
                correctLetters = [];
                guessesLeft = 10;
                knowledge();
            } else {
                return
            }
        })
}

knowledge();