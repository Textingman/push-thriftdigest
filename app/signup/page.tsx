'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Mail, Building, Phone, User } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });
  const [accountNotifications, setAccountNotifications] = useState(false);
  const [customerCare, setCustomerCare] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', phone: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />

      {/* Hero Section */}
      <section style={{ backgroundColor: '#F5F7FA' }} className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold mb-4" style={{ color: '#1F2937' }}>
              Talk to Your AI Benefits Advisor — Free
            </h1>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: '#6B7280' }}>
              Tell us about your situation and our AI agent will deliver personalized, unbiased benefits education — no sales calls, no pressure, just honest answers.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12" style={{ border: '1px solid #E5E7EB' }}>
          {submitStatus === 'success' ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ backgroundColor: '#D1FAE5' }}>
                <svg className="w-10 h-10" style={{ color: '#22C55E' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: '#1F2937' }}>Request Received!</h2>
              <p className="text-lg mb-8" style={{ color: '#6B7280' }}>
                Your submission has been received. Our team will reach out within 24 hours to begin your onboarding.
              </p>
              <Link
                href="/"
                className="inline-block px-6 py-3 text-white font-semibold rounded-lg transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#5E8F5E' }}
              >
                Return to Home
              </Link>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-2" style={{ color: '#1F2937' }}>Connect with Your AI Benefits Agent</h2>
                <p style={{ color: '#6B7280' }}>
                  Fill out this form and our AI agent will provide you with unbiased, personalized benefits education — completely free. No salespeople will contact you.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: '#1F2937' }}>
                    Full Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5" style={{ color: '#9CA3AF' }} />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 rounded-lg text-gray-900"
                      style={{ border: '1px solid #E5E7EB' }}
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: '#1F2937' }}>
                    Email Address *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5" style={{ color: '#9CA3AF' }} />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 rounded-lg text-gray-900"
                      style={{ border: '1px solid #E5E7EB' }}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* Location Field */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2" style={{ color: '#1F2937' }}>
                    City / State *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Building className="h-5 w-5" style={{ color: '#9CA3AF' }} />
                    </div>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 rounded-lg text-gray-900"
                      style={{ border: '1px solid #E5E7EB' }}
                      placeholder="e.g. Austin, TX"
                    />
                  </div>
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2" style={{ color: '#1F2937' }}>
                    Phone Number (Optional)
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5" style={{ color: '#9CA3AF' }} />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="block w-full pl-10 pr-3 py-3 rounded-lg text-gray-900"
                      style={{ border: '1px solid #E5E7EB' }}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: '#1F2937' }}>
                    Tell Us About Your Benefits Questions (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="block w-full px-3 py-3 rounded-lg text-gray-900"
                    style={{ border: '1px solid #E5E7EB' }}
                    placeholder="Tell us about your benefits situation, coverage needs, or any questions you have..."
                  />
                </div>

                {/* Consent Checkboxes */}
                <div className="space-y-4">
                  {/* SMS Account Notifications Checkbox */}
                  <div className="rounded-lg p-6 text-white" style={{ backgroundColor: '#1F2937' }}>
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="sms-account-notifications"
                        checked={accountNotifications}
                        onChange={(e) => setAccountNotifications(e.target.checked)}
                        className="mt-1 h-4 w-4 rounded flex-shrink-0"
                        style={{ accentColor: '#F59E0B' }}
                      />
                      <label htmlFor="sms-account-notifications" className="ml-3 text-sm leading-relaxed">
                        By checking this box and submitting this form, you agree to receive transactional account notification text messages from AI Benefits Agent. I understand I may opt out of SMS communication by replying 'STOP'. Reply HELP or email support@aibenefitsagent.com for help. Message and Data rates may apply. Message frequency varies. Carriers are not liable for delayed or undelivered messages. Opting in to SMS is optional and not required to submit this form. All messages will be handled by AI Benefits Agent.
                      </label>
                    </div>
                  </div>

                  {/* SMS Customer Care Checkbox */}
                  <div className="rounded-lg p-6 text-white" style={{ backgroundColor: '#1F2937' }}>
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="sms-customer-care"
                        checked={customerCare}
                        onChange={(e) => setCustomerCare(e.target.checked)}
                        className="mt-1 h-4 w-4 rounded flex-shrink-0"
                        style={{ accentColor: '#F59E0B' }}
                      />
                      <label htmlFor="sms-customer-care" className="ml-3 text-sm leading-relaxed">
                        By checking this box and submitting this form, you agree to receive <strong>customer care</strong> text messages from AI Benefits Agent. I understand I may opt out of SMS communication by replying 'STOP'. Reply HELP or email support@aibenefitsagent.com for help. Message and Data rates may apply. Message frequency varies. Carriers are not liable for delayed or undelivered messages. Opting in to SMS is optional and not required to submit this form. All messages will be handled by AI Benefits Agent.
                      </label>
                    </div>
                  </div>

                  {/* Terms & Privacy Policy Checkbox */}
                  <div className="rounded-lg p-6" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB' }}>
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="terms-consent"
                        className="mt-1 h-4 w-4 rounded flex-shrink-0"
                        style={{ accentColor: '#F59E0B' }}
                      />
                      <label htmlFor="terms-consent" className="ml-3 text-sm leading-relaxed" style={{ color: '#1F2937' }}>
                        I agree with the{' '}
                        <Link href="/terms" className="font-medium underline" style={{ color: '#2F6FA3' }}>
                          Terms & Conditions
                        </Link>{' '}
                        and{' '}
                        <Link href="/privacy" className="font-medium underline" style={{ color: '#2F6FA3' }}>
                          Privacy Policy
                        </Link>
                        .
                      </label>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-lg text-lg font-semibold transition-opacity text-white"
                  style={{ backgroundColor: isSubmitting ? '#9CA3AF' : '#5E8F5E', cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    'Talk to the AI Agent — Free'
                  )}
                </button>
              </form>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
