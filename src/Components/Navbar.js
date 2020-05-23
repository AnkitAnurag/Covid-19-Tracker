import React, { useContext } from "react";
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
            <a className="navbar-brand" style={{color: `${currentTheme.textColor}`}} href="/">
                    Covid-19 Tracker
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav mt-1">
                <li className={home}>
                    <a className="nav-link" style={{color: `${currentTheme.textColor}`}} href="/">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className={country}>
                    <a className="nav-link" style={{color: `${currentTheme.textColor}`}} href="/countrywisedata">Country Wise Data</a>
                </li>
                {/* <li className={about}>
                    <a className="nav-link" style={{color: `${currentTheme.textColor}`}} href="/about">About</a>
                </li> */}
                <li className="nav-item">
                    <a className="nav-link" style={{color: `${currentTheme.textColor}`}} href="https://github.com/AnkitAnurag" target="_blank">GitHub Source</a>
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