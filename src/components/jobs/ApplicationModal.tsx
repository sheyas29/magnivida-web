"use client";

import { submitApplication } from "@/app/actions";
import { Button } from "@/components/ui/Button";
import { AnimatePresence, motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Loader2, UploadCloud, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobTitle: string;
  jobId: string;
}

const BLOCKED_DOMAINS = ["tempmail.com", "mailinator.com", "10minutemail.com", "guerrillamail.com"];
const MAX_FILE_SIZE = 5 * 1024 * 1024;

function isValidEmail(email: string) {
  return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
}

export function ApplicationModal({ isOpen, onClose, jobTitle, jobId }: ApplicationModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) {
      setIsSubmitting(false);
      setIsSuccess(false);
      setError(null);
      setFileName(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  }, [isOpen]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const formEl = e.currentTarget;
    const formData = new FormData(formEl);

    const email = String(formData.get("email") ?? "").trim().toLowerCase();
    const name = String(formData.get("name") ?? "").trim();

    if (!name) {
      setError("Please enter your full name.");
      return;
    }

    if (!email || !isValidEmail(email)) {
      setError("Please enter a valid email address.");

      // Add this line to scroll to top
      document.querySelector('.overflow-y-auto')?.scrollTo({ top: 0, behavior: 'smooth' });

      return;
    }

    const domain = email.split("@")[1] ?? "";
    if (domain && BLOCKED_DOMAINS.includes(domain)) {
      setError("Temporary email addresses are not accepted.");
      return;
    }

    const resume = formData.get("resume") as File | null;
    if (!resume || resume.size === 0) {
      setError("Please upload your resume (PDF/DOC/DOCX).");
      return;
    }
    if (resume.size > MAX_FILE_SIZE) {
      setError("Resume file is too large. Please upload a file smaller than 5MB.");
      return;
    }

    setIsSubmitting(true);
    try {
      const result = await submitApplication(null, formData);

      if (result?.success) {
        setIsSuccess(true);
      } else {
        setError(result?.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    const file = e.target.files?.[0];
    if (!file) {
      setFileName(null);
      return;
    }

    const okType =
      file.type === "application/pdf" ||
      file.type === "application/msword" ||
      file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document";

    if (!okType) {
      setError("Invalid file type. Please upload PDF/DOC/DOCX.");
      e.target.value = "";
      setFileName(null);
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setError("Resume file is too large. Please upload a file smaller than 5MB.");
      e.target.value = "";
      setFileName(null);
      return;
    }

    setFileName(file.name);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full md:w-[520px] bg-[#07162f] border-l border-white/10 z-50 shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#050e1d]">
              <div>
                <h3 className="text-white font-bold text-lg">Apply for Position</h3>
                <p className="text-[#dfb755] text-sm font-medium">{jobTitle}</p>
                <p className="text-zinc-600 text-xs mt-1">ID: {jobId}</p>
              </div>
              <button onClick={onClose} className="text-zinc-400 hover:text-white transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {isSuccess ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mb-6">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Application Received</h3>
                  <p className="text-zinc-400 max-w-xs mx-auto mb-8">
                    Thank you. Your application was submitted successfully.
                  </p>
                  <Button onClick={onClose} variant="outline">
                    Close Window
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  {/* Hidden context */}
                  <input type="hidden" name="jobTitle" value={jobTitle} />
                  <input type="hidden" name="jobId" value={jobId} />

                  {/* Error */}
                  {error && (
                    <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 flex items-start gap-3">
                      <AlertCircle className="text-red-400 shrink-0 mt-0.5" size={20} />
                      <p className="text-red-200 text-sm">{error}</p>
                    </div>
                  )}

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-300">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="Your full name"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#dfb755] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-zinc-300">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        placeholder="name@gmail.com"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#dfb755] focus:outline-none"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-zinc-300">
                        Phone <span className="text-red-400">*</span>
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        required
                        placeholder="+91..."
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#dfb755] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-300">
                      Resume (PDF/DOC/DOCX) <span className="text-red-400">*</span>
                    </label>
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className="border-2 border-dashed border-white/10 rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer hover:border-[#dfb755]/50 hover:bg-[#dfb755]/5 transition-all group"
                    >
                      <input
                        ref={fileInputRef}
                        name="resume"
                        type="file"
                        className="hidden"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        required
                      />
                      <UploadCloud className="text-zinc-500 group-hover:text-[#dfb755] mb-3 transition-colors" size={32} />
                      {fileName ? (
                        <div className="text-center">
                          <p className="text-[#dfb755] font-medium text-sm break-all">{fileName}</p>
                          <p className="text-zinc-600 text-xs mt-1">Click to change</p>
                        </div>
                      ) : (
                        <div className="text-center">
                          <p className="text-zinc-300 font-medium text-sm">Click to upload resume</p>
                          <p className="text-zinc-500 text-xs mt-1">Max 5MB</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-zinc-300">Cover Message (Optional)</label>
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="Briefly introduce yourself..."
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#dfb755] focus:outline-none resize-none"
                    />
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <Button type="submit" disabled={isSubmitting} className="w-full py-4 text-base font-bold">
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          Submitting <Loader2 className="animate-spin" size={18} />
                        </span>
                      ) : (
                        "Submit Application"
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
