var Letter = require("./letter.js");

var Word = function () {
    this.word = word;
    this.now = [];
    this.makeWord = function () {
        this.now.toString();
        var wordArr = this.word.split("");
        for (let i = 0; i < wordArr.length; i++) {
            let newLetter = new Letter(wordArr[i]);
            this.letters.push(newLetter);
        }
    }
    this.makeGuess = function (guess) {
        this.letters.forEach(letter => {
            letter.checkGuess(guess);
        });
    }

    this.update = function () {
        let printedWord = "";
        this.letters.forEach(letter => {
            printedWord += letter.getCharacter() + " ";
        });
        return printedWord;
    }
}

module.exports = Word;