'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  {
    name: 'home',
    path: '/',
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
              link.path === pathname && 'text-white p-1 px-3 bg-gray-800 hover:px-4'
            } capitalize font-medium hover:text-gray-900 hover:bg-gray-50 hover:px-3 p-1 transition-all my-auto`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
