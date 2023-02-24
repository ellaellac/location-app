const Weather = ({ location, time, temperature, status, icon }) => {
  return (
    <>
      <p>{time}</p>
      <p>{location}</p>
      <img src={icon} alt="weather-icon" />
      <p>{temperature}°C</p>
      <p>{status}</p>
    </>
  );
};
export default Weather;
