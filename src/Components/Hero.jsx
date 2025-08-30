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
                scroller:"body",
                start:"40% 70%",
                end:"bottom 0%",
                scrub:4,
            }
        })
        gsap.from("#hero",{
            opacity:0,
            duration:2,
            delay:1,
            scale:0.95,
            y:100,
        })
    },[])
    useGSAP(() => {
        gsap.from("#text", {
            opacity: 0,
            y: 180,
            rotateX: -90,
            duration: 1.2,
            stagger: 0.25,
            ease: "back.out(1.7)",
            delay: 1.4,
        });
    });


    return (
        <div className={'h-svh overflow-y-hidden overflow-x-hidden md:h-svh'}>
            <div className={`flex flex-col justify-center align-middle items-center h-svh`}>
                <h1 id={'text'} className={`text-8xl z-10 ${darkTheme? "" :"text-black"}`}>Crafting Digital Experiences</h1>
                <h1 id={'text'} className={`text-8xl z-10 mb-10 ${darkTheme? "" :"text-black"} `}>Through Code & Design</h1>
                <h1 id={'text'} className={`mt-10 text-xl z-10 ${darkTheme? "" :"text-black"} `}>Building immersive web experiences that push</h1>
                <h1 id={'text'} className={`text-xl z-10 ${darkTheme? "" :"text-black"} `}>the boundaries of what's possible</h1>
            </div>
            <div id={"hero"} className={"w-[170%] h-1/2 rotate-6 font-light absolute top-28 space-y-36 text-2xl z-0 md:text-[8rem] md:space-y-8 md:w-[400%] md:top-[15rem] md:h-full"}>
                    <h1 id={"first"} className={`${darkTheme?"":"text-[#E9E9E9]"} text-[#1B1B1B]`}>TypeScript / JavaScript / C++ / Python / Redux / Vercel</h1>
                    <h1 id={"second"} className={`${darkTheme?"":"text-[#E9E9E9]"} text-[#1B1B1B]`} >Node.js / React.js / G-SAP / javascript / Tailwind CSS</h1>
                    <h1 id={"first"} className={`${darkTheme?"":"text-[#E9E9E9]"} text-[#1B1B1B]`} >G-SAP / Three.js / CSS / HTML / Framer Motion / Next.js</h1>
            </div>
        </div>
    )
}
export default Hero;