import React, {useEffect, useState} from 'react'
import { Navbar } from './Components/Navbar.jsx'
import Hero from "./Components/Hero.jsx"
import { useDarkTheme } from './Context/Context.jsx';
import LandingPage from './Pages/LandingPage.jsx';
import Aboutme from './Pages/Aboutme.jsx';

const App = () => {
    const { darkTheme } = useDarkTheme();
    const [homePage, setHomePage] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setHomePage(true);
        }, 2800)
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <div className={`w-full ${darkTheme ? "bg-[#0A0A0A]" : "bg-white"} flex flex-col`}>
                <LandingPage />
                {homePage && <Navbar />}
                {homePage && <Hero /> }
                {homePage && <Aboutme />}

            </div>
        </div>
    )
}
export default App
