'use client';

import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { COMPANY_INFO, SERVICES } from '@/lib/constants';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useMemo, useState } from 'react';

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  service: string;
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
    service: serviceOptions[0]?.value ?? 'service',
    message: '',
  });

  const [error, setError] = useState<string | null>(null);

  const safePhoneForTel = useMemo(() => phone.replace(/[^\d+]/g, ''), [phone]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (!form.email.trim()) {
      setError('Please enter your work email.');
      return;
    }

    const subject = `Quote Request — ${form.service || 'Service'}`;
    const bodyLines = [
      'New quote request received:',
      '',
      `Name: ${form.firstName} ${form.lastName}`.trim(),
      `Work Email: ${form.email}`,
      `Service Required: ${form.service}`,
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
                  Service Required
                </label>
                <div className="relative">
                  <select
                    value={form.service}
                    onChange={(e) => update('service', e.target.value)}
                    className="w-full appearance-none bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#dfb755] focus:ring-1 focus:ring-[#dfb755]/50 focus:outline-none transition-all"
                  >
                    {serviceOptions.map((opt) => (
                      <option
                        key={opt.value}
                        value={opt.value}
                        className="bg-[#0a1629] text-white"
                      >
                        {opt.label}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.5 4.5L6 8L9.5 4.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
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
