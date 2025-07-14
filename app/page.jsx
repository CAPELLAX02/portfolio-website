import Photo from '@/components/Photo';
import Social from '@/components/Social';
import Stats from '@/components/Stats';
import { Button } from '@/components/ui/button';
import { FiDownload } from 'react-icons/fi';

export default function Home() {
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
              A Java backend developer and computer engineering student focused on delivering meaningful, innovative, and scalable solutions through expertise and dedication.
            </p>
            {/* Btn and socials */}
            <div className='flex flex-col xl:flex-row items-center gap-5 my-4'>
              <Button
                variant='outline'
                size='lg'
                className='items-center hover:text-gray-200 gap-2 flex text-lg hover:border-gray-800 hover:bg-gray-800'
              >
                <span>Download CV</span> <FiDownload className='text-xl' />
              </Button>
              <div className='ms-2 mb-8 xl:mb-0'>
                <Social
                  containerStyles='flex gap-4'
                  iconStyles='m-auto w-14 h-14 rounded-none flex justify-center items-center text-gray-200 text-3xl hover:text-[44px] bg-gray-800 text-gray-200 hover:bg-gray-100 hover:text-gray-900 hover:transition-all duration-100'
                />
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className="order-1 xl:order-none">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};
