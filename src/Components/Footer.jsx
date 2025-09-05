import React from 'react'
import { FaRegCopyright } from "react-icons/fa6";
import { FaArrowTurnUp } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
export const Footer = () => {

    return (
        <div className={'flex justify-between h-40 items-center border-t-[1px] border-b-gray-500 mt-20'}>
            <div className={'ml-16'}>
                <button className={''}> <a href={'https://github.com/darth-sagar'} target={'_blank'} > <FiGithub /></a></button>
            </div>
            <div>
                <p className={'flex flex-row items-center'}><FaRegCopyright /> <p className={'ml-2'}>2025 Sagar Saini.All Rights reserved.</p> </p>
            </div>
            <div className={'mr-16'}>
                <a href={"/"}><button className={'flex flex-row items-center'}> <p className={'mr-2'}>Back To top</p> <FaArrowTurnUp /></button></a>
            </div>
        </div>
    )
}
