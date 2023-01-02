import React from "react";

const WeatherContext = React.createContext({
  isLoading: true,
  weatherData: {},
  coords: {},
});

export default WeatherContext;
