import React from 'react';
import { FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';
import { FiSend, FiZap } from 'react-icons/fi';

type SocialLink = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

type NavLink = {
  href: string;
  label: string;
};

const SOCIAL_LINKS: SocialLink[] = [
  { href: '#', label: 'Instagram', icon: <FaInstagram size={22} /> },
  { href: '#', label: 'Twitter', icon: <FaTwitter size={22} /> },
  { href: '#', label: 'GitHub', icon: <FaGithub size={22} /> },
];

const NAV_LINKS: NavLink[] = [
  { href: '#features', label: 'Features' },
  { href: '#examples', label: 'Examples' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#faq', label: 'FAQ' },
  { href: '#pricing', label: 'Pricing' },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-600 text-white pt-12 pb-4 px-4 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-0 justify-between">
        {/* Left: Logo, text, social icons */}
        <div className="flex-1 flex flex-col items-start mb-8 md:mb-0">
          <div className="flex gap-1 items-center mb-4">
            <FiZap className="text-3xl" style={{ color: '#0066FF' }} aria-hidden="true" />
            <h1 className="text-3xl font-bold" aria-label="Fastly logo">
              <span className="text-[#2e7aeb]">f</span>astly
            </h1>
          </div>
          <p className="mb-4 text-sm max-w-xs opacity-80">
            Fastly empowers you to build, test, and deploy modern web experiences with speed and reliability.
          </p>
          <nav aria-label="Social media" className="flex gap-4 mt-2">
            {SOCIAL_LINKS.map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
              >
                {icon}
              </a>
            ))}
          </nav>
        </div>
        {/* Center: Navigation */}
        <nav className="flex-1 flex flex-col items-start mb-8 md:mb-0" aria-label="Footer navigation">
          <h2 className="font-semibold text-lg mb-4">Navigation</h2>
          <ul className="space-y-2 text-sm">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={label}>
                <a href={href} className="hover:underline focus:underline focus:outline-none">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {/* Right: Stay Updated */}
        <div className="flex-1 flex flex-col items-start">
          <h2 className="font-semibold text-lg mb-4">Stay Updated</h2>
          <p className="mb-4 text-sm opacity-80 max-w-xs">
            Subscribe to our newsletter for the latest updates and offers.
          </p>
          <form className="w-full flex items-center max-w-xs" onSubmit={e => e.preventDefault()} aria-label="Subscribe to newsletter">
            <label htmlFor="footer-email" className="sr-only">Email address</label>
            <input
              id="footer-email"
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 bg-white rounded-l-md text-gray-900 focus:outline-none outline-none"
              aria-label="Email address"
              autoComplete="email"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 px-3 py-[10px] rounded-r-md flex items-center justify-center transition-colors"
              aria-label="Subscribe"
            >
              <FiSend size={20} />
            </button>
          </form>
        </div>
      </div>
      <hr className="my-8 border-gray-400 opacity-40" />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-xs gap-2 md:gap-0">
        <span>© Fastly, all rights reserved</span>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#privacy" className="hover:underline focus:underline focus:outline-none">Privacy Policy</a>
          <a href="#terms" className="hover:underline focus:underline focus:outline-none">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
