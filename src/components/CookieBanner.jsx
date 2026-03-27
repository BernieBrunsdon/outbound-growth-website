import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
    
    // Initialize analytics here (placeholder)
    console.log('Analytics initialized');
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-banner show">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="font-semibold text-ink mb-2">We use cookies</h3>
            <p className="text-sm text-muted">
              We use cookies to enhance your browsing experience, serve personalized content, 
              and analyze our traffic. By clicking &quot;Accept&quot;, you consent to our use of cookies.
            </p>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={acceptCookies}
              className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Accept
            </button>
            <button
              onClick={() => setShowBanner(false)}
              className="border border-gray-300 text-ink px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
