import React, { useEffect, useState } from "react";

const Weather = () => {
  const [city, setCity] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const apiKey = "175743ffa1c8e52a62aef85606d696f2";

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error.message);
    }
  };

  useEffect(() => {
    if (city) {
      fetchWeatherData();
    }
  }, [city]);

  const filterWeatherByDate = () => {
    if (weatherData && startDate && endDate) {
      const filteredWeather = weatherData.list.filter((item) => {
        const currentDate = new Date(item.dt * 1000)
          .toISOString()
          .split("T")[0];
        return currentDate >= startDate && currentDate <= endDate;
      });
      return filteredWeather;
    }
    return [];
  };

  return (
    <>
      <div>Weather</div>
      <label>
        Enter city:
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </label>
      <label>
        Enter start date (YYYY-MM-DD):
        <input
          type="text"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </label>
      <label>
        Enter end date (YYYY-MM-DD):
        <input
          type="text"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </label>

      {weatherData && startDate && endDate && (
        <div>
          <h2>
            Weather Forecast for {city} from {startDate} to {endDate}
          </h2>
          <ul>
            {filterWeatherByDate().map((item, index) => (
              <li key={index}>
                {new Date(item.dt * 1000).toLocaleDateString()}:{" "}
                {item.weather[0].description}, {item.main.temp}°C
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Weather;
