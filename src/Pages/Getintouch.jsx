import React from 'react'
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/all';
gsap.registerPlugin(ScrollTrigger)


const Getintouch = () => {

    return (
        <div className={`mb-5`}>
            <div id={'text'} className={'flex flex-col justify-center items-center w-full h-svh'}>
                <h1 className={`mb-5`}>GET IN TOUCH</h1>
                <h1 className={`text-6xl mt-5`}>Let's Create Something Together</h1>
                <h1 className={`text-xl mt-6`}>Have a project in mind? Let's bring your ideas to life. I'm currently available for</h1>
                <h1 className={`text-xl`} >freelance projects and collaborations.</h1>
            </div>
            <div className={`flex flex-row `}>
                <div className={`ml-20 mb-10 w-1/2`}>
                    <h1 className={'text-2xl mb-5'}>Connect with Me</h1>
                    <div className={`flex flex-row space-x-5 items-center`}>
                        <a className={'text-4xl rounded-xl border-2 border-b-gray-500 p-2'} href={'www.linkedin.com/in/sagar-saini-621b8a307'} target={'_blank'}> <button><CiLinkedin /></button> </a>
                        <a className={'text-4xl rounded-xl border-2 border-b-gray-500 p-2 '} href={"https://github.com/darth-sagar"} target={'_blank'}> <button><FiGithub /></button> </a>
                        <a className={'text-4xl rounded-xl border-2 border-b-gray-500 p-2 '} href={'mailto:work.sagarsaini@gmai.com?subject=Inquiry&body=Hello, I have and inquiry.'} target={"_blank"}> <button><IoMailOutline /></button> </a>
                    </div>
                </div>
                <div className={`pr-5`}>
                    <form>
                        <input className={'text-lg w-full mb-5 rounded-sm border-2 border-gray-500/10 p-3'} type={'text'} placeholder={'Name'}  />
                        <input className={'text-lg w-full mb-5 rounded-sm border-2 border-gray-500/10 p-3'} type={'email'} placeholder={'Email'}/>
                        <input className={'text-lg w-full mb-5 rounded-sm border-2 border-gray-500/10 p-3 pb-20'} type={'text'} placeholder={'Message*'}/>
                        <button className={'flex flex-row items-center bg-[#FF4D4D] rounded-lg p-4'}> <p className={'pr-3'}>Send Message</p> <FaArrowRightLong /></button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Getintouch;