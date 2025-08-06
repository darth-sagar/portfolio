import React from 'react'
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {ScrollTrigger} from 'gsap/all';
import {useDarkTheme} from '../Context/Context.jsx';
gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
    const {darkTheme} = useDarkTheme();

    useGSAP(()=>{
        gsap.to("#first", {
            transform:"translateX(-30%)",
            scrollTrigger:{
                trigger:"#first",
                markers:true,
                scroller:"body",
                start:"50% 70%",
                end:"bottom 0%",
                scrub:4,
            }
        })
    },[])
    useGSAP(()=>{
        gsap.from("#second", {
            transform:"translateX(-30%)",
            scrollTrigger:{
                trigger:"#second",
                markers:true,
                scroller:"body",
                start:"40% 70%",
                end:"bottom 0%",
                scrub:4,
            }
        })
    },[])


    return (
        <div >
            <div id={"hero"} className={"w-[400%] max-h-svh rotate-6 font-light absolute top-[15rem] space-y-8 text-[8rem] overflow-y-hidden z-0"}>
                    <h1 id={"first"} className={`${darkTheme?"":"text-[#E9E9E9]"} text-[#1B1B1B]`}>TypeScript / JavaScript / C++ / Python / Redux / Vercel</h1>
                    <h1 id={"second"} className={`${darkTheme?"":"text-[#E9E9E9]"} text-[#1B1B1B]`} >Node.js / React.js / G-SAP / javascript / Tailwind CSS</h1>
                    <h1 id={"first"} className={`${darkTheme?"":"text-[#E9E9E9]"} text-[#1B1B1B]`} >G-SAP / Three.js / CSS / HTML / Framer Motion / Next.js</h1>
            </div>
        </div>
    )
}
export default Hero;