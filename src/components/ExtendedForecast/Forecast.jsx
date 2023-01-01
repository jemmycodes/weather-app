import cloudsImg from "../../assets/cloudy-weather.svg";

function Forecast() {
  return (
    <div className="text-shadedBlue font-bold space-y-2">
      <p>Mon</p>
      <img src={cloudsImg} className="w-20" />
      <p>Clouds</p>
      <p>27/24</p>
    </div>
  );
}

export default Forecast;
