import React from 'react'
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {ScrollTrigger , SplitText} from 'gsap/all';
import {useDarkTheme} from '../Context/Context.jsx';
gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
    const {darkTheme} = useDarkTheme();

    useGSAP(() => {
        ScrollTrigger.matchMedia({
            "(min-width: 1024px)": function () {
                gsap.to("#first", {
                    xPercent: -30,
                    scrollTrigger: {
                        trigger: "#first",
                        start: "50% 70%",
                        end: "bottom 0%",
                        scrub: 4,
                    },
                });
                gsap.from("#second", {
                    xPercent: -30,
                    scrollTrigger: {
                        trigger: "#second",
                        start: "40% 70%",
                        end: "bottom 0%",
                        scrub: 4,
                    },
                });
            },
            "(max-width: 1024px)": function () {
                gsap.to("#first", {
                    xPercent: -30,
                    scrollTrigger: {
                        trigger: "#first",
                        start: "top 20%",
                        end: "top 0%",
                        scrub: 3,
                    },
                });
                gsap.from("#second", {
                    xPercent: -30,
                    scrollTrigger: {
                        trigger: "#second",
                        start: "top 100%",
                        end: "bottom 10%",
                        scrub: 3,
                        markers: false,
                    },
                });
            },
        });
        gsap.from("#hero", {
            opacity: 0,
            duration: 2,
            delay: 1,
            scale: 0.95,
            y: 50,
        });

        const headline = new SplitText("#text", {
            type: "chars, words, lines",
        });
        gsap.from(headline.lines, {
            opacity: 0,
            yPercent: 100,
            stagger: 0.05,
            ease: "power2.in",
            delay: 1.4,
            duration: 1,
        });
    }, []);



    return (
        <div className={'h-svh overflow-y-hidden overflow-x-hidden md:h-svh relative'}>
            <div className={`flex flex-col justify-center align-middle items-center h-svh`}>
                <h1 id={'text'} className={`md:text-8xl text-2xl z-10 ${darkTheme? "" :"text-black"}`}>Crafting Digital Experiences</h1>
                <h1 id={'text'} className={`md:text-8xl text-2xl z-10 mb-10 ${darkTheme? "" :"text-black"} `}>Through Code & Design</h1>
                <h1 id={'text'} className={`mt-10 md:text-xl text-xl z-10 ${darkTheme? "" :"text-black"} `}>Building immersive web experiences that push</h1>
                <h1 id={'text'} className={`md:text-xl text-xl z-10 ${darkTheme? "" :"text-black"} `}>the boundaries of what's possible</h1>
            </div>
            <div id={"hero"} className={"w-[300%] h-1/2 rotate-6 font-light absolute top-1/4 space-y-52 text-4xl md:text-2xl md:text-[8rem] md:space-y-8 md:w-[400%] md:top-[15rem] md:h-full z-0"}>
                    <h1 id={"first"} className={`${darkTheme?"":"text-[#E9E9E9]"} text-[#1B1B1B]`}>TypeScript / JavaScript / C++ / Python / Redux / Vercel</h1>
                    <h1 id={"second"} className={`${darkTheme?"":"text-[#E9E9E9]"} text-[#1B1B1B]`} >Node.js / React.js / G-SAP / javascript / Tailwind CSS</h1>
                    <h1 id={"first"} className={`${darkTheme?"":"text-[#E9E9E9]"} text-[#1B1B1B]`} >G-SAP / Three.js / CSS / HTML / Framer Motion / Next.js</h1>
            </div>
        </div>
    )
}
export default Hero;