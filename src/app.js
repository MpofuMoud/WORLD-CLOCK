function updateTime() {
  let warsawElement = document.querySelector("#warsaw");
  if (warsawElement) {
    let warsawDateElement = warsawElement.querySelector(".date");
    let warsawTimeElement = warsawElement.querySelector(".time");
    let warsawTime = moment().tz("Europe/Warsaw");
    warsawDateElement.innerHTML = moment().format("MMMM Do YYYY");
    warsawTimeElement.innerHTML = warsawTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let bulawayoElement = document.querySelector("#byo");
  if (bulawayoElement) {
    let bulawayoDateElement = bulawayoElement.querySelector(".date");
    let bulawayoTimeElement = bulawayoElement.querySelector(".time");
    let bulawayoTime = moment().tz("Africa/Bulawayo");
    bulawayoDateElement.innerHTML = moment().format("MMMM Do YYYY");
    bulawayoTimeElement.innerHTML = bulawayoTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
    <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss [<small>]A[</small>]")}</div>
    </div>`;
}
updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
