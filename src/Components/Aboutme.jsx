import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { IoIosCode } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { useDarkTheme } from '../Context/Context.jsx';
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {ScrollTrigger} from 'gsap/all';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger)


const Aboutme = () => {
    const {darkTheme} = useDarkTheme();

    useGSAP(()=>{
        gsap.from("#namediv h1",{
            x:-30,
            opacity:0,
            duration:1,
            scrollTrigger:{
                trigger:"#namediv h1",
                scroller:"body",
                scrub:3,
                start:"top 80%",
                end:"top 50%",
            },
            ease:"power1.inOut",
            stagger:0.5,
         });
        gsap.from("#seconddiv p",{
            x:-30,
            opacity:0,
            duration:1,
            scrollTrigger:{
                trigger:"#seconddiv p",
                scroller:"body",
                scrub:3,
                start:"top 80%",
                end:"top 50%",
            },
            ease:"power1.inOut",
            stagger:0.15,
        });
        gsap.from("#thirddiv",{
            x:-30,
            opacity:0,
            duration:1,
            scrollTrigger:{
                trigger:"#thirddiv",
                scroller:"body",
                scrub:3,
                start:"top 80%",
                end:"top 50%",
            },
            ease:"power1.inOut"
        });
        gsap.from("#fifthdiv",{
            x:50,
            opacity:0,
            duration:1,
            scrollTrigger:{
                trigger:"#fifthdiv",
                scroller:"body",
                scrub:3,
                start:"top 80%",
                end:"top 50%",
            },
            ease:"power1.inOut"
        });
        gsap.from("#skills1 h1",{
            y:50,
            opacity:0,
            duration:1,
            scrollTrigger:{
                trigger:"#skills1 h1",
                scroller:"body",
                scrub:3,
                start:"top 80%",
                end:"top 50%",
            },
            ease:"power1.inOut",
            stagger:1,
        })
        gsap.from("#skills2 h1",{
            y:50,
            opacity:0,
            duration:1,
            scrollTrigger:{
                trigger:"#skills2 h1",
                scroller:"body",
                scrub:3,
                start:"top 80%",
                end:"top 50%",
            },
            ease:"power1.inOut",
            stagger:1,
        });
        gsap.from("#skills3 h1",{
            y:50,
            opacity:0,
            duration:1,
            scrollTrigger:{
                trigger:"#skills3 h1",
                scroller:"body",
                scrub:3,
                start:"top 80%",
                end:"top 50%",
            },
            ease:"power1.inOut",
            stagger:1,
        });
        gsap.from("#lastdiv h1",{
            x:50,
            opacity:0,
            duration:1,
            scrollTrigger:{
                trigger:"#lastdiv h1",
                scroller:"body",
                scrub:3,
                start:"top 80%",
                end:"top 50%",
            },
            ease:"power1.inOut",
            stagger:0.8,
        });
        gsap.from("#fourthdiv",{
            y:50,
            opacity:0,
            duration:1,
            scrollTrigger:{
                trigger:"#fourthdiv",
                scroller:"body",
                scrub:3,
                start:"top 90%",
                end:"top 75%",
            },
            ease:"power1.inOut",
            stagger:0.8,
        });
    },[])
    return (

        <div id="about" className={'flex flex-col md:flex-row mt-40 mb-52'}>
        <div className={'h-svh ml-8 mr-4 w-svw flex flex-col md:ml-48 md:mt-20 md:w-5/12'}>
            <div id={"namediv"}>

                <h1 className={`${darkTheme ? "text-amber-100" : "text-black" } text-5xl `}>Hi, I'm</h1>
                <h1 className={'text-5xl text-[#FF4D4D] '}>Sagar saini</h1>
            </div>
            <div id={"seconddiv"} className={'mt-5 text-xl'}>
                <p className={'flex flex-row items-center'}><CiLocationOn className={'text-[#FF4D4D]'}/><p className={`pl-2 ${darkTheme? "" :"text-black"}`}>Based In Delhi, India</p> </p>
                <p className={'flex flex-row items-center'} ><IoIosCode className={'text-[#FF4D4D]'} /> <p className={`pl-2 ${darkTheme? "" :"text-black"} `}>Full Stack Developer </p> </p>
            </div>
            <div id={"thirddiv"} className={`w-1/2 pt-3 ${darkTheme? "" :"text-black"}`}>
                <h4>With a passion for building complete web solutions, I bring together clean UI design, efficient backend logic, and emerging AI/ML capabilities to create smart, adaptable, and user-focused applications</h4>
            </div>
            <div id={"fourthdiv"} className={` ${darkTheme? "" :"text-black"} mt-8`}>
                <button onClick={()=>{
                    gsap.to(window, {
                        duration: 1.5,
                        scrollTo: { y: "#contact", autoKill: true },
                        ease: "power2.inOut",
                    })
                }} className={`rounded-xl bg-[#FF4D4D] p-4 mr-5 border-2 border-amber-50 ${darkTheme? "border-amber-50":"border-black "} transform transition duration-300 ease-in-out hover:scale-104 hover:-translate-y-2 backdrop-blur-md shadow-md`}>Get In Touch</button>
                <button onClick={()=>{
                    gsap.to(window, {
                        duration: 1.5,
                        scrollTo: { y: "#projectsection", autoKill: true },
                        ease: "power2.inOut",
                    })
                }} className={'rounded-xl bg-transparent p-4 border-2 border-[#FF4D4D] transform transition duration-300 ease-in-out hover:scale-104 hover:-translate-y-2 backdrop-blur-md shadow-md'} >View Projects</button>
            </div>
        </div>

        <div className={'mt-30'}>
            <h1 id = {"fifthdiv"} className={`text-2xl mb-5 ${darkTheme ? "":"text-black"}`}>Key Skills</h1>
            <div id={'skills1'} className={`flex flex-row space-x-2 text-[1.2rem] ${darkTheme? "" :"text-black"} `}>
                <h1 className={'bg-[#FF4D4D]/10 rounded-full pt-2 pb-2 px-4 shadow-md cursor-pointer '}>HTML</h1>
                <h1 className={'bg-[#FF4D4D]/10 rounded-full pt-2 pb-2 px-4 shadow-md cursor-pointer  '} >CSS</h1>
                <h1 className={'bg-[#FF4D4D]/10 rounded-full pt-2 pb-2 px-4 shadow-md cursor-pointer '} >Tailwind CSS</h1>
                <h1 className={'bg-[#FF4D4D]/10 rounded-full pt-2 pb-2 px-4 shadow-md cursor-pointer '} >JavaScript</h1>
            </div>
            <div id={'skills2'} className={`flex flex-row space-x-2 text-[1.2rem] mt-2 ${darkTheme? "" :"text-black"}`}>
                <h1 className={'bg-[#FF4D4D]/10 rounded-full pt-2 pb-2 px-4 shadow-md cursor-pointer '} >TypeScript</h1>
                <h1 className={'bg-[#FF4D4D]/10 rounded-full pt-2 pb-2 px-4 shadow-md cursor-pointer '} >React</h1>
                <h1 className={'bg-[#FF4D4D]/10 rounded-full pt-2 pb-2 px-4 shadow-md cursor-pointer '} >Next.js</h1>
                <h1 className={'bg-[#FF4D4D]/10 rounded-full pt-2 pb-2 px-4 shadow-md cursor-pointer '} >Node.Js</h1>
            </div>
            <div id={'skills3'} className={`flex flex-row space-x-2 text-[1.2rem] mt-2 ${darkTheme? "" :"text-black"}`}>
                <h1 className={'bg-[#FF4D4D]/10 rounded-full pt-2 pb-2 px-4 shadow-md cursor-pointer '} >MongoDB</h1>
                <h1 className={'bg-[#FF4D4D]/10 rounded-full pt-2 pb-2 px-4 shadow-md cursor-pointer '}>MySQL</h1>
                <h1 className={'bg-[#FF4D4D]/10 rounded-full pt-2 pb-2 px-4 shadow-md cursor-pointer '} >Python</h1>
                <h1 className={'bg-[#FF4D4D]/10 rounded-full pt-2 pb-2 px-4 shadow-md cursor-pointer '} >c++</h1>
            </div>
            <div id={'lastdiv'} className={`mt-5 ${darkTheme? "" :"text-black"}`}>
                <h1 className={'text-2xl mb-3'}>Sevices</h1>
                <h1 className={'flex flex-row items-center'}><FaArrowRightLong className={'text-[#FF4D4D]'}/> <p className={'pl-2'}>Full Stack Application Development</p> </h1>
                <h1 className={'flex flex-row items-center'} ><FaArrowRightLong className={'text-[#FF4D4D]'}/> <p className={'pl-2'}>Web Design & Development</p> </h1>
                <h1 className={'flex flex-row items-center'} ><FaArrowRightLong className={'text-[#FF4D4D]'}/> <p className={'pl-2'}>Machine Learning & AI</p> </h1>
            </div>
        </div>
        </div>
    )
}

export default Aboutme;