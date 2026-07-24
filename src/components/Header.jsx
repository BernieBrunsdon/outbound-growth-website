import { useState } from 'react';
import Link from 'next/link';
import { CLIENT_APP_URL } from '../lib/appUrl';
import { useBookDemoModal } from '../context/BookDemoModalContext';

export default function Header() {
  const { openModal } = useBookDemoModal();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Solution', href: '#solution' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Why SA', href: '#why-sa' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="relative z-40 bg-navy/80 backdrop-blur-md overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center gap-4 h-14 md:h-16">
          <Link
            href="/"
            className="flex items-center shrink-0 focus-visible:outline-none"
            style={{ height: 44, maxWidth: 200 }}
          >
            <img
              src="/images/logo-cropped.png"
              alt="Outbound-Growth Logo"
              width={200}
              height={44}
              style={{ height: 44, width: 'auto', maxWidth: 200, display: 'block', objectFit: 'contain' }}
              onError={(e) => {
                e.target.src = '/images/logo.png';
              }}
            />
          </Link>

          <nav className="hidden xl:flex flex-wrap justify-end gap-6 ml-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-slate-200 hover:text-white transition-colors duration-200 font-semibold text-sm rounded-md px-1 -mx-1 py-0.5 focus-visible:outline-none"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4 shrink-0">
            <a
              href={CLIENT_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-200 hover:text-white transition-colors duration-200 font-semibold text-sm whitespace-nowrap rounded-md px-1 -mx-1 py-0.5 focus-visible:outline-none"
            >
              Client Login
            </a>
            <button
              type="button"
              onClick={() => openModal()}
              className="bg-primary text-white px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-primary-dark transition-colors duration-200 whitespace-nowrap focus-visible:outline-none"
            >
              Book a Discovery Call
            </button>
          </div>

          <button
            className="xl:hidden p-3 rounded-xl text-slate-100 hover:bg-white/10 transition-colors duration-200 focus-visible:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="xl:hidden bg-surface border-t border-white/10 max-h-[80vh] overflow-y-auto">
            <div className="px-6 py-6 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-slate-100 hover:text-white hover:bg-white/5 rounded-lg font-semibold text-sm focus-visible:outline-none"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href={CLIENT_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 text-slate-100 hover:text-white hover:bg-white/5 rounded-lg font-semibold text-sm focus-visible:outline-none"
                onClick={() => setIsMenuOpen(false)}
              >
                Client Login
              </a>
              <div className="pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => {
                    setIsMenuOpen(false);
                    openModal();
                  }}
                  className="block w-full bg-primary text-white px-8 py-3.5 rounded-lg font-semibold text-sm text-center hover:bg-primary-dark transition-colors duration-200 focus-visible:outline-none"
                >
                  Book a Discovery Call
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
