'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Footer = () => {
	const pathname = usePathname();

	return (
		<footer className="min-h-[420px] w-full bg-black text-white">
			{/* Top section */}
			<section className="flex h-2/3 flex-grow gap-28 px-32 py-20 xl:justify-center">
				{/* Diani Orchard Excerpt */}
				<article className="flex w-64 flex-col gap-3">
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
						<li
							className={`text-xs ${
								pathname === '/book' ?
									'font-bold text-[#EE7536]'
								:	'font-medium text-white transition-colors hover:text-[#22A6EF]'
							}`}
						>
							<Link href="/book">Book</Link>
						</li>
						<li
							className={`text-xs ${
								pathname === '/rooms' ?
									'font-bold text-[#EE7536]'
								:	'font-medium text-white transition-colors hover:text-[#22A6EF]'
							}`}
						>
							<Link href="/rooms">Rooms</Link>
						</li>
						<li
							className={`text-xs ${
								pathname === '/contact' ?
									'font-bold text-[#EE7536]'
								:	'font-medium text-white transition-colors hover:text-[#22A6EF]'
							}`}
						>
							<Link href="/contact">Contact</Link>
						</li>
						<li
							className={`text-xs ${
								pathname === '/explore' ?
									'font-bold text-[#EE7536]'
								:	'font-medium text-white transition-colors hover:text-[#22A6EF]'
							}`}
						>
							<Link href="/explore">Explore</Link>
						</li>
					</ul>
				</article>

				{/* Company */}
				<article className="flex flex-col gap-5">
					<h2 className="font-semibold">Company</h2>

					<ul className="flex flex-col gap-3 font-medium">
						<li
							className={`text-xs ${
								pathname === '/privacy-policy' ?
									'font-bold text-[#EE7536]'
								:	'font-medium text-white transition-colors hover:text-[#22A6EF]'
							}`}
						>
							<Link href="/privacy-policy">Privacy Policy</Link>
						</li>
						<li
							className={`text-xs ${
								pathname === '/refund-policy' ?
									'font-bold text-[#EE7536]'
								:	'font-medium text-white transition-colors hover:text-[#22A6EF]'
							}`}
						>
							<Link href="/refund-policy">Refund Policy</Link>
						</li>
						<li
							className={`text-xs ${
								pathname === '/faq' ?
									'font-bold text-[#EE7536]'
								:	'font-medium text-white transition-colors hover:text-[#22A6EF]'
							}`}
						>
							<Link href="/faq">F.A.Q</Link>
						</li>
						<li
							className={`text-xs ${
								pathname === '/about' ?
									'font-bold text-[#EE7536]'
								:	'font-medium text-white transition-colors hover:text-[#22A6EF]'
							}`}
						>
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
				<article className="flex w-[360px] flex-col gap-5">
					<h2 className="font-semibold">Newsletter</h2>

					<p className="text-xs">
						Kindly subscribe to our newsletter to get latest deals on our rooms
						and vacation discount.
					</p>

					<form className="relative">
						<input
							className="h-[50px] w-full rounded px-4 text-xs text-black"
							type="email"
							placeholder="Enter your email"
						/>

						<Button
							className="absolute right-[5px] top-[5px] h-10 rounded bg-[#EE7536] text-sm hover:bg-[#22A6EF]"
							type="submit"
						>
							Subscribe
						</Button>
					</form>
				</article>
			</section>

			{/* Copyright */}
			<section className="flex h-1/3 items-center justify-center border-t border-t-gray-500 py-12 font-semibold">
				<p>Copyright &copy; 2024 Diani Orchard</p>
			</section>
		</footer>
	);
};

export default Footer;
