'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Header = () => {
	const pathname = usePathname();

	return (
		<header className="flex h-28 w-full flex-row items-center justify-between px-32">
			<div className="flex h-28 flex-grow basis-0 justify-center">
				<Link href="/" className="relative mr-auto w-44">
					<div>
						<Image
							className="object-contain"
							src="/diani_orchard.png"
							alt="Go to the home page"
							fill={true}
						/>
					</div>
				</Link>
			</div>

			<nav className="flex-1 justify-center">
				<ul className="flex flex-row justify-between gap-16">
					<li
						className={`${
							pathname === '/' ?
								'font-bold text-[#EE7536]'
							:	'font-medium text-black transition-colors hover:text-[#22A6EF]'
						}`}
					>
						<Link href="/">Home</Link>
					</li>
					<li
						className={`${
							pathname === '/explore' ?
								'font-bold text-[#EE7536]'
							:	'font-medium text-black transition-colors hover:text-[#22A6EF]'
						}`}
					>
						<Link href="/explore">Explore</Link>
					</li>
					<li
						className={`${
							pathname === '/rooms' ?
								'font-bold text-[#EE7536]'
							:	'font-medium text-black transition-colors hover:text-[#22A6EF]'
						}`}
					>
						<Link href="/rooms">Rooms</Link>
					</li>
					<li
						className={`${
							pathname === '/about' ?
								'font-bold text-[#EE7536]'
							:	'font-medium text-black transition-colors hover:text-[#22A6EF]'
						}`}
					>
						<Link href="/about">About</Link>
					</li>
					<li
						className={`${
							pathname === '/contact' ?
								'font-bold text-[#EE7536]'
							:	'font-medium text-black transition-colors hover:text-[#22A6EF]'
						}`}
					>
						<Link href="/contact">Contact</Link>
					</li>
				</ul>
			</nav>

			<div className="flex h-14 flex-grow basis-0 justify-center">
				<Button className="ml-auto h-full rounded bg-[#EE7536] px-11 hover:bg-[#22A6EF]">
					Book now
				</Button>
			</div>
		</header>
	);
};

export default Header;
