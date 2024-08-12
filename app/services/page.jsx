'use client';

import { BsArrowDownRight } from 'react-icons/bs';
import Link from 'next/link';
import { motion } from 'framer-motion';

const services = [
  {
    num: '01',
    title: 'Frontend Development',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem illo facilis, iure nam cum nobis omnis repudiandae exercitationem expedita alias!',
    href: '',
    cardColor: '#ffd666',
  },
  {
    num: '02',
    title: 'Backend Development',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem illo facilis, iure nam cum nobis omnis repudiandae exercitationem expedita alias!',
    href: '',
    cardColor: '#ecb3ff',
  },
  {
    num: '03',
    title: 'Full-Stack Development',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem illo facilis, iure nam cum nobis omnis repudiandae exercitationem expedita alias!',
    href: '',
    cardColor: '#52e081',
  },
  {
    num: '04',
    title: 'Mobile Development',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem illo facilis, iure nam cum nobis omnis repudiandae exercitationem expedita alias!',
    href: '',
    cardColor: '#93d6ec',
  },
];

const Services = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
      <div className='container mx-auto'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 1,
              duration: 0.2,
              ease: 'easeIn',
            },
          }}
          className='grid grid-cols-1 md:grid-cols-2 gap-16'
        >
          {services.map((item, index) => {
            return (
              <div
                key={index}
                className='flex-1 flex flex-col justify-center gap-4 group border-black border-b-4 border-s-4 p-10 transition-all hover:translate-x-1 hover:-translate-y-1'
                style={{
                  backgroundColor: item.cardColor,
                }}
              >
                {/* Top */}
                <div className='w-full flex justify-between items-center'>
                  <div className='text-5xl font-extrabold text-outline text-transparent'>
                    {item.num}
                  </div>
                  <Link
                    href={item.href}
                    className='w-[70px] h-[70px] bg-transparent border-black border-2 rounded-full hover:bg-primary transition-all duration-100 flex justify-center items-center hover:-rotate-90'
                  >
                    <BsArrowDownRight className='text-4xl text-black' />
                  </Link>
                </div>
                {/* Heading */}
                <h2 className='text-3xl font-extrabold'>{item.title}</h2>
                {/* Description */}
                <p className='text-lg'>{item.description}</p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
