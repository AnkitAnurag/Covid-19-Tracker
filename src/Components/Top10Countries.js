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
  return (
    <Container fluid>
      <div className='row'>
        <div className='col-lg-11 mx-auto mt-5'>
          <div
            className='card text-center'
            style={{ backgroundColor: `${currentTheme.cardBody}` }}
          >
            <div className='card-header'>
              <strong>Top 10 Covid-19 affected countries</strong>
            </div>
            <div className='card-body table-responsive' style={{overflowX:"auto"}}>
              <Table bordered striped hover>
                <thead>
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
                  {country.slice(0, 10).map((country) => (
                    <tr>
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
            </div>
            <div className='card-footer text-muted'>
              Last Updated: {date} {time}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Top10Countries;
