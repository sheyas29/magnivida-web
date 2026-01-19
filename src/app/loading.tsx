export default function Loading() {
  return (
    <div className="flex h-[100dvh] w-full items-center justify-center bg-[#07162f]">
      <div className="flex flex-col items-center gap-6">
        {/* Premium Spinner */}
        <div className="relative flex h-16 w-16 items-center justify-center">
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-white/5 border-t-[#dfb755]"></div>
          <div className="absolute inset-2 animate-spin-slow rounded-full border-4 border-white/5 border-b-[#dfb755]/50 reverse"></div>
        </div>

        {/* Loading Text */}
        <span className="animate-pulse font-sans text-xs font-bold tracking-[0.3em] text-[#dfb755] uppercase">
          Magnivida
        </span>
      </div>
    </div>
  );
}
