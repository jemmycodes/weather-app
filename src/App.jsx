import { Fragment, useContext } from "react";
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
      {!weatherCtx.loadError && !weatherCtx.inputError && (
        <Fragment>
          <Header />
          <UserInput />
          <CurrentWeather />
          <ExtendedForeacast />
        </Fragment>
      )}
      {weatherCtx.loadError && (
        <div className="bg-white shadow-2xl mx-auto rounded-lg p-10 max-w-xs">
          <p>
            An Error occured💔, make sure you allow browser to access your
            location or contact your service provider!
          </p>
        </div>
      )}
      {weatherCtx.inputError && (
        <div>
          <div className="bg-white shadow-2xl mx-auto rounded-lg p-10 max-w-xs">
            <p className="text-center">Can't find location</p>
          </div>
        </div>
      )}
      {weatherCtx.isLoading && !weatherCtx.error && <Loading />}
    </main>
  );
}

export default App;
