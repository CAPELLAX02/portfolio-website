'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

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

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className='flex gap-5'>
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.path}
            className={`${
              link.path === pathname && 'text-black p-1 px-3 bg-yellow-300'
            } capitalize font-medium hover:text-black hover:bg-sky-300 hover:px-3 p-1 transition-all my-auto`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
