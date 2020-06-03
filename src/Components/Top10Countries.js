import React, { useContext } from 'react';
import { Table, Container } from 'reactstrap';
import ThemeContext from '../Context/ThemeContext';
import AppTheme from '../Colors';
import ReactCountryFlag from 'react-country-flag';

const Top10Countries = ({ country }) => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  const str = country[1].Date;
  var date = str.substring(0, 10);
  var time = str.substring(11, 19);
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
                <h1>Top 10 Covid-19 affected countries</h1>
            </div>
            <div className='card-body table-responsive col-lg-10 text-center mx-auto' style={{overflowX:"auto"}}>
              <Table borderless size="sm" striped hover dark={toggle} responsive style={{backgroundColor: `${currentTheme.backgroundColor}` ,color: "rgb(108, 117, 125)"}}>
                <thead style={{backgroundColor:`${currentTheme.tableHeader}`}}>
                  <tr>
                    <th>#</th>
                    <th>Country</th>
                    <th style={{ color: '#2475B0' }}>Total Confirmed</th>
                    <th style={{ color: '#2475B0' }}>New Confirmed</th>
                    <th style={{ color: 'red' }}>Total Deaths</th>
                    <th style={{ color: 'red' }}>New Deaths</th>
                    <th style={{ color: 'green' }}>Total Recovered</th>
                    <th style={{ color: 'green' }}>New Recovered</th>
                  </tr>
                </thead>
                <tbody>
                  {country.slice(0, 10).map((country, index) => (
                    <tr style={{fontWeight:"bold"}} key={index}>
                      <td>{count++}</td>
                      <td style={{textAlign:"left"}}>
                        <ReactCountryFlag
                          countryCode={country.CountryCode}
                          svg
                          cdnUrl='https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/'
                          cdnSuffix='svg'
                        />
                        &nbsp;&nbsp;
                        {country.Country}
                      </td>
                      <td>{country.TotalConfirmed}</td>
                      <td>{country.NewConfirmed}</td>
                      <td>{country.TotalDeaths}</td>
                      <td>{country.NewDeaths}</td>
                      <td>{country.TotalRecovered}</td>
                      <td>{country.NewRecovered}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            <h6 style={{color:`${currentTheme.textColor}`, float:"right", fontWeight:"bold"}}>Last Updated: {date} [{time}]</h6>
            </div>
        </div>
    </Container>
  );
};

export default Top10Countries;
