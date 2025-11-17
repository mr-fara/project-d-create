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
   <div id='pricing' className='bg-[#f7f8fc] pt-32 py-20'>
  <div className='container mx-auto px-8'>
    <motion.div 
    variants={fadeIn('up', 0.4)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once: false, amount: 0.10}}
    className='text-center mb-12'>
      <h2 className='text-4xl font-bold font-secondary mb-3'>Perfect For Small & Larg Brands</h2>
      <p className='text-lg mb-12 md:w-2/3 mx-auto font-secondary'>We offer simple, transparent, and flexible pricing to meet the needs of every business. Each package is designed to deliver professional digital solutions with clear benefits, so you know exactly what you’re getting.</p>
    </motion.div>

    {/* packages */}
    <div className='flex flex-col md:w-3/2 mx-auto md:flex-row gap-8 pb-12 '>
      {packages.map((pkg, index) => (
        <motion.div 
        variants={fadeIn('up', 0.6 + index * 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{once: false, amount: 0.10}}
        key={index} className='bg-white rounded-lg p-6 flex flex-col flex-1 shadow-lg '>
          
          <h3 className='text-2xl font-semibold mb-4'>{pkg.name}</h3>
          <hr className='w-24 border text-primary border-primary'/>
          
          <p className='text-3xl font-bold mb-4'>
            {pkg.price}
            <span className='text-lg font-normal font-secondary'> | Per Service</span>
          </p>

          <p className='text-lg mb-4'>{pkg.description}</p>

          <ul className='list-disc list-inside space-y-2 mb-6'>
            {pkg.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>

          {/* Push button to the bottom */}
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