import React, { useState, useEffect, useContext } from 'react';
import { Helmet } from 'react-helmet';
import AppTheme from '../Colors';
import ThemeContext from '../Context/ThemeContext';
import Footer from './Footer';
import Axios from 'axios';
import IndiaCard from './IndiaStatsCard';

const FetchIndiaStats = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  const [stats, setStats] = useState([]);
  const [today, setToday] = useState([]);
  const [date, setDate] = useState();
  const [loading, setLoading] = useState(true);


  const fetchData = async () => {
    // De-structuring the response to  { data } to get directly response.data
    const { data } = await Axios.get('https://api.rootnet.in/covid19-in/stats/latest');
    const todaydata = await Axios.get('https://corona.lmao.ninja/v2/countries?yesterday&sort');

    console.log(todaydata.data[93]);
    const tdata = todaydata.data[93];
    const stats = data.data;
    const date = data.lastRefreshed;
    setStats(stats);
    setToday(tdata);
    setDate(date);
    setLoading(false);
  };
  
  useEffect(() => {
    fetchData()
  }, []);

  if (loading) {
    return (
      <div style={{ color: `${currentTheme.textColor}` }}>
        <Helmet
          bodyAttributes={{
            style: `background-color : ${currentTheme.backgroundColor}`,
          }}
        />
        <div
          className='d-flex justify-content-center'
          style={{ marginTop: '250px' }}
        >
          <h1>
            <strong>Loading</strong>&nbsp;&nbsp;
          </h1>
          <div
            className='spinner-border'
            role='status'
            style={{ width: '40px', height: '40px' }}
          ></div>
        </div>
        <p className='font-weight-light d-flex justify-content-center'>
          If it takes too long please reload the page.
        </p>
      </div>
    );
  } else {

    const statesData = stats.regional;
    statesData.sort(function (a, b) {
      return b.totalConfirmed - a.totalConfirmed;
    });

    var active;
    const treated = today.todayRecovered + today.todayDeaths;
    if(today.todayCases > treated)
      active="↑"+(today.todayCases - treated).toLocaleString(navigator.language);
    else if(today.todayCases - treated === 0)
      active="↑0"
    else
      active="↓"+(treated - today.todayCases).toLocaleString(navigator.language);

    return (
      <div>
        <Helmet
          bodyAttributes={{
            style: `background-color : ${currentTheme.backgroundColor}`,
          }}
        />
        <IndiaCard
          confirmed={today.cases}
          todayconf={today.todayCases}
          active={today.active}
          todayactive={active}
          recovered={today.recovered}
          todayrecov={today.todayRecovered}
          deceased={today.deaths}
          todaydeceased={today.todayDeaths}
          states={statesData}
          lastRefreshed={date}
          flag={today.countryInfo.flag}
        />
        <div>
          <Footer />
        </div>
      </div>
    );
  }
};

export default FetchIndiaStats;
