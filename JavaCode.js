var vue = new Vue({
    el: "#app",
    data: {
        race: true,
        racing: false,
        winner: 0,
        JoeBiden : 0,
        DonaldTrump : 0,
        interval: null,
        moving: true,
        President: 0
    },
    methods: {
        startRace() {
            if (this.race) {
                this.race = false;
                this.President = 0;
                this.racing = true;
                this.moving = true;
                this.JoeBiden = 0;
                this.DonaldTrump = 0;
                this.interval = setInterval(this.move, 200);
            }
            else return;
        } ,
        move() {
            this.checkWinner();
            if (this.moving) {
                this.JoeBiden += Math.floor(Math.random() * 10);
                this.DonaldTrump += Math.floor(Math.random() * 10);
            }
        } ,
        checkWinner() {
            if (this.JoeBiden == this.DonaldTrump) return;
            else if (this.JoeBiden >= 85 && this.JoeBiden > this.DonaldTrump) {
                clearInterval(this.interval);
                this.JoeBidenWin();
                this.moving = false;
                this.race = true;
            }
            else if (this.DonaldTrump >= 85 && this.DonaldTrump > this.JoeBiden) {
                clearInterval(this.interval);
                this.DonaldTrumpWin();
                this.moving = false;
                this.race = true;
            }
        } ,
        JoeBidenWin() {
            this.President = 1;
            this.racing = false;
        } ,
        DonaldTrumpWin() {
            this.President = 2;
            this.racing = false;
        }
    },
    computed: {
        buttonImage() {
            return this.racing ? "GreenFlag.png" : "RedFlag.png";
        },
        winnerImage() {
            if (this.President == 1)
                return "BidenWins.png";
            else if (this.President == 2)
                return "TrumpWins.png";
            else {
                return "placeholder.png";
            }
        },
        JoeBidenPosition() {
            return {
                left: this.JoeBiden + "vw",
                height: "150px",
                width: "150px"
            }
        } ,
        DonaldTrumpPosition() {
            return {
                left: this.DonaldTrump + "vw",
                height: "150px",
                width: "150px"
            }
        }
    }
})
