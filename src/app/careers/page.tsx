"use client";

import { ApplicationModal } from "@/components/jobs/ApplicationModal";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { COMPANY_INFO, OPEN_POSITIONS } from "@/lib/constants";
import { motion } from "framer-motion";
import { ArrowUpRight, Briefcase, Clock, IndianRupee, MapPin } from "lucide-react";
import { useState } from "react";

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<{ title: string; id: string } | null>(null);
  const emailTo = COMPANY_INFO?.contact?.email || "hr@magnivida.com";

  return (
    <main className="min-h-screen bg-[#07162f] selection:bg-[#dfb755] selection:text-[#07162f]">

      {/* --- 1. HERO SECTION --- */}
      <section className="relative pt-40 pb-20 px-4 md:px-6 container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <span className="text-[#dfb755] font-sans text-sm tracking-[0.2em] uppercase font-bold mb-4 block">
            Join the Force
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
            Build Your Career with <span className="text-zinc-500">Magnivida.</span>
          </h1>
          <p className="text-xl text-zinc-400 leading-relaxed">
            We are always looking for disciplined, skilled, and ambitious individuals.
            Join a team that values integrity and timely payments.
          </p>
        </motion.div>
      </section>

      {/* --- 2. BENEFITS / CULTURE --- */}
      <section className="py-12 border-y border-white/5 bg-black/20">
        <div className="container px-4 md:px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Timely Salaries", desc: "100% On-time payments" },
            { label: "PF & ESI", desc: "Full statutory compliance" },
            { label: "Training", desc: "Skill upgrade programs" },
            { label: "Growth", desc: "Internal promotions" }
          ].map((item, i) => (
            <div key={i}>
               <h4 className="text-white font-bold text-lg mb-1">{item.label}</h4>
               <p className="text-zinc-500 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- 3. JOB LISTINGS --- */}
      <section className="py-24 container px-4 md:px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-serif text-white mb-12 flex items-center gap-3">
          <Briefcase className="text-[#dfb755]" /> Open Positions
        </h2>

        <div className="space-y-6">
          {OPEN_POSITIONS.map((job, i) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:border-[#dfb755]/50 transition-all hover:bg-white/[0.07]"
            >
              <div className="flex flex-col md:flex-row gap-6 md:items-start justify-between">

                {/* Left: Job Info */}
                <div className="space-y-4 flex-1">
                  <div>
                    <span className="text-xs font-bold text-[#dfb755] bg-[#dfb755]/10 px-3 py-1 rounded-full border border-[#dfb755]/20 uppercase tracking-wider">
                      {job.department}
                    </span>
                    <h3 className="text-2xl font-bold text-white mt-3 group-hover:text-[#dfb755] transition-colors">
                      {job.role}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-zinc-400">
                    <span className="flex items-center gap-1.5"><MapPin size={14} /> {job.location}</span>
                    <span className="flex items-center gap-1.5"><Clock size={14} /> {job.type}</span>
                    <span className="flex items-center gap-1.5 text-white"><IndianRupee size={14} /> {job.salary}</span>
                  </div>

                  <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {job.requirements.map((req, idx) => (
                       <span key={idx} className="text-xs text-zinc-500 bg-black/40 px-2 py-1 rounded border border-white/5">
                         {req}
                       </span>
                    ))}
                  </div>
                </div>

                {/* Right: Apply Action */}
                <div className="md:text-right flex flex-col items-start md:items-end justify-between gap-4">
                  <Button
                    onClick={() => setSelectedJob({ title: job.role, id: job.id })}
                    variant="outline"
                    className="w-full md:w-auto gap-2 group-hover:bg-[#dfb755] group-hover:text-[#07162f] transition-all"
                  >
                    Apply Now <ArrowUpRight size={16} />
                  </Button>
                  <span className="text-xs text-zinc-600">Posted recently</span>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* --- 4. GENERAL APP CALLOUT --- */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-[#dfb755]/10 to-transparent border border-[#dfb755]/20 text-center">
           <h3 className="text-xl font-bold text-white mb-2">Don&apos;t see a matching role?</h3>
           <p className="text-zinc-400 mb-6 max-w-xl mx-auto">
             We are growing fast. Send your resume to our HR database, and we will call you when a position opens.
           </p>
           {/* General Resume Drop opens the generic "Resume Drop" modal context */}
           <Button onClick={() => setSelectedJob({ title: "General Application", id: "general-pool" })}>
             Submit Resume
           </Button>
        </div>

      </section>

      {/* --- RENDER THE MODAL --- */}
      <ApplicationModal
        isOpen={!!selectedJob}
        onClose={() => setSelectedJob(null)}
        jobTitle={selectedJob?.title || ""}
        jobId={selectedJob?.id || ""}
      />

      <Footer />
    </main>
  );
}
