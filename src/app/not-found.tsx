import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-[#07162f] px-4 py-16 text-center sm:px-6 lg:px-8">
      {/* 404 Glow Effect */}
      <div className="relative">
        <h1 className="text-[12rem] font-bold leading-none text-[#dfb755] opacity-20 blur-sm select-none md:text-[20rem]">
          404
        </h1>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-6xl md:text-8xl font-serif text-white drop-shadow-2xl">
            404
          </span>
        </div>
      </div>

      <div className="mt-8 max-w-md space-y-4">
        <h2 className="text-3xl font-bold font-serif text-white tracking-tight sm:text-4xl">
          Page Not Found
        </h2>
        <p className="text-zinc-400 text-lg">
          Sorry, we couldn&apos;t find the page you&apos;re looking for. It
          might have been moved or deleted.
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Link href="/">
          <Button className="w-full sm:w-auto h-12 px-8 font-bold bg-[#dfb755] text-[#07162f] hover:bg-white border-0 shadow-[0_0_20px_rgba(223,183,85,0.2)]">
            Back to Home
          </Button>
        </Link>
        <Link href="/contact">
          <Button
            variant="outline"
            className="w-full sm:w-auto h-12 px-8 border-white/20 text-white hover:bg-white/10"
          >
            Contact Support
          </Button>
        </Link>
      </div>
    </div>
  );
}
