function updateTime() {
  let warsawElement = document.querySelector("#warsaw");
  let warsawDateElement = warsawElement.querySelector(".date");
  let warsawTimeElement = warsawElement.querySelector(".time");
  let warsawTime = moment().tz("Europe/Warsaw");
  warsawDateElement.innerHTML = moment().format("MMMM Do YYYY");
  warsawTimeElement.innerHTML = warsawTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let bulawayoElement = document.querySelector("#byo");
  let bulawayoDateElement = bulawayoElement.querySelector(".date");
  let bulawayoTimeElement = bulawayoElement.querySelector(".time");
  let bulawayoTime = moment().tz("Africa/Bulawayo");
  bulawayoDateElement.innerHTML = moment().format("MMMM Do YYYY");
  bulawayoTimeElement.innerHTML = bulawayoTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
updateTime();
setInterval(updateTime, 1000);
