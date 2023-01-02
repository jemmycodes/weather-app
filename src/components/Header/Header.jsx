import { BsGithub } from "react-icons/bs";

function Header() {
  return (
    <header>
      <h1>DailyWeather</h1>
      <a href="https://github.com/jemmycodes/weather-app">
        <BsGithub className="text-3xl" />
      </a>
    </header>
  );
}

export default Header;
