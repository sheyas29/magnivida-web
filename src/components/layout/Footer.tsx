'use client';

import { COMPANY_INFO } from '@/lib/constants';
import {
  Facebook,
  Instagram,
  Linkedin,
  LucideIcon,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050e1d] border-t border-white/5 pt-20 pb-10 relative overflow-hidden">
      {/* Background Decor */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#dfb755] to-transparent opacity-30" />
      <div className="absolute bottom-0 left-0 w-full flex justify-center pointer-events-none select-none opacity-[0.03] overflow-hidden">
        <h1 className="text-[12vw] md:text-[14vw] font-bold text-white tracking-tighter leading-none whitespace-nowrap">
          MAGNIVIDA
        </h1>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* 1. BRAND INFO */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-12 h-12">
                <Image
                  src="/logo.png"
                  alt="Magnivida"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-serif font-bold text-white">
                  MAGNIVIDA
                </span>
                <span className="text-[10px] tracking-[0.2em] text-[#dfb755] uppercase">
                  Securitas Pvt Ltd
                </span>
              </div>
            </Link>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Premium Workforce & Facility Solutions. Engineering the human
              systems that power India&apos;s most critical infrastructures.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={Linkedin} href="#" />
              <SocialIcon icon={Twitter} href="https://x.com/magnivida" />
              <SocialIcon
                icon={Facebook}
                href="https://www.facebook.com/magnivida.securitas"
              />
              <SocialIcon
                icon={Instagram}
                href="https://www.instagram.com/magnivida.securitas"
              />
            </div>
          </div>

          {/* 2. QUICK LINKS */}
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li>
                <Link
                  href="/#about"
                  className="hover:text-[#dfb755] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-[#dfb755] transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/industries"
                  className="hover:text-[#dfb755] transition-colors"
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-[#dfb755] transition-colors"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#dfb755] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. CONTACT INFO */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#dfb755] mt-1 shrink-0" />
                <span>
                  {COMPANY_INFO?.contact?.address ||
                    '123, Corporate Park, New Delhi, India'}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#dfb755] shrink-0" />
                <span>{COMPANY_INFO?.contact?.phone || '+91 98765 43210'}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#dfb755] shrink-0" />
                <span>
                  {COMPANY_INFO?.contact?.email || 'contact@magnivida.com'}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-600 text-xs">
            © {currentYear} Magnivida Securitas Pvt Ltd. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-zinc-600">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-white transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Helper Component for Social Icons
function SocialIcon({ icon: Icon, href }: { icon: LucideIcon; href: string }) {
  return (
    <Link
      href={href}
      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:bg-[#dfb755] hover:text-[#07162f] transition-all duration-300"
    >
      <Icon size={18} />
    </Link>
  );
}
