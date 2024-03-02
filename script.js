const music = document.querySelector("audio");
const playMusic = () => {
  music.play()
  document.querySelector(".pause-button").style.display = "inline";
  document.querySelector(".play-button").style.display = "none"
};

const pauseMusic = () => {
  music.pause()
 document.querySelector(".pause-button").style.display = "none";
  document.querySelector(".play-button").style.display = "inline"
}

document.querySelector(".play-button").addEventListener("click", playMusic);

document.querySelector(".pause-button").addEventListener("click", pauseMusic);