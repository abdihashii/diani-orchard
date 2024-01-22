'use client';

import React, { useState } from 'react';
import {
	utcToZonedTime,
	zonedTimeToUtc,
	format,
	formatInTimeZone,
} from 'date-fns-tz';
import { addDays } from 'date-fns';

const useBookings = () => {
	// Initializing the state
	const nairobiTimeZone = 'Africa/Nairobi';
	const nowInNairobi = utcToZonedTime(new Date(), nairobiTimeZone);

	const [booking, setBooking] = useState<{
		room: string;
		numberOfGuests: number;
		checkIn: string;
		checkOut: string;
	}>({
		room: 'Block A',
		numberOfGuests: 4,
		checkIn: format(nowInNairobi, 'yyyy-MM-dd', {
			timeZone: nairobiTimeZone,
		}),
		checkOut: format(addDays(nowInNairobi, 1), 'yyyy-MM-dd', {
			timeZone: nairobiTimeZone,
		}),
	});

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const { value, name } = e.target;

		const updatedValue = name === 'numberOfGuests' ? parseInt(value) : value;

		setBooking((prev) => ({ ...prev, [name]: updatedValue }));
	};

	const handleCheckInChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newCheckInDateStr = e.target.value;

		// Convert the input date string to a Date object in Nairobi time zone no matter the user's timezone
		const newCheckInDate = utcToZonedTime(
			zonedTimeToUtc(newCheckInDateStr, nairobiTimeZone),
			nairobiTimeZone,
		);

		let updatedBooking = {
			...booking,
			checkIn: newCheckInDateStr,
		};

		// Get the current check-out date as a Date object in Nairobi time zone no matter the user's timezone
		const currentCheckOutDate = utcToZonedTime(
			zonedTimeToUtc(booking.checkOut, nairobiTimeZone),
			nairobiTimeZone,
		);

		// Compare the Nairobi time zone dates
		if (newCheckInDate >= currentCheckOutDate) {
			const newCheckoutDate = addDays(newCheckInDate, 1);

			// Format the new check-out date back to a string in Nairobi time zone
			updatedBooking.checkOut = formatInTimeZone(
				newCheckoutDate,
				nairobiTimeZone,
				'yyyy-MM-dd',
			);
		}

		setBooking(updatedBooking);
	};

	const handleCheckOutChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newCheckOutDateStr = e.target.value;

		// Convert the string date to Nairobi timezone
		const newCheckOutDate = utcToZonedTime(
			zonedTimeToUtc(newCheckOutDateStr, nairobiTimeZone),
			nairobiTimeZone,
		);

		const updatedBooking = {
			...booking,
			checkOut: formatInTimeZone(
				newCheckOutDateStr,
				nairobiTimeZone,
				'yyyy-MM-dd',
			),
		};

		setBooking(updatedBooking);
	};

	return {
		booking,
		setBooking,
		handleChange,
		handleCheckInChange,
		handleCheckOutChange,
	};
};

export default useBookings;
