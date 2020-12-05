let app = new Vue({
    el: '#race',
    data: {
        racing: false,
        winner: null,
        blossom: 0,
        buttercup: 0,
        tick: 0,
        interval: null,            
    },
    computed: {
        winning() {
            return this.blossom > this.buttercup ? this.blossom : this.buttercup
        },            
        blossomStyle() {
            return {
                left: `${this.blossom}vw`
            }             
        },
        buttercupStyle() {
            return {
                left: `${this.buttercup}vw`
            }
        },

    },
    methods: {
        startRace() {
            this.racing = true
            this.interval = setInterval(() => {
                this.progressPlayers()
            }, 50);
        },
        progressPlayers() {
            this.tick++
            this.blossom += Math.random() > .5 ? 1 : 0   //"roll dice"
            this.buttercup += Math.random() > .5 ? 1 : 0 //"roll dice"
            this.checkWinnah()
        },
        checkWinnah(){
            if (this.blossom == this.buttercup) return

            if (this.blossom >= 85){
                blossom.winner=true;
                buttercup.winner=false;
                this.winnahWinnah()
            }
            if (this.buttercup >= 85) {
                blossom.winner=false;
                buttercup.winner=true;
                this.winnahWinnah()
            }
        },
        winnahWinnah(){
            clearInterval(this.interval);
        }
    }
})
