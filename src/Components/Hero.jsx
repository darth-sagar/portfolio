import React from 'react'
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {ScrollTrigger} from 'gsap/all';
import {useDarkTheme} from '../Context/Context.jsx';
gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
    const {darkTheme} = useDarkTheme();

    useGSAP(()=>{
        gsap.from("#hero", {
            duration: 1,
            opacity:0,
            ease: "power1.inOut",
            delay: 0.5,
        })
    },[])
    useGSAP(()=>{
        gsap.from("#first", {
            duration: 1,
            y: -100,
            opacity:0,
            ease: "power1.inOut",
            delay: 0.5,
        })
    },[])
    return (
        <div >
            <div id={"hero"} className={"w-[300%] max-h-svh rotate-9 font-light absolute top-[15rem] space-y-8 text-[8rem] overflow-y-hidden z-0"}>
                    <h1 id={"first"} className={`${darkTheme?"":"text-[#E9E9E9]"} text-[#1B1B1B]`}>TypeScript / JavaScript / C++ / Python /Redux</h1>
                    <h1 id={"second"} className={`${darkTheme?"":"text-[#E9E9E9]"} text-[#1B1B1B]`} >Node.js / React.js / G-SAP / javascript / Tailwind CSS</h1>
                    <h1 id={"first"} className={`${darkTheme?"":"text-[#E9E9E9]"} text-[#1B1B1B]`} >G-SAP / Three.js / CSS / HTML / Framer Motion</h1>
            </div>
        </div>
    )
}
export default Hero;