'use client';

import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { BsArrowDownRight, BsGithub } from 'react-icons/bs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import Link from 'next/link';
import Image from 'next/image';
import SliderButtons from '@/components/SliderButtons';

import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiRedux,
  SiNestjs,
  SiSpringboot,
  SiPostgresql,
  SiJavascript,
  SiExpress,
  SiCss3,
  SiHtml5,
  SiBootstrap,
  SiReact,
  SiNodedotjs,
  SiExpo,
  SiPostman,
  SiDocker,
} from 'react-icons/si';
import { TbBrandSocketIo } from 'react-icons/tb';

const projects = [
  {
    num: '01',
    category: 'frontend',
    title: 'Bookmark',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi recusandae similique magni perferendis? Corrupti alias quisquam, dolorem odit quia nulla.',
    stack: [
      { name: 'HTML', icon: <SiHtml5 /> },
      { name: 'CSS', icon: <SiCss3 /> },
      { name: 'Tailwind', icon: <SiTailwindcss /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
    ],
    images: [
      '/assets/work/thumb1.png',
      '/assets/work/thumb2.png',
      '/assets/work/thumb3.png',
    ],
    live: '',
    github: 'https://github.com/CAPELLAX02/e-comMERNce',
  },
  {
    num: '02',
    category: 'backend',
    title: '<unknown>',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi recusandae similique magni perferendis? Corrupti alias quisquam, dolorem odit quia nulla.',
    stack: [
      { name: 'Tailwind', icon: <SiTailwindcss /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'React', icon: <SiReact /> },
    ],
    images: [
      '/assets/work/thumb2.png',
      '/assets/work/thumb3.png',
      '/assets/work/thumb1.png',
    ],
    live: '',
    github: '',
  },
  {
    num: '03',
    category: 'full-stack',
    title: 'PropertyPulse',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi recusandae similique magni perferendis? Corrupti alias quisquam, dolorem odit quia nulla.',
    stack: [
      { name: 'Tailwind', icon: <SiTailwindcss /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
    ],
    images: [
      '/assets/work/thumb3.png',
      '/assets/work/thumb2.png',
      '/assets/work/thumb1.png',
    ],
    live: '',
    github: '',
  },
  {
    num: '04',
    category: 'full-stack',
    title: 'e-comMERNce',
    description:
      'Fully functional e-commerce website project including cart functionality, checkout process, reviewing products and administration.',
    stack: [
      { name: 'React-ootstrap', icon: <SiBootstrap /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'React', icon: <SiReact /> },
      { name: 'Redux', icon: <SiRedux /> },
      { name: 'Express.js', icon: <SiExpress /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
    ],
    images: [
      '/assets/work/thumb2.png',
      '/assets/work/thumb3.png',
      '/assets/work/thumb1.png',
    ],
    live: '',
    github: '',
  },
  {
    num: '05',
    category: 'mobile',
    title: 'e-comMERNce',
    description:
      'Fully functional e-commerce website project including cart functionality, checkout process, reviewing products and administration.',
    stack: [
      { name: 'Bootstrap', icon: <SiBootstrap /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'React', icon: <SiReact /> },
      { name: 'Redux', icon: <SiRedux /> },
      { name: 'Express.js', icon: <SiExpress /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
    ],
    images: [
      '/assets/work/thumb2.png',
      '/assets/work/thumb3.png',
      '/assets/work/thumb1.png',
    ],
    live: '',
    github: '',
  },
  {
    num: '06',
    category: 'All in One',
    title: 'socianalize',
    description:
      'This comprehensive project encompasses all user interfaces, including a web version, mobile app, and admin dashboard. It also features a fully functional backend server supporting all use cases.',
    stack: [
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'Expo & React Native', icon: <SiExpo /> },
      { name: 'Redux', icon: <SiRedux /> },
      { name: 'Nest.js', icon: <SiNestjs /> },
      { name: 'MongoDB', icon: <SiMongodb /> },
      { name: 'Socket.io', icon: <TbBrandSocketIo /> },
    ],
    images: [
      '/assets/work/thumb2.png',
      '/assets/work/thumb3.png',
      '/assets/work/thumb1.png',
    ],
    live: '',
    github: '',
  },
];

const ProjectSection = ({ project }) => (
  <div
    className={`flex flex-col xl:flex-row gap-10 xl:gap-16 mb-36 pb-36 ${
      Number(project.num) != projects.length
        ? 'border-b-2 border-gray-600'
        : ''
    }`}
  >
    <div
      className={`w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between ${
        Number(project.num) % 2 === 0 ? 'order-2' : ''
      }`}
    >
      <div className='flex flex-col gap-4'>
        <div className='flex flex-row gap-12 items-center'>
          <div className='text-8xl mb-2 font-extrabold text-transparent text-outline'>
            {project.num}
          </div>
          <div>
            <div className='flex items-center gap-4'>
              <Link href={project.live}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-gray-200 hover:bg-gray-800 border-2 border-gray-800 flex justify-center items-center group hover:-rotate-90 transition-all duration-200'>
                      <BsArrowDownRight className='text-gray-800 text-3xl group-hover:text-white group-hover:text-4xl ' />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live Project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>

              <Link href={project.github}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-gray-800 hover:bg-gray-200 flex justify-center items-center group transition-all'>
                      <BsGithub className='text-gray-200 text-4xl group-hover:text-gray-800 group-hover:text-7xl transition-all duration-200' />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>See Code</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Link>
            </div>
          </div>
        </div>
        <h1 className='text-5xl font-extrabold capitalize flex flex-row hover:cursor-default'>
          {project.title}
        </h1>

        <span className='px-1 w-44 text-center text-white bg-red-700 rounded-full font-semibold capitalize text-md'>
          {project.category} project
        </span>

        <p className='leading-relaxed my-1'>{project.description}</p>
        <h4 className='text-lg font-semibold '>Featured Technologies</h4>
        <ul className='flex gap-4'>
          {project.stack.map((item, index) => (
            <li key={index}>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger>
                    <div className='text-3xl hover:text-white transition-all duration-200 bg-white p-3 hover:bg-gray-800'>
                      {item.icon}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{item.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              {/* {index !== project.stack.length - 1 && ','} */}
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className='w-full xl:w-[50%]'>
      <Swiper spaceBetween={30} slidesPerView={1} className='xl:h-[520px]'>
        {project.images.map((image, imgIndex) => (
          <SwiperSlide key={imgIndex} className='w-full'>
            <div className='h-[460px] relative group flex justify-center items-center bg-gray-400'>
              <div className='absolute top-0 bottom-0 w-full h-full bg-red-700'></div>
              <div className='relative w-full h-full'>
                <Image
                  fill
                  src={image}
                  className='object-cover'
                  alt={`${project.title} - Slider Image`}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
        <SliderButtons
          containerStyles='flex gap-2 absolute left-[50px] bottom-[calc(50% * 20px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-center'
          btnStyles='bg-gray-700 hover:bg-gray-600 text-white text-2xl w-[44px] h-[44px] flex justify-center items-center transition-all rounded-full hover:bg-indigo-500 hover:text-white'
          iconStyles='hover:text-white '
        />
      </Swiper>
    </div>
  </div>
);

const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1,
          duration: 0.4,
          ease: 'easeIn',
        },
      }}
      className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
    >
      <div className='container mx-auto'>
        {projects.map((project, index) => (
          <ProjectSection key={index} project={project} />
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
