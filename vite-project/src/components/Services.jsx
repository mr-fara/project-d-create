import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import serviceImg1 from '../assets/service1.webp';
import serviceImg2 from '../assets/service2.webp';
import serviceImg3 from '../assets/service3.webp';
import serviceImg4 from '../assets/service4.webp';
import { motion } from 'framer-motion';
import { fadeIn } from '../utills/animationVariants';   


const Services = () => {
  return (
    <div className='bg-[#ffffff] py-20' id='services'>
      <div className='pt-20 px-4 container mx-auto'>
        <motion.div 
        variants={fadeIn('up', 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.10}}
        className='text-center space-y-5'>
          <h2 className='text-4xl font-bold font-secondary text-herobg'>
            What We Can Do Together
          </h2>
          <p className='font-secondary md:w-1/2 mx-auto'>
            We lower our stress levels, we get to know our pain, we connect better, we improve our focus, 
            and we're kinder to ourselves. Let us walk you through the basics in our new mindful guide on how 
            to meditate.
          </p>
        </motion.div>

      {/* service category */}
      <div className='py-12 md:w-4/5 mx-auto'>
        <Tabs>

          <motion.TabList 
          variants={fadeIn('up', 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.10}}
          className="flex flex-wrap font-secondary justify-between items-center md:gap-8 gap-4 ">
            <Tab className="transition-all duration-450 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,191,255,0.5)] hover:backdrop-blur-lg px-4 py-2 rounded-md">Branding & Design</Tab>
            <Tab className="transition-all duration-450 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,191,255,0.5)] hover:backdrop-blur-lg px-4 py-2 rounded-md">Web Development</Tab>
            <Tab className="transition-all duration-450 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,191,255,0.5)] hover:backdrop-blur-lg px-4 py-2 rounded-md">App Development</Tab>
            <Tab className="transition-all duration-450 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,191,255,0.5)] hover:backdrop-blur-lg px-4 py-2 rounded-md">E - Com Solutions</Tab>
          </motion.TabList>

          <TabPanel>           
            <motion.div 
            variants={fadeIn('up', 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.10}}
            className="flex  flex-col md:flex-row gap-8 mt-8 ">
              <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
              <h3 className='text-3xl font-semibold text-primary mb-4'>Branding & Design</h3>
              <p className='mb-8'>A strong brand builds trust, attracts customers, and makes your business memorable.
              We help you create a unique identity that truly represents who you are and what you stand for — from logos and color palettes to complete brand guidelines.</p>
              <h4 className="text-xl font-secondary font-medium text-black mb-4">Service</h4>
              <ul className='font-secondary list-disc list-inside space-y-1'>
                <li>Professional and modern brand identity</li>
                <li>Builds trust and recognition</li>
                <li>Visually appealing designs for all platforms</li>
                <li>Helps your business stand out in a crowded market</li>
              </ul>
            </div>
            <div className='md:w-1/2'>
              <img src={serviceImg1} alt="" className='w-full h-auto rounded-2xl object-cover'/>
            </div>
            </motion.div>
          </TabPanel>

           <TabPanel>           
            <motion.div 
            variants={fadeIn('up', 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.10}}
            className="flex flex-col md:flex-row gap-8 mt-8">
              <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
              <h3 className='text-3xl font-semibold text-primary mb-4'>Web Development</h3>
              <p className='mb-1 font-bold'>Your website is the digital face of your business.</p>
              <p className='mb-4'>We create responsive, fast, and user-friendly websites tailored to your goals — whether it's a business site, portfolio, or landing page. Our focus is on clean design, strong performance, and seamless user experience.</p>
              <h4 className="font-secondary text-xl font-medium text-black mb-4">Service</h4>
              <ul className='font-secondary list-disc list-inside space-y-1'>
                <li>Fully responsive websites</li>
                <li>SEO-friendly and optimized performance</li>
                <li>Modern UI/UX</li>
                <li>Easy to manage and scalable</li>
              </ul>
            </div>
            <div className='md:w-1/2'>
              <img src={serviceImg2} alt="" className='w-full h-auto rounded-2xl object-cover'/>
            </div>
            </motion.div>
          </TabPanel>

           <TabPanel>           
            <motion.div 
            variants={fadeIn('up', 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.10}}
            className="flex flex-col md:flex-row gap-8 mt-8">
              <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
              <h3 className='text-3xl font-semibold text-primary mb-4'>App Development</h3>
              <p className='mb-8'>We build smooth, secure, and feature-rich mobile applications that help businesses reach customers on the go. Whether Android, iOS, or cross-platform, we turn your ideas into functional, user-focused apps.</p>
              <h4 className="font-secondary text-xl font-medium text-black mb-4">Service</h4>
              <ul className='font-secondary list-disc list-inside space-y-1'>
                <li>High-performance mobile apps</li>
                <li>User-friendly interfaces</li>
                <li>Secure and scalable architecture</li>
                <li>Custom features based on your business needs</li>
              </ul>
            </div>
            <div className='md:w-1/2'>
              <img src={serviceImg3} alt="" className='w-full h-auto rounded-2xl object-cover'/>
            </div>
            </motion.div>
          </TabPanel>

           <TabPanel>           
            <motion.div 
            variants={fadeIn('up', 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.10}}
            className="flex flex-col md:flex-row gap-8 mt-8">
              <div className='md:w-1/2 bg-white rounded-lg p-12 font-secondary'>
              <h3 className='text-3xl font-semibold text-primary mb-4'>E-Commerce Platform Solution</h3>
              <p className='mb-8'>We develop powerful e-commerce platforms that help businesses sell more with ease.
From product management to secure payments and order tracking — we build complete online stores that deliver excellent shopping experiences.</p>
              <h4 className="font-secondary text-xl font-medium text-black mb-4">Service</h4>
              <ul className='font-secondary list-disc list-inside space-y-1'>
                <li>Custom online store design</li>
                <li>Secure payment integrations</li>
                <li>Easy product & inventory management</li>
                <li>Fast, smooth, and mobile-friendly shopping experience</li>
              </ul>
            </div>
            <div className='md:w-1/2'>
              <img src={serviceImg4} alt="" className='w-full h-auto rounded-2xl object-cover'/>
            </div>
            </motion.div>
          </TabPanel>

        </Tabs>
      </div>

      </div>
    </div>
  )
}

export default Services