import React from 'react'
import footerLogo from '../assets/footer_logo.svg';
import { FaEnvelope, FaFacebook, FaFacebookF, FaInstagram, FaLinkedin, FaMap, FaMapMarkedAlt, FaPhoneAlt, FaTiktok, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeIn } from '../utills/animationVariants'; 

const Footer = () => {
  return (
    <div className='py-12 bg-green-50 px-8'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 gap-8'>
            <div className='space-y-6 mr-14'>
                <motion.div 
                variants={fadeIn('down', 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.10}}
                className='flex items-center space-x-2'>
                    <img src={footerLogo} alt="" className='w-32 h-auto'/>
                </motion.div>
                <motion.p 
                variants={fadeIn('down', 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.10}}
                className='text-para'>D-CREATE is a creative web and design agency since 2022. We build websites, apps, and digital solutions that help businesses grow and succeed online.</motion.p>
                <motion.div 
                variants={fadeIn('down', 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.10}}
                className='flex space-x-4'>
                    <a href="#" className='bg-gray-100 text-primary rounded-full size-10 flex items-center
                    justify-center hover:bg-primary hover:text-white'>
                        <FaFacebookF className='text-xl'/>
                    </a>
                    <a href="#" className='bg-gray-100 text-primary rounded-full size-10 flex items-center
                    justify-center hover:bg-primary hover:text-white'>
                        <FaTiktok className='text-xl'/>
                    </a>
                    <a href="#" className='bg-gray-100 text-primary rounded-full size-10 flex items-center
                    justify-center hover:bg-primary hover:text-white'>
                        <FaInstagram className='text-xl'/>
                    </a>
                    <a href="#" className='bg-gray-100 text-primary rounded-full size-10 flex items-center
                    justify-center hover:bg-primary hover:text-white'>
                        <FaLinkedin className='text-xl'/>
                    </a>
                </motion.div>

            </div>

            <motion.div 
            variants={fadeIn('down', 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.10}}
            className='space-y-6'>
                <h3 className='text-xl font-semibold mb-4'>Quick Link</h3>
                <ul className='space-y-3'>
                    <li><a href="#home" className='hover:underline text-gray-700'>Home</a></li>
                    <li><a href="#about" className='hover:underline text-gray-700'>About</a></li>
                    <li><a href="#pricing" className='hover:underline text-gray-700'>Pricing </a></li>
                    <li><a href="#services" className='hover:underline text-gray-700'>Services</a></li>
                    <li><a href="#contact" className='hover:underline text-gray-700'>Contact Us</a></li>             
                </ul>
            </motion.div>

             <motion.div 
             variants={fadeIn('down', 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.10}}
             className='space-y-6'>
                <h3 className='text-xl font-semibold mb-4'>Support</h3>
                <ul className='space-y-3'>
                    <li><a href="#" className='hover:underline text-gray-700'>FAQs</a></li>
                    <li><a href="#" className='hover:underline text-gray-700'>Terms of Services</a></li>
                    <li><a href="#" className='hover:underline text-gray-700'>Privacy Policy</a></li>
                    <li><a href="#" className='hover:underline text-gray-700'>Support Center</a></li>             
                </ul>
            </motion.div>

             <motion.div 
             variants={fadeIn('down', 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.10}}
             className='space-y-6'>
                <h3 className='text-xl font-semibold mb-4'>Contact Info</h3>
                <ul className='space-y-3'>
                    <li className='flex items-center gap-2'>
                    <FaMapMarkedAlt className='text-primary'/>
                    <p className='text-gray-700'>Main Street Kahatowita, Nitambuwa, Sri-Lanka</p>
                    </li> 
                    <li className='flex items-center gap-2'>
                    <FaPhoneAlt className='text-primary'/>
                    <p className='text-gray-700'>+94 72 553 5524</p>
                    </li> 
                    <li className='flex items-center gap-2'>
                    <FaEnvelope className='text-primary'/>
                    <p className='text-gray-700'>dcreates.offc@gmail.com</p>
                    </li>                 
                </ul>
            </motion.div>
             {/* Bottom Bar */}
            <motion.div 
            variants={fadeIn('down', 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.10}}
            className="justify-center items-center footer-bottom">
                <p>© 2025 D-CREATES. All rights reserved.</p>
            </motion.div>
        </div>
    </div>
  )
}

export default Footer