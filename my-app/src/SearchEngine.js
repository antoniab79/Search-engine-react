import React, { useState } from "react";
import axios from "axios";
import Weather from "./Weather";

export default function SearchEngine() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    const apiKey = "281450ec88936f4fa8ee9864682b49a0";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(url).then((response) => {
      setWeatherData({
        temperature: Math.round(response.data.main.temp),
        conditions: response.data.weather[0].description,
        humidity: response.data.main.humidity,
        wind: response.data.wind.speed,
      });
    });
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search for a city"
          onChange={updateCity}
        />
        <input type="submit" value="Search" />
      </form>

      {weatherData && <Weather data={weatherData} />}
    </div>
  );
}
