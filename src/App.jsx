import React, {useEffect, useState} from 'react'
import { Navbar } from './Components/Navbar.jsx'
import Hero from "./Components/Hero.jsx"
import { useDarkTheme } from './Context/Context.jsx';
import LandingPage from './Pages/LandingPage.jsx';
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';

const App = () => {
    const { darkTheme } = useDarkTheme();
    const [homePage, setHomePage] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setHomePage(true);
        }, 1500)
        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <div className={`w-full h-screen ${darkTheme ? "bg-[#0A0A0A]" : "bg-white"} `}>
                {/*<LandingPage />*/}
                {homePage &&<Navbar />}
                 <Hero />
            </div>
        </div>
    )
}
export default App
