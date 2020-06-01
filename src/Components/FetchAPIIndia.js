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
  const [loading, setLoading] = useState(true);


  const fetchData = async () => {
    // De-structuring the response to  { data } to get directly response.data
    const { data } = await Axios.get('https://api.rootnet.in/covid19-in/stats/latest');
    //console.log("RESPONSE: ", data);
    // console.log("Data: ", data.data['unofficial-summary'][0].deaths);

    const stats = data.data;
    setStats(stats);
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

    return (
      <div>
        <Helmet
          bodyAttributes={{
            style: `background-color : ${currentTheme.backgroundColor}`,
          }}
        />
        <IndiaCard
          confirmed={stats['unofficial-summary'][0].total}
          active={stats['unofficial-summary'][0].active}
          recovered={stats['unofficial-summary'][0].recovered}
          deceased={stats['unofficial-summary'][0].deaths}
          states={statesData}
        />
        <div>
          <Footer />
        </div>
      </div>
    );
  }
};

export default FetchIndiaStats;
