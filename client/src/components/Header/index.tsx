import { Button } from '@/app/components/ui/button';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="w-full flex flex-row justify-between">
      <div>Logo Goes Here</div>

      <nav>
        <ul className="flex flex-row gap-16">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/explore">Explore</Link>
          </li>
          <li>
            <Link href="/rooms">Rooms</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Button>Book now</Button>
    </header>
  );
};

export default Header;
