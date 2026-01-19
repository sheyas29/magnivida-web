"use client";

import { Footer } from "@/components/layout/Footer";
import { Industries } from "@/components/sections/Industries"; // Reusing your existing section
import { motion } from "framer-motion";

export default function IndustriesPage() {
  return (
    <main className="bg-[#07162f] min-h-screen pt-24">

      {/* Header Section */}
      <div className="container px-4 py-16 text-center">
        <motion.span
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           className="text-[#dfb755] tracking-[0.3em] text-sm font-bold uppercase"
        >
          Sectors We Serve
        </motion.span>
        <motion.h1
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="text-5xl md:text-6xl font-serif text-white mt-4 mb-6"
        >
           Industry <span className="text-[#dfb755]">Expertise</span>
        </motion.h1>
        <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
           From high-security defense labs to bustling corporate parks, our specialized teams are deployed across critical sectors.
        </p>
      </div>

      {/* The Actual Industries Grid */}
      <div className="pb-20">
        <Industries />
      </div>

      <Footer />
    </main>
  );
}
