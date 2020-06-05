import React, { useContext } from "react";
import { Container } from 'reactstrap';
import 'react-circular-progressbar/dist/styles.css';
import ThemeContext from "../Context/ThemeContext";
import AppTheme from "../Colors";
import "../App.css";

const StatsCard = ({
    title="Coronavirus Summary",
    active="loading...",
    newactive="loading...",
    newconf="loading...",
    totalconf="loading...",
    newdeath="loading...",
    totaldeath="loading...",
    newrecov="loading...",
    totalrecov="loading...",
    confpermil="loading...",
    activepercent="loading...",
    activep="loading...",
    recovrate="loading...",
    recovp="loading...",
    mortalityrate="loading...",
    mortalityp="loading...",
    countriesaffected="loading...",
    testspermil="loading...",
    testspermilp="loading...",
    population="loading...",
    tests="loading...",
    cardtitle="Countries Affected",
    cardbodyp1="Total of ",
    cardbodyp2=" Countries have been affected by the Novel Coronavirus.",
    country="the World",
    flag,
    disp=""
    }) => {

    const theme = useContext(ThemeContext)[0];
    const currentTheme = AppTheme[theme];

    return (
        <Container fluid>
            <div className="row" style={{fontFamily:"archiaregular"}}>
                <div className="col card-body text-center mx-auto mt-4" style={{color: `${currentTheme.textColor}`}}>
                    <h1 style={{fontWeight:"bold"}}><img src={flag} alt="" className="mb-2" style={{width:"50px", height:"35px", display:disp}}/>&nbsp;{title}</h1>
                </div>
                <div className="col-lg-8 col-md-11 mx-auto mt-5 card-group text-center">
                    <div className="card mb-3 mx-auto" id="cards" style={{maxWidth:"12rem", maxHeight:"8rem", borderRadius:"5px" , backgroundColor:"rgba(255,7,58,.12549)", color:"rgba(255, 7, 58, 0.6)"}}>
                        <div className="card-body">
                            <h6 className="font-weight-bold">Confirmed</h6>
                            <h4 className="card-title" style={{color:"rgb(255, 7, 58)", fontWeight:"bold"}}>{totalconf.toLocaleString(navigator.language)}</h4>
                            <p style={{fontWeight:"bold"}} className="card-text">[↑{newconf.toLocaleString(navigator.language)}]</p>
                        </div>
                    </div>
                    <div className="card mb-3 mx-auto" id="cards" style={{maxWidth:"12rem", maxHeight:"8rem", borderRadius:"5px", backgroundColor:"rgba(0, 123, 255, 0.063)", color:"rgba(0, 123, 255, 0.6)"}}>
                        <div className="card-body">
                            <h6 className="font-weight-bold">Active</h6>
                            <h4 className="card-title" style={{color:"rgb(0, 123, 255)", fontWeight:"bold"}}>{active.toLocaleString(navigator.language)}</h4>
                            <p style={{fontWeight:"bold"}} className="card-text">[{newactive}]</p>
                        </div>
                    </div>
                    <div className="card mb-3 mx-auto" id="cards" style={{maxWidth:"12rem", maxHeight:"8rem", borderRadius:"5px", backgroundColor:"rgba(40, 167, 69, 0.125)", color:"rgba(40, 167, 69, 0.6)"}}>
                        <div className="card-body">
                            <h6 className="font-weight-bold">Recovered</h6>
                            <h4 className="card-title" style={{color:"rgb(40, 167, 69)", fontWeight:"bold"}}>{totalrecov.toLocaleString(navigator.language)}</h4>
                            <p style={{fontWeight:"bold"}} className="card-text">[↑{newrecov.toLocaleString(navigator.language)}]</p>
                        </div>
                    </div>
                    <div className="card mb-3 mx-auto" id="cards" style={{maxWidth:"12rem", maxHeight:"8rem", borderRadius:"5px", backgroundColor:"rgba(108, 117, 125, 0.063)", color:"rgba(108, 117, 125, 0.6)"}}>
                        <div className="card-body">
                            <h6 className="font-weight-bold">Deceased</h6>
                            <h4 className="card-title" style={{color:"rgb(108, 117, 125)", fontWeight:"bold"}}>{totaldeath.toLocaleString(navigator.language)}</h4>
                            <p style={{fontWeight:"bold"}} className="card-text">[↑{newdeath.toLocaleString(navigator.language)}]</p>
                        </div>
                    </div>
                </div>
                <div className="row" style={{width:"100%", display:"inline-block"}}>
                <div className="col-lg-5 my-auto" id="bar" style={{color:"white", float:"left", marginLeft:"28px", color:"rgb(108, 117, 125)"}}>
                    <h6 style={{fontWeight:"bold"}}>Population</h6>
                    <h4 style={{fontWeight:"bold"}}>{population.toLocaleString(navigator.language)}</h4>
                </div>
                <div className="col-lg-5 my-auto" id="bar" style={{color:"white", float:"right", textAlign:"right", color:"rgb(108, 117, 125)"}}>
                    <h6 style={{fontWeight:"bold"}}>Tested</h6>
                    <h4 style={{fontWeight:"bold"}}>{tests.toLocaleString(navigator.language)}</h4>
                </div>
                </div>

                <div className="col-lg-12 mx-auto mt-4 card-group">
                    <div className="card mb-3 mx-auto mt-0" id="cards" style={{maxWidth:"15rem", minHeight:"15rem", maxHeight:"20rem", borderRadius:"5px" , backgroundColor:"rgba(255,7,58,.12549)", color:"rgba(255, 7, 58, 0.6)"}}>
                        <div className="card-body">
                            <h6 className="font-weight-bold">Confirmed Per Million</h6>
                            <h4 className="card-title" style={{color:"rgb(255, 7, 58)", fontWeight:"bold"}}>{confpermil}</h4>
                            <p style={{fontWeight:"bold"}} className="card-text">{confpermil} out of every 1 million people in {country} have tested positive for the virus.</p>
                        </div>
                    </div>
                    <div className="card mb-3 mx-auto mt-0" id="cards" style={{maxWidth:"15rem", minHeight:"15rem", maxHeight:"20rem", borderRadius:"5px", backgroundColor:"rgba(0, 123, 255, 0.063)", color:"rgba(0, 123, 255, 0.6)"}}>
                        <div className="card-body">
                            <h6 className="font-weight-bold">Active Rate</h6>
                            <h4 className="card-title" style={{color:"rgb(0, 123, 255)", fontWeight:"bold"}}>≈ {activepercent}</h4>
                            <p style={{fontWeight:"bold"}} className="card-text">For every 100 confirmed cases, {activep} are currently infected.</p>
                        </div>
                    </div>
                    <div className="card mb-3 mx-auto mt-0" id="cards" style={{maxWidth:"15rem", minHeight:"15rem", maxHeight:"20rem", borderRadius:"5px", backgroundColor:"rgba(40, 167, 69, 0.125)", color:"rgba(40, 167, 69, 0.6)"}}>
                        <div className="card-body">
                            <h6 className="font-weight-bold">Recovery Rate</h6>
                            <h4 className="card-title" style={{color:"rgb(40, 167, 69)", fontWeight:"bold"}}>≈ {recovrate}</h4>
                            <p style={{fontWeight:"bold"}} className="card-text">For every 100 confirmed cases, {recovp} have recovered from the virus.</p>
                        </div>
                    </div>
                
                
                    <div className="card mb-3 mx-auto mt-0" id="cards" style={{maxWidth:"15rem", minHeight:"15rem", maxHeight:"20rem", borderRadius:"5px" , backgroundColor:"rgba(108, 117, 125, 0.063)", color:"rgba(108, 117, 125, 0.6)"}}>
                        <div className="card-body">
                            <h6 className="font-weight-bold">Mortality Rate</h6>
                            <h4 className="card-title" style={{color:"rgb(108, 117, 125)", fontWeight:"bold"}}>≈ {mortalityrate}</h4>
                            <p style={{fontWeight:"bold"}} className="card-text">For every 100 confirmed cases, {mortalityp} have unfortunately passed away from the virus.</p>
                        </div>
                    </div>
                    <div className="card mb-3 mx-auto mt-0" id="cards" style={{maxWidth:"15rem", minHeight:"15rem", maxHeight:"20rem", borderRadius:"5px", backgroundColor:"rgba(182,133,77,.0627451)", color:"rgba(182,133,77,.6)"}}>
                        <div className="card-body">
                            <h6 className="font-weight-bold">{cardtitle}</h6>
                            <h4 className="card-title" style={{color:"rgb(182, 133, 77)", fontWeight:"bold"}}>{countriesaffected}</h4>
                            <p style={{fontWeight:"bold"}} className="card-text">{cardbodyp1}{countriesaffected}{cardbodyp2}</p>
                        </div>
                    </div>
                    <div className="card mb-3 mx-auto mt-0" id="cards" style={{maxWidth:"15rem", minHeight:"15rem", maxHeight:"20rem", borderRadius:"5px", backgroundColor:`${currentTheme.testsmilbc}`, color:"rgba(150,115,185,.73)"}}>
                        <div className="card-body">
                            <h6 className="font-weight-bold">Tests Per Million</h6>
                            <h4 className="card-title" style={{color:"rgb(150, 115, 185)", fontWeight:"bold"}}>{testspermil.toLocaleString(navigator.language)}</h4>
                            <p style={{fontWeight:"bold"}} className="card-text">For every 1 million people in {country}, {testspermilp.toLocaleString(navigator.language)} people were tested.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default StatsCard;