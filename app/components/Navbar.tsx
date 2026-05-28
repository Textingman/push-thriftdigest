'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const linkColor = (href: string) =>
    pathname === href ? '#1F4E79' : '#6B7280';

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-32">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/new-logo.png"
                alt="AI Benefits Agent"
                width={400}
                height={220}
                className="h-20 w-auto"
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" style={{ color: linkColor('/') }} className="hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link href="/about" style={{ color: linkColor('/about') }} className="hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              <Link href="/privacy" style={{ color: linkColor('/privacy') }} className="hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium">
                Privacy
              </Link>
              <Link href="/terms" style={{ color: linkColor('/terms') }} className="hover:opacity-80 px-3 py-2 rounded-md text-sm font-medium">
                Terms
              </Link>
              <Link href="/signup" className="text-white px-4 py-2 rounded-md text-sm font-medium" style={{ backgroundColor: '#5E8F5E' }}>
                Talk to Our AI
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
