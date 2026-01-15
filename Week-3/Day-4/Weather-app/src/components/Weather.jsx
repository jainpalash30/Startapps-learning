import "../styles/Weather.css";

function Weather({ data }) {
  const cityName = data.name;
  const temperature = data.main.temp;
  const weatherCondition = data.weather[0].description;
  const weatherIcon = data.weather[0].icon;
  const actualTemp = Math.round((temperature - 273.15) * 100) / 100;
  return (
    <div className="weather-container">
      <h2 className="city-name">{cityName}</h2>

      <img
        className="weather-icon"
        src={`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`}
        alt={weatherCondition}
      />

      <p className="temperature">{actualTemp}°C</p>

      <p className="weather-condition">{weatherCondition}</p>
    </div>
  );
}

export default Weather;
