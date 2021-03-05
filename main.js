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

setInterval(() => {
  const date = new Date();
  sec = date.getSeconds() * 6;
  if (min === 0) min = date.getMinutes() * 6;
  min = min + 0.1;
  if (h === 0) h = date.getHours() * 30;
  h = h + 0.016666666666666666;
  if (sec === 0) second.style.transition = "none";
  else second.style.transition = ".4s all ease-in";
  second.style.transform = `rotate(${sec}deg)`;
  minute.style.transform = `rotate(${min}deg)`;
  hour.style.transform = `rotate(${h}deg)`;

  digitalHour.innerHTML = twoDigitNum(date.getHours());
  digitalMinute.innerHTML = twoDigitNum(date.getMinutes());
  digitalSecond.innerHTML = twoDigitNum(date.getSeconds());
}, 1000);
