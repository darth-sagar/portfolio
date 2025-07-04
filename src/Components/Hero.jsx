import React from 'react'
import {gsap} from 'gsap';
import {useGSAP} from '@gsap/react';

export const Hero = () => {
    useGSAP(
        ()=>{
            gsap.to("#patanahi",{
                rotate:360,
                duration: 2,
                ease: "power1.inOut",
                x:1500,
            })
        },[]
    )
    return (
        <div className={"h-full relative"}>
            <div >
                <h1>Hi I'm Sagar</h1>
                <h1>A Developer </h1>
            </div>
            <div id ="patanahi"className={'w-20 h-20 bg-white '}>
            </div>
        </div>
    )
}
