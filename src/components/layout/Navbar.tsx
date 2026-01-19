'use client';

import { SERVICES } from '@/lib/constants'; // Import your services data
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from '../ui/Button';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services', hasDropdown: true }, // Mark as dropdown
  { name: 'About', href: '/#about' },
  { name: 'Industries', href: '/industries' },
  { name: 'Careers', href: '/careers' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // Mobile Menu State
  const [hidden, setHidden] = useState(false); // Scroll Hide State
  const [hoveredLink, setHoveredLink] = useState<string | null>(null); // Dropdown State

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) setHidden(true);
    else setHidden(false);
  });

  return (
    <motion.nav
      variants={{ visible: { y: 0 }, hidden: { y: '-100%' } }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.35, ease: 'easeInOut' }}
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-zinc-200 h-24 shadow-lg"
    >
      <div className="container mx-auto px-4 md:px-6 h-full flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-4 group relative z-10">
          <div className="relative w-16 h-16 md:w-20 md:h-20">
            <Image
              src="/logo.png"
              alt="Magnivida Logo"
              fill
              sizes="200px"
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-2xl md:text-3xl font-serif font-bold tracking-wide text-[#050e1d] leading-none">
              MAGNIVIDA
            </span>
            <span className="text-[10px] md:text-xs font-sans tracking-[0.3em] text-[#dfb755] uppercase mt-1 font-semibold">
              Securitas Pvt Ltd
            </span>
          </div>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => link.hasDropdown && setHoveredLink(link.name)}
              onMouseLeave={() => link.hasDropdown && setHoveredLink(null)}
            >
              <Link
                href={link.href}
                className="flex items-center gap-1 text-base font-medium text-zinc-600 hover:text-[#dfb755] transition-colors py-4"
              >
                {link.name}
                {link.hasDropdown && (
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${hoveredLink === link.name ? 'rotate-180 text-[#dfb755]' : ''}`}
                  />
                )}
              </Link>

              {/* DROPDOWN MENU */}
              {link.hasDropdown && hoveredLink === link.name && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 w-72 bg-white border border-zinc-200 rounded-xl shadow-2xl p-2 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-[#dfb755]/5 to-transparent pointer-events-none" />
                  <div className="flex flex-col relative z-10">
                    {SERVICES.map((service) => (
                      <Link
                        key={service.id}
                        href={`/services/${service.id}`}
                        className="block px-4 py-3 text-sm text-zinc-600 hover:text-black hover:bg-zinc-50 rounded-lg transition-all"
                      >
                        {service.title}
                      </Link>
                    ))}
                    <div className="border-t border-zinc-100 mt-2 pt-2">
                      <Link
                        href="/services"
                        className="block px-4 py-2 text-xs font-bold text-[#dfb755] uppercase tracking-wider hover:text-black transition-colors"
                      >
                        View All Services →
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          ))}

          <Link href="/contact">
            <Button className="bg-[#dfb755] text-black hover:bg-[#050e1d] hover:text-white font-bold px-6 py-5 text-lg transition-all shadow-md">
              Get Quote
            </Button>
          </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          className="lg:hidden text-[#050e1d] p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* MOBILE MENU (Dark) */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={
          isOpen ? { opacity: 1, height: '100vh' } : { opacity: 0, height: 0 }
        }
        className="lg:hidden bg-white fixed inset-0 z-40 top-24 overflow-y-auto border-t border-zinc-200"
      >
        <div className="flex flex-col p-6 gap-6">
          {NAV_LINKS.map((link) => (
            <div key={link.name}>
              <Link
                href={link.href}
                onClick={() => !link.hasDropdown && setIsOpen(false)}
                className="text-2xl font-serif font-medium text-[#050e1d] hover:text-[#dfb755] block mb-2"
              >
                {link.name}
              </Link>
              {/* Mobile Submenu */}
              {link.hasDropdown && (
                <div className="pl-4 border-l-2 border-[#dfb755]/30 space-y-3 mt-2">
                  {SERVICES.map((service) => (
                    <Link
                      key={service.id}
                      href={`/services/${service.id}`}
                      onClick={() => setIsOpen(false)}
                      className="block text-base text-zinc-500 hover:text-black"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            <Button className="w-full bg-[#dfb755] text-black hover:bg-[#050e1d] hover:text-white font-bold py-6 text-xl">
              Get Quote
            </Button>
          </Link>
        </div>
      </motion.div>
    </motion.nav>
  );
}
