import { useContext, useState } from "react";
import WeatherContext from "../store/weather-context";

function UserInput() {
  const weatherCtx = useContext(WeatherContext);
  const [input, setInput] = useState("");

  const handleInputChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (input.trim().length < 1) return;
    weatherCtx.searchLocation(input);
    setInput("");
  };

  return (
    <form onSubmit={submitFormHandler} className="flex">
      <input
        type="text"
        className="text-shadedBlue"
        value={input}
        onChange={handleInputChangeHandler}
      />
      <button className="bg-shadedBlue p-3 rounded-r-full text-bgLighterBlue">
        Search
      </button>
    </form>
  );
}

export default UserInput;
