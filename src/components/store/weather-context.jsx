import React from "react";

const WeatherContext = React.createContext({
  isLoading: true,
  weatherData: {},
  coords: {},
  searchLocation: (input) => {},
  loadError: false,
  inputError: false,
});

export default WeatherContext;
