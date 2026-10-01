import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2.5 mb-4">
              <div className="w-8 h-8 bg-emerald-500 rounded-md flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
                  <path d="M9 21V12h6v9" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight">
                <span className="text-white">Home</span><span className="text-emerald-400">Fix</span>
              </span>
            </div>
            <p className="text-sm text-stone-500 leading-relaxed">
              Connecting homeowners with trusted local professionals since 2024.
            </p>
            <div className="flex space-x-3 mt-4">
              {['𝕏', 'f', 'in', '▶'].map((icon, i) => (
                <a key={i} href="/" className="w-8 h-8 bg-stone-700 hover:bg-emerald-600 rounded-full flex items-center justify-center text-xs font-bold text-stone-300 hover:text-white transition-colors">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              {['Handyman', 'Plumbing', 'Electrical', 'Painting', 'Cleaning', 'Landscaping'].map(s => (
                <li key={s}><Link to="/services" className="hover:text-white transition-colors">{s}</Link></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              {['About Us', 'How It Works', 'Blog', 'Press', 'Careers', 'Contact'].map(s => (
                <li key={s}><a href="/" className="hover:text-white transition-colors">{s}</a></li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              {['Help Center', 'Safety', 'Privacy Policy', 'Terms of Service', 'Accessibility'].map(s => (
                <li key={s}><a href="/" className="hover:text-white transition-colors">{s}</a></li>
              ))}
            </ul>
            <div className="mt-6">
              <p className="text-xs text-stone-500 mb-2">Download the app</p>
              <div className="flex space-x-2">
                <a href="/" className="bg-stone-700 hover:bg-stone-600 text-stone-300 hover:text-white text-xs px-3 py-1.5 rounded-md transition-colors">App Store</a>
                <a href="/" className="bg-stone-700 hover:bg-stone-600 text-stone-300 hover:text-white text-xs px-3 py-1.5 rounded-md transition-colors">Google Play</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-stone-600">
          <p>© 2024 HomeFix, Inc. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Made with ❤️ for homeowners everywhere.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
