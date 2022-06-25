const second = document.querySelector("#second");
const minute = document.querySelector("#minute");
const hour = document.querySelector("#hour");

const digitalSecond = document.querySelector("#digital-second");
const digitalMinute = document.querySelector("#digital-minute");
const digitalHour = document.querySelector("#digital-hour");

const hand = document.querySelector(".hand");

let min = 0;
let sec = 0;
let h = 0;

const twoDigitNum = (num) => {
  if (num < 10) {
    return `0${num}`;
  }
  return num;
};

function clock() {
  const date = new Date();
  sec = date.getSeconds() * 6;
  if (sec === 0) {
    second.style.transition = "none";
  } else {
    second.style.transition = ".4s all ease-in";
  }

  if (min === 0) {
    min = date.getMinutes() * 6;
  }

  // movement of minute needle in one seconde
  // (total rotation / total minutes round) / total second in a minute
  // (360 / 60) / 60
  min += 6 / 60;

  if (h === 0) {
    h = date.getHours() * 30;
  }

  // movement of hour needle in one second
  // (total rotation / total rounds (12)) / total second in an hour
  // (360 / 12) / (60 * 60)
  h += 30 / (60 * 60);

  second.style.transform = `rotate(${sec}deg)`;
  minute.style.transform = `rotate(${min}deg)`;
  hour.style.transform = `rotate(${h}deg)`;

  digitalHour.innerHTML = twoDigitNum(date.getHours());
  digitalMinute.innerHTML = twoDigitNum(date.getMinutes());
  digitalSecond.innerHTML = twoDigitNum(date.getSeconds());
}
clock();
setInterval(clock, 1000);
