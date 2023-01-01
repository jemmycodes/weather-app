import Forecast from "./Forecast";

function ExtendedForeacast() {
  return (
    <section className="glass-section ">
      <div>
        <p className="text-ashColor font-bold">Extended Forecast</p>
      </div>
      <div className="flex gap-5 overflow-x-scroll justify-between">
        <Forecast />
        <Forecast />
        <Forecast />
        <Forecast />
        <Forecast />
        <Forecast />
        <Forecast />
      </div>
    </section>
  );
}

export default ExtendedForeacast;
