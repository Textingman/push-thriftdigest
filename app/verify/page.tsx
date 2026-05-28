'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

function VerifyPageContent() {
  const searchParams = useSearchParams();
  const [phone, setPhone] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    const phoneParam = searchParams.get('phone');
    if (phoneParam) setPhone(phoneParam);
  }, [searchParams]);

  const handleConfirm = () => {
    setIsRedirecting(true);

    const params = new URLSearchParams();
    searchParams.forEach((value, key) => {
      if (key !== 'phone') params.append(key, value);
    });

    const destination = searchParams.get('destination');
    if (destination) {
      window.location.href = `${destination}?${params.toString()}`;
    } else {
      setError('Invalid verification link. Destination is missing.');
      setIsRedirecting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-sm w-full bg-white rounded-2xl shadow-md p-8">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/new-logo.png"
            alt="AI Benefits Agent"
            width={254}
            height={140}
            className="h-9 w-auto"
          />
        </div>

        {/* Icon */}
        <div className="flex justify-center mb-5">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-[#3a6b5c]" strokeWidth={1.5} />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-xl font-bold text-gray-900 text-center mb-6">
          Verify Your Number
        </h2>

        {/* Phone Input */}
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter phone number"
          className="w-full rounded-xl p-4 text-lg text-gray-400 border border-gray-200 focus:border-[#3a6b5c] focus:outline-none transition-colors mb-4 bg-white"
        />

        {/* Error */}
        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        {/* Submit Button */}
        <button
          onClick={handleConfirm}
          disabled={isRedirecting}
          className={`w-full py-4 rounded-xl text-base font-semibold transition-all ${
            isRedirecting
              ? 'bg-gray-400 cursor-not-allowed text-white'
              : 'bg-[#5a8a6a] hover:bg-[#3a6b5c] text-white'
          }`}
        >
          {isRedirecting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Loading...
            </span>
          ) : (
            'Submit'
          )}
        </button>

        {/* Footer */}
        <p className="text-xs text-gray-400 text-center mt-6">
          Secured by AI benefits
        </p>
      </div>
    </div>
  );
}

export default function VerifyPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#5a8a6a]" />
      </div>
    }>
      <VerifyPageContent />
    </Suspense>
  );
}
