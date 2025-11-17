import React from 'react'
import { PiUserCircleFill } from "react-icons/pi";
import { MdOutlineWallet } from "react-icons/md";
import { BiSolidObjectsHorizontalLeft } from "react-icons/bi";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../utills/animationVariants'; 




const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [location, setLocation] = useState('');
    const [message, setMessage] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {   // Handle form submission logic here
        e.preventDefault();
        const data = {
            name,
            email,
            phone,
            location,
            message
        };
        //console.log(data);
        if(!data){
            alert("Please fill in all fields.");
            return;
        }
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
        setName('');
        setEmail('');
        setPhone('');
        setLocation('');
        setMessage('');

    };

  return (
    <div className='bg-herobg flex items-center justify-center py-28 px-8'>
        <div className='container mx-auto'>
            <div className='md:w-5/7 mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-12 gap-8'>
               {/* left side */}
               <motion.div 
               variants={fadeIn('right', 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.10}}

               className='space-y-8'>
                  <h2 className='text-4xl font-secondary font-bold mb-4 text-white'>Make an 
                    Appointment</h2>
                  <div className='grid grid-cols-1 md:grid-cols-2 gap-8 text-white'>
                    <div className='flex items-start gap-4'>
                        <div className='flex items-center justify-center rounded-full 
                        bg-[#ffffff1a] p-3'>
                            <PiUserCircleFill className="text-primary size-9"/>
                        </div>
                        <div className='space-y-1'>
                            <h2 className='text-lg  font-bold'>24/7 Services</h2>
                            <p>We are available around the clock to assist you with your needs.</p>
                        </div>
                    </div>

                    <div className='flex items-start gap-4'>
                        <div className='flex items-center justify-center rounded-full 
                        bg-[#ffffff1a] p-3'>
                            <MdOutlineWallet className="text-primary size-9"/>
                        </div>
                        <div className='space-y-1'>
                            <h2 className='text-lg  font-bold'>Expert Designers</h2>
                            <p>Our team consists of highly skilled and experienced designers who are experts in their field.</p>
                        </div>
                    </div>

                    <div className='flex items-start gap-4'>
                        <div className='flex items-center justify-center rounded-full 
                        bg-[#ffffff1a] p-3'>
                            <BiSolidObjectsHorizontalLeft className="text-primary size-9"/>
                        </div>
                        <div className='space-y-1'>
                            <h2 className='text-lg  font-bold'>High Quality Work</h2>
                            <p>We deliver top-notch quality in every project we undertake, ensuring your satisfaction.</p>
                        </div>
                    </div>

                    <div className='flex items-start gap-4'>
                        <div className='flex items-center justify-center rounded-full 
                        bg-[#ffffff1a] p-3'>
                            <VscWorkspaceTrusted className="text-primary size-9"/>
                        </div>
                        <div className='space-y-1'>
                            <h2 className='text-lg  font-bold'>Trusted Company</h2>
                            <p>We have built a reputation for reliability and trustworthiness in the industry.</p>
                        </div>
                    </div>
                  </div>
               </motion.div>

                {/* right side */}
               <motion.div 
               variants={fadeIn('left', 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{once: false, amount: 0.10}}

               className='space-y-8 p-8 bg-white shadow-xl rounded-md'>
                    <h3 className='text-2xl font-bold mb-4 '>Book Appointment</h3>
                    <form onSubmit={handleSubmit} className='space-y-8'>
                        <div className='flex sm:flex-row flex-col gap-4'>
                            <input 
                            onChange={e => setName(e.target.value)} 
                            type="text" placeholder='Your Full Name' className='w-full p-4 rounded-md
                            focus:outline-none focus:ring-2 focus:ring-primary shadow'/>
                            <input 
                            onChange={e => setEmail(e.target.value)} 
                            type="text" placeholder='Your Email' className='w-full p-4 rounded-md
                            focus:outline-none focus:ring-2 focus:ring-primary shadow'/>
                            
                        </div>
                        <div className='flex sm:flex-row flex-col gap-4'>
                            <input 
                            onChange={e => setPhone(e.target.value)} 
                            type="text" placeholder='Contact Number' className='w-full p-4 rounded-md
                            focus:outline-none focus:ring-2 focus:ring-primary shadow'/>
                            <input 
                            onChange={e => setLocation(e.target.value)} 
                            type="text" placeholder='Location' className='w-full p-4 rounded-md
                            focus:outline-none focus:ring-2 focus:ring-primary shadow'/>
                        </div>
                        
                            <textarea 
                            onChange={e => setMessage(e.target.value)} 
                            rows='5' placeholder='Write Your Message' className='w-full p-4 rounded-md
                            focus:outline-none focus:ring-2 focus:ring-primary shadow'/>
                            <button
                                className='w-full p-3 bg-primary text-white rounded-md hover:bg-sky-400/90 transition duration-300 mt-auto'
                            >Send Message</button>
                        
                    </form>
                
               </motion.div>
            </div>
        </div>
        <div>
            {
                showModal && (
                    <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm'>
                        <div className='bg-white/20 backdrop-blur-md p-8 rounded-xl shadow-lg border border-white/30'>
                            <h2 className='text-2xl font-bold mb-4 text-white'>Thank You!</h2>
                            <p className='font-secondary text-white/90'>
                                Thank you, {name}! Your appointment request has been received.
                            </p>
                            <button 
                                onClick={closeModal}
                                className='mt-4 px-4 py-2 bg-primary/80 hover:bg-primary text-white rounded-md transition'>
                                Okay
                            </button>
                        </div>
                    </div>

                )
            }
        </div>
    </div>
  )
}

export default Contact