const icon = document.getElementById("settingicon");
const content = document.getElementById("settingcontent");
const initialTextEl = document.getElementById("initialText");
const afterDOButtonEl = document.getElementById("afterDOButton");
const dobEl = document.getElementById("dob");
const dobInputEl = document.getElementById("dobInput");
const yearEl = document.getElementById("years");
const monthEl = document.getElementById("months");
const dayEl = document.getElementById("days");
const hourEl = document.getElementById("hours");
const minEl = document.getElementById("minutes");
const secEl = document.getElementById("seconds");
let dateOfBirth;

let DOBOpen = false;

const makeTwoDigitNumber = (number) => {
  return number > 9 ? number : `0${number}`;
};
const toggleDOBSelector = () => {
  if (DOBOpen) {
    content.classList.add("hide");
  } else {
    content.classList.remove("hide");
  }
  DOBOpen = !DOBOpen;
};

icon.addEventListener("click", toggleDOBSelector);

const updateAge = () => {
  const currentDate = new Date();
  const dateDiff = currentDate - dateOfBirth;
  const year = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365));
  const month = Math.floor((dateDiff / (1000 * 60 * 60 * 24 * 365)) % 12);
  const day = Math.floor((dateDiff / (1000 * 60 * 60 * 24)) % 30);
  const hours = Math.floor((dateDiff / (1000 * 60 * 60)) % 24); // % 24 to convert into a no. <24
  const minutes = Math.floor((dateDiff / (1000 * 60)) % 60);
  const seconds = Math.floor((dateDiff / 1000) % 60); // % 60 to convert into a no. < 60
  yearEl.innerHTML = makeTwoDigitNumber(year);
  monthEl.innerHTML = makeTwoDigitNumber(month);
  dayEl.innerHTML = makeTwoDigitNumber(day);
  hourEl.innerHTML = makeTwoDigitNumber(hours);
  minEl.innerHTML = makeTwoDigitNumber(minutes);
  secEl.innerHTML = makeTwoDigitNumber(seconds);
};

const setDOBHandler = () => {
  const dateString = dobInputEl.value;
  dateOfBirth = dateOfBirth ? new Date(dateString) : null;
  if (dateOfBirth) {
    initialTextEl.classList.add("hide");
    afterDOButtonEl.classList.remove("hide");

    setInterval(() => updateAge(), 1000);
  } else {
    afterDOButtonEl.classList.add("hide");
    initialTextEl.classList.remove("hide");
  }
};
console.log(dateOfBirth);
dobEl.addEventListener("click", setDOBHandler);
// const currentDate = new Date();
// console.log(currentDate);
// const dateString = dobInputEl.value;
// const dateOfBirth = new Date(dateString);
// console.log(dateOfBirth);
