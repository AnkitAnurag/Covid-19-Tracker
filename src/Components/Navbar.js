import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../Context/ThemeContext";
import AppTheme from "../Colors";

const Navbar = ({
    home="nav-item",
    country="nav-item",
    about="nav-item"
    }) => {
        const [themeMode, setThemeMode] = useContext(ThemeContext);
        const theme = useContext(ThemeContext)[0];
        const currentTheme = AppTheme[theme];
        var button="";
        if(themeMode === "light")
            button="btn btn-outline-info btn-sm mt-1";
        else
            button="btn btn-outline-warning btn-sm mt-1";
    return(
        <div>
            <nav 
                className="navbar navbar-expand-lg navbar-light"
                style={{backgroundColor:`${currentTheme.backgroundColor}`}}
            >
            <img src="https://i.ibb.co/9txjR9D/coronaviruss.png" width="40" height="40" className="d-inline-block align-top"/>
            &nbsp;&nbsp;
            <Link className="navbar-brand" style={{color: `${currentTheme.textColor}`}} href="/">
                    Covid-19 Tracker
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav mt-1">
                <li className={home}>
                    <Link className="nav-link" style={{color: `${currentTheme.textColor}`}} href="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className={country}>
                    <Link className="nav-link" style={{color: `${currentTheme.textColor}`}} to="/countrywisedata">Country Wise Data</Link>
                </li>
                {/* <li className={about}>
                    <a className="nav-link" style={{color: `${currentTheme.textColor}`}} href="/about">About</a>
                </li> */}
                <li className="nav-item">
                    <Link className="nav-link" style={{color: `${currentTheme.textColor}`}} href="https://github.com/AnkitAnurag" target="_blank">GitHub Source</Link>
                </li>
                <li className="nav-item">
                    <button
                        className={button}
                        style={{color: `${currentTheme.textColor}`, position:"absolute",right:0,marginRight:"50px"}}
                        onClick={() => {
                            setThemeMode(themeMode === "light" ? "dark" : "light");
                            if(themeMode === "light")
                                localStorage.setItem('isDark', "true");
                            else
                                localStorage.setItem('isDark', "false");
                        }}
                    >
                        {themeMode === "light" ? "Switch to Dark Mode":"Switch to Light Mode"}
                    </button>
                </li>
                </ul>
            </div>
            </nav>
        </div>
    );
};

export default Navbar;