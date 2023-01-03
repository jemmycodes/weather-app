function Forecast(props) {
  const dayNames = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
  const dt = new Date(props.date);
  const dayOfWeek = dt.getDay();
  const dayName = dayNames[dayOfWeek];

  // console.log(dayOfWeek);
  return (
    <div className="text-shadedBlue font-bold space-y-2">
      <p>{dayName}</p>
      <img src={props.icon} className="w-20" />
      <p>{props.text}</p>
      <p>{props.condition}</p>
    </div>
  );
}

export default Forecast;
