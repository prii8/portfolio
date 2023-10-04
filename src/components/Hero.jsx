import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'

import { profile,propic } from '../assets'

const Hero = () => {
  return (
    <div className='relative w-full h-screen  mx-auto'>
      
      <div className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX}  flex xl:flex-row 
      flex-col-reverse overflow-hidden gap-2 items-center mt-0 justify-around`}>
        <div className={`flex flex-row items-start gap-5`}>
      <div className='flex flex-col justify-center items-center lg:mt-7  sm:mt-0'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-60 h-60 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Priyanshi</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Versatile coder, passionate <br className='sm:block hidden' /> about innovation, and continuous 
            <br className='sm:block hidden' /> learning.
          </p>
        </div>
        </div>
       
        
        <div>
        <img src={propic} className='lg:h-[20rem] lg:w-[20rem] rounded-full sm:h-[5rem] sm:w-[5rem] md:h-[10rem] md:w-[10rem] h-[10rem] w-[10rem]'/>
      </div>
      
      </div>
     
     
      
   

      <div className='absolute xs:bottom-10 bottom-10 w-full  justify-center items-center sm:flex hidden'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </div>
  )
}

export default Hero