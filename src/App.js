import React, { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = (e) => {
    setCity(e.target.value);
  };

  const handleSearchSubmit = async () => {
    if (city.trim() === '') {
      setError('Please enter a valid city');
      return;
    }
    setWeatherData(city);
    setError('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSearchSubmit();
  };

  const clearWeatherData = () => {
    setWeatherData(null);
    setCity('');
    setError('');
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'app dark-mode' : 'app'}>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <SearchBar
        city={city}
        handleSearch={handleSearch}
        handleSearchSubmit={handleSearchSubmit}
        handleKeyPress={handleKeyPress}
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
      />
      {error && <p className="error">{error}</p>}
      {weatherData && <MainContent city={weatherData} onClear={clearWeatherData} />}
      <Footer />
    </div>
  );
};

export default App;
