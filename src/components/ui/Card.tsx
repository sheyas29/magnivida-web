"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export function Card({ className, children }: CardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 bg-surface-100/50 p-6 backdrop-blur-sm transition-colors hover:bg-surface-100/80 hover:border-primary/30",
        className
      )}
    >
      {/* Subtle Noise Texture (Optional, adds grit) */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}
