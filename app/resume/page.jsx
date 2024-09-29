'use client';

import {
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaReact,
  FaNodeJs,
  FaJava,
} from 'react-icons/fa';
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

const about = {
  title: 'About Me',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quia voluptatum nihil velit officia, quae cupiditate omnis maiores rem, nulla et commodi. Ipsa doloribus nihil quia ipsum minus autem et.',
  info: [
    {
      fieldName: 'Name',
      fieldValue: 'Ahmet ATAR',
    },
    {
      fieldName: 'Phone',
      fieldValue: '(+90) 531 881 18 76',
    },
    {
      fieldName: 'Email',
      fieldValue: 'ahmtatar@gmail.com',
    },
    {
      fieldName: 'Nationality',
      fieldValue: 'Turkish',
    },
    {
      fieldName: 'Freelance',
      fieldValue: 'Available',
    },
    {
      fieldName: 'Languages',
      fieldValue: 'English, Turkish',
    },
  ],
};

const experience = {
  icon: '/assets/resume/badge.svg',
  title: 'My Experience',
  description:
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti aut distinctio eaque nihil? Sed quisquam temporibus laboriosam dicta consequuntur reprehenderit.',
  items: [
    {
      company: 'Tech Solutions Inc.',
      position: 'Full-Stack Developer',
      duration: '2024 - Present',
    },
    {
      company: 'Web Design Studio',
      position: 'Backend Developer',
      duration: '2021 - 2023',
    },
    {
      company: 'E-commerce Startup',
      position: 'Backend Developer Intern',
      duration: '2020 - 2021',
    },
    {
      company: 'Tech Solutions Inc.',
      position: 'Frontend Developer Intern',
      duration: 'Summer 2020',
    },
    {
      company: 'Tech Solutions Inc.',
      position: 'Frontend Developer Intern',
      duration: 'Summer 2020',
    },
    {
      company: 'Tech Solutions Inc.',
      position: 'Frontend Developer Intern',
      duration: 'Summer 2020',
    },
  ],
};

const education = {
  icon: '/assets/resume/cap.svg',
  title: 'My Education & Certifications',
  description:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore enim eveniet quo consequuntur, distinctio itaque quaerat id soluta. Beatae, vitae!',
  items: [
    {
      institution: 'Codecademy',
      degree: 'Full-Stack Engineering Career Path',
      duration: '2023',
      certification: '',
    },
    {
      institution: 'University of Michigan',
      degree: 'Python for Everybody',
      duration: '2022',
      certification: '',
    },
    {
      institution: 'Ankara University',
      degree: 'Bachelor in Computer Engineering',
      duration: '2023 - 2027',
    },
    {
      institution: 'Ankara University',
      degree: 'Preparoty - English',
      duration: '2022 - 2023',
    },
  ],
};

const skills = {
  title: 'My Skills',
  description:
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos similique distinctio suscipit expedita cumque. Tenetur facere dolorum quae perspiciatis eaque.',
  skillList: [
    {
      icon: <SiHtml5 />,
      name: 'HTML',
    },
    {
      icon: <SiCss3 />,
      name: 'CSS',
    },
    {
      icon: <SiBootstrap />,
      name: 'Bootstrap 5',
    },
    {
      icon: <SiTailwindcss />,
      name: 'TailwindCSS',
    },
    {
      icon: <SiJavascript />,
      name: 'JavaScript ES6+',
    },
    {
      icon: <SiTypescript />,
      name: 'TypeScript',
    },
    {
      icon: <SiReact />,
      name: 'React',
    },
    {
      icon: <SiExpo />,
      name: 'Expo & React Native',
    },
    {
      icon: <SiRedux />,
      name: 'Redux & Redux Toolkit',
    },
    {
      icon: <SiNextdotjs />,
      name: 'Next.js',
    },
    {
      icon: <SiNodedotjs />,
      name: 'Node.js',
    },
    {
      icon: <SiExpress />,
      name: 'Express.js',
    },
    {
      icon: <SiNestjs />,
      name: 'Nest.js',
    },
    {
      icon: <SiDocker />,
      name: 'Docker',
    },
    {
      icon: <SiMongodb />,
      name: 'MongoDB',
    },
    {
      icon: <SiPostgresql />,
      name: 'PostgreSQL',
    },
    {
      icon: <FaJava />,
      name: 'Java',
    },
    {
      icon: <SiSpringboot />,
      name: 'Spring Boot',
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1,
          duration: 0.4,
          ease: 'easeInOut',
        },
      }}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className='container max-auto'>
        <Tabs
          defaultValue='experience'
          className='flex flex-col xl:flex-row gap-12'
        >
          <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 items-center'>
            <TabsTrigger value='experience'>Experience</TabsTrigger>
            <TabsTrigger value='education'>
              Education & Certificates
            </TabsTrigger>
            <TabsTrigger value='skills'>Skills</TabsTrigger>
            <TabsTrigger value='about'>About Me</TabsTrigger>
          </TabsList>

          <div className='min-h-[70vh] w-full'>
            <TabsContent className='w-full h-full' value='experience'>
              <div className='flex flex-col gap-6 text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                <p className='max-w-[600px] text-black leading-relaxed'>
                  {experience.description}
                </p>
                <div>
                  <ul className='grid grid-cols-1 gap-5'>
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className='bg-[#fff] px-6 py-4 flex flex-col justify-center items-center lg:items-start mr-6'
                        >
                          <span className='text-indigo-500'>
                            {item.duration}
                          </span>
                          <h3 className='text-xl max-w-[260px] text-center lg:text-left font-semibold'>
                            {item.position}
                          </h3>
                          <div className='flex items-center gap-3'>
                            <span className='w-[8px] h-[8px] rounded-full bg-indigo-500'></span>
                            <p className='text-black'>{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent className='w-full h-full' value='education'>
              <div className='flex flex-col gap-6 text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{education.title}</h3>
                <p className='max-w-[600px] text-black leading-relaxed'>
                  {education.description}
                </p>
                <div>
                  <ul className='grid grid-cols-1 gap-5'>
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className='bg-[#fff] px-6 py-4 flex flex-col justify-center items-center lg:items-start mr-6 relative'
                        >
                          <div>
                            <span className='text-indigo-500'>
                              {item.duration}
                            </span>
                            <h3 className='text-xl text-center lg:text-left font-semibold'>
                              {item.degree}
                            </h3>
                            <div className='flex items-center gap-3'>
                              <span className='w-[8px] h-[8px] rounded-full bg-indigo-500'></span>
                              <p className='text-black'>{item.institution}</p>
                            </div>
                          </div>
                          <div>
                            {!item.certification && (
                              <a
                                className='text-sm text-indigo-500 underline xl:absolute right-4 bottom-4'
                                href='#'
                              >
                                Show Cerfication
                              </a>
                            )}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent className='w-full h-full' value='skills'>
              <div className='flex flex-col gap-5'>
                <div className='flex flex-col gap-5 text-center xl:text-left'>
                  <h3 className='text-4xl font-bold'>{skills.title}</h3>
                  <p className='max-w-[600px] text-black mx-auto xl:mx-0'>
                    {skills.description}
                  </p>
                </div>
                <ul className='grid grid-cols-4 sm:grid-cols-4 md:grid-cols-5 xl:grid-cols-6 gap-6 text-center'>
                  {skills.skillList.map((item, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className='w-full sm:py-12 md-py-8 lg:py-10 xl:py-7 py-8 bg-[#f2e5d9] hover:bg-black transition-all duration-200 flex justify-center items-center group'>
                              <div className='text-5xl group-hover:text-primary transition-all duration-100'>
                                {item.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{item.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              className='w-full text-center xl:text-left'
              value='about'
            >
              <div className='flex flex-col gap-6'>
                <h3 className='text-4xl font-bold'>{about.title}</h3>
                <p className='max-w-[600px] text-black mx-auto xl:mx-0'>
                  {about.description}
                </p>
                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className='flex items-center justify-center xl:justify-start gap-4'
                      >
                        <span>{item.fieldName}:</span>
                        <span className='font-extrabold'>
                          {item.fieldValue}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
