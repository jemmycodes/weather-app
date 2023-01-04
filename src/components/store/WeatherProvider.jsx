import { useEffect, useState } from "react";
import WeatherContext from "./weather-context";

function WeatherProvider(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [weatherData, setWeatherData] = useState();
  const [error, setLoadError] = useState(false);
  const [inputError, setInputError] = useState(false);

  const fetchData = () => {
    if ("geolocation" in navigator) {
      /* geolocation is available */
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const response = await fetch(
              `https://api.weatherapi.com/v1/forecast.json?key=8ffc4e32a25843808e6171613230301&q=${position.coords.latitude},${position.coords.longitude}&aqi=no&days=7&alerts=no
`
            );
            const data = await response.json();
            setWeatherData(data);
            setIsLoading(false);
          } catch (error) {
            setIsLoading(false);
            setLoadError(true);
          }
        },
        (error) => {
          setIsLoading(true);
          alert("Error getting current location");
        }
      );
    } else {
      setIsLoading(false);
      setLoadError(true);
    }
  };

  const searchInputHandler = async (input) => {
    setIsLoading(true);
    console.log("jemmy");
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=8ffc4e32a25843808e6171613230301&q=${input}&days=7&aqi=no&alerts=no`
    );
    if (!response.ok) {
      setIsLoading(false);
      console.log("jemmy");
      setInputError(true);
      return;
    }
    const data = await response.json();
    setWeatherData(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const weatherContext = {
    isLoading: isLoading,
    weatherData: weatherData,
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
