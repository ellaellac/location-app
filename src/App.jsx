import { useEffect, useState } from "react";
import "./App.scss";
import Weather from "./components/Weather/Weather";

const App = () => {
  const [location, setLocation] = useState("London");
  const [weather, setWeather] = useState();
  const [userInput, setUserInput] = useState("");
  const WEATHER_APIKEY = process.env.WEATHER_APIKEY;

  //get current Location
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(setPosition);
    } else {
      alert("Location not found");
    }
  };

  const setPosition = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLocation(latitude + "," + longitude);
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  //change current Location
  const changeLocation = () => {
    setLocation(userInput);
    setUserInput("");
  };

  //fetch data from weather API
  const getWeather = async (location) => {
    try {
      let url = `http://api.weatherapi.com/v1/current.json?key=${WEATHER_APIKEY}&q=${location}&aqi=no`;
      const response = await fetch(url);
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    getWeather(location);
  }, [location]);

  //greeting

  const currentHour = new Date().getHours();
  let greeting = "Good Morning!";

  if (currentHour > 12 && currentHour < 18) {
    greeting = "Good Afternoon!";
  } else if (currentHour > 18 && currentHour < 24) {
    greeting = "Good Evening!";
  }

  return (
    <>
      <h1>Hello</h1>
      <p>{greeting}</p>
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
      {weather && (
        <Weather
          location={weather.location.name}
          time={weather.location.localtime}
          temperature={weather.current.temp_c}
          status={weather.current.condition.text}
          icon={weather.current.condition.icon}
        />
      )}
    </>
  );
};

export default App;
