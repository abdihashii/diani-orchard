'use client';

import { Button } from '@/app/components/ui/button';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="items-center w-full flex flex-row justify-between px-32 h-28">
      <div className="flex h-28 flex-grow basis-0 justify-center">
        <Link href="/" className="w-44 relative mr-auto">
          <div>
            <Image
              src="/diani_orchard.png"
              alt="Go to the home page"
              fill={true}
              objectFit="contain"
            />
          </div>
        </Link>
      </div>

      <nav className="flex-1 justify-center">
        <ul className="flex flex-row gap-16">
          <li
            className={`${
              pathname === '/'
                ? 'text-[#EE7536] font-bold'
                : 'text-black font-medium hover:text-[#22A6EF] transition-colors'
            }`}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={`${
              pathname === '/explore'
                ? 'text-[#EE7536] font-bold'
                : 'text-black font-medium hover:text-[#22A6EF] transition-colors'
            }`}
          >
            <Link href="/explore">Explore</Link>
          </li>
          <li
            className={`${
              pathname === '/rooms'
                ? 'text-[#EE7536] font-bold'
                : 'text-black font-medium hover:text-[#22A6EF] transition-colors'
            }`}
          >
            <Link href="/rooms">Rooms</Link>
          </li>
          <li
            className={`${
              pathname === '/about'
                ? 'text-[#EE7536] font-bold'
                : 'text-black font-medium hover:text-[#22A6EF] transition-colors'
            }`}
          >
            <Link href="/about">About</Link>
          </li>
          <li
            className={`${
              pathname === '/contact'
                ? 'text-[#EE7536] font-medium'
                : 'text-black font-medium hover:text-[#22A6EF] transition-colors'
            }`}
          >
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="h-14 flex-grow flex justify-center basis-0">
        <Button className="h-full rounded bg-[#EE7536] hover:bg-[#22A6EF] px-11 ml-auto">
          Book now
        </Button>
      </div>
    </header>
  );
};

export default Header;
