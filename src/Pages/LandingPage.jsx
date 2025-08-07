import React from 'react'
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
const LandingPage = () => {

  useGSAP(() => {

    gsap.to(".left-bar", {
      x: -500,
      opacity: 0,
      duration: 1,
      ease: "power1.inOut",
    });
    gsap.to(".right-bar", {
      x: 500,
      opacity: 0,
      duration: 1,
      ease: "power1.inOut",
    });

    gsap.to("#landingPage", {
        y:-15000,
        scale: 15,
        opacity: 0,
        duration: 5,
        ease: "power3.inOut",
        delay: 0.2,
    });
  }, []);

  return (
      <>
    <div id={'landingPage'} className={'w-svw h-svh flex justify-center items-center absolute top-0 left-0 bg-[#0A0A0A] overflow-hidden'} >
      <div className={'left-bar h-full w-1 bg-[#FF4D4D] relative right-[140px] rotate-6'}></div>
      <div className={'left-bar h-full w-1 bg-[#FF4D4D] relative right-[40px] rotate-6 md:right-[40px]'}></div>
      <div >
        <h1 className={'text-lg md:text-[7rem]'}>Welcome</h1>
      </div>
      <div className={'right-bar h-full w-1 bg-[#FF4D4D] relative left-[140px] rotate-6'}></div>
      <div className={'right-bar h-full w-1 bg-[#FF4D4D] relative left-[40px] rotate-6 md:left-[40px]'}></div>
    </div>
      </>
  )
}
export default LandingPage