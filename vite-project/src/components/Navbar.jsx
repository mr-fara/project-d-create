import React, { useEffect, useState } from 'react';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { motion } from "framer-motion";
import { fadeIn } from '../utills/animationVariants'; 

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home')

    const handleToggle = () => setIsOpen(!isOpen)
    const handleCloseMenu = () => setIsOpen(false)

    const handleScroll = () => {
        const sections = ['home', 'services', 'about', 'pricing', 'testimonial', 'contact'];
        const scrollPosition = window.scrollY + 120;

        sections.forEach(section => {
            const element = document.getElementById(section);

            if (element) {
                const offsetTop = element.offsetTop;
                const height = element.offsetHeight;

                if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
                    setActiveSection(section);
                }
            }
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScrollTo = (targetId) => {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }
    };

    // Updated navLinks with glass styling
    const navLinks = (
        <ul
            className="
                font-medium font-secondary flex flex-col md:flex-row 
                lg:space-x-8 sm:space-x-4 space-y-2 md:space-y-0 p-0 md:p-0

                /* Glass effect container */
                md:px-8 md:py-3 rounded-full 
                backdrop-blur-xl bg-white/10 border border-white/10 shadow-lg
            "
        >
            <li>
                <motion.a
                    href="#home"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                        e.preventDefault();
                        handleCloseMenu();
                        handleScrollTo('home');
                    }}
                    className={`text-white transition ${activeSection === 'home' ? 'isActive text-pink-400' : ''}`}
                >Home</motion.a>
            </li>

            <li>
                <motion.a
                    href="#services"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                        e.preventDefault();
                        handleCloseMenu();
                        handleScrollTo('services');
                    }}
                    className={`text-white transition ${activeSection === 'services' ? 'isActive text-pink-400' : ''}`}
                >Services</motion.a>
            </li>

            <li>
                <motion.a
                    href="#about"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                        e.preventDefault();
                        handleCloseMenu();
                        handleScrollTo('about');
                    }}
                    className={`text-white transition ${activeSection === 'about' ? 'isActive text-pink-400' : ''}`}
                >About Us</motion.a>
            </li>

            <li>
                <motion.a
                    href="#pricing"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                        e.preventDefault();
                        handleCloseMenu();
                        handleScrollTo('pricing');
                    }}
                    className={`text-white transition ${activeSection === 'pricing' ? 'isActive text-pink-400' : ''}`}
                >Pricing</motion.a>
            </li>

            <li>
                <motion.a
                    href="#testimonial"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={(e) => {
                        e.preventDefault();
                        handleCloseMenu();
                        handleScrollTo('testimonial');
                    }}
                    className={`text-white transition ${activeSection === 'testimonial' ? 'isActive text-pink-400' : ''}`}
                >Testimonial</motion.a>
            </li>
        </ul>
    );

    return (
        <header className="bg-herobg/20 text-white py-2 px-4 fixed top-0 left-0 right-0 z-50">

            <div className="container mx-auto flex justify-between items-center h-full">

                {/* Logo */}
                <motion.div
                    variants={fadeIn('right', 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.10 }}
                    className="text-white text-lg font-semibold"
                >
                    <a href="/">
                        <img src="/lgmain.svg" alt="logo" className="w-40 h-auto" />
                    </a>
                </motion.div>

                {/* navitems */}
                <motion.div
                    variants={fadeIn('down', 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.10 }}
                    className="hidden md:flex flex-grow justify-center"
                >
                    <nav>{navLinks}</nav>
                </motion.div>

                {/* button */}
                <motion.div
                    variants={fadeIn('left', 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.10 }}
                    className="hidden md:block"
                >
                    <a
                        onClick={e => {
                            e.preventDefault();
                            handleScrollTo('contact');
                        }}
                        href="#contact"
                        className="text-white bg-gradient-to-r from-cyan-500 to-sky-600 hover:opacity-80 transition px-4 py-2 rounded-full"
                    >
                        Contact Us
                    </a>
                </motion.div>

                {/* hamburger */}
                <div className="block md:hidden">
                    <button
                        onClick={handleToggle}
                        className={`text-white focus:outline-none ${isOpen ? "border border-white" : ""}`}
                    >
                        <HiOutlineMenuAlt3 className="size-6" />
                    </button>
                </div>
            </div>

            {/* mobile nav */}
            {isOpen && (
                <nav className="absolute top-full left-0 w-full bg-herobg z-20 md:hidden 
                    backdrop-blur-xl bg-black/20 border-t border-white/10 shadow-lg">
                    <ul className="flex flex-col p-4 space-y-3">
                        {navLinks.props.children}
                        <li className="py-2 px-2">
                            <a
                                href="#contact"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleCloseMenu();
                                    handleScrollTo('contact');
                                }}
                                className="text-white bg-blue-600 hover:bg-blue-600/90 px-4 py-2 rounded"
                            >
                                Contact Us
                            </a>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Navbar;
