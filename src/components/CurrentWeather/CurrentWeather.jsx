import { BsFillDropletFill } from "react-icons/bs";
import { WiCloudyGusts } from "react-icons/wi";
import { GoRepoForcePush } from "react-icons/go";
import { Fragment, useContext } from "react";
import WeatherContext from "../store/weather-context";

function CurrentWeather() {
  const weatherCtx = useContext(WeatherContext);

  return (
    <Fragment>
      {weatherCtx.weatherData && (
        <section className="bg-white">
          <div>
            <h1>Current Weather</h1>
          </div>
          <div className="flex flex-col md:flex-row  gap-14">
            <div className="w-1/2 space-y-2">
              <h3 className="text-xl ">
                {weatherCtx.weatherData.location.name},{" "}
                {weatherCtx.weatherData.location.region}
              </h3>
              <figure className="flex items-center gap-5">
                <img
                  src={weatherCtx.weatherData.current.condition.icon}
                  className="max-w-[8rem]"
                />
                <figcaption className="text-7xl text-shadedBlue">
                  {weatherCtx.weatherData.current.temp_c}&deg;
                </figcaption>
              </figure>
              <p className="text-ashColor text-xl font-bold">
                {weatherCtx.weatherData.current.condition.text}
              </p>
            </div>
            <div className="md:w-1/2 ml-4 flex flex-col gap-5">
              <div>
                <p className="text-shadedBlue text-xl mb-2">
                  Feels like {weatherCtx.weatherData.current.feelslike_c}&deg;
                </p>
              </div>
              <hgroup>
                <div>
                  <BsFillDropletFill className="text-ashColor text-xl" />
                  <p>Humidity</p>
                  <span>{weatherCtx.weatherData.current.humidity}%</span>
                </div>
                <div>
                  <WiCloudyGusts className="text-ashColor text-xl " />
                  <p>Wind</p>
                  <span>{weatherCtx.weatherData.current.wind_kph}kph</span>
                </div>
                <div>
                  <GoRepoForcePush className="text-ashColor text-2xl " />
                  <p>Pressure</p>
                  <span>{weatherCtx.weatherData.current.pressure_mb}mmPha</span>
                </div>
              </hgroup>
            </div>
          </div>
        </section>
      )}
    </Fragment>
  );
}

export default CurrentWeather;
