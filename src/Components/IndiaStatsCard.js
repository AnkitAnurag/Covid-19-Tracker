import React, { useContext } from "react";
import { Container, Table } from 'reactstrap';
import { Helmet } from 'react-helmet';
import ThemeContext from "../Context/ThemeContext";
import AppTheme from "../Colors";
import "../App.css";

const IndiaCard = ({
    confirmed="loading...",
    active="loading...",
    recovered="loading...",
    deceased="loading...",
    states,
    lastRefreshed
    }) => {

        const theme = useContext(ThemeContext)[0];
        const currentTheme = AppTheme[theme];
        var count=1;
        var toggle;

        var date = lastRefreshed.substring(0, 10);
        var time = lastRefreshed.substring(11, 19);

        if(currentTheme.backgroundColor === "rgb(22, 22, 37)")
            toggle=true;
        else
            toggle=false;

        return(
            <Container fluid>
            <Helmet
                bodyAttributes={{
                style: `background-color : ${currentTheme.backgroundColor}`,
                }}
            />
            <div className="row" style={{fontFamily:"archiaregular"}}>
                <div className="col card-body text-center mx-auto" style={{color: `${currentTheme.textColor}`}}>
                    <h1>India Coronavirus Stats</h1>
                </div>
                <div className="col-lg-8 col-md-12 mx-auto mt-5 card-group text-center">
                    <div className="card mb-3 mx-auto" id="cards" style={{maxWidth:"12rem", maxHeight:"8rem", borderRadius:"5px" , backgroundColor:"rgba(255,7,58,.12549)", color:"rgba(255, 7, 58, 0.6)"}}>
                        <div className="card-body">
                            <h6 className="font-weight-bold">Confirmed</h6>
                            <h4 className="card-title" style={{color:"rgb(255, 7, 58)", fontWeight:"bold"}}>{confirmed.toLocaleString(navigator.language)}</h4>
                            {/* <h6 className="card-text">[+1000]</h6> */}
                        </div>
                    </div>
                    <div className="card mb-3 mx-auto" id="cards" style={{maxWidth:"12rem", maxHeight:"8rem", borderRadius:"5px", backgroundColor:"rgba(0, 123, 255, 0.063)", color:"rgba(0, 123, 255, 0.6)"}}>
                        <div className="card-body">
                            <h6 className="font-weight-bold">Active</h6>
                            <h4 className="card-title" style={{color:"rgb(0, 123, 255)", fontWeight:"bold"}}>{active.toLocaleString(navigator.language)}</h4>
                            {/* <h6 className="card-text">[+500]</h6> */}
                        </div>
                    </div>
                    <div className="card mb-3 mx-auto" id="cards" style={{maxWidth:"12rem", maxHeight:"8rem", borderRadius:"5px", backgroundColor:"rgba(40, 167, 69, 0.125)", color:"rgba(40, 167, 69, 0.6)"}}>
                        <div className="card-body">
                            <h6 className="font-weight-bold">Recovered</h6>
                            <h4 className="card-title" style={{color:"rgb(40, 167, 69)", fontWeight:"bold"}}>{recovered.toLocaleString(navigator.language)}</h4>
                            {/* <h6 className="card-text">[+400]</h6> */}
                        </div>
                    </div>
                    <div className="card mb-3 mx-auto" id="cards" style={{maxWidth:"12rem", maxHeight:"8rem", borderRadius:"5px", backgroundColor:"rgba(108, 117, 125, 0.063)", color:"rgba(108, 117, 125, 0.6)"}}>
                        <div className="card-body">
                            <h6 className="font-weight-bold">Deceased</h6>
                            <h4 className="card-title" style={{color:"rgb(108, 117, 125)", fontWeight:"bold"}}>{deceased.toLocaleString(navigator.language)}</h4>
                            {/* <h6 className="card-text">[+100]</h6> */}
                        </div>
                    </div>
                    <div className='card-body table-responsive' style={{overflowX:"auto"}}>
                        <h6 style={{color:`${currentTheme.textColor}`, float:"right", fontWeight:"bold"}}>Last Updated: {date} [{time}]</h6>
                    <Table borderless size="sm" striped hover dark={toggle} responsive style={{backgroundColor: `${currentTheme.backgroundColor}` ,color: "rgb(108, 117, 125)"}}>
                    <thead style={{backgroundColor:`${currentTheme.tableHeader}`}}>
                        <tr>
                            <th>#</th>
                            <th>State/UT</th>
                            <th>Confirmed</th>
                            <th>Active</th>
                            <th>Recovered</th>
                            <th>Deceased</th>
                        </tr>
                    </thead>
                    <tbody>
                        {states.map((state,index) => (
                            <tr style={{fontWeight:"bold"}} key={index}>
                                <td>{count++}</td>
                                <td>{state.loc}</td>
                                <td>{state.totalConfirmed.toLocaleString(navigator.language)}</td>
                                <td>{(state.totalConfirmed-(state.discharged+state.deaths)).toLocaleString(navigator.language)}</td>
                                <td>{state.discharged.toLocaleString(navigator.language)}</td>
                                <td>{state.deaths.toLocaleString(navigator.language)}</td>
                            </tr>
                        ))}
                    </tbody>
                    </Table>
                    </div>
                </div>
            </div>
            </Container>
        );
    };

export default IndiaCard;