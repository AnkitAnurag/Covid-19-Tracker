import React, { useState, useEffect, useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Dropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap';
import AppTheme from '../Colors';
import ThemeContext from '../Context/ThemeContext';
import Footer from './Footer';
import StatsCard from './StatsCards';

const FetchCountryStats = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  const [stats, setStats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [country, setCountry] = useState(0);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };

  async function fetchData() {
    fetch('https://corona.lmao.ninja/v2/countries?yesterday&sort', requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setStats(result);
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  const countrySelected = (event) => {
    setCountry(event.target.value);
  };

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
    const ctitle = stats[country].country;
    const treated = stats[country].todayRecovered+stats[country].todayDeaths;
    var active;
    if(stats[country].todayCases > treated)
      active="↑"+(stats[country].todayCases-treated).toLocaleString(navigator.language);
    else if(stats[country].todayCases-treated === 0)
      active="↑0"
    else
      active="↓"+(treated-stats[country].todayCases).toLocaleString(navigator.language);

    return (
      <div>
        <div
          className='input-group mx-auto mt-5'
          style={{ justifyContent: 'center' }}
        >
          <form className='form-inline'>
              <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                  <DropdownToggle caret style={{width:"310px"}}>
                      Select Country To Display Data
                  </DropdownToggle>
                  <DropdownMenu style={{overflowY: 'scroll', maxHeight: "600px"}}>
                        {stats.map((name, index) => {
                          return (
                              <DropdownItem key={index} value={index} onClick={countrySelected}>
                                  <img className="my-auto" src={name.countryInfo.flag} alt="" style={{width:"21px", height:"18px"}}/>
                                  &nbsp;&nbsp;
                                  {name.country}
                              </DropdownItem>
                          )
                        })}
                  </DropdownMenu>
              </Dropdown>
          </form>
        </div>
        <Helmet
          bodyAttributes={{
            style: `background-color : ${currentTheme.backgroundColor}`,
          }}
        />
        <StatsCard
        title={ctitle + ' Coronavirus Stats'}
        active={stats[country].active}
        newactive={active}
        newconf={stats[country].todayCases}
        totalconf={stats[country].cases}
        newdeath={stats[country].todayDeaths}
        totaldeath={stats[country].deaths}
        newrecov={stats[country].todayRecovered}
        totalrecov={stats[country].recovered}
        confpermil={stats[country].casesPerOneMillion}
        activepercent={((stats[country].active/stats[country].cases)*100).toFixed(2)}
        activep={((stats[country].active/stats[country].cases)*100).toFixed(0)}
        recovrate={((stats[country].recovered/stats[country].cases)*100).toFixed(2)}
        recovp={((stats[country].recovered/stats[country].cases)*100).toFixed(0)}
        mortalityrate={((stats[country].deaths/stats[country].cases)*100).toFixed(2)}
        mortalityp={((stats[country].deaths/stats[country].cases)*100).toFixed(0)}
        countriesaffected={stats[country].criticalPerOneMillion}
        testspermil={stats[country].testsPerOneMillion}
        testspermilp={stats[country].testsPerOneMillion.toFixed(0)}
        population={stats[country].population}
        tests={stats[country].tests}
        cardtitle="Critical Per Million"
        cardbodyp1={"For every 1 million people in " + ctitle + ", "}
        cardbodyp2=" people are in critical condition."
        country={ctitle}
        flag={stats[country].countryInfo.flag}
        />
        <div>
          <Footer />
        </div>
      </div>
    );
  }
};

export default FetchCountryStats;
