let doms = {
  audio: document.querySelector("audio"),
  ul: document.querySelector(".container ul"),
  container: document.querySelector(".container"),
};

/**
 * @description: parser lrc to object
 *
 */
function parseLrc() {
  let lines = lrc.split("\n");
  let result = [];
  for (const element of lines) {
    let str = element;
    let parts = str.split("]");
    let timeStr = parts[0].substring(1);
    let obj = {
      time: parseTime(timeStr),
      words: parts[1],
    };
    result.push(obj);
  }
  return result;
}

function parseTime(timeStr) {
  let parts = timeStr.split(":");
  return parseInt(parts[0]) * 60 + parseFloat(parts[1]);
}

let lrcData = parseLrc();

/**
 * Calculate the index of the current line
 * lrcData which lrc should be shown
 */
function findIndex() {
  let curTime = doms.audio.currentTime;
  for (let i = 0; i < lrcData.length; i++) {
    if (curTime < lrcData[i].time) {
      return i - 1;
    }
  }
  // If the current time is greater than the time of the last line of the lyrics, the last line of the lyrics is returned
  return lrcData.length - 1;
}

// Screen

function createLrcElement() {
  for (const element of lrcData) {
    let li = document.createElement("li");
    li.textContent = element.words;
    doms.ul.appendChild(li);
  }
}

createLrcElement();

let containerHeight = doms.container.clientHeight;
let liHeight = doms.ul.children[0].clientHeight;
let maxOffset = doms.ul.clientHeight - containerHeight;

function setOffset() {
  let index = findIndex();
  let offset = liHeight * index + liHeight / 2 - containerHeight / 2;
  if (offset < 0) {
    offset = 0;
  }
  if (offset > maxOffset) {
    offset = maxOffset;
  }
  let liActive = doms.ul.querySelector(".active");
  if (liActive) {
    liActive.classList.remove("active");
  }
  let li = doms.ul.children[index];
  if (li) {
    li.classList.add("active");
  }
  doms.ul.style.transform = `translateY(-${offset}px)`;
}


doms.audio.addEventListener("timeupdate", setOffset);