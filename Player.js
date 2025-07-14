
const radio   = document.getElementById('radioPlayer');
const playBtn = document.getElementById('playPauseBtn');
const playIco = document.getElementById('playIcon');
const pauseIco= document.getElementById('pauseIcon');

// ensure autoplay (some browsers may block—caught silently)
window.addEventListener('load', () => {
  radio.play().catch(()=>{ /* ignored */ });
});

playBtn.addEventListener('click', () => {
  if(radio.paused){
    radio.play();
  }else{
    radio.pause();
  }
});

radio.addEventListener('play', () => {
  playIco.style.display='none';
  pauseIco.style.display='inline';
});

radio.addEventListener('pause', () => {
  playIco.style.display='inline';
  pauseIco.style.display='none';
});
