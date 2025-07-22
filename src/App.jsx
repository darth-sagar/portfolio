import React from 'react'
import { Navbar } from './Components/Navbar.jsx'
import Hero from "./Components/Hero.jsx"
import { useDarkTheme } from './Context/Context.jsx';
import LandingPage from './Pages/LandingPage.jsx';

const App = () => {
    const { darkTheme } = useDarkTheme();
    return (
        <div>

            <div className={`w-full h-screen ${darkTheme ? "bg-[#0A0A0A]" : "bg-white"} `}>
                <LandingPage />
                {/*<Navbar />*/}
                {/* <Hero /> */}
            </div>
        </div>
    )
}
export default App
