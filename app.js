new Vue({
  el: "#app",
  data: {
    health: 100,
    ended: false
  },
  methods: {
    punch() {
      this.health -= 10;
      let snd = new Audio("punch.mp3");
      snd.play();
      if (this.health == 0) {
        this.ended = true;
        let sound = new Audio("over.mp3");
        sound.play();
      }
    },
    restart() {
      this.health = 100;
      this.ended = false;
      let snd = new Audio("startSound.mp3");
      snd.play();
    }
  }
});
