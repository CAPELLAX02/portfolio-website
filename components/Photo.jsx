'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Photo = () => {
  return (
    <div className='w-full h-full relative'>
      {/* Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            delay: 1,
            duration: 0.4,
            ease: 'easeIn',
          },
        }}
        className='w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] absolute'
      >
        <Image
          src='/assets/photo.png'
          priority
          quality={100}
          fill
          alt='profile photo'
          className='object-contain z-10 hover:scale-105 transition-all duration-500'
        />
      </motion.div>

      {/* Circle */}
      <motion.svg
        className='w-[300px] h[300px] xl:w-[500px] xl:h-[500px] relative'
        fill='rgba(0, 255, 255, 0.2)'
        viewBox='0 -2 494 502'
        xmlns='http://www.w3.org/2000/svg'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 1 } }}
      >
        <motion.circle
          cx='247'
          cy='250'
          r='250'
          stroke='rgba(57, 73, 171, 0.6)'
          strokeWidth='3'
          strokeLinecap='round'
          strokeLinejoin='round'
          initial={{
            strokeDasharray: '24 10 0 0',
          }}
          animate={{
            strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
            rotate: [120, 360],
            transition: {
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            },
          }}
        />
      </motion.svg>
    </div>
  );
};

export default Photo;
