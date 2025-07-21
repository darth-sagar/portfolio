import React,{ useRef} from 'react'
import gsap from 'gsap';
import {useGSAP} from '@gsap/react';
import {ScrollTrigger} from 'gsap/all';

gsap.registerPlugin(ScrollTrigger)

export const Hero = () => {


    return (
        <div >
            <div className={"w-[300%] rotate-9 absolute top-[15rem] space-y-8 text-[7rem]"}>
                    <h1 id={"first"}>TypeScript / JavaScript / C++ / Python /Redux</h1>
                    <h1 id={"second"}>Node.js / React.js / G-SAP / javascript / Tailwind CSS</h1>
                    <h1 id={"first"}>G-SAP / Three.js / CSS / HTML / Framer Motion</h1>
            </div>
        </div>
    )
}
