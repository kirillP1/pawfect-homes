import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getApiUrl = ()=> process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';