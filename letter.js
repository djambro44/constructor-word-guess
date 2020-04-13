var Letter = function (){
    this.letter = letter;
    this.guessed = false;
    this.toString = function(){
        if(!this.guessed){
            return "_";
        } else {
            return this.rightLetter
        }
    }
    this.checkGuess = function(){
        if(userGuess === letter){
            this.guessed = true;
    
        }
    } 
}  