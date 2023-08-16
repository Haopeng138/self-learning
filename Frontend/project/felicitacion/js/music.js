// used to support other devices using the older webkitAudioContext
const AudioContext = window.AudioContext || window.webkitAudioContext;
const playButton = document.querySelector("#play");
let isPlaying = false;
const audioCtx = new AudioContext();
let oscillator;
let frequency;
let currentKeyNumber;

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const happyBirthday = [
    { "key": 40, "duration": 300, "delay": 100 },
    { "key": 40, "duration": 300, "delay": 100 },
    { "key": 42, "duration": 400, "delay": 100 },
    { "key": 40, "duration": 400, "delay": 100 },
    { "key": 45, "duration": 400, "delay": 100 },
    { "key": 44, "duration": 800, "delay": 100 },
  
    { "key": 40, "duration": 300, "delay": 100 },
    { "key": 40, "duration": 300, "delay": 100 },
    { "key": 42, "duration": 400, "delay": 100 },
    { "key": 40, "duration": 400, "delay": 100 },
    { "key": 47, "duration": 400, "delay": 100 },
    { "key": 45, "duration": 800, "delay": 100 },
  
    { "key": 40, "duration": 300, "delay": 100 },
    { "key": 40, "duration": 300, "delay": 100 },
    { "key": 52, "duration": 400, "delay": 100 },
    { "key": 48, "duration": 400, "delay": 100 },
    { "key": 45, "duration": 400, "delay": 100 },
    { "key": 44, "duration": 400, "delay": 100 },
  
    { "key": 49, "duration": 300, "delay": 100 },
    { "key": 49, "duration": 300, "delay": 100 },
    { "key": 48, "duration": 400, "delay": 100 },
    { "key": 45, "duration": 400, "delay": 100 },
    { "key": 47, "duration": 400, "delay": 100 },
    { "key": 45, "duration": 800, "delay": 100 }
  ]

const getKeyFrequency = (keyNumber) => Math.pow(2, (keyNumber - 49) / 12) * 440;

playButton.onclick = async () => {
  // in order to prevent mutliple clicks
  if (isPlaying) {
    return;
  }
  isPlaying = true;

  const notesList = happyBirthday;

  for (let note of notesList) {

    // oscillator object
    oscillator = audioCtx.createOscillator();
    oscillator.type = "triangle";
    oscillator.connect(audioCtx.destination);

    // calculate frequency from key number
    frequency = getKeyFrequency(note.key);
    oscillator?.frequency.setValueAtTime(frequency, audioCtx.currentTime);

    // check if the song has not started yet, start it
    oscillator.start();

    await sleep(note.duration);

    // after finishing the song stop the oscillator
    oscillator.stop();

    await sleep(note.delay);
  }
  isPlaying = false;
};


