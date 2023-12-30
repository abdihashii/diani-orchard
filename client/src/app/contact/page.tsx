import ContactForm from '@/components/Contact/ContactForm';

export default function ContactPage() {
	return (
		<main className="">
			{/* Hero section */}
			<section
				className="relative flex h-full w-full items-center justify-center bg-cover bg-center bg-no-repeat"
				style={{
					backgroundImage: 'url(/room.jpeg)',
					height: 'calc(100vh - 7rem)', // 7rem is the height of the header
				}}
			>
				{/* BG Overlay */}
				<div className="absolute inset-0 bg-[#7C6A46] bg-opacity-50"></div>

				<article className="z-30 flex flex-col items-center gap-12 text-center text-white lg:w-1/2 xl:w-1/3 xl:gap-16">
					<h1 className="text-6xl font-bold">Contact us</h1>
					<p className="text-xl">
						The elegant luxury bedrooms in this gallery showcase custom interior
						designs & decorating ideas. View pictures and find your perfect
						luxury bedroom design.
					</p>
				</article>
			</section>

			{/* Contact section */}
			<section className="mx-auto w-full gap-36 px-32 py-28 lg:w-1/2">
				<ContactForm />
			</section>

			{/* Map section */}
			<section className="w-full">
				<iframe
					className="w-full"
					src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15915.028095690845!2d39.5908551!3d-4.267411!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x184047c1b0ddf711%3A0xdb53247d7e0c42de!2sDiani%20Orchard!5e0!3m2!1sen!2sus!4v1703910068307!5m2!1sen!2sus"
					height="500"
					style={{ border: 0 }}
					allowFullScreen={false}
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				></iframe>
			</section>
		</main>
	);
}
