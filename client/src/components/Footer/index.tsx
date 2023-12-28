'use client';

import React from 'react';
// import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/app/components/ui/button';

const Footer = () => {
  // const pathname = usePathname();

  return (
    <footer className="min-h-[420px] w-full bg-black text-white">
      <section className="h-2/3 flex flex-grow gap-28 px-32 py-20">
        {/* Diani Orchard Excerpt */}
        <article className="w-64 flex flex-col gap-3">
          <h2 className="text-3xl font-semibold">Diani Orchard</h2>
          <p className="text-xs font-medium">
            The service at the Hotel Monteleone was exceptional. There was
            absolutely no issue that was not addressed timely and with
            satisfactory results. We were particulary impressed with how the
            hotel staff anticipated our needs (periodically coming by the Board
            Room to check with us)
          </p>
        </article>

        {/* Quick Links */}
        <article className="flex flex-col gap-5">
          <h2 className="font-semibold">Quick Links</h2>

          <ul className="flex flex-col gap-3 font-medium">
            <li className="text-xs">
              <Link href="/">Book</Link>
            </li>
            <li className="text-xs">
              <Link href="/">Rooms</Link>
            </li>
            <li className="text-xs">
              <Link href="/">Contact</Link>
            </li>
            <li className="text-xs">
              <Link href="/">Explore</Link>
            </li>
          </ul>
        </article>

        {/* Company */}
        <article className="flex flex-col gap-5">
          <h2 className="font-semibold">Company</h2>

          <ul className="flex flex-col gap-3 font-medium">
            <li className="text-xs">
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li className="text-xs">
              <Link href="/refund-policy">Refund Policy</Link>
            </li>
            <li className="text-xs">
              <Link href="/faq">F.A.Q</Link>
            </li>
            <li className="text-xs">
              <Link href="/about">About</Link>
            </li>
          </ul>
        </article>

        {/* Social Media */}
        <article className="flex flex-col gap-5">
          <h2 className="font-semibold">Social Media</h2>

          <ul className="flex flex-col gap-3 font-medium">
            <li className="text-xs">
              <Link target="_blank" href="/privacy-policy">
                Twitter
              </Link>
            </li>
            <li className="text-xs">
              <Link target="_blank" href="/refund-policy">
                Instagram
              </Link>
            </li>
          </ul>
        </article>

        {/* Newsletter */}
        <article className="w-[360px] flex flex-col gap-5">
          <h2 className="font-semibold">Newsletter</h2>

          <p className="text-xs">
            Kindly subscribe to our newsletter to get latest deals on our rooms
            and vacation discount.
          </p>

          <form className="relative">
            <input
              className="w-full h-[50px] px-4 rounded text-xs text-black"
              type="email"
              placeholder="Enter your email"
            />

            <Button
              className="text-sm rounded absolute top-[5px] right-[5px] h-10 bg-[#EE7536] hover:bg-[#22A6EF]"
              type="submit"
            >
              Subscribe
            </Button>
          </form>
        </article>
      </section>

      {/* Copyright */}
      <section className="py-12 h-1/3 flex justify-center items-center font-semibold border-t border-t-gray-500">
        <p>Copyright &copy; 2024 Diani Orchard</p>
      </section>
    </footer>
  );
};

export default Footer;
