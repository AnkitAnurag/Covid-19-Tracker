import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CountUp from 'react-countup';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import ThemeContext from "../Context/ThemeContext";
import AppTheme from "../Colors";

const Card = ({
    title="Coronavirus Summary",
    active="loading...",
    newconf="loading...",
    totalconf="loading...",
    newdeath="loading...",
    totaldeath="loading...",
    newrecov="loading...",
    totalrecov="loading...",
    fatalityRate=0,
    recoveryRate=0,
    date="",
    time="",
    chartTitle="Coronavirus Summary Chart",
    button="button",
    link="/"
    }) => {

        const theme = useContext(ThemeContext)[0];
        const currentTheme = AppTheme[theme];

        return(
            <div className="row">
                <div className="col-md-8 mx-auto mt-5">
                    <div className="card text-center" style={{backgroundColor: `${currentTheme.cardBody}`}}>
                        <div className="card-header">
                            Covid 19 Tracker
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <br />
                            <p style={{color:"orange", fontWeight:"bold"}} className="card-text">Active Cases:&nbsp;
                            <CountUp
                                className="newconf"
                                start={0}
                                end={active}
                                duration={0.75}
                            />
                            </p>
                            <p style={{color:"#2475B0"}} className="card-text">New Confirmed:&nbsp;
                            <CountUp
                                className="newconf"
                                start={0}
                                end={newconf}
                                duration={0.75}
                            />
                            </p>
                            <p style={{color:"#2475B0", fontWeight:"bold"}} className="card-text">Total Confirmed:&nbsp;
                            <CountUp
                                className="newconf"
                                start={0}
                                end={totalconf}
                                duration={0.75}
                            />
                            </p>
                            <p style={{color:"red"}} className="card-text">New Deaths:&nbsp;
                            <CountUp
                                className="newconf"
                                start={0}
                                end={newdeath}
                                duration={0.75}
                            />
                            </p>
                            <p style={{color:"red", fontWeight:"bold"}} className="card-text">Total Deaths:&nbsp;
                            <CountUp
                                className="newconf"
                                start={0}
                                end={totaldeath}
                                duration={0.75}
                            />
                            </p>
                            <p style={{color:"green"}} className="card-text">New Recovered:&nbsp;
                            <CountUp
                                className="newconf"
                                start={0}
                                end={newrecov}
                                duration={0.75}
                            />
                            </p>
                            <p style={{color:"green", fontWeight:"bold"}} className="card-text">Total Recovered:&nbsp;
                            <CountUp
                                className="newconf"
                                start={0}
                                end={totalrecov}
                                duration={0.75}
                            />
                            </p>
                            <Link to={link} className="btn btn-primary">
                                {button}
                            </Link>
                        </div>
                        <div className="card-footer text-muted">
                            Last Updated: {date} {time}
                        </div>
                    </div>
                </div>
                
                <div className="col-md-3 mx-auto mt-5">
                    <div className="card text-center" style={{backgroundColor: `${currentTheme.cardBody}`,height: "100%" }}>
                        <div className="card-header">
                            Covid 19 Tracker Chart
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{chartTitle}</h5>
                            <div className="mt-2 mx-auto" style={{ width: "120px", height: "100px" }}>
                                <CircularProgressbar
                                    value={fatalityRate}
                                    text={`${fatalityRate}%`}
                                    styles={buildStyles({
                                        pathColor: `rgba(255, 0, 0, ${fatalityRate})`,
                                        textColor: 'red',
                                        trailColor: '#d6d6d6',
                                        backgroundColor: '#3e98c7',
                                    })}/>
                                <strong>Fatality Rate</strong>
                                <br />
                                <br />
                                <CircularProgressbar
                                    value={recoveryRate}
                                    text={`${recoveryRate}%`}
                                    styles={buildStyles({
                                        pathColor: `rgba(0, 128, 0, ${recoveryRate})`,
                                        textColor: 'green',
                                        trailColor: '#d6d6d6',
                                        backgroundColor: '#3e98c7',
                                    })}/>
                                <strong>Recovery Rate</strong>
                            </div>
                        </div>
                        <div className="card-footer text-muted">
                                Last Updated: {date}
                        </div>
                    </div>
                </div>
            </div>
        );
    };

export default Card;