import React, { useState, useContext } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import FetchCountryStats from './Components/FetchAPICountry';
import ThemeContext from './Context/ThemeContext';
import Footer from './Components/Footer';

const CountryData = () => {
  var theme;
  if (localStorage.getItem('isDark') === 'true') theme = 'dark';
  else theme = 'light';
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
