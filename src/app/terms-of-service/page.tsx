import { Footer } from '@/components/layout/Footer';
import { COMPANY_INFO } from '@/lib/constants';

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-[#050e1d] pt-32 pb-20">
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
            Terms of Service
          </h1>
          <div className="prose prose-invert prose-lg text-zinc-400">
            <p className="lead text-xl text-white mb-8">
              Last Updated:{' '}
              {new Date().toLocaleDateString('en-US', {
                month: 'long',
                year: 'numeric',
              })}
            </p>

            <p>
              Welcome to {COMPANY_INFO.name}. By accessing our website or using
              our services, you agree to be bound by these Terms of Service.
              Please read them carefully.
            </p>

            <h3 className="text-white mt-8 mb-4">1. Services</h3>
            <p>
              {COMPANY_INFO.name} provides manpower supply and facility
              management services. The specific scope of service for any project
              or contract will be defined in a separate written agreement or
              service contract.
            </p>

            <h3 className="text-white mt-8 mb-4">2. Intellectual Property</h3>
            <p>
              The content on this website, including text, graphics, logos, and
              images, is the property of {COMPANY_INFO.name}
              and is protected by intellectual property laws. You may not
              reproduce, distribute, or create derivative works without our
              express written permission.
            </p>

            <h3 className="text-white mt-8 mb-4">3. Limitation of Liability</h3>
            <p>
              To the fullest extent permitted by law, {COMPANY_INFO.name} shall
              not be liable for any indirect, incidental, special,
              consequential, or punitive damages, including loss of profits or
              data, arising out of or in connection with your use of our website
              or services.
            </p>

            <h3 className="text-white mt-8 mb-4">4. User Obligations</h3>
            <p>
              You agree not to use our website for any unlawful purpose or in
              any way that interrupts, damages, or impairs the service. You are
              responsible for ensuring that any information you provide through
              the website is accurate/current.
            </p>

            <h3 className="text-white mt-8 mb-4">5. Governing Law</h3>
            <p>
              These Terms shall be governed by and construed in accordance with
              the laws of India. Any disputes arising under these Terms shall be
              subject to the exclusive jurisdiction of the courts located in
              Hyderabad/Secunderabad, Telangana.
            </p>

            <h3 className="text-white mt-8 mb-4">6. Changes to Terms</h3>
            <p>
              We reserve the right to modify these Terms at any time. Your
              continued use of the website following the posting of changes
              constitutes your acceptance of such changes.
            </p>

            <h3 className="text-white mt-8 mb-4">7. Contact Information</h3>
            <p>Questions about the Terms of Service should be sent to us at:</p>
            <p className="mt-4">
              <strong>{COMPANY_INFO.name}</strong>
              <br />
              Email:{' '}
              <a
                href={`mailto:${COMPANY_INFO.contact.email}`}
                className="text-[#dfb755] hover:underline"
              >
                {COMPANY_INFO.contact.email}
              </a>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
