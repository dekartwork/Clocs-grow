"use strict";

function clock() {
  const sethour = document.querySelectorAll("._hours");
  const setMinutes = document.querySelectorAll("._minutes");
  const dotted = document.querySelectorAll(".dotted");
  const setSeconds = document.querySelector(".clock__data");

  let date = new Date();

  // date.setHours(8, 3, 0, 0);

  let hour = date.getHours();
  let minutes = date.getMinutes();

  hour = hour.toString();
  minutes = minutes.toString();

  const arrHour = [hour[0], hour[1]];
  const arrMinutes = [minutes[0], minutes[1]];

  function setValueInHtml(arrayNumbers, valueSetInHtml) {
    for (let i = 0; i < arrayNumbers.length; i++) {
      if (arrayNumbers[i] === undefined) {
        arrayNumbers.pop();
        arrayNumbers.unshift("0");
        valueSetInHtml[0].innerHTML = arrayNumbers[0];
        valueSetInHtml[1].innerHTML = arrayNumbers[1];
      } else valueSetInHtml[i].innerHTML = arrayNumbers[i];
    }
  }

  setValueInHtml(arrHour, sethour);
  setValueInHtml(arrMinutes, setMinutes);

  for (let i = 0; i < dotted.length; i++) {
    dotted[i].classList.toggle("dotted-visible");
  }
}

let interval = setInterval(clock, 1000);
