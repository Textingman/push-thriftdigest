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
      <section style={{ backgroundColor: '#F5F7FA' }} className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6" style={{ backgroundColor: '#DBEAFE', color: '#1F4E79' }}>
              <Bot className="w-4 h-4" />
              Powered by AI — 100% Independent
            </div>
            <h1 className="text-5xl font-extrabold sm:text-6xl md:text-7xl" style={{ color: '#1F2937' }}>
              Your Personal AI Agent
              <span className="block" style={{ color: '#1F4E79' }}>for Smarter Savings</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl" style={{ color: '#6B7280' }}>
              Meet your AI savings advisor. Ask anything about saving money — budgeting, deals, discounts, cashback, and more — and get honest, unbiased answers instantly. No salespeople. No pressure. Just savings.
            </p>
            <div className="mt-10 flex justify-center gap-4 flex-wrap">
              <Link
                href="/signup"
                className="px-8 py-4 text-white text-lg font-semibold rounded-lg shadow-lg transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#5E8F5E' }}
              >
                Talk to the AI Agent — Free
              </Link>
              <Link
                href="/about"
                className="px-8 py-4 text-lg font-semibold rounded-lg transition-opacity hover:opacity-90 border-2"
                style={{ color: '#1F4E79', borderColor: '#1F4E79', backgroundColor: '#FFFFFF' }}
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
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ borderColor: '#E5E7EB' }}>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#DBEAFE' }}>
                  <Bot className="w-8 h-8" style={{ color: '#1F4E79' }} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3" style={{ color: '#1F2937' }}>
                Answers Your Savings Questions
              </h3>
              <p className="text-center" style={{ color: '#6B7280' }}>
                Ask our AI anything — "How can I save more on groceries?", "What's the best cashback strategy?", "How do I build an emergency fund?" — and get clear, honest answers in seconds.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ borderColor: '#E5E7EB' }}>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#DBEAFE' }}>
                  <BookOpen className="w-8 h-8" style={{ color: '#2F6FA3' }} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3" style={{ color: '#1F2937' }}>
                Educates You Step by Step
              </h3>
              <p className="text-center" style={{ color: '#6B7280' }}>
                Our AI walks you through every aspect of saving money — from understanding budgeting basics to finding the best deals and discount programs — so you're never leaving money on the table.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border" style={{ borderColor: '#E5E7EB' }}>
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ backgroundColor: '#dcfce7' }}>
                  <ShieldCheck className="w-8 h-8" style={{ color: '#5E8F5E' }} />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3" style={{ color: '#1F2937' }}>
                Helps You Maximize Your Savings
              </h3>
              <p className="text-center" style={{ color: '#6B7280' }}>
                Our AI identifies savings opportunities you may be missing, explains your options clearly, and tells you exactly what steps to take to keep more money in your pocket.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section style={{ backgroundColor: '#F5F7FA' }} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold" style={{ color: '#1F2937' }}>How the AI Agent Helps You Save</h2>
            <p className="mt-4 text-xl" style={{ color: '#6B7280' }}>
              Three simple steps to smarter spending and bigger savings
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white" style={{ backgroundColor: '#1F4E79' }}>
                1
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#1F2937' }}>Tell the AI About Your Spending</h3>
              <p style={{ color: '#6B7280' }}>
                Share your savings goals, spending habits, and budget questions. The AI instantly tailors its guidance to your specific situation — no generic advice.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white" style={{ backgroundColor: '#2F6FA3' }}>
                2
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#1F2937' }}>Get Your Personalized Savings Plan</h3>
              <p style={{ color: '#6B7280' }}>
                The AI explains your savings options, discount programs, cashback strategies, and budgeting tips — all in plain language you can actually use.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white" style={{ backgroundColor: '#5E8F5E' }}>
                3
              </div>
              <h3 className="text-xl font-bold mb-3" style={{ color: '#1F2937' }}>Start Saving More Today</h3>
              <p style={{ color: '#6B7280' }}>
                Armed with unbiased knowledge, you can confidently cut expenses, find the best deals, and make the most of every dollar you earn.
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
              { q: "How can I save more money on groceries each month?", a: "There are several proven strategies to cut your grocery bill — from using cashback apps like Ibotta and Rakuten, to shopping store brands, meal planning to reduce waste, and stacking coupons with sales. I can walk you through a personalized grocery savings plan based on your household size and budget..." },
              { q: "What's the best way to build an emergency fund fast?", a: "Building an emergency fund quickly comes down to automating small transfers, cutting one or two recurring expenses, and putting any windfalls (tax refunds, bonuses) directly into savings. I can help you create a realistic timeline and identify the fastest path to your 3-6 month goal..." },
              { q: "Are there any discount programs I might be missing?", a: "Many people miss out on significant discounts — from AAA and AARP memberships, to employer discount portals, student discounts, military benefits, and utility assistance programs. I can help you identify which programs you qualify for based on your situation..." },
              { q: "How do I stop overspending and stick to a budget?", a: "Sticking to a budget is easier with the right system. I can help you set up a zero-based budget, identify your biggest spending leaks, and recommend free tools and apps that make tracking automatic. The key is making saving the default, not the exception..." },
              { q: "What cashback and rewards strategies actually work?", a: "The best cashback strategies involve stacking multiple programs — using a cashback credit card, a cashback portal like Rakuten, and a cashback app at checkout. I can help you build a simple system that earns you hundreds of dollars back per year without extra effort..." },
            ].map((item, i) => (
              <div key={i} className="rounded-xl overflow-hidden border" style={{ borderColor: '#E5E7EB' }}>
                <div className="p-4 flex items-start gap-3" style={{ backgroundColor: '#F5F7FA' }}>
                  <span className="text-lg">👤</span>
                  <p className="font-semibold" style={{ color: '#1F2937' }}>{item.q}</p>
                </div>
                <div className="p-4 flex items-start gap-3 bg-white">
                  <Bot className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#1F4E79' }} />
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
          <div className="rounded-2xl shadow-2xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #1F4E79 0%, #2F6FA3 100%)' }}>
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
                style={{ backgroundColor: '#5E8F5E', color: '#FFFFFF' }}
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
