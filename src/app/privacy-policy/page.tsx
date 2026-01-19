import { Footer } from '@/components/layout/Footer';
import { COMPANY_INFO } from '@/lib/constants';

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[#050e1d] pt-32 pb-20">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
            Privacy Policy
          </h1>
          <div className="prose prose-invert prose-lg text-zinc-400">
            <p className="lead text-xl text-white mb-8">
              Effective Date:{' '}
              {new Date().toLocaleDateString('en-US', {
                month: 'long',
                year: 'numeric',
              })}
            </p>

            <p>
              At <strong>{COMPANY_INFO.name}</strong>, we are committed to
              protecting your privacy. This Privacy Policy explains how we
              collect, use, and safeguard your information when you visit our
              website or use our manpower and facility management services.
            </p>

            <h3 className="text-white mt-8 mb-4">1. Information We Collect</h3>
            <p>
              We may collect personal information that you provide to us
              directly, such as:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>
                Name, email address, and phone number when you request a quote.
              </li>
              <li>
                Resume or employment details when you apply for a job via our
                Careers section.
              </li>
              <li>Company details when inquiring about corporate services.</li>
            </ul>

            <h3 className="text-white mt-8 mb-4">
              2. How We Use Your Information
            </h3>
            <p>We use the collected data for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>
                To provide and manage our services (Manpower Supply & Facility
                Management).
              </li>
              <li>
                To respond to your inquiries, quotes, or job applications.
              </li>
              <li>
                To send administrative information, such as updates to our terms
                or policies.
              </li>
              <li>
                To comply with legal obligations and enforce our agreements.
              </li>
            </ul>

            <h3 className="text-white mt-8 mb-4">3. Data Sharing</h3>
            <p>
              We do not sell your personal data to third parties. We may share
              information/data with third parties only in the following
              circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>
                <strong>Service Providers:</strong> Vendors who assist us in
                operations (e.g., IT support, payroll processing).
              </li>
              <li>
                <strong>Legal Compliance:</strong> If required by law,
                regulation, or legal process.
              </li>
            </ul>

            <h3 className="text-white mt-8 mb-4">4. Data Security</h3>
            <p>
              We use commercially reasonable administrative, technical, and
              physical security measures to protect your personal information.
              However, no transmission over the internet or electronic storage
              is 100% secure.
            </p>

            <h3 className="text-white mt-8 mb-4">5. Contact Us</h3>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at:
            </p>
            <p className="mt-4">
              <strong>{COMPANY_INFO.name}</strong>
              <br />
              {COMPANY_INFO.contact.address}
              <br />
              Email:{' '}
              <a
                href={`mailto:${COMPANY_INFO.contact.email}`}
                className="text-[#dfb755] hover:underline"
              >
                {COMPANY_INFO.contact.email}
              </a>
              <br />
              Phone:{' '}
              <a
                href={`tel:${COMPANY_INFO.contact.phone}`}
                className="text-[#dfb755] hover:underline"
              >
                {COMPANY_INFO.contact.phone}
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
