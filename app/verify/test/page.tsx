'use client';

import { useState } from 'react';

// ---------------------------------------------------------------------------
// These test cases mirror the exact redirect logic in app/verify/page.tsx
// ---------------------------------------------------------------------------
const TEST_CASES: {
  label: string;
  description: string;
  rawQueryString: string; // simulates window.location.search (without leading "?")
  expected: string;
}[] = [
  {
    label: 'Test 1: Destination WITH existing query string (Pushnami use case)',
    description:
      'destination already has ?c1=blank — all forwarded params including phone should be appended with &',
    rawQueryString:
      'destination=https://www.redirectdomainexample.com/39HC4RQ/2SG1GZKJ/?c1=blank&first_name=Jack&email=test@test.com&phone=5551234567',
    expected:
      'https://www.redirectdomainexample.com/39HC4RQ/2SG1GZKJ/?c1=blank&first_name=Jack&email=test@test.com&phone=5551234567',
  },
  {
    label: 'Test 2: Destination WITHOUT existing query string',
    description:
      'destination has no query string — all forwarded params including phone should be appended with ?',
    rawQueryString:
      'destination=https://www.example.com/path&first_name=Jack&email=test@test.com&phone=5551234567',
    expected: 'https://www.example.com/path?first_name=Jack&email=test@test.com&phone=5551234567',
  },
  {
    label: 'Test 3: Destination with query string, NO additional params',
    description:
      'destination has ?c1=blank but no lead fields — should use destination as-is',
    rawQueryString: 'destination=https://www.example.com/path?c1=blank',
    expected: 'https://www.example.com/path?c1=blank',
  },
  {
    label: 'Test 4: Email with @ symbol — no percent-encoding',
    description: '@ in email should NOT become %40 in the final URL',
    rawQueryString:
      'destination=https://www.example.com/path?c1=blank&email=hello@world.com&phone=5551234567',
    expected: 'https://www.example.com/path?c1=blank&email=hello@world.com&phone=5551234567',
  },
];

// ---------------------------------------------------------------------------
// Exact copy of the redirect logic from app/verify/page.tsx
// ---------------------------------------------------------------------------
function buildRedirectUrl(rawQueryString: string): string {
  const destPrefix = 'destination=';
  const destIndex = rawQueryString.indexOf(destPrefix);

  if (destIndex === -1) return 'ERROR: no destination';

  const afterDest = rawQueryString.slice(destIndex + destPrefix.length);

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
  const forwardedRaw = afterDest.slice(destEnd).replace(/^&/, '');

  const forwarded = new URLSearchParams();
  if (forwardedRaw) {
    new URLSearchParams(forwardedRaw).forEach((value, key) => {
      forwarded.append(key, value);
    });
  }

  const qIdx = destination.indexOf('?');
  const destBase = qIdx === -1 ? destination : destination.slice(0, qIdx);
  const destExisting = qIdx === -1 ? '' : destination.slice(qIdx + 1);

  const existingParts = destExisting ? destExisting.split('&') : [];
  const forwardedParts: string[] = [];
  forwarded.forEach((value, key) => {
    forwardedParts.push(`${key}=${value}`);
  });
  const allParts = [...existingParts, ...forwardedParts].filter(Boolean);
  return allParts.length ? `${destBase}?${allParts.join('&')}` : destBase;
}

// ---------------------------------------------------------------------------
// UI
// ---------------------------------------------------------------------------
export default function VerifyTestPage() {
  const [results, setResults] = useState<
    { label: string; description: string; result: string; expected: string; pass: boolean }[]
  >([]);
  const [ran, setRan] = useState(false);

  const runTests = () => {
    const output = TEST_CASES.map((tc) => {
      const result = buildRedirectUrl(tc.rawQueryString);
      const pass = result === tc.expected;
      return { label: tc.label, description: tc.description, result, expected: tc.expected, pass };
    });
    setResults(output);
    setRan(true);
  };

  const allPass = results.length > 0 && results.every((r) => r.pass);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-[#1F4E79] mb-1">Verify Page — Redirect Logic Tests</h1>
        <p className="text-gray-500 text-sm mb-6">
          Tests the exact redirect logic from{' '}
          <code className="bg-gray-100 px-1 rounded">app/verify/page.tsx</code> using raw query
          strings (no encoding required on the destination).
        </p>

        <button
          onClick={runTests}
          className="mb-8 px-6 py-3 bg-[#5a8a6a] hover:bg-[#3a6b5c] text-white font-semibold rounded-xl transition-all"
        >
          Run All Tests
        </button>

        {ran && (
          <div className="space-y-6">
            {results.map((r, i) => (
              <div
                key={i}
                className={`rounded-2xl border p-6 ${
                  r.pass ? 'border-green-300 bg-green-50' : 'border-red-300 bg-red-50'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-lg font-bold ${r.pass ? 'text-green-700' : 'text-red-700'}`}>
                    {r.pass ? '✅ PASS' : '❌ FAIL'}
                  </span>
                  <span className="text-gray-700 font-semibold">{r.label}</span>
                </div>
                <p className="text-xs text-gray-500 mb-3">{r.description}</p>
                <div className="text-sm space-y-2">
                  <div>
                    <span className="font-semibold text-gray-600">Expected: </span>
                    <code className="break-all text-gray-800 bg-white px-2 py-0.5 rounded border">
                      {r.expected}
                    </code>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-600">Got:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <code
                      className={`break-all px-2 py-0.5 rounded border ${
                        r.pass ? 'text-green-800 bg-white' : 'text-red-800 bg-white'
                      }`}
                    >
                      {r.result}
                    </code>
                  </div>
                </div>
              </div>
            ))}

            <div
              className={`rounded-2xl p-4 text-center font-bold text-lg ${
                allPass ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}
            >
              {results.filter((r) => r.pass).length} / {results.length} tests passed
            </div>
          </div>
        )}

        <div className="mt-10 border-t pt-6">
          <h2 className="text-lg font-bold text-gray-700 mb-3">Try it live</h2>
          <p className="text-sm text-gray-500 mb-3">
            Click the link below to open the actual verify page with test params (no encoding on
            destination):
          </p>
          <a
            href="/verify?destination=https://www.redirectdomainexample.com/39HC4RQ/2SG1GZKJ/?c1=blank&first_name=Jack&email=test@test.com&phone=5551234567"
            className="text-[#1F4E79] underline text-sm break-all"
            target="_blank"
            rel="noreferrer"
          >
            /verify?destination=https://www.redirectdomainexample.com/39HC4RQ/2SG1GZKJ/?c1=blank&first_name=Jack&email=test@test.com&phone=5551234567
          </a>
        </div>
      </div>
    </div>
  );
}
