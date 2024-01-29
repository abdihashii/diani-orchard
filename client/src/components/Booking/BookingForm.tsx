'use client';

import React from 'react';
import useBookings from '@/hooks/useBookings';

import { Button } from '../ui/button';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/types/database.types';
import { string } from 'zod';

const BookingForm = ({
	rooms,
}: {
	rooms: {
		id: number;
		name: string;
		price: string;
		available: boolean;
	}[];
}) => {
	const supabase = createClientComponentClient<Database>();

	const { booking, handleChange, handleCheckInChange, handleCheckOutChange } =
		useBookings();

	// Add a booking to the database
	const addBooking = async (fascadeBookingData: {
		room: string;
		numberOfGuests: number;
		checkIn: string;
		checkOut: string;
	}) => {
		try {
			const updatedRoom = fascadeBookingData.room
				.toLowerCase()
				.replace(/\s/g, '-');

			const { data: block_name, error: blockError } = await supabase
				.from('blocks')
				.select('*')
				.eq('block_name', updatedRoom)
				.single();

			if (blockError) throw blockError;

			const bookingData = {
				guest_name: 'Test User',
				block_name: block_name.block_name,
				num_guests: fascadeBookingData.numberOfGuests,
				check_in_date: fascadeBookingData.checkIn,
				check_out_date: fascadeBookingData.checkOut,
			};

			const { error } = await supabase.from('bookings').insert([bookingData]);

			if (error) throw error;

			alert('Booking added successfully');
		} catch (error) {
			console.log(error);

			alert('Error adding booking');
		}
	};

	return (
		<div
			className="absolute bottom-10 h-[120px] w-full bg-white"
			style={{
				padding: 'inherit',
			}}
		>
			<div className="flex h-full w-full flex-row justify-between px-9 py-7">
				<div>
					<p>Room Type</p>
					<select value={booking.room} name="room" onChange={handleChange}>
						{rooms.map((room) => (
							<option key={room.id}>{room.name}</option>
						))}
					</select>
				</div>

				<div>
					<p>Number of guests</p>
					<select
						value={booking.numberOfGuests}
						name="numberOfGuests"
						onChange={handleChange}
					>
						{[1, 2, 3, 4].map((num) => (
							<option key={num}>{num}</option>
						))}
					</select>
				</div>

				<div>
					<p>Check in</p>
					<input
						value={booking.checkIn}
						onChange={handleCheckInChange}
						type="date"
					/>
				</div>

				<div>
					<p>Check out</p>
					<input
						value={booking.checkOut}
						onChange={handleCheckOutChange}
						type="date"
					/>
				</div>

				<Button
					className="h-full bg-diani-orange px-14 hover:bg-diani-blue"
					onClick={() => addBooking(booking)}
				>
					Book now
				</Button>
			</div>
		</div>
	);
};

export default BookingForm;
