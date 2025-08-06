import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { IoIosCode } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";

const Aboutme = () => {
    return (

        <div className={'flex flex-col md:flex-row mt-20'}>
        <div className={'h-svh ml-8 mr-4 w-svw flex flex-col md:ml-48 md:mt-20 md:w-5/12'}>
            <div>
                <h1 className={'text-5xl text-amber-100'}>Hi, I'm</h1>
                <h1 className={'text-5xl text-[#FF4D4D]'}>Sagar saini</h1>
            </div>
            <div className={'mt-5 text-xl'}>
                <p className={'flex flex-row items-center'}><CiLocationOn className={'text-[#FF4D4D]'}/><p className={'pl-2'}>Based In Delhi, India</p> </p>
                <p className={'flex flex-row items-center'} ><IoIosCode className={'text-[#FF4D4D]'} /> <p className={'pl-2'}>Full Stack Developer </p> </p>
            </div>
            <div className={'w-1/2 pt-3'}>
                <h4>With a passion for building complete web solutions, I bring together clean UI design, efficient backend logic, and emerging AI/ML capabilities to create smart, adaptable, and user-focused applications</h4>
            </div>
            <div className={'mt-8'}>
                <button className={'rounded-xl bg-[#FF4D4D] p-4 mr-5 border-2 border-amber-50'}>Get In Touch</button>
                <button className={'rounded-xl bg-transparent p-4 border-2 border-[#FF4D4D]'} >View Projects</button>
            </div>
        </div>

        <div className={'mt-30'}>
            <h1 className={'text-2xl mb-5'}>Key Skills</h1>
            <div className={'flex flex-row space-x-2 text-[1.2rem]'}>
                <h1 className={'bg-[#FF4D4D]/10 rounded-full pt-2 pb-2 px-4'}>HTML</h1>
                <h1 className={'bg-[#FF4D4D]/10 rounded-full pt-2 pb-2 px-4 '} >CSS</h1>
                <h1 className={'bg-[#FF4D4D]/10 rounded-full pt-2 pb-2 px-4'} >Tailwind CSS</h1>
                <h1 className={'bg-[#FF4D4D]/10 rounded-full pt-2 pb-2 px-4'} >JavaScript</h1>
            </div>
            <div className={'flex flex-row space-x-2 text-[1.2rem] mt-2'}>
                <h1 className={'bg-[#FF4D4D]/10 rounded-full pt-2 pb-2 px-4'} >TypeScript</h1>
                <h1 className={'bg-[#FF4D4D]/10 rounded-full pt-2 pb-2 px-4'} >React</h1>
                <h1 className={'bg-[#FF4D4D]/10 rounded-full pt-2 pb-2 px-4'} >Next.js</h1>
                <h1 className={'bg-[#FF4D4D]/10 rounded-full pt-2 pb-2 px-4'} >Node.Js</h1>
            </div>
            <div className={'flex flex-row space-x-2 text-[1.2rem] mt-2'}>
                <h1 className={'bg-[#FF4D4D]/10 rounded-full pt-2 pb-2 px-4'} >MongoDB</h1>
                <h1 className={'bg-[#FF4D4D]/10 rounded-full pt-2 pb-2 px-4'}>MySQL</h1>
                <h1 className={'bg-[#FF4D4D]/10 rounded-full pt-2 pb-2 px-4'} >Python</h1>
                <h1 className={'bg-[#FF4D4D]/10 rounded-full pt-2 pb-2 px-4'} >c++</h1>
            </div>
            <div className={'mt-5'}>
                <h1>Sevices</h1>
                <h1 className={'flex flex-row items-center'}><FaArrowRightLong className={'text-[#FF4D4D]'}/> <p className={'pl-2'}>Full Stack Application Development</p> </h1>
                <h1 className={'flex flex-row items-center'} ><FaArrowRightLong className={'text-[#FF4D4D]'}/> <p className={'pl-2'}>Web Design & Development</p> </h1>
                <h1 className={'flex flex-row items-center'} ><FaArrowRightLong className={'text-[#FF4D4D]'}/> <p className={'pl-2'}>Machine Learning & AI</p> </h1>
            </div>
        </div>

        </div>
    )
}

export default Aboutme;