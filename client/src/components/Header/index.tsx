'use client';

import { Button } from '@/app/components/ui/button';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="items-center w-full flex flex-row justify-between px-32 h-28">
      <Link href="/">Logo Goes Here</Link>

      <nav>
        <ul className="flex flex-row gap-16">
          <li
            className={`${
              pathname === '/'
                ? 'text-green-500 font-bold'
                : 'text-black font-medium'
            }`}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={`${
              pathname === '/explore'
                ? 'text-green-500 font-bold'
                : 'text-black font-medium'
            }`}
          >
            <Link href="/explore">Explore</Link>
          </li>
          <li
            className={`${
              pathname === '/rooms'
                ? 'text-green-500 font-bold'
                : 'text-black font-medium'
            }`}
          >
            <Link href="/rooms">Rooms</Link>
          </li>
          <li
            className={`${
              pathname === '/about'
                ? 'text-green-500 font-bold'
                : 'text-black font-medium'
            }`}
          >
            <Link href="/about">About</Link>
          </li>
          <li
            className={`${
              pathname === '/contact'
                ? 'text-green-500 font-medium'
                : 'text-black font-medium'
            }`}
          >
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Button className="h-14 rounded bg-green-500 px-11">Book now</Button>
    </header>
  );
};

export default Header;
