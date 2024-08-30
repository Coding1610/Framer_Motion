import React, { useEffect, useState } from 'react'
import { AnimatePresence, motion } from "framer-motion"

export default function App() {

  const [exitDiv,setExitDiv] = useState(false);

  useEffect(() => {
    setTimeout(() => setExitDiv(true),10000);
  });

  return (
    <>
    <div className='flex justify-center items-center w-screen h-screen'>

      <AnimatePresence>

        { exitDiv === false && (
          <motion.div 
          animate={{x:-200,opacity:1}}
          initial={{opacity:0}}
          transition={{duration:2}}
          exit={{opacity:0,y:600}}
          className='w-[200px] h-[200px] rounded-full bg-black text-white font-bold flex justify-center items-center text-2xl'>
            Enter/Exit
          </motion.div>
          )
        }

      </AnimatePresence>

    </div>
    </>
  )
}