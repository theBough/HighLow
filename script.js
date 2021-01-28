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
    document.getElementById("feedback").innerHTML = "";
    document.getElementById("guesses").innerHTML = "Guesses: " + numOfGuesses;
    document.getElementById("animatedGif").style.visibility = "hidden";
    console.log(secretNum);
  }else{
    numOfGuesses += 1;
     document.getElementById("animatedGif").style.visibility = "hidden";
    document.getElementById("guesses").innerHTML = "Guesses: " + numOfGuesses;
    theirGuess = document.getElementById("theirGuess").value;
    if(theirGuess > secretNum){
      document.getElementById("feedback").innerHTML = "Too High"
      checkRealClose()
      checkFail()
    }else if(theirGuess< secretNum){
        document.getElementById("feedback").innerHTML = "Too Low"
        checkRealClose()
        checkFail()
    }else{
      document.getElementById("feedback").innerHTML = "Got it! </br> Play again?"
      document.getElementById("btnPress").innerHTML = "Play Again?";
       document.getElementById("animatedGif").src = "gotIt.gif"
      document.getElementById("theirGuess").style.visibility = "hidden";
      clicks = 0;
      numOfGuesses = 0;
      document.getElementById("animatedGif").style.visibility = "visible";
    }
  }//end else
}// end gameStart
function checkFail(){
  if(clicks == 7){
      document.getElementById("feedback").innerHTML = "Sorry Champ you Lost! </br> Play Again?";
      document.getElementById("animatedGif").style.visibility = "visible";
      document.getElementById("animatedGif").src = "fail.jpg"
      document.getElementById("btnPress").innerHTML = "Play Again?";
      document.getElementById("theirGuess").style.visibility = "hidden";
      clicks = 0;
      numOfGuesses = 0;
  }//end if
}//end function checkFail

function checkRealClose(){
  var difference ;
  difference = Math.abs(secretNum - theirGuess);
  if ( difference < 4){
      document.getElementById("animatedGif").src = "soClose.jpg";
      document.getElementById("animatedGif").style.visibility = "visible";
  }
}
