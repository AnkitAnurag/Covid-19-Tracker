import React, { useContext } from 'react';
import { Table, Container } from 'reactstrap';
import ThemeContext from '../Context/ThemeContext';
import AppTheme from '../Colors';

const Top10Countries = ({ country }) => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  var count=1;
  var toggle;

  if(currentTheme.backgroundColor === "rgb(22, 22, 37)")
      toggle=true;
  else
      toggle=false;

  return (
    <Container fluid>
        <div className="row" style={{fontFamily:"archiaregular"}}>
            <div className="col card-body text-center mx-auto mt-4" style={{color: `${currentTheme.textColor}`}}>
                <h1 style={{fontWeight:"bold"}}>Top 10 Covid-19 affected countries</h1>
            </div>
            <div className='card-body table-responsive col-lg-10 text-center mx-auto' style={{overflowX:"auto"}}>
              <Table borderless size="sm" striped hover dark={toggle} responsive style={{backgroundColor: `${currentTheme.backgroundColor}` ,color: "rgb(108, 117, 125)"}}>
                <thead style={{backgroundColor:`${currentTheme.tableHeader}`}}>
                  <tr>
                    <th>#</th>
                    <th>Country</th>
                    <th>Confirmed</th>
                    <th>Active</th>
                    <th>Recovered</th>
                    <th>Deceased</th>
                  </tr>
                </thead>
                <tbody>
                  {country.slice(0, 10).map((country, index) => (
                    <tr style={{fontWeight:"bold", textAlign:"left"}} key={index}>
                      <td>{count++}</td>
                      <td style={{textAlign:"left"}}>
                        &nbsp;&nbsp;
                        <img className="my-auto" src={country.countryInfo.flag} alt="" style={{width:"21px", height:"18px"}}/>
                        &nbsp;&nbsp;
                        {country.country}
                      </td>
                      <td>{country.cases.toLocaleString(navigator.language)} <span style={{ color: "rgb(255, 7, 58)", fontWeight:"normal", display:country.todayCases === 0 ? "none":"", fontWeight:"bold" }}> ↑{country.todayCases.toLocaleString(navigator.language)}</span></td>
                      <td>{country.active.toLocaleString(navigator.language)}</td>
                      <td>{country.recovered === 0 ? "N/A" : country.recovered.toLocaleString(navigator.language)}<span style={{ color: "rgb(40, 167, 69)", fontWeight:"normal", display:country.todayRecovered === 0 ? "none":"", fontWeight:"bold" }}> ↑{country.todayRecovered.toLocaleString(navigator.language)}</span></td>
                      <td>{country.deaths.toLocaleString(navigator.language)}<span style={{ color: "rgba(108, 117, 125, 0.6)", fontWeight:"normal",display:country.todayDeaths === 0 ? "none":"", fontWeight:"bold" }}> ↑{country.todayDeaths.toLocaleString(navigator.language)}</span></td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
        </div>
    </Container>
  );
};

export default Top10Countries;
