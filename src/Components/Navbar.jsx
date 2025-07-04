import React ,{useState} from 'react'
import logo from '../Assets/logo.svg'
import { IoMoonOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState('light');
    const clickChangeTheme=()=>{
        setTheme('dark');
    }
    const clickOpenMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <div className={"flex flex-col items-center justify-center h-[16vh] w-full bg-amber-800"}>
                <nav className={"w-[92vw] h-[10vh] flex items-center justify-between bg-amber-400 shadow-md px-4"}>
                    <div>
                        <img src={logo} alt="Logo" className="w-10 h-10" />
                    </div>
                    <div className={"space-x-8 hidden md:flex"}>
                        <button>About</button>
                        <button>Work</button>
                        <button>Contact</button>
                        <button onclick={clickChangeTheme}>
                            <div className={'w-10 h-10 flex flex-col items-center justify-center rounded-full text-black bg-white'}>
                                <IoMoonOutline />
                            </div>
                        </button>
                    </div>
                    <button onClick={clickOpenMenu} className={"md:hidden text-black button z-20 text-3xl"}>{
                        isOpen? <RxCross2 />  :<GiHamburgerMenu />
                    }
                    </button>
                </nav>
            </div>
            {
                isOpen && (
                    <>

                        <div className={" bg-black/50  md:hidden flex flex-col items-center justify-center space-y-5 w-full h-[100vh] absolute top-0 left-0 z-10"}>
                            <button>About</button>
                            <button>Work</button>
                            <button>Contact</button>
                            <button>
                                <div className={'w-12 h-12 flex flex-col items-center justify-center rounded-full text-black bg-white'}>
                                    <IoMoonOutline />
                                </div>
                            </button>
                        </div>
                    </>
                )
            }
        </>

    )
}
