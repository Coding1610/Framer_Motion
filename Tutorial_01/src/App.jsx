import React from 'react';
import { motion } from 'framer-motion';

export default function App() {
  // Define animation variants
  const variantsH = {
    hidden: { height: 0 },
    visible: { height: '100%' },
  };

  const variantsW = {
    hidden: { width: 0 },
    visible: { width: '100%'},
  };

  return (
    <>
      <div className='flex h-screen'>
        <motion.div
          className='bg-gray-950 flex-1'
          initial='hidden'
          animate='visible'
          variants={variantsH}
          transition={{ duration: 1, delay: 0.5 }} // First div starts immediately
        ></motion.div>
        <motion.div
          className='bg-gray-900 flex-1'
          initial='hidden'
          animate='visible'
          variants={variantsH}
          transition={{ duration: 1, delay: 1}} // Second div starts after 1 second
        ></motion.div>
        <motion.div
          className='bg-gray-800 flex-1'
          initial='hidden'
          animate='visible'
          variants={variantsH}
          transition={{ duration: 1, delay: 1.5 }} // Third div starts after 2 seconds
        ></motion.div>
        <motion.div
          className='bg-gray-700 flex-1'
          initial='hidden'
          animate='visible'
          variants={variantsH}
          transition={{ duration: 1, delay: 2 }} // Third div starts after 2 seconds
        ></motion.div>
        <motion.div
          className='bg-gray-600 flex-1'
          initial='hidden'
          animate='visible'
          variants={variantsH}
          transition={{ duration: 1, delay: 2.5 }} // Third div starts after 2 seconds
        ></motion.div>
      </div>

      {/* <div className='flex h-screen flex-col'>
        <motion.div
          className='bg-gray-950 flex-1'
          initial='hidden'
          animate='visible'
          variants={variantsW}
          transition={{ duration: 1, delay: 0.5 }} // First div starts immediately
        ></motion.div>
        <motion.div
          className='bg-gray-900 flex-1'
          initial='hidden'
          animate='visible'
          variants={variantsW}
          transition={{ duration: 1, delay: 1}} // Second div starts after 1 second
        ></motion.div>
        <motion.div
          className='bg-gray-800 flex-1'
          initial='hidden'
          animate='visible'
          variants={variantsW}
          transition={{ duration: 1, delay: 1.5 }} // Third div starts after 2 seconds
        ></motion.div>
        <motion.div
          className='bg-gray-700 flex-1'
          initial='hidden'
          animate='visible'
          variants={variantsW}
          transition={{ duration: 1, delay: 2 }} // Third div starts after 2 seconds
        ></motion.div>
        <motion.div
          className='bg-gray-600 flex-1'
          initial='hidden'
          animate='visible'
          variants={variantsW}
          transition={{ duration: 1, delay: 2.5 }} // Third div starts after 2 seconds
        ></motion.div>
      </div> */}
    </>
  );
}
