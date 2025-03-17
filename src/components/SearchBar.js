import React from 'react';

const SearchBar = ({ city, handleSearch, handleSearchSubmit, handleKeyPress, toggleDarkMode, darkMode }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={handleSearch}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleSearchSubmit}>Search</button>
      <button onClick={toggleDarkMode} className="dark-mode-toggle">
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};

export default SearchBar;
