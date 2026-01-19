"use client";

import { Footer } from "@/components/layout/Footer";
import { Services } from "@/components/sections/Services"; // Reusing your detailed Services component
import { motion } from "framer-motion";

export default function ServicesPage() {
  return (
    <main className="bg-[#07162f] min-h-screen pt-24">

      <div className="container px-4 pt-10 pb-20 text-center">
         <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif text-white mb-4"
          >
            Our <span className="text-[#dfb755]">Capabilities</span>
          </motion.h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Comprehensive workforce and facility solutions designed for scale.
          </p>
      </div>

      {/* This renders the "Menu List" we built earlier */}
      <Services />

      <Footer />
    </main>
  );
}
