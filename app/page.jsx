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
            <span className='py-1 px-5 text-white bg-gray-700 rounded-none font-semibold'>
              Backend Software Engineer
            </span>
            <h1 className='h1 my-3'>
              Hello, I am <br />
              <span className='text-gray-700'>Ahmet Atar.</span>
            </h1>

            <p className='max-w-[540px] mb-6 leading-relaxed'>
              I am a computer science student as well as a full stack developer.
              I have a keen interest in frontend and backend development, along
              with creating mobile apps using React Native.
            </p>
            {/* Btn and socials */}
            <div className='flex flex-col xl:flex-row items-center gap-5 my-4'>
              <Button
                variant='outline'
                size='lg'
                className='items-center gap-2 flex text-lg'
              >
                <span>Download CV</span> <FiDownload className='text-xl' />
              </Button>
              <div className='ms-2 mb-8 xl:mb-0'>
                <Social
                  containerStyles='flex gap-6'
                  iconStyles='m-auto w-14 h-14 border border-black rounded-none flex justify-center items-center text-black text-3xl hover:text-[40px] hover:bg-black hover:text-gray-200 hover:transition-all duration-100'
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
