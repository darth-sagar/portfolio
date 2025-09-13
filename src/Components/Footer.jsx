import React from 'react'
import { FaRegCopyright } from "react-icons/fa6";
import { FaArrowTurnUp } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import {ScrollToPlugin} from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollToPlugin);
import gsap from 'gsap';
import {useDarkTheme} from '../Context/Context.jsx';
export const Footer = () => {
    const {darkTheme} = useDarkTheme();

    return (
        <div className={`flex justify-between md:justify-between h-20 md:h-40 items-center border-t-[1px] mt-10 md:mt-20 border-[#9A9A9B]  }`}>
            <div className={'ml-16'}>
                <button className={`border-2 md:p-3 rounded-full ${darkTheme?"text-white":"text-black border-2 p-2 rounded-full" }`}> <a href={`https://github.com/darth-sagar/portfolio`} target={'_blank'} > <FiGithub /></a></button>
            </div>
            <div>
                <p className={`hidden md:inline-flex md:text-lg flex-row items-center ${darkTheme?"text-white":"text-black" }`}><FaRegCopyright /> <p className={'md:ml-2'}>2025 Sagar Saini.All Rights reserved.</p> </p>
            </div>
            <div className={'mr-16'}>
                <button onClick={() => {
                    gsap.to(window, {
                        duration: 1.5,
                        scrollTo: { y: 0},
                        ease: "power2.inOut",
                    });}}
                 className={`flex flex-row items-center cursor-pointer ${darkTheme?"text-white":"text-black" } `}> Back To top <FaArrowTurnUp /></button>
            </div>
        </div>
    )
}
