import {createContext} from "react";

var ThemeContext;

if(localStorage.getItem('isDark') === "true"){
    ThemeContext = createContext(["dark", () => {}]);
} else {
    ThemeContext = createContext(["light", () => {}]);
}


export default ThemeContext;