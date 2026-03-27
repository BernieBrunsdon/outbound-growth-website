import { useState, useEffect } from 'react';
import Link from 'next/link';

const CALENDLY = 'https://calendly.com/outbound-growth/consult';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Solution', href: '#solution' },
    { name: 'How it works', href: '#process' },
    { name: 'Why SA', href: '#why-sa' },
    { name: 'Clients', href: '#clients' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">
          <Link href="/" className="flex items-center h-28">
            <img
              src="/images/Title (4).png"
              alt="Outbound-Growth Logo"
              style={{
                height: '120px',
                width: 'auto',
                objectFit: 'contain',
                display: 'block',
                transform: 'scale(2.5)',
                transformOrigin: 'left center',
                marginTop: '28px',
              }}
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
                className="text-ink hover:text-primary transition-colors duration-200 font-semibold text-xs uppercase tracking-wide"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4 shrink-0">
            <a
              href={CALENDLY}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-5 py-2 rounded-lg font-semibold text-xs uppercase tracking-wide hover:bg-blue-700 transition-all duration-200 btn-hover shadow-md whitespace-nowrap"
            >
              Book a Discovery Call
            </a>
          </div>

          <button
            className="xl:hidden p-3 rounded-xl text-ink hover:bg-gray-100 transition-colors duration-200"
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
          <div className="xl:hidden bg-white border-t border-gray-200 shadow-lg max-h-[80vh] overflow-y-auto">
            <div className="px-6 py-6 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-ink hover:text-primary hover:bg-gray-50 rounded-lg font-semibold text-sm uppercase tracking-wide"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-primary text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wide text-center hover:bg-blue-700 transition-all duration-200 shadow-lg"
                >
                  Book a Discovery Call
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
