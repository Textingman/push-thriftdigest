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
            By accessing or using AI Benefits Agent's AI-powered benefits education service ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use the Service. These Terms apply to all users of the Service.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>2. Description of Service</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            AI Benefits Agent provides an AI-powered benefits education platform that helps individuals understand their benefits options through personalized, unbiased guidance. The Service includes:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: '#6B7280' }}>
            <li>AI-powered benefits education and guidance</li>
            <li>Personalized answers to benefits questions</li>
            <li>Enrollment guidance and eligibility information</li>
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
            You agree to immediately notify us of any unauthorized use of your account or any other breach of security. We will not be liable for any loss or damage arising from your failure to comply with these security obligations.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: '#1F2937' }}>3.3 Account Eligibility</h3>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            You must be at least 18 years old and have the legal capacity to enter into contracts to use the Service. By using the Service, you represent and warrant that you meet these requirements.
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
            AI Benefits Agent offers two optional SMS messaging programs: transactional account notifications and customer care messages. Opting in to either program is entirely voluntary and is not required to use the Service or submit our form. By checking the applicable opt-in checkbox on our signup form, you provide explicit consent to receive SMS messages from that program.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: '#1F2937' }}>5.2 Opt-Out</h3>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            You may opt out of any SMS program at any time by replying <strong>STOP</strong> to any message from that program. Your opt-out request will be honored promptly. For help, reply <strong>HELP</strong> or contact <a href="mailto:support@aibenefitsagent.com" className="font-medium" style={{ color: '#2F6FA3' }}>support@aibenefitsagent.com</a>.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: '#1F2937' }}>5.3 Message Rates and Frequency</h3>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            Message and data rates may apply. Message frequency varies based on your account activity and the program you have opted into. Carriers are not liable for delayed or undelivered messages. No mobile information will be shared with or sold to third parties for marketing or promotional purposes.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: '#1F2937' }}>5.4 Content Restrictions</h3>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            All SMS messages sent through our Service will comply with applicable laws and carrier guidelines. We do not send messages containing prohibited content, including illegal content, adult content, gambling, cannabis, firearms, or any content that violates applicable regulations.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>6. Service Availability and Support</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: '#1F2937' }}>6.1 Uptime</h3>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            We strive to maintain high availability for the Service, but we do not guarantee uninterrupted access. We may perform scheduled maintenance with advance notice when possible.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: '#1F2937' }}>6.2 Support</h3>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            We provide email support at <a href="mailto:support@aibenefitsagent.com" className="font-medium" style={{ color: '#2F6FA3' }}>support@aibenefitsagent.com</a>. Response times may vary based on the nature of your inquiry.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: '#1F2937' }}>6.3 Service Modifications</h3>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            We reserve the right to modify, suspend, or discontinue any aspect of the Service at any time with reasonable notice. We will not be liable for any modification, suspension, or discontinuation of the Service.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>7. Intellectual Property Rights</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: '#1F2937' }}>7.1 Our Rights</h3>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            The Service and all content, features, and functionality are owned by AI Benefits Agent and are protected by copyright, trademark, and other intellectual property laws. You may not copy, modify, distribute, or create derivative works based on the Service without our express written permission.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: '#1F2937' }}>7.2 Your Content</h3>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            You retain ownership of any content you submit through the Service. By submitting content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and display such content solely for the purpose of providing the Service.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: '#1F2937' }}>7.3 Feedback</h3>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            If you provide us with feedback or suggestions about the Service, we may use such feedback without any obligation to you.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>8. Data and Privacy</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            Your use of the Service is also governed by our <Link href="/privacy" className="font-medium" style={{ color: '#2F6FA3' }}>Privacy Policy</Link>. By using the Service, you consent to our collection and use of information as described in the Privacy Policy. We do not sell your personal information.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>9. Disclaimers and Limitations of Liability</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: '#1F2937' }}>9.1 Not Financial or Insurance Advice</h3>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            The information provided by our AI agent is for educational purposes only and does not constitute financial, insurance, or legal advice. Always consult a licensed professional before making benefits or insurance decisions.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: '#1F2937' }}>9.2 Service "As Is"</h3>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: '#1F2937' }}>9.3 Limitation of Liability</h3>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, AI BENEFITS AGENT SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>10. Indemnification</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            You agree to indemnify, defend, and hold harmless AI Benefits Agent and its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses (including reasonable attorney fees) arising from:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: '#6B7280' }}>
            <li>Your use of the Service</li>
            <li>Your violation of these Terms</li>
            <li>Your violation of any rights of another party</li>
            <li>Your violation of applicable laws or regulations</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>11. Termination</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: '#1F2937' }}>11.1 Termination by You</h3>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            You may terminate your account at any time by contacting us. Upon termination, your right to use the Service will immediately cease.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: '#1F2937' }}>11.2 Termination by Us</h3>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            We may suspend or terminate your access to the Service at any time, with or without cause, with or without notice. Reasons for termination may include violation of these Terms or any conduct that we believe is harmful to other users or the Service.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: '#1F2937' }}>11.3 Effect of Termination</h3>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            Upon termination, all licenses and rights granted to you will immediately cease. Provisions that by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, and limitations of liability.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>12. Dispute Resolution</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: '#1F2937' }}>12.1 Informal Resolution</h3>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            Before filing a claim, you agree to contact us and attempt to resolve the dispute informally by sending a written notice describing the dispute and your proposed resolution.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: '#1F2937' }}>12.2 Arbitration</h3>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            If we cannot resolve the dispute informally, any dispute arising from these Terms or the Service shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: '#1F2937' }}>12.3 Class Action Waiver</h3>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            You agree that any dispute resolution proceedings will be conducted only on an individual basis and not in a class, consolidated, or representative action.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>13. General Provisions</h2>

          <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: '#1F2937' }}>13.1 Governing Law</h3>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: '#1F2937' }}>13.2 Entire Agreement</h3>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            These Terms, together with our Privacy Policy, constitute the entire agreement between you and AI Benefits Agent regarding the Service and supersede all prior agreements.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: '#1F2937' }}>13.3 Severability</h3>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: '#1F2937' }}>13.4 Waiver</h3>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-3" style={{ color: '#1F2937' }}>13.5 Assignment</h3>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            You may not assign or transfer these Terms or your rights under these Terms without our prior written consent. We may assign these Terms without restriction.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>14. Changes to Terms</h2>
          <p className="mb-6" style={{ color: '#6B7280' }}>
            We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on our website and updating the "Last Updated" date. Your continued use of the Service after changes become effective constitutes acceptance of the modified Terms.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4" style={{ color: '#1F2937' }}>15. Contact Information</h2>
          <p className="mb-4" style={{ color: '#6B7280' }}>
            If you have any questions about these Terms, please contact us:
          </p>
          <div className="rounded-lg p-6 mb-8" style={{ backgroundColor: '#F5F7FA', border: '1px solid #E5E7EB' }}>
            <p className="mb-2" style={{ color: '#6B7280' }}><strong>Legal:</strong> <a href="mailto:legal@aibenefitsagent.com" className="font-medium" style={{ color: '#2F6FA3' }}>legal@aibenefitsagent.com</a></p>
            <p className="mb-2" style={{ color: '#6B7280' }}><strong>Support:</strong> <a href="mailto:support@aibenefitsagent.com" className="font-medium" style={{ color: '#2F6FA3' }}>support@aibenefitsagent.com</a></p>
            <p style={{ color: '#6B7280' }}><strong>Website:</strong> <a href="/" className="font-medium" style={{ color: '#2F6FA3' }}>https://aibenefitsagent.com</a></p>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
