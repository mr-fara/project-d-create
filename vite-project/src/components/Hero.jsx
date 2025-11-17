import React from 'react'
import heroImg from '../assets/hero.webp'
import { MdArrowCircleRight } from "react-icons/md";
import { motion } from 'framer-motion';
import { fadeIn } from '../utills/animationVariants';


const Hero = () => {
  return (
    <section id='home' className='bg-herobg text-white flex items-center pt-15 py-60'>
    <div className='container mx-auto flex flex-col md:flex-row items-center justify-between p-8 
    overflow-y-hidden gap-12'>
        {/* left side */}
        <motion.div 
        variants={fadeIn('down', 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.7}}
        className='md:w-1/2 h-full'>
          <h1 className='text-4xl font-secondary font-bold mb-4 md:w-3/5 leading-snug'>Build Your Imagination With Us</h1>
          <p className='font-primary text-lg mb-12 md:pr-8'>We bring your ideas to life with modern, creative, and high-quality digital solutions.
            From professional websites to powerful mobile apps, we help you grow, connect with your audience, and build your brand online — with clarity, confidence, and creativity.</p>
           <button 
            className="
              bg-primary text-white py-3.5 px-8 font-medium rounded-md
              transition-all duration-500
              hover:-translate-y-1
              hover:bg-sky-400/100
              hover:shadow-[0_10px_30px_rgba(0,191,255,0.5)]
              hover:backdrop-blur-lg
              mt-auto
            "
          >
            <a href="#contact" className="flex gap-1 items-center font-secondary">
              <span>Get Started</span>
              <MdArrowCircleRight />
            </a>
          </button>
        </motion.div>

        {/* right side */}
        <motion.div 
        variants={fadeIn('up', 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.7}}
        className='md:w-1/2 h-full'>
          <img src={heroImg} alt="hero image" className='w-full object-cover' />
        </motion.div>
    </div>
    </section>
  )
}

export default Hero