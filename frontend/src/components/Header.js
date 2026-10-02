import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-stone-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2.5">
            {/* Icon mark */}
            <div className="w-8 h-8 bg-emerald-500 rounded-md flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-white" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
                <path d="M9 21V12h6v9" />
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight">
              <span className="text-white">Home</span><span className="text-emerald-400">Fix</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/services" className="text-stone-300 hover:text-white text-sm font-medium transition-colors">
              Browse Services
            </Link>
            <Link to="/pros" className="text-stone-300 hover:text-white text-sm font-medium transition-colors">
              Find Pros
            </Link>
            <Link
              to="/#how-it-works"
              onClick={() => {
                const el = document.getElementById('how-it-works');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-stone-300 hover:text-white text-sm font-medium transition-colors"
            >
              How It Works
            </Link>
            <Link to="/pros" className="border border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Sign Up as Pro
            </Link>
            <Link to="/get-quotes" className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Get Quotes
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-stone-400 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="space-y-1">
              <span className="block w-6 h-0.5 bg-stone-300"></span>
              <span className="block w-6 h-0.5 bg-stone-300"></span>
              <span className="block w-6 h-0.5 bg-stone-300"></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-stone-700 pb-4 pt-2 space-y-2">
            <Link to="/services"   className="block px-3 py-2 text-stone-300 hover:text-white text-sm font-medium" onClick={() => setMenuOpen(false)}>Browse Services</Link>
            <Link to="/pros"       className="block px-3 py-2 text-stone-300 hover:text-white text-sm font-medium" onClick={() => setMenuOpen(false)}>Find Pros</Link>
            <Link
              to="/#how-it-works"
              className="block px-3 py-2 text-stone-300 hover:text-white text-sm font-medium"
              onClick={() => {
                setMenuOpen(false);
                const el = document.getElementById('how-it-works');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              How It Works
            </Link>
            <Link to="/get-quotes" className="block px-3 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium text-center mt-2" onClick={() => setMenuOpen(false)}>Get Free Quotes</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
