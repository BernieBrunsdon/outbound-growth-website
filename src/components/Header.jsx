import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Integrations', href: '#integrations' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4">
            <div className="relative w-12 h-12">
              <Image
                src="/images/logo.png"
                alt="Outbound-Growth Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div>
              <div className="font-bold text-ink text-xl">Outbound-Growth</div>
              <div className="text-sm text-muted font-medium">Premium SDR teams from South Africa</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-10">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-ink hover:text-primary transition-colors duration-200 font-semibold text-sm uppercase tracking-wide"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="https://calendly.com/outbound-growth/consult"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-8 py-3 rounded-xl font-bold text-sm uppercase tracking-wide hover:bg-blue-700 transition-all duration-200 btn-hover shadow-lg"
            >
              Book Consultation
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-3 rounded-xl text-ink hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-6 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-ink hover:text-primary hover:bg-gray-50 transition-colors duration-200 font-semibold text-sm uppercase tracking-wide rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-6 border-t border-gray-200">
                <a
                  href="https://calendly.com/outbound-growth/consult"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-primary text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-wide text-center hover:bg-blue-700 transition-all duration-200 shadow-lg"
                >
                  Book Consultation
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
