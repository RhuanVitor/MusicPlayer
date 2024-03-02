const music = document.querySelector("audio");

function formatTime (seconds){
  let fieldMinutes = Math.floor(seconds / 60);
  let fieldSeconds = seconds % 60;
  if (fieldSeconds < 10){fieldSeconds = "0" + fieldSeconds}
  return fieldMinutes + ":" + fieldSeconds;
}

const updateProgress = () => {
  let totalTime = document.querySelector(".total-time");
  totalTime.textContent = formatTime(Math.floor(music.duration));
  let currentTime = document.querySelector(".current-time");
  currentTime.textContent = formatTime(Math.floor(music.currentTime));
}

const togglePausePlay = () => {
  if (music.paused){
    music.play();
    document.querySelector(".pause-button").style.display = "inline";
    document.querySelector(".play-button").style.display = "none";
  }
  else{
    music.pause();
    document.querySelector(".play-button").style.display = "inline";
    document.querySelector(".pause-button").style.display = "none";
  }
}

document.querySelector("audio").addEventListener("timeupdate", updateProgress);
document.querySelector(".play-button").addEventListener("click", togglePausePlay);
document.querySelector(".pause-button").addEventListener("click", togglePausePlay);