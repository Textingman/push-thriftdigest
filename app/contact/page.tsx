import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />

      {/* Header */}
      <section style={{ backgroundColor: '#F5F7FA' }} className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold mb-4" style={{ color: '#1F2937' }}>Contact Us</h1>
          <p className="text-lg" style={{ color: '#6B7280' }}>
            We're here to help. Reach out to us with any questions, concerns, or feedback.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#1F2937' }}>Get in Touch</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-1" style={{ color: '#1F2937' }}>Email</h3>
                <a
                  href="mailto:support@thriftdigest.com"
                  className="text-base hover:underline"
                  style={{ color: '#166534' }}
                >
                  support@thriftdigest.com
                </a>
                <p className="text-sm mt-1" style={{ color: '#6B7280' }}>
                  We typically respond within 1–2 business days.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-1" style={{ color: '#1F2937' }}>Mailing Address</h3>
                <p style={{ color: '#6B7280' }}>
                  Thrift Digest<br />
                  8 The Green, Ste A<br />
                  Dover, DE 19901
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-1" style={{ color: '#1F2937' }}>SMS Support</h3>
                <p style={{ color: '#6B7280' }}>
                  If you have received an SMS message from us and need assistance, reply <strong>HELP</strong> to any message or email us at{' '}
                  <a href="mailto:support@thriftdigest.com" className="font-medium hover:underline" style={{ color: '#166534' }}>
                    support@thriftdigest.com
                  </a>.
                  To stop receiving messages, reply <strong>STOP</strong> at any time.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ / Info Panel */}
          <div>
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#1F2937' }}>Frequently Asked Questions</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-base font-semibold mb-1" style={{ color: '#1F2937' }}>How do I opt out of SMS messages?</h3>
                <p className="text-sm" style={{ color: '#6B7280' }}>
                  Reply <strong>STOP</strong> to any SMS message you receive from us. You will be immediately removed from our messaging list. Message and data rates may apply.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold mb-1" style={{ color: '#1F2937' }}>How do I get help with SMS messages?</h3>
                <p className="text-sm" style={{ color: '#6B7280' }}>
                  Reply <strong>HELP</strong> to any SMS message or email us at support@thriftdigest.com.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold mb-1" style={{ color: '#1F2937' }}>Will my information be shared?</h3>
                <p className="text-sm" style={{ color: '#6B7280' }}>
                  No. We do not sell, rent, or share your mobile phone number or personal information with third parties for marketing purposes. See our{' '}
                  <a href="/privacy" className="font-medium hover:underline" style={{ color: '#166534' }}>Privacy Policy</a> for full details.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold mb-1" style={{ color: '#1F2937' }}>What types of messages will I receive?</h3>
                <p className="text-sm" style={{ color: '#6B7280' }}>
                  Depending on your opt-in selections, you may receive transactional account notifications and/or customer care messages. You will only receive message types you explicitly consented to.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
