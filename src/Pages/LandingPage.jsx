import React from 'react'

const LandingPage = () => {
  return (
    <div className={'w-full h-full flex justify-center items-center absolute'}>
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