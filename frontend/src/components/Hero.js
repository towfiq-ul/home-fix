import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/pros?search=${encodeURIComponent(query.trim())}`);
    } else {
      navigate('/pros');
    }
  };

  return (
    <section className="bg-gradient-to-br from-stone-900 via-emerald-900 to-stone-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
          Your home, handled by <br className="hidden sm:block" />
          <span className="text-amber-400">someone you can trust.</span>
        </h1>
        <p className="mt-5 text-lg sm:text-xl text-stone-300 max-w-2xl mx-auto">
          Describe your project, compare vetted local professionals side-by-side, and hire with confidence — free to use.
        </p>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="mt-10 max-w-2xl mx-auto">
          <div className="flex bg-white rounded-xl shadow-2xl overflow-hidden">
            <div className="flex items-center pl-4 text-stone-400 text-xl">🔍</div>
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="What do you need help with?"
              className="flex-1 px-4 py-4 text-stone-800 placeholder-stone-400 focus:outline-none text-sm sm:text-base"
            />
            <button
              type="submit"
              className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-6 py-4 transition-colors whitespace-nowrap"
            >
              Get Quotes
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Hero;
