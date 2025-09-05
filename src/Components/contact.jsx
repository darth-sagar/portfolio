import React from 'react'
import { CiLinkedin, CiMail  } from "react-icons/ci";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";

const Contact = () => {
    return (
        <div className={`mr-8 ml-8 mt-52 mb-40 max-w-svw `}>
            <span className={'text-[#9A9A9B] text-xl uppercase ml-8 mb-10 heading mt-52'} >get in touch</span>
            <div className={`flex flex-row md:flex-col items-center justify-center mb-10`}>
                <h1 className={`text-6xl mt-32`}>Let's Create Something Together</h1>
                <p className={`mt-5`}>Have a project in mind? Let's bring your ideas to life. I'm currently available for </p>
                <p className={`mb-10`}>freelance projects and collaborations.</p>
            </div>
            <div className="flex flex-col md:flex-row w-full gap-10 items-center">
                {/* Left section */}
                <section className="w-full md:w-1/2">
                    <h1 className="text-4xl">Connect With Me</h1>
                    <div className="flex flex-row items-start space-x-5 mt-10">
                        <button className="bg-black text-5xl border-2 rounded-xl p-2"> <FaGithub/> </button>
                        <button className="bg-black text-5xl border-2 rounded-xl p-2"> <FaDiscord/> </button>
                        <button className="bg-black text-5xl border-2 rounded-xl p-2"> <CiLinkedin /> </button>
                        <button className="bg-black text-5xl border-2 rounded-xl p-2"> <CiMail /> </button>
                    </div>
                </section>

                {/* Right section */}
                <section className="w-full md:w-1/2">
                    <div className="flex flex-col w-full">
                        <form className="flex flex-col gap-5 mx-auto p-6 rounded-2xl w-full">
                            {/* Name */}
                            <div className="relative">
                                <input
                                    type="text"
                                    id="name"
                                    placeholder=" "
                                    className="peer w-full px-4 py-3 text-white bg-transparent border border-gray-600 rounded-lg outline-none focus:border-[#FF4D4D] transition-all duration-300"
                                />
                                <label
                                    htmlFor="name"
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#FF4D4D]"
                                >
                                    Name*
                                </label>
                            </div>

                            {/* Email */}
                            <div className="relative">
                                <input
                                    type="email"
                                    id="email"
                                    placeholder=" "
                                    className="peer w-full px-4 py-3 text-white bg-transparent border border-gray-600 rounded-lg outline-none focus:border-[#FF4D4D] transition-all duration-300"
                                />
                                <label
                                    htmlFor="email"
                                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 transition-all duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#FF4D4D]"
                                >
                                    Email*
                                </label>
                            </div>

                            {/* Message */}
                            <div className="relative">
          <textarea
              id="message"
              rows="6"
              placeholder=" "
              className="peer w-full px-4 py-3 text-white bg-transparent border border-gray-600 rounded-lg outline-none focus:border-[#FF4D4D] transition-all duration-300 resize-none"
          />
                                <label
                                    htmlFor="message"
                                    className="absolute left-4 top-6 text-gray-400 transition-all duration-300 peer-placeholder-shown:top-7 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#FF4D4D]"
                                >
                                    Message*
                                </label>
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="group flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-[#FF4D4D] to-[#ff1e56] hover:scale-105 hover:shadow-lg hover:shadow-[#FF4D4D]/50 transition-all duration-300"
                            >
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
