import React from 'react'
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
const LandingPage = () => {

  useGSAP(()=>{
    gsap.to("#landingPage", {
        scale:15,
        opacity: 0,
        duration: 4,
        ease: "power3.inOut"
    })
  })
  useGSAP(()=>{
    gsap.to("#left",{
        x: 500,
        opacity: 0,
      duration: 1,
        ease: "power1.inOut",
    })
  })
  useGSAP(()=>{
    gsap.to("#right",{
      x: -500,
      opacity: 0,
      duration: 1,
      ease: "power1.inOut",
    })
  })
  return (
    <div id={'landingPage'} className={'w-svw h-full flex justify-center items-center absolute bg-[#0A0A0A]'} >
      <div id={"left"} className={'h-full w-1 bg-[#FF4D4D] relative right-[140px] rotate-6'}></div>
      <div id={"left"} className={'h-full w-1 bg-[#FF4D4D] relative right-[40px] rotate-6 md:right-[40px]'}></div>
      <div >
        <h1 className={'text-lg md:text-[7rem]'}>Welcome</h1>
      </div>
      <div id={"right"} className={'h-full w-1 bg-[#FF4D4D] relative left-[140px] rotate-6'}></div>
      <div id={"right"} className={'h-full w-1 bg-[#FF4D4D] relative left-[40px] rotate-6 md:left-[40px]'}></div>
    </div>
  )
}
export default LandingPage