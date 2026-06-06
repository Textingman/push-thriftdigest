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

    // The incoming URL looks like:
    //   /verify?destination=https://example.com/path?c1=blank&first_name=Jack&email=test@test.com&phone=5551234567
    //
    // Because the destination is NOT encoded, the browser treats everything after
    // the first "?" as one flat query string. We need to:
    //   1. Find where "destination=" starts and extract the full destination URL
    //      (which itself may contain a "?" for its own query params).
    //   2. Collect all remaining key=value pairs that come AFTER the destination
    //      value ends, excluding "phone".
    //   3. Merge those params into the destination URL.

    const rawQuery = window.location.search.slice(1); // strip leading "?"

    // --- Step 1: locate "destination=" and extract its value ---
    const destPrefix = 'destination=';
    const destIndex = rawQuery.indexOf(destPrefix);

    if (destIndex === -1) {
      setError('Invalid verification link. Destination is missing.');
      setIsRedirecting(false);
      return;
    }

    // Everything after "destination="
    const afterDest = rawQuery.slice(destIndex + destPrefix.length);

    // The destination value ends at the first "&" that is followed by a plain
    // "key=value" token (i.e. NOT a continuation of the destination URL like
    // "?c1=blank" which appears as part of the destination path).
    // A plain key=value token does NOT start with "https://" or "/".
    let destEnd = afterDest.length;
    let searchStart = 0;
    while (searchStart < afterDest.length) {
      const ampIdx = afterDest.indexOf('&', searchStart);
      if (ampIdx === -1) break;
      const rest = afterDest.slice(ampIdx + 1);
      if (!/^https?:\/\//.test(rest) && !/^\//.test(rest)) {
        destEnd = ampIdx;
        break;
      }
      searchStart = ampIdx + 1;
    }

    const destination = afterDest.slice(0, destEnd);
    // The raw forwarded params string (everything after the destination value)
    const forwardedRaw = afterDest.slice(destEnd).replace(/^&/, '');

    // --- Step 2: build forwarded params (all params, including phone) ---
    const forwarded = new URLSearchParams();
    if (forwardedRaw) {
      new URLSearchParams(forwardedRaw).forEach((value, key) => {
        forwarded.append(key, value);
      });
    }

    // --- Step 3: merge into destination ---
    // destination may already have its own query string (e.g. ?c1=blank).
    // Split on the FIRST "?" only.
    const qIdx = destination.indexOf('?');
    const destBase = qIdx === -1 ? destination : destination.slice(0, qIdx);
    const destExisting = qIdx === -1 ? '' : destination.slice(qIdx + 1);

    // Build the final query string manually to avoid URLSearchParams percent-encoding
    // special characters like "@" in email addresses.
    const existingParts = destExisting ? destExisting.split('&') : [];
    const forwardedParts: string[] = [];
    forwarded.forEach((value, key) => {
      forwardedParts.push(`${key}=${value}`);
    });
    const allParts = [...existingParts, ...forwardedParts].filter(Boolean);
    const finalUrl = allParts.length ? `${destBase}?${allParts.join('&')}` : destBase;

    window.location.href = finalUrl;
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-sm w-full bg-white rounded-2xl shadow-md p-8">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <span className="text-2xl font-bold" style={{ color: '#1F4E79' }}>Thrift Digest</span>
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
          Secured by Thrift Digest
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
