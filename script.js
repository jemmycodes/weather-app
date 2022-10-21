"use strict";
let locationInput = document.querySelector("#location-input");
let submitBtn = document.querySelector("#submit-btn");
let temperature = document.querySelector("#temperature");
let currentLocation = document.querySelector("#location");
let condition = document.querySelector("#condition");
let weatherIcon = document.querySelector("#weatherImg");
let loaderContainer = document.querySelector(".loader-container");
let weatherContainer = document.querySelector("#weather-container");
let loc;
let curr;

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const getWeatherFromBrowser = async () => {
  const position = await getPosition();
  const { latitude, longitude } = position.coords;
  displayLoading();
  const getData = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=90ec40791ded4520925214004222010&q=${latitude},${longitude}&aqi=no`
  );
  if (!getData.ok) {
    throw new Error(alert("Can't get Location"));
  }
  const weatherData = await getData.json();
  const { location: loc, current: curr } = weatherData;
  hideLoading();
  displayWeather(loc, curr);
};

getWeatherFromBrowser();

const getWeather = async () => {
  if (locationInput.value === "") {
    alert("Input a location");
  }
  displayLoading();
  const getData = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=90ec40791ded4520925214004222010&q=${locationInput.value}&aqi=no`
  );
  if (!getData.ok) {
    throw new Error(alert("Location not found"));
  }
  const weatherData = await getData.json();
  const { location: loc, current: curr } = weatherData;
  hideLoading();
  displayWeather(loc, curr);
};

const displayWeather = async (location, current) => {
  weatherIcon.src = `https:${current.condition.icon}`;
  temperature.textContent = current.temp_c;
  currentLocation.textContent = location.name;
  condition.textContent = current.condition.text;
};

const displayLoading = () => {
  loaderContainer.style.display = "block";

  weatherContainer.style.display = "none";
};

const hideLoading = () => {
  loaderContainer.style.display = "none";
  weatherContainer.style.display = "block";
};

submitBtn.addEventListener("click", getWeather);
