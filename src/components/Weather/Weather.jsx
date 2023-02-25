import { useState } from "react";

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
    <>
      <label htmlFor="location"></label>
      <input
        type="text"
        name="location"
        id="location"
        placeholder="Location"
        value={userInput}
        onInput={(event) => setUserInput(event.target.value)}
      />
      <button onClick={changeLocation}>Search</button>
      <p>{time}</p>
      <p>{location}</p>
      <img src={icon} alt="weather-icon" />
      <p>{temperature}°C</p>
      <p>{status}</p>
    </>
  );
};
export default Weather;
