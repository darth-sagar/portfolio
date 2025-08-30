import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        title: "NavDrive",
        description:
            "An autonomous car project using Raspberry Pi, Arduino and a TFLite steering model. Live camera feed, on-screen predictions, and DAgger-based data aggregation.",
        tech: ["Raspberry Pi", "Arduino", "TFLite", "OpenCV", "DAgger"],
        github: "https://github.com/darth-sagar/NavDrive",
        image: "https://via.placeholder.com/900x560.png?text=NavDrive+Preview",
    },
    {
        title: "Autonomous Surveillance Drone",
        description:
            "A patrol drone with object detection, obstacle avoidance, automated pathing, and live video feed using a Raspberry Pi camera.",
        tech: ["Raspberry Pi", "OpenCV", "YOLO", "PID", "Telemetry"],
        github: "#", // TODO: replace with your repo link
        image: "https://via.placeholder.com/900x560.png?text=Surveillance+Drone",
    },
    {
        title: "Pomodoro Watch",
        description:
            "Custom Arduino Pomodoro timer with IR reset, 50‑minute cycles, and 16x2 LCD display.",
        tech: ["Arduino", "C++", "IR Sensor", "LCD 16x2"],
        github: "#", // TODO: replace with your repo link
        image: "https://via.placeholder.com/900x560.png?text=Pomodoro+Watch",
    },
];

export default function ProjectsSection() {
    const containerRef = useRef(null);

    // Intro + scroll‑in animations for rows and their pieces
    useGSAP(
        () => {
            // Section title
            gsap.from(".projects-title", {
                y: 20,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
            });

            // Each row: animate text items and image when scrolled into view
            gsap.utils.toArray(".project-row").forEach((row) => {
                const textEls = row.querySelectorAll(".project-text > *");
                const imgEl = row.querySelector(".project-image");

                gsap.from(textEls, {
                    y: 24,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    stagger: 0.08,
                    scrollTrigger: {
                        trigger: row,
                        start: "top 80%",
                        once: true,
                    },
                });

                gsap.from(imgEl, {
                    y: 30,
                    opacity: 0,
                    duration: 0.9,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: row,
                        start: "top 80%",
                        once: true,
                    },
                });
            });
        },
        { scope: containerRef }
    );

    // Hover animation handlers for images (scale + lift + shadow)
    const handleImgEnter = (e) => {
        gsap.to(e.currentTarget, {
            scale: 1.06,
            y: -10,
            boxShadow: "0 25px 45px rgba(0,0,0,0.25)",
            duration: 0.35,
            ease: "power3.out",
        });
    };

    const handleImgLeave = (e) => {
        gsap.to(e.currentTarget, {
            scale: 1,
            y: 0,
            boxShadow: "0 0 0 rgba(0,0,0,0)",
            duration: 0.35,
            ease: "power3.out",
        });
    };

    return (
        <section ref={containerRef} className="max-w-6xl mx-auto py-16 px-6">
            <h2 className="projects-title text-3xl md:text-4xl font-bold mb-12 text-center">
                My Projects
            </h2>

            <div className="space-y-20">
                {projects.map((p, idx) => (
                    <div key={idx} className="project-row grid md:grid-cols-2 gap-10 items-center">
                        {/* Left: Text */}
                        <div className="project-text order-2 md:order-1">
                            <h3 className="text-2xl md:text-3xl font-semibold mb-3">{p.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300 mb-5 leading-relaxed">{p.description}</p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {p.tech.map((t, i) => (
                                    <span
                                        key={i}
                                        className="bg-[#FF4D4D]/20 text-[#FF4D4D] rounded-full pt-1 pb-1 px-3 text-sm backdrop-blur-md shadow-sm"
                                    >
                    {t}
                  </span>
                                ))}
                            </div>

                            <a
                                href={p.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block rounded-xl bg-[#FF4D4D] text-white py-2 px-4 transition-transform duration-300 hover:scale-105 hover:-translate-y-1 hover:shadow-lg"
                            >
                                View Project
                            </a>
                        </div>

                        {/* Right: Image */}
                        <div className="order-1 md:order-2">
                            <img
                                src={p.image}
                                alt={p.title}
                                className="project-image w-full rounded-2xl shadow-md will-change-transform select-none"
                                onMouseEnter={handleImgEnter}
                                onMouseLeave={handleImgLeave}
                                draggable={false}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
