import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: any[]) {
	return twMerge(clsx(inputs));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
