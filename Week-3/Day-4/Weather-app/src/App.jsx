import { useState, useEffect } from "react";
import "./styles/App.css";
import Weather from "./components/Weather";
import SearchBox from "./components/SearchBox";
import Loading from "./components/Loading";
import Error from "./components/Error";

function App() {
  const [city, setCity] = useState("indore");

  const [weatherData, setWeatherData] = useState(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const apiKey = "7d41f6338a08b9c5785ce41b3ca75710";

  useEffect(() => {
    const fetchWeatherData = async () => {
      setLoading(true);
      setError("");

      try {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

          const response = await fetch(apiUrl);

        const data = await response.json();

        if (data.cod === "404") {
          setError("City not found! Please try another city.");
          setWeatherData(null);
        } else {
          setWeatherData(data);
          setError("");
        }
      } catch (err) {
        setError("Something went wrong!try again later.");
        setWeatherData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [city]);

 
  const handleSearch = (newCity) => {
    setCity(newCity);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Weather App</h1>

      <SearchBox onSearch={handleSearch} />

      {/* jab Loading true ho , toh loading component show karna */}
      {loading && <Loading />}

      {/* agar koi error ho toh show karo error */}
      {!loading && error && <Error message={error} />}

      {/* when data is available */}
      {!loading && !error && weatherData && <Weather data={weatherData} />}
    </div>
  );
}

export default App;
