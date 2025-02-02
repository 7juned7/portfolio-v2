import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import mail from "../assets/email.svg";
import insta from "../assets/instagram.svg";
import whatsapp from "../assets/whatsapp.svg";
import github from "../assets/github.svg";
import twitter from "../assets/twitter-x.svg";
import phone from "../assets/phone.svg";
import mongodb from "../assets/mongodb.svg";
import express from "../assets/express.svg";
import react from "../assets/react.svg";
import node from "../assets/node.svg";
import me from "../assets/profile.png";
import cross from "../assets/cross.svg";

const Hero = () => {
    const [flag, setFlag] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleAboutme = () => {
        setFlag((prev) => !prev);
    };

    const socialLinks = [
        { id: 1, href: "https://www.instagram.com/webjuncture/", src: insta, alt: "Instagram" },
        { id: 2, href: "mailto:7juned7@gmail.com", src: mail, alt: "Email" },
        { id: 3, href: "https://wa.me/+918376962083", src: whatsapp, alt: "WhatsApp" },
        { id: 4, href: "tel:+918376962083", src: phone, alt: "Phone" },
        { id: 5, href: "https://github.com/7juned7", src: github, alt: "GitHub" },
        { id: 6, href: "#", src: twitter, alt: "Twitter" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            {
                flag && (

                    <div className="fixed top-0 bottom-0 z-[2] left-0 right-0 bg-black opacity-60"></div>
                )
            }

            <div className=" relative w-full max-w-[1800px] bg-black h-[85vh] flex justify-between sm:px-15 md:px-25 px-4 items-center">
                <div className="flex flex-col gap-6">
                    <h1 className="text-8xl text-white">Juned</h1>
                    <h1 className="text-4xl text-white">Full Stack Developer</h1>
                    <button
                        onClick={handleAboutme}
                        className="text-white text-2xl w-fit mt-10 bg-[#1771a5] px-6 py-2"
                    >
                        About Me
                    </button>
                </div>
                <div className="p-2">
                    <div
                        className="p-2 bg-black  rounded-l-2xl fixed  transform -translate-y-1/2 z-[1]"
                        style={{
                            right: `${Math.max(20 - scrollPosition / 10, 0)}px`,
                        }}
                    >
                        <ul className="flex flex-col gap-3">
                            {socialLinks.map((link) => (
                                <li className="w-[30px]" key={link.id}>
                                    <a
                                        href={link.href}
                                        aria-label={`Follow me on ${link.alt}`} // Added aria-label for screen readers
                                        target="_blank" // Ensure the link opens in a new tab
                                        rel="noopener noreferrer" // Prevent security risks for external links
                                    >
                                        <img
                                            className="w-full hover:scale-[1.1]"
                                            src={link.src}
                                            alt={link.alt}
                                            role="img" // Helps with screen readers to know it's an image
                                        />
                                    </a>
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>
            </div>

            <AnimatePresence>

                {flag && (
                    <>


                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 50 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="flex md:flex-row flex-col items-center shadow-sm shadow-blue-500 z-50 rounded-2xl gap-10 w-[80%] bg-black h-fit fixed top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 px-10 py-2"
                        >

                            <div className="absolute right-5 top-5 cursor-pointer" onClick={handleAboutme}>
                                <img src={cross} alt="close" />
                            </div>
                            <div className="flex flex-col gap-6">
                                <h2>
                                    <div className="text-[#1771a5] text-2xl mb-4">ABOUT ME</div>
                                </h2>
                                <p className="text-white text-lg">
                                    I am a BTech Mechanical Engineering student with a strong passion for web development.
                                    I specialize in helping business owners and busy developers design and build creative,
                                    user-friendly websites that align with their vision. My focus is on crafting engaging
                                    digital experiences that captivate visitors and keep them hooked.
                                </p>
                                <div className="flex gap-4 w-fit ml-[-10px]">
                                    {[{ img: mongodb, letter: "M" }, { img: express, letter: "E" }, { img: react, letter: "R" }, { img: node, letter: "N" }].map((tech, index) => (
                                        <div key={index} className="flex flex-col justify-center items-center gap-2">
                                            <div className="w-[40px]">
                                                <img src={tech.img} alt={tech.letter} />
                                            </div>
                                            <p className="text-xl text-white">{tech.letter}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>


                            <div className="max-w-[400px] hidden md:block ">
                                <img src={me} alt="me" />
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Hero;
