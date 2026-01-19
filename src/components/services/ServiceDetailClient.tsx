'use client';

import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { COMPANY_INFO } from '@/lib/constants';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Building2,
  CheckCircle2,
  ChevronRight,
  FileCheck,
  LucideIcon,
  Package,
  Phone,
  Shield,
  ShieldCheck,
  Users,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

// Define the shape of the Service object based on constants.ts, without the Icon
// because passing complex objects (like React Components/Functions) from Server to Client is restricted.
export interface ServiceType {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  // icon: LucideIcon; <--- REMOVED from prop
  coverImage: string;
  features: { title: string; desc: string }[];
  capabilities: string[];
  process: { step: string; title: string; desc: string }[];
}

interface ServiceDetailClientProps {
  service: ServiceType; // Use the simpler type
}

// Map IDs to Icons manually in the Client Component
const ICON_MAP: Record<string, LucideIcon> = {
  'integrated-facility-management': Building2,
  'security-guarding': Shield,
  'workforce-staffing': Users,
  'office-logistics': Package,
};

export function ServiceDetailClient({ service }: ServiceDetailClientProps) {
  if (!service) {
    return (
      <div className="min-h-screen bg-[#07162f] flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-serif mb-4">Service Not Found</h1>
        <Link href="/services">
          <Button>Back to Services</Button>
        </Link>
      </div>
    );
  }

  const ServiceIcon = ICON_MAP[service.id] || Shield; // Fallback to Shield

  return (
    <main className="min-h-screen bg-[#050e1d] selection:bg-[#dfb755] selection:text-[#050e1d]">
      {/* --- 1. IMMERSIVE HERO SECTION --- */}
      <section className="relative h-[80vh] flex items-end pb-20 overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={service.coverImage}
            alt={service.title}
            fill
            className="object-cover"
            priority
          />
          {/* Heavy gradient at bottom to blend with page, lighter at top for visibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050e1d] via-[#050e1d]/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050e1d] via-[#050e1d]/50 to-transparent" />
        </div>

        <div className="container relative z-10 px-4 md:px-6">
          <Link
            href="/services"
            className="inline-flex items-center text-zinc-300 hover:text-[#dfb755] mb-6 transition-colors group text-sm font-semibold tracking-wider uppercase"
          >
            <ArrowLeft
              size={16}
              className="mr-2 group-hover:-translate-x-1 transition-transform"
            />
            Back to All Services
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Icon Box */}
            <div className="w-16 h-16 bg-[#dfb755]/10 backdrop-blur-md rounded-xl flex items-center justify-center text-[#dfb755] mb-6 border border-[#dfb755]/20">
              <ServiceIcon size={32} />
            </div>

            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight max-w-4xl">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 max-w-2xl leading-relaxed border-l-4 border-[#dfb755] pl-6">
              {service.shortDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- 2. MAIN CONTENT GRID --- */}
      <section className="py-24 container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* LEFT: CONTENT (8 Columns) */}
          <div className="lg:col-span-8 space-y-20">
            {/* Description */}
            <div className="prose prose-lg prose-invert max-w-none">
              <h3 className="text-3xl font-serif text-white mb-8">
                Service Overview
              </h3>
              <p className="text-zinc-400 text-lg leading-loose">
                {service.description}
              </p>
            </div>

            {/* Features (Bento Grid) */}
            <div>
              <h3 className="text-3xl font-serif text-white mb-8">
                Key Advantages
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-[#dfb755]/50 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#dfb755]/10 flex items-center justify-center text-[#dfb755] mb-4 group-hover:bg-[#dfb755] group-hover:text-[#07162f] transition-colors">
                      <ShieldCheck size={20} />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Process (Timeline) */}
            <div>
              <h3 className="text-3xl font-serif text-white mb-10">
                Deployment Process
              </h3>
              <div className="space-y-8 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-[2px] before:bg-white/10">
                {service.process.map((step, i) => (
                  <div key={i} className="relative pl-16 group">
                    <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-[#07162f] border border-[#dfb755] text-[#dfb755] flex items-center justify-center font-bold text-sm z-10 group-hover:bg-[#dfb755] group-hover:text-[#07162f] transition-colors">
                      {step.step}
                    </div>
                    <h4 className="text-xl font-bold text-white">
                      {step.title}
                    </h4>
                    <p className="text-zinc-400 mt-2">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT: STICKY SIDEBAR (4 Columns) */}
          <div className="lg:col-span-4 relative">
            <div className="sticky top-32 space-y-8">
              {/* Capabilities Card */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
                <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <FileCheck className="text-[#dfb755]" size={20} />
                  Specific Capabilities
                </h4>
                <ul className="space-y-4">
                  {service.capabilities.map((cap, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-zinc-300"
                    >
                      <CheckCircle2
                        className="text-[#dfb755]/50 shrink-0"
                        size={16}
                      />
                      <span className="text-sm font-medium">{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Card */}
              <div className="p-8 rounded-2xl bg-[#dfb755] text-[#07162f] shadow-[0_0_40px_-10px_rgba(223,183,85,0.3)]">
                <h4 className="text-2xl font-bold font-serif mb-4">
                  Ready to upgrade?
                </h4>
                <p className="text-[#07162f]/80 mb-6 text-sm font-medium leading-relaxed">
                  Get a customized proposal for your facility within 24 hours.
                </p>
                <Link href="/contact" className="w-full">
                  <button className="w-full py-4 rounded-xl bg-[#07162f] text-white font-bold flex items-center justify-center gap-2 hover:bg-[#07162f]/90 transition-all shadow-lg">
                    Request Quote <ChevronRight size={16} />
                  </button>
                </Link>
                <div className="mt-6 flex items-center justify-center gap-2 text-sm font-bold opacity-70">
                  <Phone size={16} />{' '}
                  <span>
                    {COMPANY_INFO?.contact?.phone || '+91 7337069677'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
