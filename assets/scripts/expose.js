// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const DropDownMeun = document.getElementById("horn-select");
  const jsConfetti = new JSConfetti();
  const picture = document.getElementsByTagName("img")[0];
  const sound = document.getElementsByClassName("hidden")[0];
  const button = document.getElementsByTagName("button")[0];
  const volumebar = document.getElementById("volume");
  const volumeIcon = document.getElementsByTagName("img")[1];
  var volume = volumebar.value;
  
  DropDownMeun.addEventListener('change', (event)=>{
    const result = event.target.value;
    picture.src = 'assets/images/' + result + '.svg';
    sound.src = 'assets/audio/' + result + '.mp3';
  })
  button.addEventListener('click', (event)=>{
    sound.volume = volume / 100;
    if(sound.src = "assets/audio/party-horn.mp3"){
      jsConfetti.addConfetti();
    }
    sound.play();
  })
  volumebar.addEventListener('change', (event)=>{
    volume = event.target.value;
    if(event.target.value == 0){
      volumeIcon.src = "assets/icons/volume-level-0.svg";
    }else if(event.target.value < 33){
      volumeIcon.src = "assets/icons/volume-level-1.svg";
    }else if(event.target.value < 67){
      volumeIcon.src = "assets/icons/volume-level-2.svg";
    }else{
      volumeIcon.src = "assets/icons/volume-level-3.svg";
    }
  })
}
