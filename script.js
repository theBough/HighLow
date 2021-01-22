var secretNum;
var clicks = 0;
var theirGuess;
function gameStart(){
  clicks += 1;
  if(clicks == 1){
    secretNum = Math.ceil(Math.random()*100);
    console.log(secretNum);
  }else{
    theirGuess = document.getElementById("theirGuess").value;
    if(theirGuess > secretNum){
      document.getElementById("instruction").innerHTML = "Too High"
    }
  }
}// end gameStart
