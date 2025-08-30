
import {Navbar} from '../Components/Navbar.jsx';
import Hero from '../Components/Hero.jsx';
import Aboutme from '../Components/Aboutme.jsx';
import ProjectsSection from '../Components/projects.jsx';
import {Footer} from '../Components/Footer.jsx';
import React, {useEffect, useState} from 'react';
import {useDarkTheme} from '../Context/Context.jsx';

const Home = () => {
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
                {homePage && <Navbar />}
                <Hero />
                {homePage && <Aboutme />}
                <ProjectsSection />
                <Footer/>
            </div>
        </div>
    )
}
export default Home;