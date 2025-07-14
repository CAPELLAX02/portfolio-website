'use client';

import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';
import { useEffect, useState } from 'react';

const links = [
  { name: 'home', path: '/' },
  { name: 'resume', path: '/resume' },
  { name: 'projects', path: '/projects' },
  { name: 'contact', path: '/contact' },
];

const MobileNavbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger className='flex justify-center items-center'>
          <CiMenuFries className='text-[32px] text-accent' />
        </SheetTrigger>

        <SheetContent className='flex flex-col'>
          <div className='mt-28 mb-12 text-center text-2xl'>
            <Link href='/'>
              <h1 className='text-4xl font-semibold'>
                capellax<span className='text-gray-900'>.</span>
              </h1>
            </Link>
          </div>

          <nav className='flex flex-col justify-center items-center gap-5'>
            {links.map((link, index) => (
                <Link
                    href={link.path}
                    key={index}
                    className={`${
                        link.path === pathname && 'bg-gray-900 text-white'
                    } text-xl capitalize hover:text-black transition-all p-2 hover:bg-white hover:w-72 w-64 text-center font-semibold text-black`}
                >
                  {link.name}
                </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
  );
};

export default MobileNavbar;
