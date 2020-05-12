var Letter = require("./letter.js");


function Word(answer) {
    //Letter objects array
    this.letters = answer.split("").map(function(char){
        return new Letter(char);
    });
    
    
    this.solution = function () {
        return this.letters.map(function(Letter){
            return Letter.checkGuess().join("");
        })
       
    }
    
    this.userGuess = function (input) {
        var foundLetter = false;
        console.log(letters, input);
        this.letters.forEach(function(Letter){
            if (Letter.guess === input) {
                foundLetter = true;
            }
            return foundLetter;
        })
    }
}

module.exports = Word;