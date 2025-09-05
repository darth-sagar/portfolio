import React, { useRef } from "react";
import gsap from "gsap";
import { FaLongArrowAltRight } from "react-icons/fa";
import { ScrollTrigger  } from "gsap/ScrollTrigger";
import {SplitText} from "gsap/SplitText";
import navdrive from "../Assets/navdrive.jpg";
import crypto from "../Assets/vizcrypto.png";
import prepWise from "../Assets/prepwise.png";
import {useDarkTheme} from '../Context/Context.jsx';
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectsSection() {
    const {darkTheme}= useDarkTheme();
    const sectionRef = useRef();

useGSAP(() => {
    const split= new SplitText("#heading", {type:" chars"});
    gsap.from(split.chars, {
        x: 150,
        opacity: 0,
        duration: 1,
        ease: "power1.inOut",
        scale: 1.5,
        scrollTrigger: {
            trigger: "#heading",
            start: "40% 50%",
            end: "50% 20%",
            scrub: 3,
        },
        stagger:0.1,
    })
    const projectCard = gsap.utils.toArray(sectionRef.current.children);
    projectCard.forEach((card) => {
        gsap.from(card, {
            yPercent: 50,
            opacity: 0.2,
            duration: 1.5,
            delay: 0.5,
            scale: 0.9,
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: card,
                start: 'bottom 35%',
                end: 'bottom 5%',
                scrub: 2,
                markers: false,
            },
            stagger: 0.1,
        });
    });
},{scope: sectionRef});


    return (
    <>
        <span id="heading" className={'text-[#9A9A9B] text-xl uppercase ml-8 mb-10'}>Selected works</span>
        <div className="ml-8 mr-8" ref={sectionRef}>
        {/* Project one */}
        <div className="flex flex-row gap-10 items-center relative project-card">
                <section className="flex-1">
                        <span className={`absolute -top-[3.5rem] -left-10 text-[15rem] font-bold text-gray-200/10  z-10 ${darkTheme?"":"text-gray-600/20"}`}>01</span>
                    <h1 className={`text-7xl mb-5 ${darkTheme ? "" : "text-black"}`}>Navdrive</h1>
                    <p className="text-[#9A9A9A]">
                        A self-driving car powered by Raspberry Pi, sensors, and a machine learning model for intelligent navigation
                    </p>
                    <div className={`flex flex-row flex-wrap gap-3 mt-5 mb-10 ${darkTheme ? "" : "text-black"}`} >
                        <h1 className={`bg-[#FF4D4D]/10 rounded-full pt-2 pb-2 px-4 shadow-md cursor-pointer ${darkTheme ? "" :"bg-[#FF4D4D]/40"}`}>Raspberry Pi</h1>
                        <h1 className={`bg-[#FF4D4D]/10 rounded-full pt-2 pb-2 px-4 shadow-md cursor-pointer ${darkTheme ? "" :"bg-[#FF4D4D]/40"}`}>Arduino</h1>
                        <h1 className={`bg-[#FF4D4D]/10 rounded-full pt-2 pb-2 px-4 shadow-md cursor-pointer ${darkTheme ? "" :"bg-[#FF4D4D]/40"}`}>Python</h1>
                        <h1 className={`bg-[#FF4D4D]/10 rounded-full pt-2 pb-2 px-4 shadow-md cursor-pointer ${darkTheme ? "" :"bg-[#FF4D4D]/40"}`}>OpenCV</h1>
                        <h1 className={`bg-[#FF4D4D]/10 rounded-full pt-2 pb-2 px-4 shadow-md cursor-pointer ${darkTheme ? "" :"bg-[#FF4D4D]/40"}`}>Tensorflow</h1>
                    </div>
                    <button className={`flex flex-row items-center  px-6 py-3 rounded-2xl transform transition hover:scale-x-105 hover:-translate-y-2 duration-500 ${darkTheme ? "bg-white text-black" : "bg-black text-white"}`}>
                        <p className="pr-2">View Project</p>
                        <FaLongArrowAltRight />
                    </button>
                </section>
                <section className="flex-1/3">
                    <div className="relative group rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500 h-[450px]">
                        <img
                            src={navdrive}
                            alt="navdrive"
                            className="rounded-xl object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <button className="px-4 py-2 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-200 transition">
                                View Project
                            </button>
                        </div>
                    </div>
                </section>
            </div>

        {/*project two*/}
        <div className="flex flex-row gap-10 items-center mt-52 relative project-card">
            <section className="flex-1">
                <span className={`absolute -top-[2.5rem] -left-10 text-[15rem] font-bold text-gray-200/10  z-10 ${darkTheme?"":"text-gray-600/20"}`}>02</span>
                <h1 className={`text-7xl mb-5 ${darkTheme ? "" : "text-black"}`}>
                    VizCrypto</h1>
                <p className="text-[#9A9A9A]">
                    An interactive web-based crypto visualizer platform built using React and the Coingecko API
                </p>
                <div className={`flex flex-row flex-wrap gap-3 mt-5 mb-10 ${darkTheme ? "" : "text-black"}`}>
                    <h1 className={`bg-[#FF4D4D]/10 rounded-full pt-2 pb-2 px-4 shadow-md cursor-pointer ${darkTheme ? "" :"bg-[#FF4D4D]/40"}`}>React</h1>
                    <h1 className={`bg-[#FF4D4D]/10 rounded-full pt-2 pb-2 px-4 shadow-md cursor-pointer ${darkTheme ? "" :"bg-[#FF4D4D]/40"}`}>CoinGecko API</h1>
                    <h1 className={`bg-[#FF4D4D]/10 rounded-full pt-2 pb-2 px-4 shadow-md cursor-pointer ${darkTheme ? "" :"bg-[#FF4D4D]/40"}`}>Tailwind CSS</h1>
                    <h1 className={`bg-[#FF4D4D]/10 rounded-full pt-2 pb-2 px-4 shadow-md cursor-pointer ${darkTheme ? "" :"bg-[#FF4D4D]/40"}`}>Google Charts</h1>
                    <h1 className={`bg-[#FF4D4D]/10 rounded-full pt-2 pb-2 px-4 shadow-md cursor-pointer ${darkTheme ? "" :"bg-[#FF4D4D]/40"}`}>JavaScript</h1>
                </div>
                <button className={`flex flex-row items-center px-6 py-3 rounded-2xl transform transition hover:-translate-y-2 hover:scale-105 duration-500 ${darkTheme ? "bg-white text-black" : "bg-black text-white"} `}>
                    <p className="pr-2">View Project</p>
                    <FaLongArrowAltRight />
                </button>
            </section>
            <section className="flex-[2]">
                <div className="relative group rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500 h-[450px]">
                    <img
                        src={crypto}
                        alt="navdrive"
                        className="rounded-xl object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className={`px-4 py-2 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-200 transition `}>
                            View Project
                        </button>
                    </div>
                </div>
            </section>
        </div>

        {/*project Three*/}
        <div className="flex flex-row gap-10 items-center mt-64 project-card">
            <section className="flex-1 relative">
                <span className={`absolute -top-[6rem] -left-10 text-[15rem] font-bold text-gray-200/10  z-10 ${darkTheme?"":"text-gray-600/20"}`}>03</span>
                <h1 className={`text-7xl mb-5 ${darkTheme ? "" : "text-black"}`}>
                    HireMe-AI</h1>
                <p className="text-[#9A9A9A]">
                    An AI-driven platform designed to help users prepare for interviews, offering coding practice and resources for both technical and non-technical roles
                </p>
                <div className={`flex flex-row flex-wrap gap-3 mt-5 mb-10 ${darkTheme ? "" : "text-black"}`}>
                    <h1 className={`bg-[#FF4D4D]/10 rounded-full pt-2 pb-2 px-4 shadow-md cursor-pointer ${darkTheme ? "" :"bg-[#FF4D4D]/40"}`}>NextJS</h1>
                    <h1 className={`bg-[#FF4D4D]/10 rounded-full pt-2 pb-2 px-4 shadow-md cursor-pointer ${darkTheme ? "" :"bg-[#FF4D4D]/40"}`}>TypeScript</h1>
                    <h1 className={`bg-[#FF4D4D]/10 rounded-full pt-2 pb-2 px-4 shadow-md cursor-pointer ${darkTheme ? "" :"bg-[#FF4D4D]/40"}`}>Tailwind CSS</h1>
                    <h1 className={`bg-[#FF4D4D]/10 rounded-full pt-2 pb-2 px-4 shadow-md cursor-pointer ${darkTheme ? "" :"bg-[#FF4D4D]/40"}`}>Firebase</h1>
                    <h1 className={`bg-[#FF4D4D]/10 rounded-full pt-2 pb-2 px-4 shadow-md cursor-pointer ${darkTheme ? "" :"bg-[#FF4D4D]/40"}`}>Gemini API</h1>
                </div>
                <button className={`flex flex-row items-center border-2  px-6 py-3 rounded-2xl transform transition hover:-translate-y-2 hover:scale-105 duration-500 ${darkTheme ? "bg-white text-black" : "bg-black text-white"}`}>
                    <p className="pr-2">View Project</p>
                    <FaLongArrowAltRight />
                </button>
            </section>
            <section className="flex-[2]">
                <div className="relative group rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-500 h-[450px]">
                    <img
                        src={prepWise}
                        alt="navdrive"
                        className="rounded-xl object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="px-4 py-2 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-200 transition">
                            Coming Soon
                        </button>
                    </div>
                </div>
            </section>
        </div>
        </div>
    </>
    );
}
