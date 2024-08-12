import Photo from '@/components/Photo';
import Social from '@/components/Social';
import Stats from '@/components/Stats';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { FiDownload } from 'react-icons/fi';

const Home = () => {
  return (
    <section className='h-full'>
      <div className='container mx-auto h-full'>
        <div className='flex flex-col xl:flex-row items-center justify-center gap-10 xl:gap-32 xl:pt-8 xl:pb-24'>
          {/* Text */}
          <div className='text-center xl:text-left order-2 xl:order-none'>
            <span className='py-1 px-5 text-white bg-rose-500 rounded-full font-semibold'>
              Full-Stack Engineer
            </span>
            <h1 className='h1 my-3'>
              Hello, I am <br />
              <span className='text-indigo-600'>Ahmet Atar</span>
            </h1>

            <p className='max-w-[540px] mb-6 leading-relaxed'>
              I am a computer science student as well as a full stack developer.
              I have a keen interest in frontend and backend development, along
              with creating mobile apps using React Native.
            </p>
            {/* Btn and socials */}
            <div className='flex flex-col xl:flex-row items-center gap-5 my-3'>
              <Button
                variant='outline'
                size='lg'
                className='items-center gap-2 flex'
              >
                <span>Download CV</span> <FiDownload className='text-xl' />
              </Button>
              <div className='ms-2 mb-8 xl:mb-0'>
                <Social
                  containerStyles='flex gap-6'
                  iconStyles='w-11 h-11 border border-black rounded-full flex justify-center items-center text-black text-xl hover:bg-black hover:text-primary hover:transition-all duration-500'
                />
              </div>
            </div>
          </div>

          {/* Photo */}
          <div>
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
