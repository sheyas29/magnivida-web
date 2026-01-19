'use client';

import { SERVICES } from '@/lib/constants';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export function Services() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section
      id="services"
      className="bg-[#050e1d] py-32 relative"
      style={{ overflow: 'visible' }}
    >
      {/* Background Gradients */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#dfb755]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#07162f] blur-[100px] rounded-full pointer-events-none" />

      <div className="container px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="mb-16">
          {' '}
          {/* Reduced from mb-20 */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-[#dfb755] font-sans text-sm tracking-[0.2em] uppercase font-bold"
          >
            Our Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-heading font-bold text-white mt-3"
          >
            Operational <span className="text-zinc-600">Mastery</span>
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {' '}
          {/* Reduced gap */}
          {/* LEFT: Compact Services List */}
          <div className="lg:w-1/2 space-y-4">
            {' '}
            {/* Reduced spacing from space-y-6 to space-y-4 */}
            {SERVICES.map((service, index) => (
              <Link
                key={service.id}
                href={`/services/${service.id}`}
                onMouseEnter={() => setActiveService(index)}
                className="block group"
              >
                <div
                  className={`p-4 md:p-6 rounded-xl border transition-all duration-300 relative overflow-hidden ${
                    activeService === index
                      ? 'bg-white/5 border-[#dfb755]/40'
                      : 'bg-transparent border-white/5 hover:border-white/15'
                  }`}
                >
                  {/* Hover Gradient - Made more subtle */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-[#dfb755]/8 to-transparent opacity-0 transition-opacity duration-300 ${activeService === index ? 'opacity-100' : ''}`}
                  />

                  <div className="relative z-10 flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <span
                        className={`text-xs font-mono mb-2 block transition-colors ${activeService === index ? 'text-[#dfb755]' : 'text-zinc-600'}`}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3
                        className={`text-xl md:text-2xl font-serif font-semibold transition-colors ${
                          activeService === index
                            ? 'text-white'
                            : 'text-zinc-400 group-hover:text-zinc-300'
                        }`}
                      >
                        {service.title}
                      </h3>
                      <motion.div
                        initial={false}
                        animate={{
                          height: activeService === index ? 'auto' : 0,
                          opacity: activeService === index ? 1 : 0,
                          marginTop: activeService === index ? 12 : 0,
                        }}
                        className="overflow-hidden"
                      >
                        <p className="text-zinc-400 text-sm leading-relaxed max-w-md line-clamp-2">
                          {service.shortDescription}
                        </p>
                        <div className="flex items-center gap-1.5 mt-3 text-[#dfb755] text-xs font-semibold uppercase tracking-wider group-hover:gap-2 transition-all">
                          Explore Service <ArrowUpRight size={12} />
                        </div>
                      </motion.div>
                    </div>

                    {/* Icon - Made smaller */}
                    <div
                      className={`p-2.5 md:p-3 rounded-full border transition-all duration-300 shrink-0 ${
                        activeService === index
                          ? 'border-[#dfb755] bg-[#dfb755] text-[#050e1d]'
                          : 'border-white/10 bg-white/5 text-zinc-500'
                      }`}
                    >
                      <service.icon size={20} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {/* RIGHT: Image Preview (Sticky) */}
          <div className="lg:w-1/2 hidden lg:block relative">
            {/* This wrapper ensures the sticky element has room to stay within section */}
            <div className="relative" style={{ height: '600px' }}>
              <div className="sticky top-32 h-[500px] w-full rounded-2xl overflow-hidden border border-white/10 bg-white/5 shadow-xl">
                <AnimatePresence mode="wait">
                  {SERVICES.map(
                    (service, index) =>
                      activeService === index && (
                        <motion.div
                          key={service.id}
                          initial={{ opacity: 0, scale: 1.05 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="absolute inset-0"
                        >
                          <Image
                            src={service.coverImage}
                            alt={service.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            priority={index === 0}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#050e1d] via-transparent to-transparent opacity-90" />

                          {/* Overlay Content - Made more compact */}
                          <div className="absolute bottom-0 left-0 p-8 w-full">
                            <motion.div
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ delay: 0.1 }}
                              className="bg-[#050e1d]/80 backdrop-blur-md border border-white/10 p-4 md:p-6 rounded-xl"
                            >
                              <div className="flex items-center gap-3 mb-3">
                                <div className="bg-[#dfb755]/20 p-1.5 rounded-lg text-[#dfb755]">
                                  <service.icon size={20} />
                                </div>
                                <h4 className="text-lg font-bold text-white">
                                  Feature Highlights
                                </h4>
                              </div>
                              <ul className="space-y-2">
                                {service.features.slice(0, 3).map((f, i) => (
                                  <li
                                    key={i}
                                    className="flex items-start gap-2.5 text-xs md:text-sm text-zinc-300"
                                  >
                                    <div className="w-1.5 h-1.5 bg-[#dfb755] rounded-full mt-1.5 shrink-0" />
                                    <span>
                                      <span className="text-white font-medium">
                                        {f.title}:
                                      </span>{' '}
                                      {f.desc}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </motion.div>
                          </div>
                        </motion.div>
                      )
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
