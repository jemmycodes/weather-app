import { Fragment, useContext } from "react";
import WeatherContext from "../store/weather-context";
import Forecast from "./Forecast";

function ExtendedForeacast() {
  const weatherCtx = useContext(WeatherContext);

  return (
    <Fragment>
      {weatherCtx.weatherData && (
        <section className="glass-section ">
          <div>
            <p className="text-ashColor font-bold">Extended Forecast</p>
          </div>
          <div className="flex gap-5 overflow-x-scroll justify-between">
            {weatherCtx.weatherData.forecast.forecastday.map((data, index) => (
              <Forecast
                date={data.date}
                key={index + 75767646}
                text={data.day.condition.text}
                icon={data.day.condition.icon}
                condition={`${data.day.mintemp_c}${String.fromCharCode(176)}C/${
                  data.day.maxtemp_c
                }${String.fromCharCode(176)}C`}
              />
            ))}
          </div>
        </section>
      )}
    </Fragment>
  );
}

export default ExtendedForeacast;

{
  /* {weatherCtx.weatherData.forecast.forecastday.map((data, index) => {
  <Forecast
  // key={index + 463473}
  // condition={data.day.condition.text}
  // icon={data.day.condition.icon}
  />;
})} */
}
