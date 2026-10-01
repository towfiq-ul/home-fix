import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import ProCard from '../components/ProCard';
import { pros, categories } from '../data/mockData';

const ProsListPage = () => {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortBy, setSortBy]                     = useState('rating');
  const [maxRate, setMaxRate]                   = useState(200);
  const [topProOnly, setTopProOnly]             = useState(false);
  const navigate = useNavigate();

  const filtered = pros
    .filter(p => selectedCategory === 'all' || p.category === selectedCategory)
    .filter(p => p.hourlyRate <= maxRate)
    .filter(p => !topProOnly || p.topPro)
    .sort((a, b) => {
      if (sortBy === 'rating')  return b.rating - a.rating;
      if (sortBy === 'price')   return a.hourlyRate - b.hourlyRate;
      if (sortBy === 'reviews') return b.reviewCount - a.reviewCount;
      return 0;
    });

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Page Header */}
      <div className="bg-white border-b border-stone-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {selectedCategory === 'all' ? (
            <>
              <h1 className="text-3xl font-extrabold text-stone-900">Find Local Pros</h1>
              <p className="mt-2 text-stone-500">Vetted, insured professionals ready to help with your project.</p>
            </>
          ) : (() => {
            const cat = categories.find(c => c.slug === selectedCategory);
            return (
              <>
                <div className="flex items-center space-x-3">
                  <span className="text-4xl">{cat?.icon}</span>
                  <div>
                    <h1 className="text-3xl font-extrabold text-stone-900">{cat?.name} Pros</h1>
                    <p className="mt-1 text-stone-500">{cat?.description} — vetted & insured.</p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCategory('all')}
                  className="mt-3 text-sm text-emerald-700 hover:text-emerald-800 font-medium flex items-center space-x-1"
                >
                  <span>←</span><span>Back to all services</span>
                </button>
              </>
            );
          })()}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* ── Sidebar Filters ────────────────────────────── */}
          <aside className="lg:w-72 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm border border-stone-100 p-5 sticky top-24">
              <h2 className="font-bold text-stone-900 mb-4">Filters</h2>

              {/* Category */}
              <div className="mb-5">
                <label className="block text-sm font-semibold text-stone-700 mb-2">Category</label>
                <select
                  value={selectedCategory}
                  onChange={e => setSelectedCategory(e.target.value)}
                  className="w-full border border-stone-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="all">All Categories</option>
                  {categories.map(c => (
                    <option key={c.id} value={c.slug}>{c.icon} {c.name}</option>
                  ))}
                </select>
              </div>

              {/* Max Hourly Rate */}
              <div className="mb-5">
                <label className="block text-sm font-semibold text-stone-700 mb-2">
                  Max Rate: <span className="text-emerald-700">${maxRate}/hr</span>
                </label>
                <input
                  type="range" min={25} max={200} step={5}
                  value={maxRate}
                  onChange={e => setMaxRate(Number(e.target.value))}
                  className="w-full accent-emerald-600"
                />
                <div className="flex justify-between text-xs text-stone-400 mt-1">
                  <span>$25</span><span>$200</span>
                </div>
              </div>

              {/* Sort */}
              <div className="mb-5">
                <label className="block text-sm font-semibold text-stone-700 mb-2">Sort By</label>
                {['rating', 'price', 'reviews'].map(opt => (
                  <label key={opt} className="flex items-center space-x-2 mb-2 cursor-pointer">
                    <input
                      type="radio" name="sort" value={opt}
                      checked={sortBy === opt}
                      onChange={() => setSortBy(opt)}
                      className="accent-emerald-600"
                    />
                    <span className="text-sm text-stone-600 capitalize">
                      {opt === 'rating' ? '⭐ Highest Rated' : opt === 'price' ? '💰 Lowest Price' : '💬 Most Reviews'}
                    </span>
                  </label>
                ))}
              </div>

              {/* Top Pro Toggle */}
              <div className="mb-2">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={topProOnly}
                    onChange={e => setTopProOnly(e.target.checked)}
                    className="w-4 h-4 accent-emerald-600 rounded"
                  />
                  <span className="text-sm text-stone-700 font-medium">⭐ Top Pros Only</span>
                </label>
              </div>

              <button
                onClick={() => { setSelectedCategory('all'); setSortBy('rating'); setMaxRate(200); setTopProOnly(false); }}
                className="mt-4 w-full text-sm text-emerald-700 hover:text-emerald-800 font-medium"
              >
                Clear All Filters
              </button>
            </div>
          </aside>

          {/* ── Pros Grid ─────────────────────────────────── */}
          <main className="flex-1">
            <div className="flex items-center justify-between mb-5">
              <p className="text-sm text-stone-500">
                Showing <span className="font-semibold text-stone-900">{filtered.length}</span> professionals
              </p>
              <button
                onClick={() => navigate('/get-quotes')}
                className="bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
              >
                + Post a Job
              </button>
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-xl border border-stone-100">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-lg font-semibold text-stone-800">No pros found</h3>
                <p className="text-stone-500 mt-1 text-sm">Try adjusting your filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {filtered.map(pro => (
                  <ProCard key={pro.id} pro={pro} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProsListPage;
