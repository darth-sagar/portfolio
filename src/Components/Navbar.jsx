import React, { useState} from 'react'
import logo from '../Assets/logo.svg'
import { IoMoonOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { LuSunDim } from "react-icons/lu";
import {useGSAP} from '@gsap/react';
import gsap from "gsap";
import {useDarkTheme} from '../Context/Context.jsx';
import { useEffect } from "react";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export const Navbar = () => {
    const {darkTheme, setDarkTheme}= useDarkTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useGSAP(()=>{
        gsap.to("#themebutton", {
            rotate: 360,
            duration: 1,
            ease: "back.inOut",
        })
    },[darkTheme])

    useGSAP(()=>{
        gsap.from("#navbar", {
            duration: 1,
            opacity:0,
            ease: "power1.inOut",
        })
    },[])

    const clickChangeTheme=()=>{
        setDarkTheme(prev=>!prev);

    }

    const clickOpenMenu = () => {
        setIsOpen(prev=>!prev);
    }

    return (
        <>
            <div id={"top"} className={`fixed flex flex-col items-center justify-center h-[16vh] ${
                scrolled ? " backdrop-blur-md " : "bg-transparent" } z-30 mr-5 w-full`}>
                <nav className={"w-[90vw] h-[10vh] flex items-center justify-between px-4"}>
                    <div className={`${darkTheme?  "" : "border-black"} bg-white rounded-full w-12 h-12 flex items-center justify-center z-20`}>
                        <img src={logo} alt="Logo" className="w-10 h-10" />
                    </div>
                    <div className={`${darkTheme ? "text-white" : "text-black"} space-x-8 hidden md:flex text-lg z-20`}>
                        <button onClick={() => {
                            gsap.to(window, {
                                duration: 1,
                                scrollTo: "#about",
                                ease: "power2.inOut",
                            });
                        }} className={`hover:scale-x-110 relative
                              after:content-[''] 
                              after:absolute 
                              after:left-0 
                              after:bottom-[1px] 
                              after:w-0 
                              after:h-[2px] 
                              after:bg-[#FF4D4D] 
                              after:transition-all 
                              after:duration-300 
                              hover:after:w-full`}>ABOUT</button>
                        <button onClick={() => {
                            gsap.to(window, {
                                duration: 0.5,
                                scrollTo: { y: "#projectsection", autoKill: true },
                                ease: "power2.inOut",
                            });
                        }} className={`hover:scale-105 relative
                              after:content-[''] 
                              after:absolute 
                              after:left-0 
                              after:bottom-[1px] 
                              after:w-0 
                              after:h-[2px] 
                              after:bg-[#FF4D4D] 
                              after:transition-all 
                              after:duration-300 
                              hover:after:w-full`} >WORK</button>
                        <button className={`hover:scale-105 relative
                              after:content-[''] 
                              after:absolute 
                              after:left-0 
                              after:bottom-[1px] 
                              after:w-0 
                              after:h-[2px] 
                              after:bg-[#FF4D4D] 
                              after:transition-all 
                              after:duration-300 
                              hover:after:w-full`} >CONTACT</button>
                        <button >
                            <div onClick={clickChangeTheme}  className={`${darkTheme ? "bg-white text-black" : "bg-black text-white"} w-12 h-12 flex flex-col items-center justify-center rounded-full text-black z-20`} >
                                {darkTheme? <LuSunDim id="themebutton" /> :<IoMoonOutline id="themebutton" /> }
                            </div>
                        </button>
                    </div>
                    <button  onClick={clickOpenMenu} className={`${darkTheme?"text-white":"text-black"} md:hidden button z-20 text-3xl`}>{
                        isOpen? <RxCross2 />  :<GiHamburgerMenu />
                    }
                    </button>
                </nav>
            </div>
            {
                isOpen && (
                    <>
                        <div className={ `${darkTheme ? "text-white"  : "text-black" } backdrop-blur-md  md:hidden flex flex-col items-center justify-center space-y-5 w-full h-[100vh] fixed top-0 left-0 z-20`}>
                            <button onClick={() => {
                                gsap.to(window, {
                                    duration: 1,
                                    scrollTo: "#about",
                                    ease: "power2.inOut",
                                });
                            }} className={`hover:scale-105 relative
                              after:content-[''] 
                              after:absolute 
                              after:left-0 
                              after:bottom-[1px] 
                              after:w-0 
                              after:h-[2px] 
                              after:bg-[#FF4D4D] 
                              after:transition-all 
                              after:duration-300 
                              hover:after:w-full`}>About</button>
                            <button onClick={() => {
                                gsap.to(window, {
                                    duration: 0.5,
                                    scrollTo: { y: "#projectsection", autoKill: true },
                                    ease: "power2.inOut",
                                });
                            }} >Work</button>
                            <button>Contact</button>
                            <button>
                                <div id="themebutton" className={`w-12 h-12 flex flex-col items-center justify-center rounded-full  ${darkTheme? "text-black bg-white": " text-white bg-black "}`} onClick={clickChangeTheme}>
                                    {darkTheme?<IoMoonOutline id="themebutton" />:<LuSunDim id="themebutton"/>}
                                </div>
                            </button>
                        </div>
                    </>
                )
            }
        </>

    )
}
