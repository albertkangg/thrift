import React, { useState, useEffect } from 'react';
import './CookieConsent.css';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const userConsent = localStorage.getItem('cookieConsent');
    if (!userConsent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="cookie-consent-container">
      <div className="cookie-consent-content">
        <p>
          This site uses cookies to offer you a better browsing experience. Learn more about how we use cookies in our{' '}
          <a href="/cookie-policy" target="_blank" rel="noopener noreferrer">Cookie Policy</a>.
        </p>
        <button className="cookie-consent-button" onClick={handleAccept}>Accept</button>
        <button className="cookie-consent-button" onClick={handleDecline}>Decline</button>
      </div>
    </div>
  );
};

export default CookieConsent;
