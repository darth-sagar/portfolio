import React, {useEffect, useState} from 'react'
import { Navbar } from './Components/Navbar.jsx'
import Hero from "./Components/Hero.jsx"
import { useDarkTheme } from './Context/Context.jsx';
import LandingPage from './Pages/LandingPage.jsx';
import Aboutme from './Pages/Aboutme.jsx';
import {Footer} from './Components/Footer.jsx';

const App = () => {
    const { darkTheme } = useDarkTheme();
    const [homePage, setHomePage] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setHomePage(prev=>!prev);
        }, 1200)
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <div className={`w-full ${darkTheme ? "bg-[#0A0A0A]" : "bg-white"} flex flex-col overflow-y-hidden overflow-x-hidden`}>
                {/*<LandingPage />*/}
                {/*{homePage && <Navbar />}*/}
                 {/*<Hero />*/}
                {/*{homePage && <Aboutme />}*/}
                <Footer/>
            </div>
        </div>
    )
}
export default App
