import cloudsImg from "../../assets/cloudy-weather.svg";
import { ImArrowUp } from "react-icons/im";
import { ImArrowDown } from "react-icons/im";
import { BsFillDropletFill } from "react-icons/bs";
import { WiCloudyGusts } from "react-icons/wi";
import { GoRepoForcePush } from "react-icons/go";

function CurrentWeather() {
  return (
    <section className="bg-white">
      <div>
        <h1>Current Weather</h1>
      </div>
      <div className="flex flex-col md:flex-row  gap-14">
        <div className="w-1/2 space-y-2">
          <h3 className="text-xl ">Paris</h3>
          <figure className="flex items-center gap-5">
            <img src={cloudsImg} className="max-w-[8rem]" />
            <figcaption className="text-7xl text-shadedBlue">36</figcaption>
          </figure>
          <p className="text-ashColor text-xl font-bold">clear sky</p>
        </div>
        <div className="md:w-1/2 ml-4 flex flex-col gap-5">
          <div>
            <p className="text-shadedBlue text-xl mb-2">Feels like 28</p>
            <div className="flex w-full gap-10 text-xl">
              <div className="flex gap-4">
                <p>
                  <ImArrowUp className="text-ashColor" />
                </p>
                <span>27</span>
              </div>
              <div className="flex gap-5">
                <p>
                  <ImArrowDown className="text-ashColor" />
                </p>
                <span>27</span>
              </div>
            </div>
          </div>
          <hgroup>
            <div>
              <BsFillDropletFill className="text-ashColor text-xl" />
              <p>Humidity</p>
              <span>54%</span>
            </div>
            <div>
              <WiCloudyGusts className="text-ashColor text-xl " />
              <p>Wind</p>
              <span>15kph</span>
            </div>
            <div>
              <GoRepoForcePush className="text-ashColor text-2xl " />
              <p>Pressure</p>
              <span>1009hPa</span>
            </div>
          </hgroup>
        </div>
      </div>
    </section>
  );
}

export default CurrentWeather;
