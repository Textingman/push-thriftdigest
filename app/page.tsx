import Link from 'next/link';
import Image from 'next/image';
import { Bot, BookOpen, ShieldCheck } from 'lucide-react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFFFF' }}>
      <Navbar />

      {/* Hero Section */}
      <section style={{ backgroundColor: '#F0FDF4' }} className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: '#DCFCE7', color: '#166534' }}>
              <Bot className="w-4 h-4" />
              AI-Powered — 100% Independent
            </div>
            <h1 className="text-5xl font-extrabold sm:text-6xl md:text-7xl" style={{ color: '#1F2937' }}>
              Your Personal AI Agent
              <span className="block" style={{ color: '#166534' }}>for Smarter Savings</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl" style={{ color: '#6B7280' }}>
              Meet your AI savings advisor. Ask anything about budgeting, cashback, deals, discounts, and more — and get honest, unbiased answers instantly. No salespeople. No pressure. Just savings.
            </p>
            <div className="mt-10 flex justify-center gap-4 flex-wrap">
              <Link
                href="/signup"
                className="px-8 py-4 text-white text-lg font-semibold rounded-lg shadow-lg transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#166534' }}
              >
                Talk to the AI Agent — Free
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 text-lg font-semibold rounded-lg transition-opacity hover:opacity-90 border-2"
                style={{ color: '#166534', borderColor: '#166534', backgroundColor: '#FFFFFF' }}
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What the AI Does Section */}
      <section style={{ backgroundColor: '#FFFFFF' }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold" style={{ color: '#1F2937' }}>What Our AI Agent Does For You</h2>
            <p className="mt-4 text-xl" style={{ color: '#6B7280' }}>
              A knowledgeable savings expert available 24/7 — with zero agenda
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ borderColor: '#BBF7D0' }}>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#DCFCE7' }}>
                  <Bot className="w-8 h-8" style={{ color: '#166534' }} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3" style={{ color: '#1F2937' }}>
                Answers Your Savings Questions
              </h3>
              <p className="text-center" style={{ color: '#6B7280' }}>
                Ask our AI anything — "How do I save on groceries?", "What cashback apps are best?", "How do I build an emergency fund?" — and get clear, honest answers in seconds.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ borderColor: '#BBF7D0' }}>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#DCFCE7' }}>
                  <BookOpen className="w-8 h-8" style={{ color: '#15803D' }} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3" style={{ color: '#1F2937' }}>
                Teaches You to Save Smarter
              </h3>
              <p className="text-center" style={{ color: '#6B7280' }}>
                Our AI walks you through budgeting strategies, cashback stacking, coupon techniques, and discount programs — so you keep more of your money every month.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ borderColor: '#BBF7D0' }}>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#DCFCE7' }}>
                  <ShieldCheck className="w-8 h-8" style={{ color: '#166534' }} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3" style={{ color: '#1F2937' }}>
                Finds Savings You're Missing
              </h3>
              <p className="text-center" style={{ color: '#6B7280' }}>
                Our AI identifies discount programs, cashback opportunities, and savings strategies you may not know about — and shows you exactly how to take advantage of them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section style={{ backgroundColor: '#F0FDF4' }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold" style={{ color: '#1F2937' }}>How the AI Agent Helps You Save</h2>
            <p className="mt-4 text-xl" style={{ color: '#6B7280' }}>
              Three simple steps to smarter spending and bigger savings
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white" style={{ backgroundColor: '#166534' }}>
                1
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#1F2937' }}>Tell the AI About Your Goals</h3>
              <p style={{ color: '#6B7280' }}>
                Share your savings goals, spending habits, and budget challenges. The AI instantly tailors its guidance to your specific situation — no generic advice.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white" style={{ backgroundColor: '#15803D' }}>
                2
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#1F2937' }}>Get Your Personalized Savings Plan</h3>
              <p style={{ color: '#6B7280' }}>
                The AI explains the best strategies for your situation — from cashback apps and coupon stacking to budgeting frameworks and discount programs — all in plain language.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white" style={{ backgroundColor: '#14532D' }}>
                3
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#1F2937' }}>Start Saving More Every Month</h3>
              <p style={{ color: '#6B7280' }}>
                Armed with the right knowledge, you can confidently cut expenses, maximize cashback, and build the savings habit that puts more money back in your pocket.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AI Conversation Preview Section */}
      <section style={{ backgroundColor: '#FFFFFF' }} className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold" style={{ color: '#1F2937' }}>Ask the AI Anything About Saving Money</h2>
            <p className="mt-4 text-xl" style={{ color: '#6B7280' }}>
              Here's a taste of what our AI agent can help you with
            </p>
          </div>

          <div className="space-y-4">
            {[
              { q: "How can I save more money on groceries each week?", a: "There are several proven strategies to cut your grocery bill — from using cashback apps like Ibotta and Fetch, to coupon stacking, buying store brands, and planning meals around sales. I can help you build a grocery savings routine that fits your lifestyle..." },
              { q: "What are the best cashback apps and how do I stack them?", a: "The best cashback apps include Rakuten, Ibotta, Fetch Rewards, and Dosh. The real power comes from stacking them — using a cashback credit card, a cashback portal like Rakuten, and an in-store app like Ibotta all on the same purchase. I can walk you through exactly how to do this..." },
              { q: "How do I create a budget that I'll actually stick to?", a: "The best budget is one that matches your personality and lifestyle. I can help you choose between zero-based budgeting, the 50/30/20 rule, or a custom approach — and set it up in a way that's simple enough to actually maintain long-term..." },
              { q: "What discount programs am I probably missing out on?", a: "Most people miss out on significant discounts available through AAA, AARP, employer benefit portals, student discounts, military benefits, and loyalty programs. I can help you identify which ones apply to your situation and how to access them..." },
              { q: "How do I build an emergency fund faster?", a: "Building an emergency fund faster comes down to automation, finding the right high-yield savings account, and identifying small expenses to redirect. I can help you set up a system that builds your fund consistently without feeling painful..." },
            ].map((item, i) => (
              <div key={i} className="rounded-xl overflow-hidden border" style={{ borderColor: '#BBF7D0' }}>
                <div className="p-4 flex items-start gap-3" style={{ backgroundColor: '#F0FDF4' }}>
                  <span className="text-lg">👤</span>
                  <p className="font-semibold" style={{ color: '#1F2937' }}>{item.q}</p>
                </div>
                <div className="p-4 flex items-start gap-3 bg-white">
                  <Bot className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#166534' }} />
                  <p style={{ color: '#6B7280' }}>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl shadow-2xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #14532D 0%, #166534 100%)' }}>
            <div className="px-6 py-16 sm:px-12 sm:py-20 text-center">
              <Bot className="w-16 h-16 text-white mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-white mb-6">
                Your AI Savings Advisor is Ready
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.9)' }}>
                Get instant, unbiased answers to all your savings questions. No sales calls. No pressure. Just an AI that's 100% on your side.
              </p>
              <Link
                href="/signup"
                className="inline-block px-8 py-4 text-lg font-semibold rounded-lg shadow-lg transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#FFFFFF', color: '#166534' }}
              >
                Talk to the AI Agent — Free
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
