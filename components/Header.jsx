import Link from 'next/link';
import { Button } from './ui/button';
import Navbar from './Navbar';
import MobileNavbar from './MobileNavbar';

const Header = () => {
  return (
    <header className='py-8 xl:py-12 text-black'>
      <div className='container mx-auto flex justify-between items-center'>
        {/* Logo */}
        <Link href='/'>
          <h1 className='text-4xl font-semibold'>
            capellax<span className='text-indigo-600'>.</span>
          </h1>
        </Link>

        {/* Desktop Navbar & Hire Me Button */}
        <div className='hidden xl:flex items-center gap-6'>
          <Navbar />
          <Link href='/contact'>
            <Button>Hire Me</Button>
          </Link>
        </div>

        {/* Mobile Navbar */}
        <div className='xl:hidden'>
          <MobileNavbar />
        </div>
      </div>
    </header>
  );
};

export default Header;
