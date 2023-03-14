import { useState } from "react";
import "./Weather.scss";
import Button from "../Button/Button";
import searchImg from "../../assets/search.svg";

const Weather = ({
  location,
  time,
  temperature,
  status,
  icon,
  setLocation,
}) => {
  const [userInput, setUserInput] = useState("");

  //change current Location
  const changeLocation = () => {
    setLocation(userInput);
    setUserInput("");
  };
  return (
    <div className="weather">
      <div className="weather__searchbox">
        <label htmlFor="location"></label>
        <input
          type="text"
          name="location"
          placeholder="Location"
          className="weather__searchbox--input"
          value={userInput}
          onInput={(event) => setUserInput(event.target.value)}
        />
        <Button
          className="weather__searchbox--search"
          onClick={changeLocation}
          BtnImg={searchImg}
        />
      </div>

      <p>{location}</p>
      <div className="weather__status">
        <img src={icon} alt="weather-icon" />
        <div className="weather__status--text">
          <p>{temperature}°C</p>
          <p>{status}</p>
        </div>
      </div>
      <p className="weather__time">Last update:{time}</p>
    </div>
  );
};
export default Weather;
