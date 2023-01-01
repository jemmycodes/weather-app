import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import ExtendedForeacast from "./components/ExtendedForecast/ExtendedForeacast";
import Header from "./components/Header/Header";
import UserInput from "./components/UserInput/UserInput";

function App() {
  return (
    <main>
      <Header />
      <UserInput />
      <CurrentWeather />
      <ExtendedForeacast />
    </main>
  );
}

export default App;
