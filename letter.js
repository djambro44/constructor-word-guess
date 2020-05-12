var Letter = function (value){
    this.letter = value;
    this.guessed = false;
    this.toString = function(){
        if(!this.guessed){
            return "_";
        } else {
            return this.letter
        }
    }
    this.checkGuess = function(userGuess){
        if(userGuess === this.letter){
            this.guessed = true;
            return true;
        }
        return false;
    } 
}  

module.exports = Letter;