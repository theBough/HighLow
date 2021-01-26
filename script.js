var secretNum;
var clicks = 0;
var theirGuess;
var numOfGuesses = 0;
function gameStart(){
  clicks += 1;
  if(clicks == 1){
    secretNum = Math.ceil(Math.random()*100);
    document.getElementById("theirGuess").style.visibility = "visible";
    document.getElementById("btnPress").innerHTML = "Guess";
    console.log(secretNum);
  }else{
    numOfGuesses += 1;
    document.getElementById("guesses").innerHTML = "Guesses: " + numOfGuesses;
    theirGuess = document.getElementById("theirGuess").value;
    if(theirGuess > secretNum){
      document.getElementById("feedback").innerHTML = "Too High"
    }else if(theirGuess< secretNum){
        document.getElementById("feedback").innerHTML = "Too Low"
    }else{
      document.getElementById("feedback").innerHTML = "Got it!"
    }
  }//end else
}// end gameStart
