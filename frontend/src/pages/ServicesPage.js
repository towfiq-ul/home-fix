import React from 'react';
import { useNavigate } from 'react-router-dom';
import { categories } from '../data/mockData';

const ServicesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
      <div className="bg-white border-b border-stone-200 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-stone-900">All Services</h1>
          <p className="mt-3 text-stone-500 max-w-xl mx-auto">
            From quick handyman fixes to full remodels — find the right pro for every project.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(cat => (
            <div
              key={cat.id}
              onClick={() => navigate(`/pros?category=${cat.slug}`)}
              className="bg-white rounded-xl shadow-sm border border-stone-100 p-6 cursor-pointer hover:shadow-md hover:border-emerald-300 transition-all duration-200 group flex items-center space-x-5"
            >
              <div className="text-5xl flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                {cat.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-stone-900 group-hover:text-emerald-700 transition-colors">{cat.name}</h3>
                <p className="text-sm text-stone-500 mt-1">{cat.description}</p>
                <p className="text-xs text-emerald-600 font-medium mt-2">Find pros →</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 bg-gradient-to-r from-stone-900 to-emerald-900 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-extrabold">Don't see your service?</h2>
          <p className="mt-2 text-stone-300">Tell us what you need in your own words and we'll find the right pro.</p>
          <button
            onClick={() => navigate('/get-quotes')}
            className="mt-6 bg-amber-400 hover:bg-amber-300 text-stone-900 font-bold px-8 py-3 rounded-xl transition-colors"
          >
            Describe My Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
