import { useEffect, useState } from "react";
import "./App.scss";
import Greeting from "./components/Greeting/Greeting";
import Weather from "./components/Weather/Weather";
import TodoList from "./container/TodoList/TodoList";

const App = () => {
  const [location, setLocation] = useState("London");
  const [weather, setWeather] = useState();

  const { REACT_APP_WEATHER_APIKEY } = process.env;

  //get current Location from browser
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

  //fetch data from weather API
  const getWeather = async (location) => {
    try {
      let url = `http://api.weatherapi.com/v1/current.json?key=${REACT_APP_WEATHER_APIKEY}&q=${location}&aqi=no`;
      const response = await fetch(url);
      const data = await response.json();
      if (!response.ok) {
        alert("location not found");
      } else {
        setWeather(data);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    getWeather(location);
  }, [location]);

  return (
    <>
      <Greeting />
      {weather && (
        <Weather
          location={weather.location.name}
          time={weather.location.localtime}
          temperature={weather.current.temp_c}
          status={weather.current.condition.text}
          icon={weather.current.condition.icon}
          setLocation={setLocation}
        />
      )}
      <TodoList />
    </>
  );
};

export default App;
