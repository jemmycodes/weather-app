import weather from "../../assets/cloudy-weather.svg";

function MainInfo() {
  return (
    <section className="first-section">
      <div className="space-y-2">
        <p className="font-bold text-2xl">SUN 24</p>
        <p>Today in Vancouver, BC</p>
      </div>
      <div>
        <figure>
          <img
            src={weather}
            alt="weather condition icon"
            className="w-40 md:w-56"
          />
        </figure>
        <figcaption>Moderate Sun</figcaption>
      </div>
      <div className="forecast">
        <p className="font-bold text-7xl">22</p>
        <p>Feels like 28</p>
      </div>
    </section>
  );
}

export default MainInfo;
