import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}


export function getRandomBgColor(seed: number) {
  const colors = [
    'bg-[rgba(190,24,93,1)]',
    'bg-[rgba(234,88,12,1)]',
  ];
  return colors[seed % colors.length];
}


