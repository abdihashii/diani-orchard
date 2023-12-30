import {
	AirVent,
	ParkingSquare,
	PartyPopper,
	PlayCircle,
	Refrigerator,
	ShowerHead,
	Tv,
	Waves,
	Wifi,
} from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const rooms = [
	{
		id: 1,
		name: 'Block A',
		price: 'Ksh 10,000',
		available: true,
	},
	{
		id: 2,
		name: 'Block B',
		price: 'Ksh 8,000',
		available: true,
	},
	{
		id: 3,
		name: 'Block C',
		price: 'Ksh 6,000',
		available: true,
	},
	{
		id: 4,
		name: 'Block D',
		price: 'Ksh 4,000',
		available: true,
	},
	{
		id: 5,
		name: 'Block E',
		price: 'Ksh 2,000',
		available: true,
	},
];

export default function Home() {
	return (
		<main className="">
			{/* Hero section */}
			<section
				className="relative mx-auto flex h-full w-10/12 items-center justify-between lg:gap-6"
				style={{
					height: 'calc(100vh - 7rem)', // 7rem is the height of the header
				}}
			>
				{/* Text and Image parts of the hero seciton */}
				<article className="flex h-full w-full items-center justify-between">
					{/* Left side */}
					<div className="flex w-1/4 flex-col gap-12">
						<h1 className="text-diani-orange text-6xl font-semibold">
							Diani Orchard
						</h1>
						<h2 className="text-[55px] font-bold text-[#1C1C1C]">
							Hotel for every moment rich in emotion
						</h2>
						<p>Every moment feels like the first time</p>

						<div className="flex h-14 flex-row gap-10">
							<Button className="bg-diani-orange hover:bg-diani-blue h-full rounded-full px-7 text-xl">
								Book Now
							</Button>
							<Link
								href="/explore"
								className="group flex flex-row items-center gap-4 text-xl"
							>
								<PlayCircle
									className="text-diani-blue group-hover:text-diani-orange transition-colors"
									size={55}
								/>{' '}
								Take a tour
							</Link>
						</div>
					</div>

					{/* Right side */}
					<div className="relative h-full w-1/2">
						<Image src="/home.jpeg" fill={true} objectFit="cover" alt="home" />
					</div>
				</article>

				{/* Booking on bottom, should be absolute positioned */}
				<article
					className="absolute bottom-10 h-[120px] w-full bg-white"
					style={{
						padding: 'inherit',
					}}
				>
					<div className="flex h-full w-full flex-row justify-between px-9 py-7">
						<Button className="bg-diani-orange hover:bg-diani-blue ml-auto h-full px-14">
							Book now
						</Button>
					</div>
				</article>
			</section>

			{/* Facilities section */}
			<section className="mx-auto w-10/12 space-y-32 py-32">
				<article className="space-y-3 text-center">
					<h2 className="text-[40px]">Our Facilities</h2>
					<p>We offer modern (5 star) facilities for your comfort</p>
				</article>

				<article className="grid grid-cols-4 gap-x-12 gap-y-56">
					<div className="text-diani-orange flex flex-col items-center gap-6 text-xl">
						<Wifi size={55} />
						WiFi
					</div>

					<div className="text-diani-orange flex flex-col items-center gap-6 text-xl">
						<ParkingSquare size={55} />
						Free Parking
					</div>

					<div className="text-diani-orange flex flex-col items-center gap-6 text-xl">
						<AirVent size={55} />
						Air conditioning
					</div>

					<div className="text-diani-orange flex flex-col items-center gap-6 text-xl">
						<Waves size={55} />
						Shared swimming pool
					</div>

					<div className="text-diani-orange flex flex-col items-center gap-6 text-xl">
						<PartyPopper size={55} />
						Shared gazebo and party area
					</div>

					<div className="text-diani-orange flex flex-col items-center gap-6 text-xl">
						<Tv size={55} />
						TV with cable in Gazebo
					</div>

					<div className="text-diani-orange flex flex-col items-center gap-6 text-xl">
						<ShowerHead size={55} />
						Poolside shower
					</div>

					<div className="text-diani-orange flex flex-col items-center gap-6 text-xl">
						<Refrigerator size={55} />
						Shared, full-sized kitchen in lounge
					</div>
				</article>
			</section>

			{/* Rooms section */}
			<section
				className="relative flex h-full w-full flex-col justify-center gap-20 bg-cover bg-center bg-no-repeat py-12 text-white"
				style={{
					backgroundImage: 'url(/rooms_section.jpeg)',
				}}
			>
				{/* BG Overlay */}
				<div className="absolute inset-0 bg-[#7C6A46] bg-opacity-80"></div>

				<article className="z-30 space-y-4 text-center">
					<h2 className="text-[50px]">Luxurious Rooms</h2>
					<hr className="mx-auto w-1/12 border-4 border-white" />
					<p>All rooms are designed for your comfort</p>
				</article>

				<article className="z-30 mx-auto grid w-10/12 grid-cols-3 gap-x-16 text-black">
					<div className="aspect-w-1 aspect-h-1 rounded-xl bg-white p-7">
						<Image
							src="/room.jpeg"
							fill={true}
							objectFit="cover"
							alt="room"
							className="rounded-xl"
						/>

						<p className="flex-shrink-0 text-center">
							Television set, Extra Sheets and Breakfast
						</p>
					</div>

					<div className="aspect-w-1 aspect-h-1 rounded-xl bg-white p-7">
						<Image
							src="/room.jpeg"
							fill={true}
							objectFit="cover"
							alt="room"
							className="rounded-xl"
						/>
						<p>Television set, Extra Sheets and Breakfast</p>
					</div>

					<div className="aspect-w-1 aspect-h-1 rounded-xl bg-white">
						<Image
							src="/room.jpeg"
							fill={true}
							objectFit="cover"
							alt="room"
							className="rounded-xl"
						/>
						<p>Television set, Extra Sheets and Breakfast</p>
					</div>
				</article>
			</section>
		</main>
	);
}
