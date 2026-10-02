import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import ProCard from '../components/ProCard';
import { categories, pros, howItWorks, testimonials, stats } from '../data/mockData';

const StarRating = ({ rating }) => (
  <span className="text-amber-400">{'★'.repeat(rating)}{'☆'.repeat(5 - rating)}</span>
);

const HomePage = () => {
  const navigate = useNavigate();
  const featuredPros = pros.filter(p => p.topPro).slice(0, 3);

  return (
    <div className="bg-stone-50">
      <Hero />

      {/* Stats Bar */}
      <section className="bg-emerald-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, i) => (
              <div key={i}>
                <p className="text-3xl font-extrabold text-amber-400">{stat.value}</p>
                <p className="text-emerald-200 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-stone-900">Browse by Service</h2>
            <p className="mt-3 text-stone-500 max-w-xl mx-auto">From quick fixes to full renovations — find experts in every trade.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => navigate(`/pros?category=${cat.slug}`)}
                className="bg-white hover:bg-emerald-50 border border-stone-200 hover:border-emerald-400 rounded-xl p-4 text-center transition-all duration-200 group"
              >
                <div className="text-3xl mb-2">{cat.icon}</div>
                <p className="text-sm font-semibold text-stone-800 group-hover:text-emerald-700">{cat.name}</p>
                <p className="text-xs text-stone-400 mt-0.5 hidden sm:block">{cat.description}</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 bg-white scroll-mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-stone-900">How HomeFix Works</h2>
            <p className="mt-3 text-stone-500">Getting help for your home has never been easier.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step) => (
              <div key={step.step} className="text-center">
                <div className="relative inline-block">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                    {step.icon}
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-emerald-700 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {step.step}
                  </div>
                </div>
                <h3 className="font-bold text-stone-900 mb-2">{step.title}</h3>
                <p className="text-sm text-stone-500">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/get-quotes"
              className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-8 py-3 rounded-lg transition-colors inline-block"
            >
              Get Free Quotes Now
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Pros */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl font-extrabold text-stone-900">Top-Rated Pros Near You</h2>
              <p className="mt-2 text-stone-500">Highly reviewed professionals ready to help.</p>
            </div>
            <Link to="/pros" className="text-emerald-700 hover:text-emerald-800 font-medium text-sm hidden sm:block">
              View all pros →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPros.map(pro => (
              <ProCard key={pro.id} pro={pro} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/pros" className="border border-emerald-600 text-emerald-700 hover:bg-emerald-50 font-semibold px-8 py-3 rounded-lg transition-colors inline-block">
              See All Pros
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-stone-900">What Homeowners Say</h2>
            <p className="mt-3 text-stone-500">Over 1 million jobs completed and counting.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(t => (
              <div key={t.id} className="bg-stone-50 rounded-xl p-6 border border-stone-100">
                <div className="flex items-center space-x-3 mb-4">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-stone-900 text-sm">{t.name}</p>
                    <p className="text-xs text-stone-500">{t.location}</p>
                  </div>
                </div>
                <StarRating rating={t.rating} />
                <p className="mt-3 text-stone-600 text-sm leading-relaxed">"{t.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gradient-to-r from-stone-900 to-emerald-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white">Ready to get started?</h2>
          <p className="mt-4 text-stone-300 text-lg">Tell us about your project and get matched with pros in minutes. Free, no obligation.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/get-quotes"
              className="bg-amber-400 hover:bg-amber-300 text-stone-900 font-bold px-8 py-4 rounded-xl transition-colors text-lg"
            >
              Get Free Quotes
            </Link>
            <Link
              to="/pros"
              className="bg-transparent border-2 border-stone-400 text-white font-bold px-8 py-4 rounded-xl hover:bg-white hover:text-stone-900 transition-colors text-lg"
            >
              Browse Pros
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
