'use client';

import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { ChevronRight, Sparkles } from 'lucide-react'; // Changed ShieldCheck to Sparkles for "New/Fresh" vibe
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#07162f] pt-20">
      {/* 1. Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#07162f] via-[#0b1d3b] to-[#07162f]" />

        {/* CSS Grid Pattern (Subtle) */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Luxury Gold Glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full animate-pulse delay-700" />
      </div>

      {/* 2. Main Content (Centered & Clean) */}
      <div className="container relative z-10 px-4 md:px-6 text-center">
        {/* Badge: New Standard */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm shadow-lg cursor-default hover:bg-white/10 transition-colors"
        >
          <Sparkles size={16} className="text-[#dfb755]" />
          <span className="text-xs md:text-sm font-medium text-zinc-300 tracking-wider uppercase">
            The New Standard in Management Services
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-2xl tracking-tight"
        >
          Manpower Supply & <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#dfb755] via-[#f8f5eb] to-[#dfb755] drop-shadow-sm animate-shine bg-[length:200%_auto]">
            Facility Management
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          A strategic partner for your operational needs. We combine operational
          precision with strict compliance to deliver total reliability at your
          doorstep.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/services">
            <Button className="h-14 px-8 text-lg bg-[#dfb755] text-[#07162f] hover:bg-white hover:scale-105 transition-all font-bold shadow-[0_0_20px_rgba(223,183,85,0.3)] hover:shadow-[0_0_40px_rgba(223,183,85,0.6)]">
              View Capabilities
            </Button>
          </Link>

          <Link href="/contact">
            <Button
              variant="outline"
              className="h-14 px-8 text-lg border-white/20 text-white hover:bg-white/10 hover:border-white/50 group backdrop-blur-md overflow-hidden relative"
            >
              <span className="relative z-10 flex items-center">
                Start a Conversation{' '}
                <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
