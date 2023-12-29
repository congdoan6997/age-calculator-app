import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  differenceInYears,
  differenceInMonths,
  differenceInDays,
  intervalToDuration,
} from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateAge(birthDate: Date) {
  const currentDate = new Date();
  const { years, months, days } = intervalToDuration({
    start: birthDate,
    end: currentDate,
  });
  return { years, months, days };
}
