'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { contactFormSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';

const ContactForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(contactFormSchema),
	});

	const onSubmit = (data: any) => {
		alert(JSON.stringify(data, null, 2));
	};

	return (
		<form
			className="flex flex-col gap-9 text-black"
			onSubmit={handleSubmit(onSubmit)}
		>
			{/* Name and email form sections */}
			<div className="grid w-full grid-cols-2 gap-5">
				<div className="flex flex-col gap-3">
					<label htmlFor="name">Name</label>
					<input
						className="border border-[#1C1C1C] px-5 py-6"
						placeholder="Enter your name"
						{...register('name')}
					/>
					<p className="h-6 text-red-500">
						{errors?.name && <>{errors.name.message}</>}
					</p>
				</div>

				<div className="flex flex-col gap-3">
					<label htmlFor="email">Email</label>
					<input
						className="border border-[#1C1C1C] px-5 py-6"
						placeholder="Enter your email"
						{...register('email')}
					/>
					<p className="h-6 text-red-500">
						{errors?.email && <>{errors.email.message}</>}
					</p>
				</div>
			</div>

			{/* Message form section */}
			<div className="flex h-80 flex-col gap-3">
				<label htmlFor="message">Message</label>
				<textarea
					className="h-full border border-[#1C1C1C] px-5 py-6"
					placeholder="Enter your message"
					{...register('message')}
				/>
				<p className="h-6 text-red-500">
					{errors?.message && <>{errors.message.message}</>}
				</p>
			</div>

			<button
				type="submit"
				className="rounded-md bg-[#EE7536] bg-[#] px-10 py-5 text-white transition-colors hover:bg-[#22A6EF]"
			>
				Send
			</button>
		</form>
	);
};

export default ContactForm;
