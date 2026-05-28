import Link from 'next/link';
import Image from 'next/image';
import { Bot, ShieldCheck, BookOpen } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />

      {/* Hero Section */}
      <section style={{ backgroundColor: '#F5F7FA' }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: '#DBEAFE', color: '#1F4E79' }}>
              <Bot className="w-4 h-4" />
              AI-Powered — 100% Independent
            </div>
            <h1 className="text-5xl font-extrabold mb-6" style={{ color: '#1F2937' }}>
              An AI Agent Built to Help You Save,<br />Not to Sell You Anything
            </h1>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#6B7280' }}>
              Thrift Digest is an AI-powered platform that guides individuals toward smarter spending and bigger savings with honest, unbiased advice. We're not a financial product seller. We're your independent savings advisor.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#1F2937' }}>Why We Built This</h2>
            <p className="text-lg mb-4" style={{ color: '#6B7280' }}>
              The personal finance world is full of products trying to sell you something — credit cards, investment accounts, subscription services. But most people just want simple, honest answers about how to save more money.
            </p>
            <p className="text-lg mb-4" style={{ color: '#6B7280' }}>
              We built an AI agent that acts as your personal savings advisor — one that has no financial incentive to push you toward any particular product or service. It simply helps you understand your options and make the best decisions for your wallet.
            </p>
            <p className="text-lg" style={{ color: '#6B7280' }}>
              Think of it as having a knowledgeable friend who happens to know everything about saving money — available 24/7, completely free, and always on your side.
            </p>
          </div>
          <div className="rounded-2xl p-8 border" style={{ backgroundColor: '#FFFFFF', borderColor: '#E5E7EB' }}>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#DBEAFE' }}>
                  <Bot className="w-5 h-5" style={{ color: '#1F4E79' }} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-1" style={{ color: '#1F2937' }}>AI-Powered, Always Available</h3>
                  <p style={{ color: '#6B7280' }}>
                    Our AI agent is available 24/7 to answer your savings questions instantly — no waiting, no appointments.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#DBEAFE' }}>
                  <ShieldCheck className="w-5 h-5" style={{ color: '#2F6FA3' }} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-1" style={{ color: '#1F2937' }}>Zero Conflicts of Interest</h3>
                  <p style={{ color: '#6B7280' }}>
                    We receive no commissions or referral fees from financial products. Our AI's only job is to help you save more.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#dcfce7' }}>
                  <BookOpen className="w-5 h-5" style={{ color: '#5E8F5E' }} />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold mb-1" style={{ color: '#1F2937' }}>Education First</h3>
                  <p style={{ color: '#6B7280' }}>
                    We believe informed people make better financial decisions. Our AI educates you so you can save smarter.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What the AI Covers Section */}
      <section style={{ backgroundColor: '#F5F7FA' }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#1F2937' }}>What Our AI Agent Covers</h2>
            <p className="text-xl" style={{ color: '#6B7280' }}>
              Comprehensive savings guidance tailored to your situation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl border bg-white" style={{ borderColor: '#E5E7EB' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#DBEAFE' }}>
                <span className="text-xl">🛒</span>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#1F2937' }}>Grocery Savings</h3>
              <p style={{ color: '#6B7280' }}>
                Discover cashback apps, coupon stacking strategies, store brand swaps, and meal planning tips to slash your grocery bill.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl border bg-white" style={{ borderColor: '#E5E7EB' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#dcfce7' }}>
                <span className="text-xl">💳</span>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#1F2937' }}>Cashback & Rewards</h3>
              <p style={{ color: '#6B7280' }}>
                Learn how to stack cashback credit cards, portals like Rakuten, and apps like Ibotta to earn money back on every purchase.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl border bg-white" style={{ borderColor: '#E5E7EB' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#DBEAFE' }}>
                <span className="text-xl">📊</span>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#1F2937' }}>Budgeting</h3>
              <p style={{ color: '#6B7280' }}>
                Get help setting up a budget that actually works — zero-based, 50/30/20, or a custom approach that fits your lifestyle.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl border bg-white" style={{ borderColor: '#E5E7EB' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#FEF3C7' }}>
                <span className="text-xl">🏦</span>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#1F2937' }}>Emergency Fund</h3>
              <p style={{ color: '#6B7280' }}>
                Learn how to build your emergency fund faster with automation, high-yield savings accounts, and smart contribution strategies.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl border bg-white" style={{ borderColor: '#E5E7EB' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#dcfce7' }}>
                <span className="text-xl">🏷️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#1F2937' }}>Discount Programs</h3>
              <p style={{ color: '#6B7280' }}>
                Uncover discount programs you may be missing — AAA, AARP, employer portals, student discounts, military benefits, and more.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl border bg-white" style={{ borderColor: '#E5E7EB' }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: '#DBEAFE' }}>
                <span className="text-xl">💡</span>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#1F2937' }}>And Much More</h3>
              <p style={{ color: '#6B7280' }}>
                Utility savings, subscription audits, negotiating bills, frugal living tips, and any other savings questions you have.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #1F4E79 0%, #2F6FA3 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Bot className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Talk to Your AI Savings Advisor?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.9)' }}>
            Get instant, unbiased answers to all your savings questions — completely free, with zero sales pressure.
          </p>
          <Link
            href="/signup"
            className="inline-block px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#5E8F5E', color: '#FFFFFF' }}
          >
            Talk to the AI Agent — Free
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
