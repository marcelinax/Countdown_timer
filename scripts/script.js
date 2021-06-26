"use strict";

let duration = 0;
let minutes = 0;
let seconds = 0;
let minutesCounter = 0;
let secondsCounter = 0;

const secondsEl = document.getElementById("seconds");
const minutesEl = document.getElementById("minutes");
const titleEl = document.getElementById("title");
const increaseMinutesBtn = document.getElementById("minutes-plus");
const decreaseMinutesBtn = document.getElementById("minutes-minus");
const increaseSecondsBtn = document.getElementById("seconds-plus");
const decreaseSecondsBtn = document.getElementById("seconds-minus");

const setStart = () => {
  // duration = +minutesEl.value * 60 + +secondsEl.value;
  duration = +minutesEl.innerHTML * 60 + +secondsEl.innerHTML;

  document.querySelector(".title").innerHTML = titleEl.value;
};

const clearInputs = () => {
  secondsEl.innerHTML = "0";
  minutesEl.innerHTML = "0";
  titleEl.value = "";
  minutesCounter = 0;
  secondsCounter = 0;
};

const setParams = () => {
  increaseMinutesBtn.addEventListener("click", () => {
    minutesCounter++;
    // minutesEl.value = minutesCounter;
    minutesEl.innerHTML = minutesCounter;
  });
  decreaseMinutesBtn.addEventListener("click", () => {
    if (minutesCounter > 0) {
      minutesCounter--;
      // minutesEl.value = minutesCounter;
      minutesEl.innerHTML = minutesCounter;
    }
    return;
  });
  increaseSecondsBtn.addEventListener("click", () => {
    secondsCounter++;
    // secondsEl.value = secondsCounter;
    secondsEl.innerHTML = secondsCounter;
  });
  decreaseSecondsBtn.addEventListener("click", () => {
    if (secondsCounter > 0) {
      secondsCounter--;
      // secondsEl.value = secondsCounter;
      secondsEl.innerHTML = secondsCounter;
    }
    return;
  });
};

const updateTime = () => {
  if (duration > 0) {
    duration--;
    minutes = Math.floor((duration / 60) % 60);
    seconds = Math.floor(duration % 60);
    document.querySelector(".time").innerHTML = `${timeFormat(
      minutes
    )}:${timeFormat(seconds)}`;
  } else {
    return;
  }
};

const timeFormat = (time) => {
  if (time < 10) time = `0${time}`;
  return time;
};

const initSetStart = () => {
  document.querySelector(".set-time-btn").addEventListener("click", () => {
    setStart();
    clearInputs();
  });
};

const showInputs = () => {
  document.getElementById("show-inputs-btn").addEventListener("click", () => {
    document
      .querySelector(".set-time-box")
      .classList.toggle("set-time-box--active");
  });
};

initSetStart();
setParams();
showInputs();
setInterval(updateTime, 1000);
