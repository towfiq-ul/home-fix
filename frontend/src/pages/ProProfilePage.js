import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { pros } from '../data/mockData';
import { StarRating } from '../components/ProCard';

const ProProfilePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const pro = pros.find(p => p.id === Number(id));

  if (!pro) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-stone-50">
        <div className="text-5xl mb-4">😕</div>
        <h2 className="text-2xl font-bold text-stone-800">Pro not found</h2>
        <Link to="/pros" className="mt-4 text-emerald-700 hover:underline">← Back to Pros</Link>
      </div>
    );
  }

  const similarPros = pros.filter(p => p.category === pro.category && p.id !== pro.id).slice(0, 2);

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Link to="/pros" className="text-emerald-700 hover:text-emerald-800 text-sm font-medium flex items-center mb-6">
          ← Back to Pros
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* ── Left: Main Profile ─────────────────────────── */}
          <div className="lg:col-span-2 space-y-6">

            {/* Profile Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-6">
              <div className="flex items-start space-x-5">
                <div className="relative flex-shrink-0">
                  <img
                    src={pro.avatar}
                    alt={pro.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-emerald-100"
                  />
                  {pro.verified && (
                    <span className="absolute -bottom-1 -right-1 bg-emerald-600 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center font-bold" title="Verified">✓</span>
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h1 className="text-2xl font-extrabold text-stone-900">{pro.name}</h1>
                    {pro.topPro && (
                      <span className="bg-amber-100 text-amber-800 text-xs font-bold px-2.5 py-1 rounded-full">⭐ Top Pro</span>
                    )}
                    {pro.verified && (
                      <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded-full">✓ Verified</span>
                    )}
                  </div>
                  <p className="text-emerald-700 font-semibold text-lg mt-1">{pro.title}</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <StarRating rating={pro.rating} size="base" />
                    <span className="font-bold text-stone-800">{pro.rating}</span>
                    <span className="text-stone-500 text-sm">({pro.reviewCount} reviews)</span>
                  </div>
                  <div className="flex flex-wrap gap-4 mt-3 text-sm text-stone-500">
                    <span>📍 {pro.location} · {pro.distance}</span>
                    <span>⏱ Responds {pro.responseTime}</span>
                    <span>✅ {pro.hireCount}+ hires</span>
                  </div>
                </div>
              </div>
            </div>

            {/* About */}
            <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-6">
              <h2 className="text-lg font-bold text-stone-900 mb-3">About {pro.name.split(' ')[0]}</h2>
              <p className="text-stone-600 leading-relaxed">{pro.bio}</p>
            </div>

            {/* Skills */}
            <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-6">
              <h2 className="text-lg font-bold text-stone-900 mb-4">Services Offered</h2>
              <div className="grid grid-cols-2 gap-2">
                {pro.skills.map(skill => (
                  <div key={skill} className="flex items-center space-x-2 bg-emerald-50 text-emerald-800 px-3 py-2 rounded-lg text-sm font-medium">
                    <span className="text-emerald-500">✓</span>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-6">
              <h2 className="text-lg font-bold text-stone-900 mb-5">
                Reviews <span className="text-stone-400 font-normal text-base">({pro.reviewCount})</span>
              </h2>
              <div className="space-y-5">
                {pro.reviews.map(review => (
                  <div key={review.id} className="border-b border-stone-100 pb-5 last:border-0 last:pb-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center text-sm font-bold">
                          {review.author[0]}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-stone-900">{review.author}</p>
                          <p className="text-xs text-stone-400">{review.date}</p>
                        </div>
                      </div>
                      <StarRating rating={review.rating} />
                    </div>
                    <p className="text-stone-600 text-sm leading-relaxed">{review.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: Booking Sidebar ─────────────────────── */}
          <div className="space-y-5">
            {/* Rate & CTA */}
            <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-6 sticky top-24">
              <div className="text-center mb-5">
                <p className="text-3xl font-extrabold text-stone-900">${pro.hourlyRate}<span className="text-base font-normal text-stone-500">/hr</span></p>
                <p className="text-sm text-stone-400 mt-1">Starting rate · final price varies</p>
              </div>
              <button
                onClick={() => navigate('/get-quotes')}
                className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-3 rounded-xl transition-colors mb-3"
              >
                Request a Quote
              </button>
              <button
                onClick={() => navigate('/get-quotes')}
                className="w-full border border-stone-300 hover:border-emerald-500 text-stone-700 hover:text-emerald-700 font-medium py-3 rounded-xl transition-colors text-sm"
              >
                💬 Send a Message
              </button>
              <p className="text-xs text-stone-400 text-center mt-4">Free quotes · no obligation</p>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-5">
              <h3 className="font-bold text-stone-900 mb-4">Quick Facts</h3>
              <div className="space-y-3 text-sm">
                {[
                  { label: 'Years in Business', value: `${pro.yearsExperience} years` },
                  { label: 'Total Hires',        value: `${pro.hireCount}+` },
                  { label: 'Avg. Response',      value: pro.responseTime },
                  { label: 'Service Area',       value: pro.location },
                ].map(item => (
                  <div key={item.label} className="flex justify-between">
                    <span className="text-stone-500">{item.label}</span>
                    <span className="font-semibold text-stone-800">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Similar Pros */}
            {similarPros.length > 0 && (
              <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-5">
                <h3 className="font-bold text-stone-900 mb-4">Similar Pros</h3>
                <div className="space-y-4">
                  {similarPros.map(sp => (
                    <div key={sp.id} className="flex items-center space-x-3">
                      <img src={sp.avatar} alt={sp.name} className="w-10 h-10 rounded-full object-cover" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-stone-900 truncate">{sp.name}</p>
                        <div className="flex items-center space-x-1">
                          <span className="text-amber-400 text-xs">★</span>
                          <span className="text-xs text-stone-500">{sp.rating} · ${sp.hourlyRate}/hr</span>
                        </div>
                      </div>
                      <Link to={`/pros/${sp.id}`} className="text-emerald-700 text-xs hover:underline flex-shrink-0">View</Link>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProProfilePage;
