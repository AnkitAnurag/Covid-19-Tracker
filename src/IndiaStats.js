import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import ThemeContext from './Context/ThemeContext';
import FetchIndiaStats from './Components/FetchAPIIndia';

const IndiaData = () => {
  var theme;
  if (localStorage.getItem('isDark') === 'true') theme = 'dark';
  else theme = 'light';
  const themeHook = useState(theme);
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <Navbar india={'nav-item active'} />
        <FetchIndiaStats />
      </div>
    </ThemeContext.Provider>
  );
};

export default IndiaData;
