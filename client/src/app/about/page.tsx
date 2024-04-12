import Image from 'next/image';

export default function AboutPage() {
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
					<h1 className="text-6xl font-bold">About us</h1>
					<p className="text-xl">
						The elegant luxury bedrooms in this gallery showcase custom interior
						designs & decorating ideas. View pictures and find your perfect
						luxury bedroom design.
					</p>
				</article>
			</section>

			{/* About section */}
			<section className="mx-auto flex w-full flex-row justify-center gap-36 px-32 py-28">
				<article className="flex w-1/3 flex-col items-center">
					<div className="relative h-5/6 w-full">
						<Image
							className="object-cover"
							src="/room.jpeg"
							layout="fill"
							alt="Abdirahman Haji (Manager)"
						/>
					</div>

					<div className="flex h-1/6 w-full items-center justify-center">
						<p className="text-center text-3xl font-semibold">
							Abdirahman Haji (Manager)
						</p>
					</div>
				</article>

				<article className="w-1/3">
					The United Nations is an international organization founded in 1945.
					Currently made up of 193 Member States, the UN and its work are guided
					by the purposes and principles contained in its founding Charter. The
					UN has evolved over the years to keep pace with a rapidly changing
					world. But one thing has stayed the same: it remains the one place on
					Earth where all the world&apos;s nations can gather together, discuss
					common problems, and find shared solutions that benefit all of
					humanity. The Secretary-General is Chief Administrative Officer of the
					UN &mdash; and is also a symbol of the Organization&apos;s ideals and
					an advocate for all the world&apos;s peoples, especially the poor and
					vulnerable. The Secretary-General is appointed by the General Assembly
					on the recommendation of the Security Council for a 5-year, renewable
					term. The current Secretary-General, and the 9th occupant of the post,
					is António Guterres of Portugal, who took office on 1 January 2017. On
					the 18th of June, 2021, Guterres was re-appointed to a second term,
					pledging as his priority to continue helping the world chart a course
					out of the COVID-19 pandemic. The United Nations is an international
					organization founded in 1945. Currently made up of 193 Member States,
					the UN and its work are guided by the purposes and principles
					contained in its founding Charter. The UN has evolved over the years
					to keep pace with a rapidly changing world. But one thing has stayed
					the same: it remains the one place on Earth where all the world&apos;s
					nations can gather together, discuss common problems, and find shared
					solutions that benefit all of humanity. The Secretary-General is Chief
					Administrative Officer of the UN &mdash; and is also a symbol of the
					Organization&apos;s ideals and an advocate for all the world&apos;s
					peoples, especially the poor and vulnerable. The Secretary-General is
					appointed by the General Assembly on the recommendation of the
					Security Council for a 5-year, renewable term. The current
					Secretary-General, and the 9th occupant of the post, is António
					Guterres of Portugal, who took office on 1 January 2017. On the 18th
					of June, 2021, Guterres was re-appointed to a second term, pledging as
					his priority to continue helping the world chart a course out of the
					COVID-19 pandemic.
				</article>
			</section>
		</main>
	);
}
