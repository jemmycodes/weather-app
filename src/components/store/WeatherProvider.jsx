import WeatherContext from "./weather-context";
import { useState, useEffect } from "react";

let latitude, longitude;

navigator.geolocation.getCurrentPosition(
  (position) => {
    latitude = position.coords.latitude;
    longitude = position.coords.longitude;
  },
  (error) => console.log(error)
);

function WeatherProvider(props) {
  const [coords, setCoords] = useState({ latitude, longitude });
  const [isLoading, setIsLoading] = useState(true);
  const [weatherData, setWeatherData] = useState();

  const fetchData = async () => {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=ab2da27635694a1f93b205219230101&q=${coords.latitude},${coords.longitude}&days=7&aqi=no&alerts=no`
    );
    const data = await response.json();
    console.log(coords);
    setWeatherData(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [coords.latitude, coords.longitude]);

  const weatherContext = {
    isLoading: isLoading,
    weatherData: weatherData,
    coords: coords,
  };
  return (
    <WeatherContext.Provider value={weatherContext}>
      {props.children}
    </WeatherContext.Provider>
  );
}

export default WeatherProvider;
