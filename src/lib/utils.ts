import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// This function allows us to merge tailwind classes safely
// Example usage: cn("bg-red-500", props.className)
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
