// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const synth = window.speechSynthesis;
  const textbox = document.getElementById("text-to-speak");
  const inputForm = document.querySelector('form');
  const inputTxt = document.querySelector('.txt');
  const voiceSelect = document.querySelector('select');
  const pitch = document.querySelector('#pitch');
  const pitchValue = document.querySelector('.pitch-value');
  const rate = document.querySelector('#rate');
  const rateValue = document.querySelector('.rate-value');
  const talkbutton = document.getElementsByTagName("button")[0];
  const picture = document.getElementsByTagName("img")[0];
  

  let voices = [];
  
  function populateVoiceList() {
    voices = synth.getVoices();
  
    for (const voice of voices) {
      const option = document.createElement('option');
      option.textContent = `${voice.name} (${voice.lang})`;
  
      if (voice.default) {
        option.textContent += ' — DEFAULT';
      }
  
      option.setAttribute('data-lang', voice.lang);
      option.setAttribute('data-name', voice.name);
      voiceSelect.appendChild(option);
    }
  }
  
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
  
  talkbutton.addEventListener('click', (event)=>{
    const utterThis = new SpeechSynthesisUtterance(textbox.value);
    const selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for(let i = 0; i < voices.length;i++){
      if(voices[i].name === selectedOption){
        utterThis.voice = voices[i];
      }
    }
    synth.speak(utterThis);
    picture.src = "assets/images/smiling-open.png";
    utterThis.onend = () => {
      picture.src = "assets/images/smiling.png";
    }
  })

}