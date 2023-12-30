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
			<section className="mx-auto w-full gap-36 border border-purple-500 px-32 py-28">
				<form className="flex flex-col gap-9 text-black">
					<div className="grid w-full grid-cols-2 gap-5">
						<div className="flex flex-col gap-3">
							<label htmlFor="name">Name</label>
							<input
								type="text"
								name="name"
								id="name"
								className="border border-[#1C1C1C] px-5 py-6"
								placeholder="Enter your name"
							/>
						</div>

						<div className="flex flex-col gap-3">
							<label htmlFor="email">Email</label>
							<input
								type="email"
								name="email"
								id="email"
								className="border border-[#1C1C1C] px-5 py-6"
								placeholder="Enter your email"
							/>
						</div>
					</div>

					<div className="flex h-80 flex-col gap-3">
						<label htmlFor="message">Message</label>
						<textarea
							name="message"
							id="message"
							className="h-full border border-[#1C1C1C] px-5 py-6"
							placeholder="Enter your message"
						/>
					</div>

					<button
						type="submit"
						className="rounded-md bg-[#7C6A46] px-10 py-5 text-white"
					>
						Send
					</button>
				</form>
			</section>
		</main>
	);
}
