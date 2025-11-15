import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export function getRandomBgColor(seed: number) {
  const colors = [
    'bg-[var(--color-accent-1)]',
    'bg-[var(--color-accent-2)]',
  ];
  return colors[seed % colors.length];
}


