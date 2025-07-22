import React,{ useRef} from 'react'
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {ScrollTrigger} from 'gsap/all';

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {

    const scrollref = useRef();

    useGSAP(() => {
        const sections = gsap.utils.toArray(scrollref.current.children);
        sections.forEach(section => {
            gsap.to(section, {
                scrollTrigger: {
                    trigger: section,
                    start: "top 10%",
                    end: "80% 80%",
                    scrub: true,
                    toggleActions: "play none none reverse",
                    markers: true,
                },
                y: -100,
                opacity: 0,
                duration: 1.5,
            })
        })
    },[]);

    return (
        <div >
            <div className={"w-[300%] rotate-9 absolute top-[15rem] space-y-8 text-[7rem]"} ref={scrollref}>
                    <h1 id={"first"}>TypeScript / JavaScript / C++ / Python /Redux</h1>
                    <h1 id={"second"}>Node.js / React.js / G-SAP / javascript / Tailwind CSS</h1>
                    <h1 id={"first"}>G-SAP / Three.js / CSS / HTML / Framer Motion</h1>
            </div>
        </div>
    )
}
export default Hero;