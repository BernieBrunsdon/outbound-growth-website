import Link from 'next/link';
import Image from 'next/image';
import siteContent from '../../content/site.json';
import AppLinkText from './AppLinkText';
import { CLIENT_APP_URL } from '../lib/appUrl';

export default function Footer() {
  const quickLinks = [
    { name: 'How it works', href: '#process' },
    { name: 'Why South Africa', href: '#why-sa' },
    { name: 'Clients', href: '#clients' },
    { name: 'Book a call', href: '#contact' },
    { name: 'Contact', href: '#contact' },
    {
      name: 'Client Login',
      href: CLIENT_APP_URL,
      external: true,
      small: true,
    },
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/outbound-growth', icon: 'linkedin' },
    { name: 'Twitter', href: 'https://twitter.com/outboundgrowth', icon: 'twitter' },
  ];

  const socialIcons = {
    linkedin: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    twitter: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
      </svg>
    ),
  };

  return (
    <footer className="bg-ink text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <div className="mb-4">
              <div className="relative w-32 h-10 mb-2">
                <Image src="/images/logo.png" alt="Outbound-Growth Logo" fill className="object-contain" />
              </div>
              <div className="text-sm text-gray-300">
                <AppLinkText linkClassName="text-white underline decoration-white/40 underline-offset-2 hover:text-gray-100 font-medium">
                  Premium SDR Service · OG Pulse · Multi-Industry
                </AppLinkText>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              <AppLinkText linkClassName="text-white underline decoration-white/40 underline-offset-2 hover:text-gray-100 font-medium">
                Dedicated South African SDR experts with The OG Pulse Transparency Dashboard—research, outreach
                execution, qualification, and meetings on your calendar across multiple industries.
              </AppLinkText>
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-primary transition-colors duration-200"
                  aria-label={social.name}
                >
                  {socialIcons[social.icon]}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={
                        link.small
                          ? 'text-sm text-gray-400 hover:text-white transition-colors duration-200'
                          : 'text-gray-300 hover:text-white transition-colors duration-200'
                      }
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200">
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3">
              <div>
                <a
                  href={`mailto:${siteContent.site.email}`}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {siteContent.site.email}
                </a>
              </div>
              <div className="space-y-1">
                <div>
                  <span className="text-gray-500 text-xs uppercase tracking-wide">{siteContent.site.phoneUk.label}</span>
                  <a
                    href={`tel:${siteContent.site.phoneUk.tel}`}
                    className="block text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {siteContent.site.phoneUk.display}
                  </a>
                </div>
                <div>
                  <span className="text-gray-500 text-xs uppercase tracking-wide">{siteContent.site.phoneUs.label}</span>
                  <a
                    href={`tel:${siteContent.site.phoneUs.tel}`}
                    className="block text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {siteContent.site.phoneUs.display}
                  </a>
                </div>
              </div>
              <div className="text-gray-300">{siteContent.site.location}</div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-300 text-sm">© 2025 Outbound-Growth. All rights reserved.</div>
            <div className="text-gray-300 text-sm text-center md:text-right max-w-md">
              <p className="mb-2">
                <strong>Legal:</strong> SDRs operate as independent contractors. Consult your advisors on classification
                and compliance in your jurisdiction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
