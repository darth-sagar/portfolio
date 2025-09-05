import React from 'react'
import { CiLinkedin, CiMail  } from "react-icons/ci";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

const Contact = () => {
    return (
        <div className={`mr-8 ml-8 mt-52 mb-40`}>
            <span className={'text-[#9A9A9B] text-xl uppercase ml-8 mb-10 heading'} >get in touch</span>
            <div className={`flex flex-row md:flex-col items-center justify-center`}>
                <h1>Let's Create Something Together</h1>
                <p>Have a project in mind? Let's bring your ideas to life. I'm currently available for </p>
                <p>freelance projects and collaborations.</p>
            </div>
            <div className={`flex flex-col md:flex-row justify-evenly`}>
                <section>
                    <h1>Connect With Me</h1>
                    <div>
                        <button> <FaGithub/> </button>
                        <button> <FaDiscord/> </button>
                        <button> <CiLinkedin /> </button>
                        <button> <CiMail /> </button>
                    </div>
                </section>
                <section >
                    <div className={`flex flex-col md:flex-col`}>
                        <input type={'text'} placeholder={'Name'}/>
                        <input type={'email'} placeholder={'Email'}/>
                        <textarea placeholder={'Message'}/>
                        <button className={`flex flex-row items-center `}>Send <FaLongArrowAltRight className={`ml-2`}/> </button>
                    </div>
                </section>
            </div>
        </div>
    )
}
export default Contact
