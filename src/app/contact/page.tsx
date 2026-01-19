'use client';

import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { COMPANY_INFO, SERVICES } from '@/lib/constants';
import { motion } from 'framer-motion';
import { Check, ChevronDown, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  services: string[];
  message: string;
};

export default function ContactPage() {
  const phone = COMPANY_INFO?.contact?.phone ?? '';
  const emailTo = COMPANY_INFO?.contact?.email ?? 'info@yourdomain.com';
  const address = COMPANY_INFO?.contact?.address ?? '';

  const serviceOptions = useMemo(() => {
    // If SERVICES exists and has titles/ids, use it; otherwise fallback.
    if (Array.isArray(SERVICES) && SERVICES.length) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return SERVICES.map((s: any) => ({
        value: s?.id ?? s?.title ?? 'service',
        label: s?.title ?? 'Service',
      }));
    }
    return [
      { value: 'manpower-staffing', label: 'Manpower / Staffing' },
      { value: 'security-services', label: 'Security Services' },
      { value: 'facility-management', label: 'Facility Management' },
      { value: 'other', label: 'Other' },
    ];
  }, []);

  const [form, setForm] = useState<FormState>({
    firstName: '',
    lastName: '',
    email: '',
    services: [],
    message: '',
  });

  const [error, setError] = useState<string | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const safePhoneForTel = useMemo(() => phone.replace(/[^\d+]/g, ''), [phone]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function toggleService(value: string) {
    setForm((prev) => {
      const exists = prev.services.includes(value);
      if (exists) {
        return { ...prev, services: prev.services.filter((s) => s !== value) };
      }
      return { ...prev, services: [...prev.services, value] };
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!form.email.trim()) {
      setError('Please enter your work email.');
      return;
    }

    const subject = `Quote Request — ${form.services.length > 0 ? form.services.join(', ') : 'General Query'}`;
    const bodyLines = [
      'New quote request received:',
      '',
      `Name: ${form.firstName} ${form.lastName}`.trim(),
      `Work Email: ${form.email}`,
      `Services Required: ${form.services.length > 0 ? form.services.map((s) => serviceOptions.find((opt) => opt.value === s)?.label || s).join(', ') : 'None selected'}`,
      '',
      'Message:',
      form.message || '(No message provided)',
      '',
      '— Sent from Magnivida website contact form',
    ];

    const mailto = `mailto:${encodeURIComponent(emailTo)}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join('\n'))}`;

    window.location.href = mailto;
  }

  return (
    <main className="min-h-screen bg-[#050e1d] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#dfb755]/10 via-[#050e1d] to-[#050e1d] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="pt-32 pb-20 container px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[#dfb755] font-sans text-sm tracking-[0.2em] uppercase font-bold mb-4 block">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">
              Lets Talk <span className="text-[#dfb755]">Scale.</span>
            </h1>
            <p className="text-zinc-400 text-lg mb-12">
              Ready to deploy a workforce or secure your facility? Our
              deployment team is on standby 24/7.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-[#dfb755]/10 rounded-lg text-[#dfb755] group-hover:bg-[#dfb755] group-hover:text-[#050e1d] transition-all duration-300">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg group-hover:text-[#dfb755] transition-colors">
                    Phone
                  </h3>
                  {safePhoneForTel ? (
                    <a
                      className="text-zinc-400 hover:text-white transition-colors"
                      href={`tel:${safePhoneForTel}`}
                    >
                      {phone}
                    </a>
                  ) : (
                    <p className="text-zinc-400">{phone}</p>
                  )}
                  <p className="text-zinc-500 text-sm mt-1">
                    Mon-Sat, 9am - 7pm IST
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-[#dfb755]/10 rounded-lg text-[#dfb755] group-hover:bg-[#dfb755] group-hover:text-[#050e1d] transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg group-hover:text-[#dfb755] transition-colors">
                    Email
                  </h3>
                  <a
                    className="text-zinc-400 hover:text-white transition-colors"
                    href={`mailto:${emailTo}`}
                  >
                    {emailTo}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group">
                <div className="p-3 bg-[#dfb755]/10 rounded-lg text-[#dfb755] group-hover:bg-[#dfb755] group-hover:text-[#050e1d] transition-all duration-300">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg group-hover:text-[#dfb755] transition-colors">
                    Headquarters
                  </h3>
                  <p className="text-zinc-400 max-w-xs">{address}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-[#0a1629]/50 backdrop-blur-xl p-8 rounded-3xl border border-white/5 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#dfb755]/5 to-transparent pointer-events-none" />

            <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#dfb755] uppercase tracking-wider">
                    First Name
                  </label>
                  <input
                    value={form.firstName}
                    onChange={(e) => update('firstName', e.target.value)}
                    type="text"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#dfb755] focus:ring-1 focus:ring-[#dfb755]/50 focus:outline-none transition-all placeholder:text-zinc-600"
                    placeholder="John"
                    autoComplete="given-name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-[#dfb755] uppercase tracking-wider">
                    Last Name
                  </label>
                  <input
                    value={form.lastName}
                    onChange={(e) => update('lastName', e.target.value)}
                    type="text"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#dfb755] focus:ring-1 focus:ring-[#dfb755]/50 focus:outline-none transition-all placeholder:text-zinc-600"
                    placeholder="Doe"
                    autoComplete="family-name"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-[#dfb755] uppercase tracking-wider">
                  Work Email
                </label>
                <input
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  type="email"
                  required
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#dfb755] focus:ring-1 focus:ring-[#dfb755]/50 focus:outline-none transition-all placeholder:text-zinc-600"
                  placeholder="john@company.com"
                  autoComplete="email"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-[#dfb755] uppercase tracking-wider">
                  Service Required (Select Multiple)
                </label>
                <div className="relative" ref={dropdownRef}>
                  <button
                    type="button"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="w-full flex items-center justify-between bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#dfb755] focus:outline-none transition-all text-left"
                  >
                    <span
                      className={
                        form.services.length === 0
                          ? 'text-zinc-600'
                          : 'text-white truncate'
                      }
                    >
                      {form.services.length === 0
                        ? 'Select services...'
                        : form.services
                            .map(
                              (s) =>
                                serviceOptions.find((opt) => opt.value === s)
                                  ?.label
                            )
                            .join(', ')}
                    </span>
                    <ChevronDown
                      size={16}
                      className={`text-zinc-500 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  {dropdownOpen && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-[#0a1629] border border-white/10 rounded-xl shadow-xl overflow-hidden z-20 max-h-60 overflow-y-auto">
                      {serviceOptions.map((opt) => {
                        const isSelected = form.services.includes(opt.value);
                        return (
                          <div
                            key={opt.value}
                            onClick={() => toggleService(opt.value)}
                            className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors ${isSelected ? 'bg-[#dfb755]/10 text-white' : 'text-zinc-400 hover:text-white hover:bg-white/5'}`}
                          >
                            <div
                              className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${isSelected ? 'bg-[#dfb755] border-[#dfb755]' : 'border-zinc-600'}`}
                            >
                              {isSelected && (
                                <Check size={12} className="text-black" />
                              )}
                            </div>
                            <span className="text-sm font-medium">
                              {opt.label}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-[#dfb755] uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                  rows={4}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#dfb755] focus:ring-1 focus:ring-[#dfb755]/50 focus:outline-none transition-all placeholder:text-zinc-600 resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              {error ? (
                <p className="text-sm text-red-400 bg-red-400/10 p-3 rounded-lg border border-red-400/20">
                  {error}
                </p>
              ) : null}

              <Button
                type="submit"
                className="w-full gap-2 py-4 text-base font-bold bg-[#dfb755] text-black hover:bg-white border-0 hover:scale-105 transition-transform duration-300"
              >
                Send Request <Send size={18} />
              </Button>

              <p className="text-xs text-zinc-500 text-center">
                Clicking “Send Request” opens your email app.
              </p>
            </form>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
