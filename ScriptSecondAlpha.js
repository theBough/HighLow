var secretNum;
var clicks = 0;
function changeName() {
  clicks += 1;
  if(clicks == 1){
    secretNum = Math.random() * 100;
    secretNum = Math.ceil(secretNum);
    console.log(secretNum);
    document.getElementById("theirGuess").style.visibility = "visible";
    document.getElementById("btnPress").innerHTML = "Guess";
  }else{
    document.getElementById("numOfGuesses").innerHTML = "Guess: " + clicks;
    var theirGuess = document.getElementById("theirGuess").value;
    if(theirGuess > secretNum){
      document.getElementById("instructions").innerHTML = "Too High";
    }else if( theirGuess< secretNum){
      document.getElementById("instructions").innerHTML = "Too Low";
    }else{
      document.getElementById("instructions").innerHTML = "You Got it!!";
    }
  }
}//endfunction
