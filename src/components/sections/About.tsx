'use client';

import { motion } from 'framer-motion';
import { Shield, Trophy, Users, Zap } from 'lucide-react'; // Added icons
import Image from 'next/image';

const STATS = [
  { label: 'Compliance', value: '100%' },
  { label: 'Support', value: '24/7' },
  // { label: 'Client Retention', value: '95%' },
];

export function About() {
  return (
    <section id="about" className="py-32 bg-[#050e1d] relative overflow-hidden">
      {/* Background Decor */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 pointer-events-none" />

      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#dfb755] font-bold tracking-widest uppercase text-sm">
              Who We Are
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mt-4 mb-6 leading-tight">
              Engineering the <br />
              <span className="text-zinc-500">Human Systems.</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">
              Magnivida Securitas is a new-age service provider specializing in{' '}
              <strong>Manpower Supply</strong> and{' '}
              <strong>Integrated Facility Management</strong>. We are here to
              simplify your operations.
              <br />
              <br />
              As a forward-thinking organization, we integrate{' '}
              <strong>operational precision</strong> with{' '}
              <strong>rapid deployment capabilities</strong>. Unhindered by
              constraints, we deliver excellence from day one.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {[
                { icon: Zap, text: 'Transparent Reporting' },
                { icon: Shield, text: 'Zero-Liability Compliance' },
                { icon: Users, text: 'Vetted & Trained Staff' },
                { icon: Trophy, text: 'Operational Excellence' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="p-2 rounded-lg bg-[#dfb755]/10 text-[#dfb755] group-hover:bg-[#dfb755] group-hover:text-[#07162f] transition-all duration-300">
                    <item.icon size={20} />
                  </div>
                  <span className="text-zinc-300 text-sm font-medium">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Stats Row */}
            <div className="flex gap-12 border-t border-white/10 pt-8">
              {STATS.map((stat, i) => (
                <div key={i}>
                  <h4 className="text-3xl font-bold text-white">
                    {stat.value}
                  </h4>
                  <p className="text-zinc-500 text-xs uppercase tracking-wider mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            {/* Parallax Image Effect container */}
            <div className="relative h-[600px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
              <motion.div
                initial={{ scale: 1.2 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                className="relative w-full h-full"
              >
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                  alt="Modern Corporate Architecture"
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#07162f] via-[#07162f]/40 to-transparent opacity-80" />

              {/* Floating "Next-Gen" Card - floating animation */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#dfb755] flex items-center justify-center text-[#07162f] shadow-[0_0_15px_rgba(223,183,85,0.4)]">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg">
                      Next-Gen Operations
                    </h3>
                    <p className="text-zinc-300 text-sm">
                      Efficiency driven by modern protocols.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Corners */}
            <div className="absolute -top-6 -right-6 w-24 h-24 border-t-2 border-r-2 border-[#dfb755]/30 rounded-tr-3xl" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border-b-2 border-l-2 border-[#dfb755]/30 rounded-bl-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
