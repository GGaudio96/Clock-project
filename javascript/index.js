
setInterval(function (){

let IstanbulElement = document.querySelector("#istanbul");
let IstanbulDateElement = IstanbulElement.querySelector(".date");
let IstanbulTimeElement = IstanbulElement.querySelector(".time");
let IstanbulTime = moment().tz("Europe/Istanbul");

IstanbulDateElement.innerHTML = moment().format("MMMM Do YYYY");
IstanbulTimeElement.innerHTML = IstanbulTime.format("h:mm:ss [<small>]A[</small>]");

}, 1000)

setInterval(function (){

let ParisElement = document.querySelector("#paris");
let ParisDateElement = ParisElement.querySelector(".date");
let ParisTimeElement = ParisElement.querySelector(".time");
let ParisTime = moment().tz("Europe/Paris");

ParisDateElement.innerHTML = moment().format("MMMM Do YYYY");
ParisTimeElement.innerHTML = ParisTime.format("h:mm:ss [<small>]A[</small>]");

}, 1000)

function updateCity(event) {
    let cityTimeZone = event.target.value;
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="city">
        <div>
            <h1>${cityName}</h1>  
        <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
</div>
        <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format("A")}</small></div>
    </div>
    `;
    
}



let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);