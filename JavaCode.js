var raceSpeed;

var bidenDiv = document.getElementById("bDiv");
var trumpDiv = document.getElementById("tDiv");

var bPos;
var tPos;

var bImage = document.getElementById("Biden");
var tImage = document.getElementById("Trump");

function getReady() {
  
  bPos = 0;
  tPos = 0;

  bidenDiv.style.left = bPos + "px";
  trumpDiv.style.left = tPos + "px";

  bImage.src = "JoeBiden.png";
  tImage.src = "DonaldTrump.png";

  bImage.style.display = "block";
  tImage.style.display = "block";

  document.getElementById("BidenWins").style.display = "none";
  document.getElementById("TrumpWins").style.display = "none";

  document.getElementById("start").style.display = "inline-block";
  document.getElementById("start").style.width = "95px";
  document.getElementById("start").style.height = "110px";

  document.getElementById("start2").style.display = "none";
}

function startRace() {
  getReady();
  document.getElementById("start").style.display = "none";
  document.getElementById("start2").style.width = "95px"; 
  document.getElementById("start2").style.display = "block"; 
  document.getElementById("start2").style.height = "110px";

  raceSpeed = setInterval(movement); 
}

function movement() {
  var randBidenPos = Math.floor(Math.random() * 7);
  var randTrumpPos = Math.floor(Math.random() * 7);

  bPos += randBidenPos;
  tPos += randTrumpPos;

  bidenDiv.style.left = bPos + "px";
  trumpDiv.style.left = tPos + "px";

  if (bPos > 1300 || tPos > 1300) {
    clearInterval(raceSpeed);
    winner();
  }
}

function winner() {
  if (bPos > 1300) {
    bidenWins();
  }
  else if (tPos > 1300) {
    trumpWins();
  }
}


function bidenWins() {
  bImage.style.display = "none";
  tImage.style.display = "none";
  document.getElementById("BidenWins").style.display = "block";
  document.getElementById("BidenWins").style.width = "175px";
  document.getElementById("BidenWins").style.height = "auto";
  document.getElementById("BidenWins").style.position = "fixed";
  document.getElementById("BidenWins").style.top = "40%";
  document.getElementById("BidenWins").style.left = "45%";
}

function trumpWins() {
  bImage.style.display = "none";
  tImage.style.display = "none";
  document.getElementById("TrumpWins").style.display = "block";
  document.getElementById("TrumpWins").style.width = "175px";
  document.getElementById("TrumpWins").style.height = "auto";
  document.getElementById("TrumpWins").style.position = "fixed";
  document.getElementById("TrumpWins").style.top = "40%";
  document.getElementById("TrumpWins").style.left = "45%";
}

