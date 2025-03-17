import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MainContent.css';

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = 'https://api.weatherapi.com/v1/current.json';

const MainContent = ({ city, onClear }) => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      if (!city) return;

      setLoading(true);
      setWeather(null);
      setError(null);

      try {
        const response = await axios.get(`${BASE_URL}?key=${API_KEY}&q=${city}&aqi=no`);
        setWeather(response.data);
      } catch (error) {
        setError('Failed to fetch data. Please check the city name.');
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error">{error}</p>;
  if (!weather) return null;

  return (
    <main className="main-content">
      <h2>{weather.location.name}, {weather.location.country}</h2>
      <img src={`https:${weather.current.condition.icon}`} alt="Weather Icon" />
      <p>{weather.current.temp_c}°C</p>
      <p>{weather.current.condition.text}</p>
      <p>Humidity: {weather.current.humidity}%</p>
      <p>Wind Speed: {weather.current.wind_kph} kph</p>
      <button onClick={onClear} className="clear-button">Clear Data</button>
    </main>
  );
};

export default MainContent;