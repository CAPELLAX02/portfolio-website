'use client';

import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';

const links = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'services',
    path: '/services',
  },
  {
    name: 'resume',
    path: '/resume',
  },
  {
    name: 'projects',
    path: '/projects',
  },
  {
    name: 'contact',
    path: '/contact',
  },
];

const MobileNavbar = () => {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className='flex justify-center items-center'>
        <CiMenuFries className='text-[32px] text-accent' />
      </SheetTrigger>

      <SheetContent className='flex flex-col'>
        {/* Logo */}
        <div className='mt-28 mb-12 text-center text-2xl'>
          <Link href='/'>
            <h1 className='text-4xl font-semibold text-accent'>
              capellax<span className='text-black'>.</span>
            </h1>
          </Link>
        </div>

        {/* Navbar */}
        <nav className='flex flex-col justify-center items-center gap-5'>
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathname && 'text-black p-2 bg-yellow-300'
                } text-xl capitalize hover:text-black transition-all p-2 hover:bg-green-400 hover:w-72 w-64 text-center font-semibold text-black`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavbar;
