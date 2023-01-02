import { useContext } from "react";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import ExtendedForeacast from "./components/ExtendedForecast/ExtendedForeacast";
import Header from "./components/Header/Header";
import WeatherContext from "./components/store/weather-context";
import Loading from "./components/UI/Loading";
import UserInput from "./components/UserInput/UserInput";

function App() {
  const weatherCtx = useContext(WeatherContext);
  return (
    <main>
      <Header />
      <UserInput />
      <CurrentWeather />
      <ExtendedForeacast />
      {weatherCtx.isLoading && <Loading />}
    </main>
  );
}

export default App;
