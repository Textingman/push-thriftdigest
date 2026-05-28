import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />

      {/* Header */}
      <section style={{ backgroundColor: '#F5F7FA' }} className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold mb-4" style={{ color: '#1F2937' }}>Terms of Service</h1>
          <p className="text-lg" style={{ color: '#6B7280' }}>
            Last Updated: March 27, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>1. Acceptance of Terms</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            By accessing or using Thrift Digest's AI-powered savings guidance service ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use the Service. These Terms apply to all users of the Service.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>2. Description of Service</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            Thrift Digest provides an AI-powered savings guidance platform that helps individuals save more money through personalized, unbiased advice. The Service includes:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: '#6B7280' }}>
            <li>AI-powered savings education and guidance</li>
            <li>Personalized answers to savings and budgeting questions</li>
            <li>Discount program discovery and cashback strategy guidance</li>
            <li>Optional SMS notifications (account notifications and customer care)</li>
            <li>Phone number verification flow</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>3. Account Registration and Security</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: '#1F2937' }}>3.1 Account Creation</h3>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            To use the Service, you must provide accurate, complete, and current information. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: '#1F2937' }}>3.2 Account Security</h3>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            You agree to immediately notify us of any unauthorized use of your account or any other breach of security.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: '#1F2937' }}>3.3 Account Eligibility</h3>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            You must be at least 18 years old and have the legal capacity to enter into contracts to use the Service.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>4. Acceptable Use Policy</h2>
          <p className="mb-4" style={{ color: '#6B7280' }}>You agree not to use the Service to:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: '#6B7280' }}>
            <li>Violate any applicable laws, regulations, or third-party rights</li>
            <li>Send spam, unsolicited messages, or engage in fraudulent activities</li>
            <li>Transmit malware, viruses, or other harmful code</li>
            <li>Interfere with or disrupt the Service or servers</li>
            <li>Attempt to gain unauthorized access to any part of the Service</li>
            <li>Impersonate any person or entity or misrepresent your affiliation</li>
            <li>Collect or harvest personal information without consent</li>
            <li>Use the Service for any illegal or unauthorized purpose</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>5. SMS Messaging Terms</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: '#1F2937' }}>5.1 SMS Opt-In</h3>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            Thrift Digest offers two optional SMS messaging programs: transactional account notifications and customer care messages. Opting in to either program is entirely voluntary and is not required to use the Service or submit our form. By checking the applicable opt-in checkbox on our signup form, you provide explicit consent to receive SMS messages from that program.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: '#1F2937' }}>5.2 Opt-Out</h3>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            You may opt out of any SMS program at any time by replying <strong>STOP</strong> to any message from that program. Your opt-out request will be honored promptly. For help, reply <strong>HELP</strong> or contact <a href="mailto:support@thriftdigest.com" className="font-medium" style={{ color: '#2F6FA3' }}>support@thriftdigest.com</a>.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: '#1F2937' }}>5.3 Message Rates and Frequency</h3>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            Message and data rates may apply. Message frequency varies based on your account activity and the program you have opted into. Carriers are not liable for delayed or undelivered messages. No mobile information will be shared with or sold to third parties for marketing or promotional purposes.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>6. Service Availability and Support</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: '#1F2937' }}>6.1 Support</h3>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            We provide email support at <a href="mailto:support@thriftdigest.com" className="font-medium" style={{ color: '#2F6FA3' }}>support@thriftdigest.com</a>. Response times may vary based on the nature of your inquiry.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>7. Intellectual Property Rights</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            The Service and all content, features, and functionality are owned by Thrift Digest and are protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, or create derivative works based on the Service without our express written permission.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>8. Data and Privacy</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            Your use of the Service is also governed by our <Link href="/privacy" className="font-medium" style={{ color: '#2F6FA3' }}>Privacy Policy</Link>. By using the Service, you consent to our collection and use of information as described in the Privacy Policy. We do not sell your personal information.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>9. Disclaimers and Limitations of Liability</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: '#1F2937' }}>9.1 Not Financial Advice</h3>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            The information provided by our AI agent is for educational purposes only and does not constitute financial, investment, or legal advice. Always consult a licensed professional before making significant financial decisions.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: '#1F2937' }}>9.2 Service "As Is"</h3>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>10. Indemnification</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            You agree to indemnify, defend, and hold harmless Thrift Digest and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses (including reasonable attorney fees) arising from your use of the Service or violation of these Terms.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>11. Changes to Terms</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on our website and updating the "Last Updated" date. Your continued use of the Service after changes become effective constitutes acceptance of the modified Terms.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>12. Contact Information</h2>
          <p className="mb-4" style={{ color: '#6B7280' }}>
            If you have any questions about these Terms, please contact us:
          </p>
          <div className="rounded-lg p-6 mb-8" style={{ backgroundColor: '#F5F7FA', border: '1px solid #E5E7EB' }}>
            <p className="mb-2" style={{ color: '#6B7280' }}><strong>Legal:</strong> <a href="mailto:legal@thriftdigest.com" className="font-medium" style={{ color: '#2F6FA3' }}>legal@thriftdigest.com</a></p>
            <p className="mb-2" style={{ color: '#6B7280' }}><strong>Support:</strong> <a href="mailto:support@thriftdigest.com" className="font-medium" style={{ color: '#2F6FA3' }}>support@thriftdigest.com</a></p>
            <p style={{ color: '#6B7280' }}><strong>Website:</strong> <a href="/" className="font-medium" style={{ color: '#2F6FA3' }}>https://thriftdigest.com</a></p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
