'use client';

import React from 'react';
import useBookings from '@/hooks/useBookings';

import { Button } from '../ui/button';

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
	const { booking, handleChange, handleCheckInChange, handleCheckOutChange } =
		useBookings();

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

				<Button className="h-full bg-diani-orange px-14 hover:bg-diani-blue">
					Book now
				</Button>
			</div>
		</div>
	);
};

export default BookingForm;
