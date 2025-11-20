import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from '../utills/animationVariants'; 


const packages = [
  {
    name: 'Basic Package',
    price: '$149',
    description: 'Perfect for individuals or small businesses needing a simple and professional website.',
    features: [
      '1 - 3 Page Website',
      'Responsive Mobile-Friendly Design',
      'Basic UI/UX Layout',
      'Contact Form Integration',
      'Easy content management',
      
    ],
  },

  {
    name: 'Standard Package',
    price: '$499',
    description: 'Ideal for growing businesses that need a modern, feature-rich website to attract customers.',
    features: [
      '5 - 10 Page Website',
      'Modern, responsive website',
      'Advanced UI/UX + Animations',
      'Blog/News Page Setup',
      'Faster loading speed and optimized performance',
      
    ],
  },

  {
    name: 'Premium Package',
    price: '$999',
    description: 'A complete business solution with full eCommerce functionality, automation, and premium features.',
    features: [
      'Fully responsive website with multiple pages',
      'Fully Custom Premium Design',
      'E-commerce setup & payment integration',
      'Scalable, secure, and high-performance solution',
      'Cart, Checkout & Payment Integration',
      
    ],
  },
];


const Pricing = () => {
  const handleScrollToContact = () => {
    const targetElement = document.getElementById('contact');
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
<div
  id='pricing'
  className='relative bg-cover bg-center bg-no-repeat pt-32 py-20'
  style={{ backgroundImage: "url('/work-proceess.webp')" }}
>
  {/* Black overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Main Content */}
  <div className='relative z-10 container mx-auto px-8'>
    <motion.div 
      variants={fadeIn('up', 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: false, amount: 0.10}}
      className='text-center mb-12 text-white'
    >
      <h2 className='text-4xl font-bold font-secondary mb-3'>
        Perfect For Small & Large Brands
      </h2>
      <p className='text-lg mb-12 md:w-2/3 mx-auto font-secondary'>
        We offer simple, transparent, and flexible pricing to meet the needs of every
        business. Each package is designed to deliver professional digital solutions
        with clear benefits, so you know exactly what you’re getting.
      </p>
    </motion.div>

    {/* packages */}
    <div className='flex flex-col md:w-3/2 mx-auto md:flex-row gap-8 pb-12'>
      {packages.map((pkg, index) => (
        <motion.div 
          variants={fadeIn('up', 0.6 + index * 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.10}}
          key={index}
          className='backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl p-9 flex flex-col flex-1 shadow-xl'
        >
          
          <h3 className='text-2xl font-semibold mb-4 text-white'>{pkg.name}</h3>
          <hr className='w-24 border mb-2 border-cyan-300'/>

          <p className='text-3xl font-bold mb-5 text-white'>
            {pkg.price}
            <span className='text-lg font-normal opacity-80'> | Per Service</span>
          </p>

          <p className='text-lg mb-4 text-gray-200'>{pkg.description}</p>

          <ul className='list-disc list-inside space-y-2 mb-6 text-gray-100'>
            {pkg.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>

          <button
            onClick={handleScrollToContact}
            className='shadow-lg bg-gradient-to-r from-cyan-400 to-sky-500 text-white px-6 py-2 rounded-md hover:from-pink-500 hover:to-sky-500 transition duration-300 mt-auto'
          >
            Get Started
          </button>

        </motion.div>
      ))}
    </div>

  </div>
</div>


  )
}

export default Pricing