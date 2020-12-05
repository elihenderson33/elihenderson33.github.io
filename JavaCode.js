var speed;
    // racer divs
var racerCow = document.getElementById("cow");
var racerPig = document.getElementById("pig");

    // current racer div
var positionCow;
var positionPig;

    // each player image
var imageCow = document.getElementById("burger");
var imagePig = document.getElementById("bacon");

    // onlad adn set up race  // begins a function
function boogityBoogity(){
    positionCow = 0;
    positionPig = 0;

        // put players on start line
    racerCow.style.left = positionCow + "px";
    racerPig.style.left = positionPig + "px";

        // on load, displays race images
    imageCow.src = "DonaldTrump.png";
    imagePig.src = "JoeBiden.png";

        // places racers images in a block display
    imageCow.style.display = "block";
    imagePig.style.display = "block";

        // hides win images during race
    document.getElementById("cowwins").style.display = "none";
    document.getElementById("pigwins").style.display = "none";

        // makes light image start button
    document.getElementById("start").style.display = "inline-block";
    document.getElementById("start").style.width = "95px";
    document.getElementById("start").style.height = "110px";

        // allows winner img to become the new start button  // end of function
    document.getElementById("start2").style.display = "none";
    
} // end of boogityBoogity

function start(){
    // boogityBoogity();
    document.getElementById("start").style.display = "none";        // hide red light
    document.getElementById("start2").style.width = "95px";         // once light clicked, this one appears
    document.getElementById("start2").style.display = "block";
    document.getElementById("start2").style.height = "110px";    
    
        // runs movement which is function call
    speed = setInterval(getErDone);
} // end function race

function getErDone(){
        //  vars for random movement speed for each racer
    var posCowRand = Math.floor(Math.random() * 5);
    var posPigRand = Math.floor(Math.random() * 5);

        // adds the above random to each player current position
    positionCow += posCowRand;
    positionPig += posPigRand;

        // after above, make the position change
    racerCow.style.left = positionCow + "px";
    racerPig.style.left = positionPig + "px";

        // set finish line
    if (positionCow > 1400 || positionPig > 1400) {
            // if then any player position is 1200
        clearInterval(speed);
        checkered();     // call winner function
    } // end of if      
} //  end of function getErDone

    //  function checkered determines which character won 
function checkered(){
    clearInterval(speed); // for troubleshooting
    if (positionCow > 1400 && positionPig > 1400){
        if (positionCow == positionPig){
            // this is a tie
            itsATie();
        } // end of if tie
        if (positionCow > positionPig){
            cowWins();
        } // end of if
        else{
            pigWins();
        } // end of else
    } // end of if both
    if (positionCow > positionPig){
        cowWins();
    } // end of if
    else {
        pigWins();
    } // end of else
} // end of checkered
  
function itsATie(){
    imageCow.style.display = "none";
    imagePig.style.display = "none";
    document.getElementById("pigwins").style.display = "block";
    document.getElementById("pigwins").style.width = "175px";
    document.getElementById("pigwins").style.height = "auto";
    document.getElementById("pigwins").style.position = "fixed";
    document.getElementById("pigwins").style.top = "40%";
    document.getElementById("pigwins").style.left = "35%";
    document.getElementById("cowwins").style.display = "block";
    document.getElementById("cowwins").style.width = "175px";
    document.getElementById("cowwins").style.height = "auto";
    document.getElementById("cowwins").style.position = "fixed";
    document.getElementById("cowwins").style.top = "40%";
    document.getElementById("cowwins").style.left = "70%";
    document.getElementById("start2").style.display = "none"; 
    document.getElementById("start").style.display = "none"; 
} // end of itsatie

function cowWins(){
    imageCow.style.display = "none";
    imagePig.style.display = "none";
    document.getElementById("cowwins").style.display = "block";
    document.getElementById("cowwins").style.width = "175px";
    document.getElementById("cowwins").style.height = "auto";
    document.getElementById("cowwins").style.position = "fixed";
    document.getElementById("cowwins").style.top = "20%";
    document.getElementById("cowwins").style.left = "25%";
    document.getElementById("start2").style.display = "none"; 
    document.getElementById("start").style.display = "none"; 
} // end of cowwins

function pigWins(){
    imageCow.style.display = "none";
    imagePig.style.display = "none";
    document.getElementById("pigwins").style.display = "block";
    document.getElementById("pigwins").style.width = "175px";
    document.getElementById("pigwins").style.height = "auto";
    document.getElementById("pigwins").style.position = "fixed";
    document.getElementById("pigwins").style.top = "20%";
    document.getElementById("pigwins").style.left = "25%";
    document.getElementById("start2").style.display = "none"; 
    document.getElementById("start").style.display = "none";
