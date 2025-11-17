import React from 'react'
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { FaStar, FaRegStar } from "react-icons/fa";
import review1 from '../assets/review1.webp';  
import review2 from '../assets/review2.webp';  
import review4 from '../assets/review3.jpeg';  
import { motion } from 'framer-motion';
import { fadeIn } from '../utills/animationVariants'; 

const Testimonial = () => {

  const testimonials = [
    {
      name: "Jane Doe",
      location: "New York, NY",
      review: "This service has been life-changing for me. The mental wellness resources and personalized support have made a huge difference in my daily life. Highly recommended!",
      image: review1,
      rating: 5,
    },
    {
      name: "Michael Thompson",
      location: "Los Angeles, CA",
      review: "Very professional and supportive. The guidance I received helped me manage stress more effectively than ever before.",
      image: review2,
      rating: 4,
    },
    {
    name: "David Kim",
    location: "Toronto, Canada",
    review: "Amazing experience! I feel more motivated, focused, and emotionally balanced thanks to their structured programs.",
    image: review4,
    rating: 5,
  },
  ];

  return (
    <div id='testimonial' className='bg-[#ffffff] py-20'>
      <div className='container mx-auto px-8 pb-20'>
        <motion.div 
        variants={fadeIn('down', 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.10}}

        className='text-center mb-12 md:w-1/2 mx-auto font-secondary'>
          <h2 className='text-4xl font-bold font-secondary mb-3'>What Our Clients Say</h2>
          <p className='text-lg mb-12 md:w-2/2 mx-auto font-secondary'>Our clients’ satisfaction is our top priority. We take pride in delivering high-quality digital solutions, and their feedback reflects our commitment, professionalism, and results.</p>
        </motion.div>

        <motion.div 
        variants={fadeIn('down', 0.6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.10}}

        className='flex flex-col md:w-4/5 mx-auto md:flex-row md:gap-12 gap-8 '>
          {
            testimonials.map((testimonial, index) => (
              <div key={index} className='relative bg-white rounded-lg p-6 flex-1 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,191,255,0.5)] hover:backdrop-blur-lg hover:bg-white/70'>
                
                {/* Chat Icon */}
                <div className='absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 '>
                  <HiChatBubbleLeftRight className='size-10 text-primary' />
                </div>

                <div className='flex flex-col space-y-3 mb-4'>
                  <p className='text-lg mb-2'>{testimonial.review}</p>

                  <div className='flex gap-1'>
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className='size-16 rounded-full object-cover mr-4'
                    />

                    <div>
                      <p className='font-semibold'>{testimonial.name}</p>
                      <p className='text-gray-500'>{testimonial.location}</p>

                      {/* ⭐ Rating Stars */}
                      <div className="flex mt-1">
                        {[...Array(5)].map((_, i) =>
                          i < testimonial.rating ? (
                            <FaStar key={i} className="text-yellow-400" />
                          ) : (
                            <FaRegStar key={i} className="text-yellow-400" />
                          )
                        )}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))
          }
        </motion.div>
      </div>
    </div>
  )
}

export default Testimonial
