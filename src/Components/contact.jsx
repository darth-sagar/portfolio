import React from 'react'
import { CiLinkedin, CiMail  } from "react-icons/ci";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {useGSAP} from '@gsap/react';
import {SplitText} from 'gsap/SplitText';
import {useDarkTheme} from '../Context/Context.jsx';
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const {darkTheme}= useDarkTheme();

    useGSAP(()=>{
        const split= new SplitText(".heading2", {type:" chars"});
        gsap.from(split.chars, {
            x: 150,
            opacity: 0,
            duration: 1.4,
            ease: "power1.inOut",
            scale: 1.5,
            scrollTrigger: {
                trigger: ".heading2",
                start: "40% -30%",
                end: "40% -40%",
                scrub: 3,

            },
            stagger:0.08,
        })
        const contactHeading = gsap.utils.toArray('.contact-heading');
        contactHeading.forEach((card) => {
            gsap.from(card, {
                y: -100,
                opacity: 0.2,
                ease: 'power1.inOut',
                scrollTrigger: {
                    trigger: card,
                    start: 'top -50%',
                    end: 'bottom -60%',
                    markers:false,
                    scrub: 3,
                },
                stagger:0.1,
            })
        })
        gsap.from('.contact-form', {
            x: -100,
            opacity: 0.2,
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '.contact-form',
                start: '100% -50%',
                end: '-60%',
                scrub: 3,
            }
        })
        gsap.from('.contact-buttons', {
            x: 100,
            opacity: 0.2,
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '.contact-form input',
                start: '110% -50%',
                end: '-60%',
                scrub: 3,
            }
        })
    })
    return (
        <div id="contact" className={`mr-8 ml-8 mt-52 mb-40 max-w-svw `}>
            <span className={'text-[#9A9A9B] text-xl uppercase ml-8 mb-10 heading2 mt-52'} >get in touch</span>
            <div className={`flex flex-row md:flex-col items-center justify-center mb-10 contact-heading`}>
                <h1 className={`text-6xl mt-32 contact-heading ${darkTheme?"text-white":"text-black" }`}>Let's Create Something Together</h1>
                <h1 className={`mt-5 contact-heading ${darkTheme?"text-white":"text-black" } `}>Have a project in mind? Let's bring your ideas to life. I'm currently available for </h1>
                <h1 className={`mb-10 contact-heading ${darkTheme?"text-white":"text-black" }`}>freelance projects and collaborations.</h1>
            </div>
            <div className="flex flex-col md:flex-row w-full gap-10 items-center">
                {/* Left section */}
                <section className="w-full md:w-1/2 contact-buttons">
                    <h1 className={`text-4xl ${darkTheme?"text-white":"text-black" } `}>Connect With Me</h1>
                    <div className="flex flex-row items-start space-x-5 mt-10">
                        <button className="bg-black text-5xl border-2 rounded-xl p-2 hover:scale-125 duration-300 "> <FaGithub/> </button>
                        <button className="bg-black text-5xl border-2 rounded-xl p-2 hover:scale-125 duration-300 "> <FaDiscord/> </button>
                        <button className="bg-black text-5xl border-2 rounded-xl p-2 hover:scale-125 duration-300  "> <CiLinkedin /> </button>
                        <button className="bg-black text-5xl border-2 rounded-xl p-2 hover:scale-125 duration-300 "> <CiMail /> </button>
                    </div>
                </section>

                {/* Right section */}
                <section className="w-full md:w-1/2 contact-form">
                    <div className="flex flex-col w-full">
                        <form className="flex flex-col gap-5 mx-auto p-6 rounded-2xl w-full">
                            {/* Name */}
                            <div className="relative">
                                <input
                                    type="text"
                                    id="name"
                                    placeholder=" "
                                    className="peer w-full px-4 py-3 text-white bg-transparent border border-gray-600 rounded-lg outline-none focus:border-[#FF4D4D] transition-all duration-300 "
                                />
                                <label
                                    htmlFor="name"
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#FF4D4D]"
                                >
                                    Name*
                                </label>
                            </div>

                            {/* Email */}
                            <div className="relative">
                                <input
                                    type="email"
                                    id="email"
                                    placeholder=" "
                                    className="peer w-full px-4 py-3 text-white bg-transparent border border-gray-600 rounded-lg outline-none focus:border-[#FF4D4D] transition-all duration-300 "
                                />
                                <label
                                    htmlFor="email"
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#FF4D4D]"
                                >
                                    Email*
                                </label>
                            </div>

                            {/* Message */}
                            <div className="relative">
          <textarea
              id="message"
              rows="6"
              placeholder=" "
              className=" peer w-full px-4 py-3 text-white bg-transparent border border-gray-600 rounded-lg outline-none focus:border-[#FF4D4D] transition-all duration-300 resize-none"
          />
                                <label
                                    htmlFor="message"
                                    className="absolute left-4 top-6 text-gray-400 transition-all duration-300 peer-placeholder-shown:top-7 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#FF4D4D]"
                                >
                                    Message*
                                </label>
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="group flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-[#FF4D4D] to-[#ff1e56] hover:scale-105 hover:shadow-lg hover:shadow-[#FF4D4D]/50 transition-all duration-300"
                            >
                                <span>Send</span>
                                <FaLongArrowAltRight className="transform group-hover:translate-x-2 transition-transform duration-300" />
                            </button>
                        </form>
                    </div>
                </section>
            </div>

        </div>
    )
}
export default Contact
