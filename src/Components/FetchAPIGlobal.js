import React, { useState, useEffect, useContext } from "react";
import { Helmet } from 'react-helmet'
import Card from "./SummaryCard";
import AppTheme from "../Colors";
import ThemeContext from "../Context/ThemeContext";

const FetchGlobalStats = () => {

  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];

  const [ stats, setStats ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  async function fetchData() {
    fetch("https://api.covid19api.com/summary", requestOptions)
      .then(response => response.json())
      .then(result => {
        setStats(result);
        setLoading(false);
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div style={{color: `${currentTheme.textColor}`}}>
        <Helmet bodyAttributes={{style: `background-color : ${currentTheme.backgroundColor}`}}/>
        <div className="d-flex justify-content-center" style={{marginTop:"250px"}}>
          <h1><strong>Loading</strong>&nbsp;&nbsp;</h1>
          <div className="spinner-border" role="status" style={{width:"40px",height:"40px"}}>
          </div>
        </div>
        <p className="font-weight-light d-flex justify-content-center">If it takes too long please reload the page.</p>
      </div>
    );
  }

  else {
    const fatality = (stats.Global.TotalDeaths/stats.Global.TotalConfirmed)*100;
    const fatalityPercent = fatality.toFixed(2);
    const recovery = (stats.Global.TotalRecovered/stats.Global.TotalConfirmed)*100;
    const recoveryPercent = recovery.toFixed(2);
    const str = stats.Date;
    var date = str.substring(0, 10);
    var time = str.substring(11, 19);
    var activeCases = (stats.Global.TotalConfirmed-stats.Global.TotalDeaths-stats.Global.TotalRecovered);
    return(
      <div>
        <Helmet bodyAttributes={{style: `background-color : ${currentTheme.backgroundColor}`}}/>
        <Card
          title="Global Coronavirus Stats Summary"
          active={activeCases}
          newconf={stats.Global.NewConfirmed}
          totalconf={stats.Global.TotalConfirmed}
          newdeath={stats.Global.NewDeaths}
          totaldeath={stats.Global.TotalDeaths}
          newrecov={stats.Global.NewRecovered}
          totalrecov={stats.Global.TotalRecovered}
          fatalityRate={fatalityPercent}
          recoveryRate={recoveryPercent}
          date={date}
          time={time}
          chartTitle="Global Coronavirus Stats Chart"
          button="Check Country Wise Data"
          link="/countrywisedata" />
      </div>
    );
  }
};

export default FetchGlobalStats;