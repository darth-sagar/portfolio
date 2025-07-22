import React from 'react'
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
const LandingPage = () => {
  useGSAP(()=>{
    gsap.to("#landingPage", {
        y: -500,
        opacity: 0,
        duration: 3,
        ease: "power1.inOut",
        repeat:-1,
    })
  })
  return (
    <div id={'landingPage'} className={'w-full h-full flex justify-center items-center absolute bg-[#0A0A0A] overflow-hidden'} >
      <div className={'h-full w-1 bg-[#FF4D4D] relative right-[140px] rotate-6'}></div>
      <div className={'h-full w-1 bg-[#FF4D4D] relative right-[40px] rotate-6 md:right-[40px]'}></div>
      <div >
        <h1 className={'text-lg md:text-[7rem]'}>Welcome</h1>
      </div>
      <div className={'h-full w-1 bg-[#FF4D4D] relative left-[140px] rotate-6'}></div>
      <div className={'h-full w-1 bg-[#FF4D4D] relative left-[40px] rotate-6 md:left-[40px]'}></div>
    </div>
  )
}
export default LandingPage