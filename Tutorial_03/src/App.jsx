import React from 'react'
import {easeInOut, motion} from 'framer-motion'

export default function App() {
  return (
    <>
    <div className='w-screen h-screen flex justify-evenly items-center bg-purple-700'>

      <motion.div
      className='bg-white w-36 h-36' 
      animate={{
        scale:[1,2,2,1,1],
        rotate:[0,0,180,180,0],
        borderRadius:["0%","0%","50%","50%","0%"],
        backgroundColor:["black"]
      }}
      transition={{
        duration:2,
        ease:"easeInOut",
        times:[0,0.2,0.5,0.8,1],
        repeat:Infinity,
        repeatDelay:1
      }}
      > 
      </motion.div>

      <motion.div
       className='bg-white h-20 w-20'
       whileHover={{scale:[null,2,1,2,1,3]}}
        transition={{duration:1}}
       >
      </motion.div>

    </div>
    </>
  )
}