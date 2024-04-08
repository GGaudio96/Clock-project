
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