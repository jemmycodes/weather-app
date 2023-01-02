import cloudsImg from "../../assets/cloudy-weather.svg";

function Forecast(props) {
  return (
    <div className="text-shadedBlue font-bold space-y-2">
      <p>Mon</p>
      <img src={props.icon} className="w-20" />
      <p>{props.text}</p>
      <p>{props.condition}</p>
    </div>
  );
}

export default Forecast;
