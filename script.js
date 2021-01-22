var secretNum;
var clicks = 0;
var theirGuess;
function gameStart(){
  clicks += 1;
  if(clicks == 1){
    secretNum = Math.ceil(Math.random()*100);
    document.getElementById("theirGuess").style.visibility = "visible";
    console.log(secretNum);
  }else{
    theirGuess = document.getElementById("theirGuess").value;
    if(theirGuess > secretNum){
      document.getElementById("instruction").innerHTML = "Too High"
    }else if(theirGuess< secretNum){
        document.getElementById("instruction").innerHTML = "Too Low"
    }else{
      document.getElementById("instruction").innerHTML = "Got it!"
    }
  }//end else
}// end gameStart
