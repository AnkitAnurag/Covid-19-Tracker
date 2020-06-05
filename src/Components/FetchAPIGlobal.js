import React, { useState, useEffect, useContext } from 'react';
import { Helmet } from 'react-helmet';
import Top10Countries from './Top10Countries';
import AppTheme from '../Colors';
import ThemeContext from '../Context/ThemeContext';
import Footer from './Footer';
import StatsCard from './StatsCards';

const FetchGlobalStats = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  const [stats, setStats] = useState([]);
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  //Global Data
  async function fetchData() {
    fetch('https://corona.lmao.ninja/v2/all?yesterday', requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setStats(result);
        setLoading(false);
      });
  }

  //Countries Data for top 10 countries
  async function fetchData1() {
    fetch('https://corona.lmao.ninja/v2/countries?yesterday&sort', requestOptions)
      .then((resp) => resp.json())
      .then((data) => {
        setCountries(data);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData1();
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
    
    const countryData = countries;
    //Sorting the JSON Array with Highest TotalConfirmed to Lowest TotalConfirmed
    countryData.sort(function (a, b) {
      return b.cases - a.cases;
    });

    const treated = stats.todayRecovered+stats.todayDeaths;
    var active;
    if(stats.todayCases > treated)
      active="↑"+(stats.todayCases-treated).toLocaleString(navigator.language);
    else
      active="↓"+(treated-stats.todayCases).toLocaleString(navigator.language);

    return (
      <div>
        <Helmet
          bodyAttributes={{
            style: `background-color : ${currentTheme.backgroundColor}`,
          }}
        />
        <StatsCard
          title='Global Coronavirus Stats'
          active={stats.active}
          newactive={active}
          newconf={stats.todayCases}
          totalconf={stats.cases}
          newdeath={stats.todayDeaths}
          totaldeath={stats.deaths}
          newrecov={stats.todayRecovered}
          totalrecov={stats.recovered}
          confpermil={stats.casesPerOneMillion}
          activepercent={((stats.active/stats.cases)*100).toFixed(2)}
          activep={((stats.active/stats.cases)*100).toFixed(0)}
          recovrate={((stats.recovered/stats.cases)*100).toFixed(2)}
          recovp={((stats.recovered/stats.cases)*100).toFixed(0)}
          mortalityrate={((stats.deaths/stats.cases)*100).toFixed(2)}
          mortalityp={((stats.deaths/stats.cases)*100).toFixed(0)}
          countriesaffected={stats.affectedCountries}
          testspermil={stats.testsPerOneMillion}
          testspermilp={stats.testsPerOneMillion.toFixed(0)}
          population={stats.population}
          tests={stats.tests}
          disp="none"
        />
        <div>
          <Top10Countries country={countryData} />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
};

export default FetchGlobalStats;
