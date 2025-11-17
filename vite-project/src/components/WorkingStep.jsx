import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from '../utills/animationVariants'; 

const WorkingStep = () => {
  return (
    <div className="py-20 bg-[#ffffff] relative">
        <div className="absolute inset-0"></div>
        <div className='relative container mx-auto px-4 py-20'>
            <motion.div 
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.10}}
            className="relative text-black text-center mb-20">
                <h2 className="text-4xl font-bold font-secondary mb-4">Our Commitment to Excellence</h2>
                <p className="font-secondary text-lg md:w-1/2 w-full mx-auto">We create high-quality digital solutions with care, passion, and precision. Our team delivers every project on time, communicates clearly, and supports you at every step. From design to final delivery, we focus on giving you a smooth experience and results you can trust.</p>
            </motion.div>
        
            <div className='flex flex-col md:w-4/5 mx-auto md:flex-row gap-8 '>
                <motion.div 
                variants={fadeIn('right', 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.10}}
                className="relative bg-white text-center rounded-lg p-8 flex-1 shadow-lg
                            transition-all duration-500
                            hover:-translate-y-1
                            hover:shadow-[0_10px_30px_rgba(0,191,255,0.5)]
                            hover:backdrop-blur-lg hover:bg-white/95
                        ">
                    <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                    bg-primary text-white size-14 rounded-full flex items-center justify-center'>01</div>
                    <h2 className='text-lg font-medium font-secondary text-primary mb-3 mt-8'>Product Quality</h2>
                    <p className='my-2'>We deliver clean, modern, and high-performance digital products designed with precision. Every website and app is responsive, secure, and created to match your brand perfectly.</p>
                </motion.div>

                <motion.div 
                variants={fadeIn('up', 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.10}}
                className="relative bg-white text-center rounded-lg p-8 flex-1 shadow-lg
                            transition-all duration-300
                            hover:-translate-y-1
                            hover:shadow-[0_10px_30px_rgba(0,191,255,0.5)]
                            hover:backdrop-blur-lg hover:bg-white/95
                        ">
                    <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                    bg-primary text-white size-14 rounded-full flex items-center justify-center'>01</div>
                    <h2 className='text-lg font-medium font-secondary text-primary mb-3 mt-8'>Deadlines</h2>
                    <p className='my-2'>We value your time. All projects follow a clear timeline with consistent updates, ensuring smooth progress and on-time delivery without compromise.</p>
                </motion.div>

                <motion.div 
                variants={fadeIn('up', 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.10}}
                className="relative bg-white text-center rounded-lg p-8 flex-1 shadow-lg
                            transition-all duration-300
                            hover:-translate-y-1
                            hover:shadow-[0_10px_30px_rgba(0,191,255,0.5)]
                            hover:backdrop-blur-lg hover:bg-white/95
                        ">
                    <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                    bg-primary text-white size-14 rounded-full flex items-center justify-center'>01</div>
                    <h2 className='text-lg font-medium font-secondary text-primary mb-3 mt-8'>Customer Service</h2>
                    <p className='my-2'>Our team is always here for you. We provide friendly communication, fast responses, and full guidance from the beginning of the project until after completion.</p>
                </motion.div>

                <motion.div 
                variants={fadeIn('left', 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.10}}
                className="
                            relative bg-white text-center rounded-lg p-8 flex-1 shadow-lg
                            transition-all duration-300
                            hover:-translate-y-1
                            hover:shadow-[0_10px_30px_rgba(0,191,255,0.5)]
                            hover:backdrop-blur-lg hover:bg-white/95
                        ">
                    <div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                    bg-primary text-white size-14 rounded-full flex items-center justify-center'>01</div>
                    <h3 className='text-lg font-medium font-secondary text-primary mb-3 mt-8'>Our Responsibilities</h3>
                    <p className='my-2'>We take complete responsibility for planning, designing, developing, testing, and delivering your project with confidence and professionalism.</p>
                </motion.div>
            </div>
        </div>
    </div>

  )
}

export default WorkingStep