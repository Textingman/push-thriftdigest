import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />

      {/* Header */}
      <section style={{ backgroundColor: '#F5F7FA' }} className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold mb-4" style={{ color: '#1F2937' }}>Privacy Policy</h1>
          <p className="text-lg" style={{ color: '#6B7280' }}>
            Last Updated: March 27, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>1. Introduction</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            AI Benefits Agent ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered benefits education service and website at aibenefitsagent.com. By using our service, you agree to the collection and use of information in accordance with this policy.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>2. Information We Collect</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: '#1F2937' }}>2.1 Information You Provide</h3>
          <p className="mb-4" style={{ color: '#6B7280' }}>When you sign up for or use our service, we may collect:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: '#6B7280' }}>
            <li>Full name and contact information (email address, phone number)</li>
            <li>Location information (city/state)</li>
            <li>Benefits-related questions and information you share with our AI agent</li>
            <li>SMS opt-in consent preferences (account notifications and/or customer care)</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: '#1F2937' }}>2.2 Information Collected Automatically</h3>
          <p className="mb-4" style={{ color: '#6B7280' }}>When you use our service, we automatically collect:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: '#6B7280' }}>
            <li>Device information (browser type, operating system)</li>
            <li>IP address and general location data</li>
            <li>Usage data (pages visited, time spent, click patterns)</li>
            <li>Session timestamps and interaction data</li>
          </ul>

          <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: '#1F2937' }}>2.3 Phone Number Handling</h3>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            <strong>Important:</strong> We do NOT store phone numbers used in the verification process beyond what is necessary to provide our service. Phone numbers are only displayed (masked) during the verification flow and are not logged or retained in our systems beyond service delivery. All tracking parameters are passed through without storing personally identifiable information unnecessarily.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: '#1F2937' }}>2.4 Mobile Information and SMS Consent</h3>
          <p className="mb-4" style={{ color: '#6B7280' }}>
            <strong>No mobile information will be shared or sold to third parties for marketing/promotional purposes.</strong> When you opt in to receive SMS messages from AI Benefits Agent, we collect and store your consent preferences separately for:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2" style={{ color: '#6B7280' }}>
            <li><strong>Transactional Account Notifications:</strong> Messages related to your account activity, service updates, and important notices about your benefits education experience.</li>
            <li><strong>Customer Care:</strong> Messages to assist you with questions, support requests, and follow-up related to your benefits inquiries.</li>
          </ul>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            Each SMS program requires separate opt-in consent. Opting in to either or both programs is entirely optional and is not required to use our service or submit our form. You may opt out at any time by replying <strong>STOP</strong> to any message. For help, reply <strong>HELP</strong> or email <a href="mailto:support@aibenefitsagent.com" className="font-medium" style={{ color: '#2F8FCB' }}>support@aibenefitsagent.com</a>. Message and data rates may apply. Message frequency varies. Carriers are not liable for delayed or undelivered messages.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>3. How We Use Your Information</h2>
          <p className="mb-4" style={{ color: '#6B7280' }}>We use the information we collect to:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: '#6B7280' }}>
            <li>Provide and maintain our AI-powered benefits education service</li>
            <li>Deliver personalized, unbiased benefits guidance through our AI agent</li>
            <li>Send transactional account notification SMS messages (if opted in)</li>
            <li>Send customer care SMS messages to assist with your inquiries (if opted in)</li>
            <li>Respond to your questions and support requests</li>
            <li>Improve our service and develop new features</li>
            <li>Ensure compliance with carrier requirements and applicable regulations</li>
            <li>Detect and prevent fraud or abuse</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>4. Information Sharing and Disclosure</h2>
          <p className="mb-4" style={{ color: '#6B7280' }}>We do not sell your personal information. We may share your information only in the following limited circumstances:</p>

          <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: '#1F2937' }}>4.1 Service Providers</h3>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            Third-party vendors who perform services on our behalf, such as hosting, analytics, SMS delivery, and customer support. These providers are contractually obligated to protect your information and may not use it for their own marketing purposes.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: '#1F2937' }}>4.2 Business Transfers</h3>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            In connection with any merger, sale of company assets, financing, or acquisition of all or a portion of our business, your information may be transferred as a business asset.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: '#1F2937' }}>4.3 Legal Requirements</h3>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            When required by law, court order, or government regulation, or when we believe disclosure is necessary to protect our rights, your safety, or the safety of others.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: '#1F2937' }}>4.4 With Your Consent</h3>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            We may share your information for any other purpose with your explicit prior consent.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>5. SMS Messaging Program Details</h2>
          <p className="mb-4" style={{ color: '#6B7280' }}>
            AI Benefits Agent operates two separate SMS messaging programs. By opting in to either program on our signup form, you agree to the following terms:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: '#6B7280' }}>
            <li><strong>Program 1 — Transactional Account Notifications:</strong> Receive SMS messages about your account status, service updates, and important benefits-related notices.</li>
            <li><strong>Program 2 — Customer Care:</strong> Receive SMS messages from our team to assist with your benefits questions and support needs.</li>
            <li>Both programs are optional. You may opt in to one, both, or neither.</li>
            <li>To opt out of any program, reply <strong>STOP</strong> to any message from that program.</li>
            <li>To get help, reply <strong>HELP</strong> or contact <a href="mailto:support@aibenefitsagent.com" className="font-medium" style={{ color: '#2F8FCB' }}>support@aibenefitsagent.com</a>.</li>
            <li>Message and data rates may apply. Message frequency varies by program and user activity.</li>
            <li>Carriers are not liable for delayed or undelivered messages.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>6. Data Security</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            We implement appropriate technical and organizational security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. These measures include:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: '#6B7280' }}>
            <li>Encryption of data in transit (HTTPS/TLS)</li>
            <li>Secure hosting infrastructure with regular security audits</li>
            <li>Access controls and authentication mechanisms</li>
            <li>Regular security assessments and updates</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>7. Data Retention</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            We retain your information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. SMS consent records are retained for as long as required to demonstrate compliance with applicable regulations.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>8. Your Rights and Choices</h2>
          <p className="mb-4" style={{ color: '#6B7280' }}>Depending on your location, you may have the following rights:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: '#6B7280' }}>
            <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
            <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
            <li><strong>Deletion:</strong> Request deletion of your personal information</li>
            <li><strong>Portability:</strong> Request a copy of your information in a portable format</li>
            <li><strong>Objection:</strong> Object to certain processing of your information</li>
            <li><strong>SMS Opt-Out:</strong> Reply STOP to any SMS message to opt out of that messaging program at any time</li>
          </ul>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            To exercise these rights, please contact us at <a href="mailto:privacy@aibenefitsagent.com" className="font-medium" style={{ color: '#2F8FCB' }}>privacy@aibenefitsagent.com</a>.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>9. Cookies and Tracking Technologies</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            We use cookies and similar tracking technologies to track activity on our service and improve your experience. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. Note that some features of our service may not function properly without cookies.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>10. Third-Party Links</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            Our service may contain links to third-party websites. We are not responsible for the privacy practices of these external sites and encourage you to review their privacy policies.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>11. Children's Privacy</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            Our service is not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a minor, please contact us immediately.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>12. California Privacy Rights (CCPA)</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA), including the right to know what personal information we collect, the right to delete your personal information, and the right to opt out of the sale of personal information. <strong>We do not sell personal information.</strong> To exercise your CCPA rights, contact us at <a href="mailto:privacy@aibenefitsagent.com" className="font-medium" style={{ color: '#2F8FCB' }}>privacy@aibenefitsagent.com</a>.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>13. Changes to This Privacy Policy</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. Your continued use of the service after changes become effective constitutes your acceptance of the updated policy.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>14. Contact Us</h2>
          <p className="mb-4" style={{ color: '#6B7280' }}>
            If you have any questions about this Privacy Policy or our privacy practices, please contact us:
          </p>
          <div className="rounded-lg p-6 mb-8" style={{ backgroundColor: '#F5F7FA', border: '1px solid #E5E7EB' }}>
            <p className="mb-2" style={{ color: '#6B7280' }}><strong>Privacy Inquiries:</strong> <a href="mailto:privacy@aibenefitsagent.com" className="font-medium" style={{ color: '#2F8FCB' }}>privacy@aibenefitsagent.com</a></p>
            <p className="mb-2" style={{ color: '#6B7280' }}><strong>General Support:</strong> <a href="mailto:support@aibenefitsagent.com" className="font-medium" style={{ color: '#2F8FCB' }}>support@aibenefitsagent.com</a></p>
            <p style={{ color: '#6B7280' }}><strong>Website:</strong> <a href="/" className="font-medium" style={{ color: '#2F8FCB' }}>https://aibenefitsagent.com</a></p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
