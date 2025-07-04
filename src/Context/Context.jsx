import {useState, useContext , createContext} from 'react';

const themeContext = createContext();

const DarkThemeProvider= ({children})=>{
    const [darkTheme, setDarkTheme] = useState(true);
    return (
        <themeContext.Provider value={{darkTheme, setDarkTheme}}>
            {children}
        </themeContext.Provider>
    )
}
const useDarkTheme = ()=> useContext(themeContext);

export {DarkThemeProvider,useDarkTheme };