import * as z from 'zod';

export const contactFormSchema = z.object({
	name: z.string().min(1, {
		message: 'Please enter a name',
	}),
	email: z.string().email({ message: 'Please enter a valid email' }),
	message: z.string().min(1, {
		message: 'Please enter a message',
	}),
});
