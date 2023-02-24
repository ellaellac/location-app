const Weather = ({ location, time, temperature, status, icon }) => {
  return (
    <>
      <h1>Weather</h1>
      <p>{time}</p>
      <p>{location}</p>
      <p>{temperature}°C</p>
      <p>{status}</p>
      <img src={icon} alt="weather-icon" />
    </>
  );
};
export default Weather;
