import DaysForecast from "../DaysForecast/DaysForecast";

function LaterSection() {
  return (
    <section className="later-section">
      <p className="text-3xl text-center md:ml-3 md:text-left">
        Next 7 Days...
      </p>
      <div className="other-forecast">
        <DaysForecast />
        <DaysForecast />
        <DaysForecast />
        <DaysForecast />
        <DaysForecast />
        <DaysForecast />
        <DaysForecast />
      </div>
    </section>
  );
}

export default LaterSection;
