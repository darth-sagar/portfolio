import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const FlowSection = () => {
    const boxRef = useRef();

    useEffect(() => {
        gsap.fromTo(
            boxRef.current,
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: boxRef.current,
                    start: "top 80%", // when top of div is 80% from top of viewport
                    end: "top 30%",
                    toggleActions: "play none none reverse", // play when in view, reverse when out
                },
            }
        );
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div
                ref={boxRef}
                className="w-64 h-64 bg-purple-600 rounded-lg shadow-lg text-white text-center flex items-center justify-center text-2xl"
            >
                Webflow-style Scroll In
            </div>
        </div>
    );
};

export default FlowSection;
