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

  let harareElement = document.querySelector("#harare");
  if (harareElement) {
    let harareDateElement = harareElement.querySelector(".date");
    let harareTimeElement = harareElement.querySelector(".time");
    let harareTime = moment().tz("Africa/Harare");
    harareDateElement.innerHTML = moment().format("MMMM Do YYYY");
    harareTimeElement.innerHTML = harareTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
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
