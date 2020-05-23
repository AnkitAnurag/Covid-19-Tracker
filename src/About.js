import React from "react";
import './App.css';
import Navbar from './Components/Navbar';

const About = () => {
    return(
        <div className="App">
            <Navbar about={"nav-item active"} />
            <h1>This page will be rendered for About Page.</h1>
        </div>
    );
};

export default About;