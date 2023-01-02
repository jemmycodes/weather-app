import WeatherContext from "./weather-context";
import { useState, useEffect } from "react";

let latitude, longitude;

navigator.geolocation.getCurrentPosition(
  (position) => {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
  },
  (error) => alert("Error getting current location")
);

function WeatherProvider(props) {
  const [coords, setCoords] = useState({ latitude, longitude });
  const [isLoading, setIsLoading] = useState(true);
  const [weatherData, setWeatherData] = useState();
  const [error, setLoadError] = useState(false);
  const [inputError, setInputError] = useState(false);

  const fetchData = async () => {
    if (coords.latitude === undefined || coords.longitude === undefined) {
      console.log("undefined");
    }
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/forecast.json?key=ab2da27635694a1f93b205219230101&q=${coords.latitude},${coords.longitude}&days=7&aqi=no&alerts=no`
      );
      const data = await response.json();
      console.log(coords);
      setWeatherData(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);

      setLoadError(true);
    }
  };

  const searchInputHandler = async (input) => {
    setIsLoading(true);

    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=ab2da27635694a1f93b205219230101&q=${input}y&days=7&aqi=no&alerts=no`
    );
    if (response.ok) {
      const data = await response.json();
      setWeatherData(data);
      setIsLoading(false);
    } else {
      setIsLoading(false);
      setInputError(true);
    }
  };

  useEffect(() => {
    fetchData();
  }, [coords.latitude, coords.longitude]);

  const weatherContext = {
    isLoading: isLoading,
    weatherData: weatherData,
    coords: coords,
    searchLocation: searchInputHandler,
    loadError: error,
    inputError: inputError,
  };
  return (
    <WeatherContext.Provider value={weatherContext}>
      {props.children}
    </WeatherContext.Provider>
  );
}

export default WeatherProvider;
