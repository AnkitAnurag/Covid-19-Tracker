import React, { useState } from 'react';
import './App.css';
import FetchGlobalStats from './Components/FetchAPIGlobal';
import Navbar from './Components/Navbar';
import ThemeContext from './Context/ThemeContext';

const Home = () => {
  var theme;
  if (localStorage.getItem('isDark') === 'false') theme = 'light';
  else theme = 'dark';
  const themeHook = useState(theme);
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <Navbar home={'nav-item active'} />
        <FetchGlobalStats />
      </div>
    </ThemeContext.Provider>
  );
};

export default Home;
