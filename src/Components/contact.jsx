import React from 'react'
import { CiLinkedin, CiMail  } from "react-icons/ci";
import {  FaGithub } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {useGSAP} from '@gsap/react';
import {SplitText} from 'gsap/SplitText';
import {useDarkTheme} from '../Context/Context.jsx';
import emailjs from "emailjs-com";
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const {darkTheme}= useDarkTheme();

    const githubHandler = ()=>{
        window.open("https://github.com/darth-sagar", "_blank");
    }
    const linkedinHandler = ()=>{
        window.open("https://www.linkedin.com/in/sagar-saini-621b8a307/", "_blank");
    }
    const mailHandler = ()=>{
        window.open("mailto:work.sagarsaini@gmail.com", "_blank");
    }
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            "service_b6n3b2p",
            "template_65fyz52",
            e.target,
            "pDWFVuOHhR8mxlWup"
        ).then(
            (result) => { alert("Message sent!"); },
            (error) => { alert("Failed to send "); }
        );
    };

    useGSAP(()=>{
        const mm = gsap.matchMedia();
        mm.add("(min-width: 768px)", () => {
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
                    x: -100,
                    opacity: 0.2,
                    ease: 'power1.inOut',
                    scrollTrigger: {
                        trigger: card,
                        start: '60% 20%',
                        end: '0% 0%',
                        markers:false,
                        scrub: 3,
                    },
                    stagger:0.08,
                })
            })
            gsap.from('.contact-form', {
                x: -100,
                opacity: 0,
                ease: 'power1.inOut',
                scrollTrigger: {
                    trigger: '.contact-form',
                    start: '60% 0%',
                    end: '70%',
                    scrub: 3,
                    markers:false,
                }
            })
            gsap.from('.contact-buttons', {
                x: 100,
                opacity: 0,
                ease: 'power1.inOut',
                scrollTrigger: {
                    trigger: '.contact-buttons',
                    start: '60% 0%',
                    end: '70%',
                    scrub: 3,
                    markers:false,
                }
            })
        })
        mm.add("(max-width: 767px)", () => {
            const split= new SplitText(".heading2", {type:" chars"});
            gsap.from(split.chars, {
                x: 150,
                opacity: 0,
                duration: 1.4,
                ease: "power1.inOut",
                scale: 1.5,
                scrollTrigger: {
                    trigger: ".heading2",
                    start: "60% 20%",
                    end: "10% 10%",
                    scrub: 4,
                    markers:false,

                },
                stagger:0.08,
            })

            const contactHeading = gsap.utils.toArray('.contact-heading');
            contactHeading.forEach((card) => {
                gsap.from(card, {
                    x: -100,
                    opacity: 0.2,
                    ease: 'power1.inOut',
                    scrollTrigger: {
                        trigger: card,
                        start: '50% 20%',
                        end: '10% 10%',
                        markers:false,
                        scrub: 3,
                    },
                    stagger:0.1,
                })
            })
            gsap.from('.contact-form', {
                y: -150,
                opacity: 0,
                ease: 'power1.inOut',
                scrollTrigger: {
                    trigger: '.contact-form',
                    start: '110% 15%',
                    end: '120% 0%',
                    scrub: 3,
                    delay:0.2,
                }
            })
            gsap.from('.contact-buttons', {
                x: -100,
                opacity: 0,
                ease: 'power1.inOut',
                scrollTrigger: {
                    trigger: '.contact-buttons',
                    start: '110% 15%',
                    end: '120% 0%',
                    markers:false,
                    scrub: 3,
                    delay:0.2,
                }
            })
        })
    })

    return (
        <div id="contact" className={`mr-8 ml-8 mt-12 md:mt-52 mb-16 max-w-svw `}>
            <span className={'text-[#9A9A9B] text-xl uppercase ml-8 mb-10 heading2 mt-52'} >get in touch</span>
            <div className={`flex flex-col md:flex-col items-center justify-center mb-10 contact-heading`}>
                <h1 className={`lg:text-6xl mt-32 text-[1.2rem] contact-heading ${darkTheme?"text-white":"text-black" }`}>Let's Create Something Together</h1>
                <h1 className={`hidden md:block mt-5 contact-heading md:text-2xl ${darkTheme?"text-white":"text-black" } `}>Have a project in mind? Let's bring your ideas to life. I'm currently available for</h1>
                <h1 className={`mb-10 contact-heading ${darkTheme?"text-white":"text-black" }`}>freelance projects and collaborations.</h1>
            </div>
            <div className="flex flex-col md:flex-row w-full gap-10 items-center">
                <section className="w-full md:w-1/2 contact-buttons flex flex-col items-center md:items-start">
                    <h1 className={`text-xl md:text-4xl ${darkTheme?"text-white":"text-black" } `}>Connect With Me</h1>
                    <div className="flex flex-row md:items-start space-x-5 mt-10">
                        <button onClick={githubHandler} className="bg-black text-5xl border-2 rounded-xl p-2 hover:scale-125 duration-300 "> <FaGithub/> </button>
                        <button onClick={linkedinHandler} className="bg-black text-5xl border-2 rounded-xl p-2 hover:scale-125 duration-300  "> <CiLinkedin /> </button>
                        <button onClick={mailHandler} className="bg-black text-5xl border-2 rounded-xl p-2 hover:scale-125 duration-300 "> <CiMail /> </button>
                    </div>
                </section>
                <section className="w-full md:w-1/2 contact-form">
                    <div className="flex flex-col w-full">
                        <form onSubmit={sendEmail} className="flex flex-col gap-5 mx-auto p-6 rounded-2xl w-full">
                            <div className="relative">
                                <input type="text" id="name" placeholder="Name*" className={`${darkTheme?"text-white" : "text-black"} peer w-full px-4 py-3  bg-transparent border border-gray-600 rounded-lg outline-none focus:border-[#FF4D4D] transition-all duration-300 `}/>
                            </div>
                            <div className="relative">
                                <input type="email" id="email" placeholder="Email*" className={`peer w-full px-4 py-3  bg-transparent border border-gray-600 rounded-lg outline-none focus:border-[#FF4D4D] transition-all duration-300 ${darkTheme?"text-white" : "text-black"}`}/>
                            </div>
                            <div className="relative">
                                <textarea id="message" rows="6" placeholder="Message*" className={`${darkTheme?"text-white" : "text-black"} peer w-full px-4 py-3  bg-transparent border border-gray-600 rounded-lg outline-none focus:border-[#FF4D4D] transition-all duration-300 resize-none`}/>
                            </div>
                            <button type="submit" className="group flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-[#FF4D4D] to-[#ff1e56] hover:scale-105 hover:shadow-lg hover:shadow-[#FF4D4D]/50 transition-all duration-300">
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
