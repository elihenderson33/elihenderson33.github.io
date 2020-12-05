var racerArray = [
    {
        name: "Blue",
        source: "JoeBiden.png",
        raceSpeed: 0
    },
    {
        name: "Red",
        source: "DonaldTrump.png",
        raceSpeed: 0
    }
]

function displayRacers() {
    document.getElementById("racer1pic").src = racerArray[0].source;
    document.getElementById("racer2pic").src = racerArray[1].source;
}

function startRace() {
    //var active = false;
    var stoplight = document.getElementById("stoplight");
    stoplight.src = "GreenFlag.png";
    var stoplight2 = document.getElementById("stoplight2");

    var distance = 1300;
    var racer1Image = document.getElementById("racer1");
    var racer2Image = document.getElementById("racer2");

        var frames = setInterval(movement, 20);
        function movement()
        {
        
            if (racerArray[0].racerSpeed < distance || racerArray[1].raceSpeed < distance)
            {
                racerArray[0].raceSpeed += Math.floor(Math.random() * 11);
                racerArray[1].raceSpeed += Math.floor(Math.random() * 11);
      
                racer1Image.style.left = racerArray[0].raceSpeed + "px";
                racer2Image.style.left = racerArray[1].raceSpeed + "px";

                if (racerArray[0].raceSpeed >= distance)
                {
                    stoplight2.src = racerArray[0].source;
                    stoplight2.width = 300;
                    clearInterval(frames);
                }
                if (racerArray[1].raceSpeed >= distance)
                {
                    stoplight2.src = racerArray[1].source;
                    stoplight2.width = 300;
                    clearInterval(frames);
                }

                stoplight2.addEventListener("click", function() 
                {
                var racer1Image = document.getElementById("racer1");
                 var racer2Image = document.getElementById("racer2");
                 racer1Image.style.left = 0 + "px";
                 racer2Image.style.left = 0;

                 stoplight.src = "RedFlag.png";
                })
        }
    }
}
