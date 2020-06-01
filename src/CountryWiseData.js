import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import FetchCountryStats from './Components/FetchAPICountry';
import ThemeContext from './Context/ThemeContext';

const CountryData = () => {
  var theme;
  if (localStorage.getItem('isDark') === 'false') theme = 'light';
  else theme = 'dark';
  const themeHook = useState(theme);
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <Navbar country={'nav-item active'} />
        <FetchCountryStats />
      </div>
    </ThemeContext.Provider>
  );
};

export default CountryData;
