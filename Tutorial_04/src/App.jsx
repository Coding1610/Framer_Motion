import React from 'react'
import {easeIn, motion, spring} from 'framer-motion'

export default function App() {
  return (
    <>
    <div className='bg-pink-600 flex justify-evenly items-center w-screen h-screen'>
      <motion.div 
      drag
      className='bg-white w-[200px] h-[200px]'
      transition={{duration:1}}
      whileHover={{opacity:0.2,rotate:180}}
      whileTap={{backgroundColor:"black"}}
      ></motion.div>

      <motion.div 
      drag
      className='bg-black w-[200px] h-[200px] rounded-full'
      whileHover={{scale:1.2}}
      whileTap={{scale:0.9}}
      whileDrag={{scale:2,backgroundColor:"yellow"}}
      dragConstraints={{left:-100,right:100,top:0,bottom:400}}
      transition={{type:"spring",damping:10,stiffness:200}}
      >
      </motion.div>
    </div>
    </>
  )
}