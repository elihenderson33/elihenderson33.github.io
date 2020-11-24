var pixels2 = 0;
var pixels = 0;

var BidenMove=document.getElementById('SleepyJoe');
var TrumpMove = document.getElementById('TheOrangeMan');
var start = document.getElementById("startButton");
start.addEventListener("click", startGame, false);

function startGame() {
  start.src = "img/startLogo.gif";
  start.height = "150";

  function Biden(){
    
    BidenMove.setAttribute ("style", "margin-left:" + pixels + "px;");
    
  
    pixels2 = (pixels2 + randomPixels2);
   
    if (pixels2 > 850) {
      stoptimer();
      BidenMove.src = "img/angelWinner.gif";
      BidenMove.width ="300";
    }
  }


  function Trump(){
    TrumpMove.setAttribute ("style", "margin-left:" + pixels + "px;");
    randomPixels = Math.ceil(Math.random()*75)
    pixels = (pixels + randomPixels);
    if (pixels > 850) {
      stoptimer();
      TrumpMove.src = "img/davidWinner.gif";
      TrumpMove.width = "300";
    }
  }

    myTimer2 = setInterval(Biden, 1000)
    myTimer = setInterval(Trump, 1000)



  function stoptimer(){
    clearInterval(myTimer);
    clearInterval(myTimer2);
  }
}
