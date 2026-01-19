'use client';

import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { INDUSTRIES } from '@/lib/constants';
import { motion } from 'framer-motion';

export function Industries() {
  return (
    <section
      id="industries"
      className="py-24 bg-[#050e1d] relative overflow-hidden"
    >
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-heading font-bold mb-4"
          >
            Industries We <span className="text-[#dfb755]">Serve</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400"
          >
            Tailored staffing expertise for specialized sectors.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((ind, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <SpotlightCard className="h-full p-8 bg-zinc-900/50 border-white/5 group-hover:border-[#dfb755]/30 transition-colors duration-500">
                <div className="absolute inset-0 bg-gradient-to-b from-[#dfb755]/0 to-[#dfb755]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-1 h-8 bg-[#dfb755] rounded-full group-hover:h-12 transition-all duration-300 shadow-[0_0_15px_rgba(223,183,85,0.5)]" />
                    <h3 className="text-xl font-bold text-white group-hover:text-[#dfb755] transition-colors">
                      {ind.name}
                    </h3>
                  </div>
                  <p className="text-zinc-400 text-sm group-hover:text-zinc-300 transition-colors">
                    {ind.desc}
                  </p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
