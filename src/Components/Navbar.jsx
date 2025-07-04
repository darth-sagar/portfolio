import React, { useState} from 'react'
import logo from '../Assets/logo.svg'
import { IoMoonOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { LuSunDim } from "react-icons/lu";
import {useGSAP} from '@gsap/react';
import gsap from "gsap";
import {useDarkTheme} from '../Context/Context.jsx';

export const Navbar = () => {
    const {darkTheme, setDarkTheme}= useDarkTheme();
    const [isOpen, setIsOpen] = useState(false);
    useGSAP(()=>{
        gsap.to("#themebutton", {
            rotate: 360,
            duration: 1,
            ease: "back.inOut",
        })
    },[darkTheme])

    const clickChangeTheme=()=>{
        setDarkTheme(prev=>!prev);

    }
    const clickOpenMenu = () => {
        setIsOpen(prev=>!prev);
    }
    return (
        <>
            <div className={`absolute flex flex-col items-center justify-center h-[16vh] w-full`}>
                <nav className={"w-[92vw] h-[10vh] flex items-center justify-between px-4"}>
                    <div className={`${darkTheme?  "" : "border-black"} bg-white rounded-full w-12 h-12 flex items-center justify-center`}>
                        <img src={logo} alt="Logo" className="w-10 h-10 " />
                    </div>
                    <div className={`${darkTheme ? "text-white" : "text-black"} space-x-8 hidden md:flex text-lg`}>
                        <button>ABOUT</button>
                        <button>WORK</button>
                        <button>CONTACT</button>
                        <button >
                            <div  onClick={clickChangeTheme}  className={`${darkTheme ? "bg-white text-black" : "bg-black text-white"} w-12 h-12 flex flex-col items-center justify-center rounded-full text-black z-10`} >
                                {darkTheme? <LuSunDim id="themebutton" /> :<IoMoonOutline id="themebutton" /> }
                            </div>
                        </button>
                    </div>
                    <button  onClick={clickOpenMenu} className={`${darkTheme?"text-white":"text-black"} md:hidden  button z-20 text-3xl`}>{
                        isOpen? <RxCross2 />  :<GiHamburgerMenu />
                    }
                    </button>
                </nav>
            </div>
            {
                isOpen && (
                    <>

                        <div className={ `${darkTheme ? "text-white"  : "text-black" } bg-black/30  md:hidden flex flex-col items-center justify-center space-y-5 w-full h-[100vh] absolute top-0 left-0 z-10`}>
                            <button>About</button>
                            <button>Work</button>
                            <button>Contact</button>
                            <button>
                                <div id="themebutton" className={'w-12 h-12 flex flex-col items-center justify-center rounded-full text-black bg-white'} onClick={clickChangeTheme}>
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
