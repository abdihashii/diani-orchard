interface IBooking {
	block_name: string;
	check_in_date: string;
	check_out_date: string;
	created_at: string;
	guest_name: string;
	id: string;
	num_guests: number | null;
}

interface IBlock {
	block_name: string;
	created_at: string;
	id: string;
	image_alt: string | null;
	image_url: string | null;
	updated_at: string | null;
}
