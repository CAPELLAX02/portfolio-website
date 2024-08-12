/* eslint-disable react/no-unescaped-entities */
'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa';

import { animate, motion } from 'framer-motion';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '(+90) 531 881 18 76',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'ahmtatar@gmail.com',
  },
  {
    icon: <FaMapMarkedAlt />,
    title: 'Address',
    description: 'Golbasi, Ankara, TURKEY',
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: -500 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          delay: 1,
          duration: 0.5,
          ease: 'easeIn',
        },
      }}
      className='py-6'
    >
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-6'>
          <div className='xl:h-[60%] order-2 xl:order-none'>
            <form className='flex flex-col gap-6 p-10 bg-yellow-400'>
              <h3 className='text-4xl text-indigo-600 font-extrabold'>
                Let's work together.
              </h3>
              <p className='font-semibold text-base'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                illo nobis facere vitae? Adipisci, nemo!
              </p>
              <div>
                <div className='grid grid-cols-2 gap-6'>
                  <Input
                    type='firstname'
                    placeholder='First Name'
                    className='mb-5 border-none  rounded-none bg-white '
                  />
                  <Input
                    type='lastname'
                    placeholder='Last Name'
                    className='mb-5 border-none rounded-none bg-white '
                  />
                </div>
                <Input
                  type='email'
                  placeholder='Email Address'
                  className='mb-5 border-none rounded-none bg-white '
                />
                <Input
                  type='phone'
                  placeholder='Phone'
                  className='border-none  rounded-none bg-white '
                />
              </div>
              <Select>
                <SelectTrigger className='w-full border-none rounded-none'>
                  <SelectValue
                    placeholder='Select a service'
                    className='placeholder:'
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value='1'>Frontend Development</SelectItem>
                    <SelectItem value='2'>Backend Development</SelectItem>
                    <SelectItem value='3'>Mobile App Development</SelectItem>
                    <SelectItem value='4'>Full-Stack Development</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                className='h-[160px] placeholder: rounded-none border-none'
                placeholder='Type your message here.'
              />
              <Button className='bg-indigo-600 w-[72%] self-center hover:w-full hover:bg-stone-700'>
                Send Message
              </Button>
            </form>
          </div>
          <div className='flex-1 flex items-center xl:items-start xl:justify-end order-1 xl:order-none mb-4 xl:mb-0'>
            <ul className='flex flex-col gap-10 bg-sky-400 p-8 w-full'>
              {info.map((item, index) => {
                return (
                  <li key={index} className='flex items-center gap-6'>
                    <div className='w-12 h-12 flex items-center justify-center bg-white text-sky-500 rounded-full'>
                      <div>{item.icon}</div>
                    </div>
                    <div className='flex-1'>
                      <div className='font-bold'>{item.title}</div>

                      <div className='font-medium'>{item.description}</div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
