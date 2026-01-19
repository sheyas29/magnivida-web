'use client';

import { Button } from '@/components/ui/Button';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex h-[100dvh] w-full flex-col items-center justify-center bg-[#07162f] px-4 text-center">
      {/* Visual Icon */}
      <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-red-500/10 border border-red-500/20 text-red-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-10 w-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
          />
        </svg>
      </div>

      <h2 className="mb-4 text-3xl font-bold font-serif text-white md:text-4xl">
        Something went wrong.
      </h2>

      <p className="mb-8 max-w-md text-zinc-400">
        We encountered an unexpected error. Our team has been notified. Please
        try refreshing the page.
      </p>

      <div className="flex flex-col gap-4 sm:flex-row">
        <Button
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
          className="bg-[#dfb755] text-[#07162f] hover:bg-white font-bold"
        >
          Try again
        </Button>

        <Button
          variant="outline"
          className="border-white/10 text-white hover:bg-white/5"
          onClick={() => (window.location.href = '/')}
        >
          Go Back Home
        </Button>
      </div>
    </div>
  );
}
