import React from 'react'
import thumnailImg from '../assets/video-thumbnail.webp'
import { useState } from 'react'  
import { SiGradleplaypublisher } from "react-icons/si";
import { VscEyeClosed } from "react-icons/vsc";
import { MdArrowCircleRight } from "react-icons/md";
import { motion } from 'framer-motion';
import { fadeIn } from '../utills/animationVariants'; 

const About = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  }

  const handleVideoClose = () => {
    setIsVideoPlaying(false);
  } 

  return (
    <div id='about' className='bg-[#f7f8fc] py-20 pb-16 pt-20'>
      <div className='container mx-auto pt-20 px-4'>
        <div className='py-12 px-4 md:w-4/5 mx-auto flex flex-col md:flex-row items-center gap-8'>
          {/* left side */}
          <motion.div 
          variants={fadeIn('right', 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.10}}
          className='md:w-1/2 w-full mb-8 md:mb-0'>
          {
            !isVideoPlaying ? (
              <div className='relative'>
                <img src={thumnailImg} alt='video thumnail' className='w-full md:h-[446px] h-auto rounded-lg object-cover'/>
              <button 
              onClick={handleVideoPlay}
              className="
                absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                bg-primary rounded-2xl shadow-lg cursor-pointer
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-[0_10px_30px_rgba(0,191,255,0.5)]
                hover:backdrop-blur-lg hover:bg-primary/90
              "
            >
              <SiGradleplaypublisher className='size-10 text-white'/>
            </button>
              </div>
            ) : (null)
          }
          </motion.div>

          {/* right side */}
          <motion.div 
          variants={fadeIn('left', 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.10}}
          className='md:w-1/2 w-full'>
            <h2 className='text-4xl capitalize font-secondary font-bold mb-4 leading-snug'>About D-CREATE | Crafting Digital Experiences Since 2022</h2>
            <p className='font-secondary text-lg mb-6 md:pr-8'>D-CREATE, founded in 2022, is a professional Web Development and Graphic Design agency. We specialize in building visually stunning and technically robust digital solutions, including websites, mobile applications, branding, and e-commerce platforms.</p>
            <ul className='font-secondary list-disc list-inside space-y-1'>
              <li>
                <span className="font-bold">Mission Statement:</span> “Our mission is to deliver innovative, scalable, and user-friendly digital solutions that empower businesses worldwide.”
              </li>
              <li>
                <span className="font-bold">Vision Statement:</span> “To be recognized as a leading agency for creative and technical excellence in web and app development.”
              </li>
              <li>
                <span className="font-bold">Values:</span> Creativity, Integrity, Client Focus, Innovation, and Reliability.
              </li>          
            </ul>

            <br />
            <button 
            className="
              shadow-lg bg-primary text-white py-3.5 px-8 font-medium rounded-md
              transition-all duration-300
              hover:-translate-y-1
              hover:bg-sky-400/90
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

        </div>

        {
          isVideoPlaying && (
            <div className='fixed inset-0 bg-black bg-opacity-75 flex items-cover justify-center z-50'>
              <div className='relative w-full h-full flex items-center justify-center'>
              <iframe 
                  width="560" 
                  height="315" 
                  src="https://www.youtube.com/embed/g7xkVEWrX8E?si=0X1zyOVv7UgjRjbO" 
                  title="YouTube video player" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
                  picture-in-picture; web-share" 
                  className='rounded-lg'
                  allowfullscreen>
              </iframe>
              <button onClick={handleVideoClose} className='absolute top-4 right-4 text-2xl 
              text-white cursor-pointer'>
                <VscEyeClosed />
              </button>
            </div>
          </div>
        )
        }
        
      </div>
    </div>
  )
}

export default About