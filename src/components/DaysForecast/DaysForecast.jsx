import weather from "../../assets/cloudy-weather.svg";

function DaysForecast() {
  return (
    <hgroup>
      <p>MON</p>
      <img src={weather} />
      <p>!9</p>
    </hgroup>
  );
}

export default DaysForecast;
