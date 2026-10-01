import React from 'react';
import { Link } from 'react-router-dom';

const StarRating = ({ rating, size = 'sm' }) => {
  const sizeClass = size === 'sm' ? 'text-sm' : 'text-base';
  return (
    <span className={`${sizeClass} text-amber-400`}>
      {'★'.repeat(Math.floor(rating))}{'☆'.repeat(5 - Math.floor(rating))}
    </span>
  );
};

const ProCard = ({ pro }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-stone-100 group">
      <div className="p-5">
        {/* Header row */}
        <div className="flex items-start space-x-4">
          <div className="relative flex-shrink-0">
            <img
              src={pro.avatar}
              alt={pro.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            {pro.verified && (
              <span className="absolute -bottom-1 -right-1 bg-emerald-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center" title="Verified">✓</span>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-stone-900 text-lg leading-tight">{pro.name}</h3>
              {pro.topPro && (
                <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-2 py-0.5 rounded-full ml-2 whitespace-nowrap">⭐ Top Pro</span>
              )}
            </div>
            <p className="text-emerald-700 text-sm font-medium mt-0.5">{pro.title}</p>
            <div className="flex items-center space-x-2 mt-1">
              <StarRating rating={pro.rating} />
              <span className="text-sm text-stone-500">{pro.rating} ({pro.reviewCount} reviews)</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 mt-4 py-3 border-t border-b border-stone-100 text-center">
          <div>
            <p className="text-sm font-semibold text-stone-900">${pro.hourlyRate}/hr</p>
            <p className="text-xs text-stone-500">Starting rate</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-stone-900">{pro.yearsExperience} yrs</p>
            <p className="text-xs text-stone-500">Experience</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-stone-900">{pro.hireCount}+</p>
            <p className="text-xs text-stone-500">Hired</p>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-3 flex flex-wrap gap-1.5">
          {pro.skills.slice(0, 3).map(skill => (
            <span key={skill} className="bg-stone-100 text-stone-600 text-xs px-2.5 py-1 rounded-full">{skill}</span>
          ))}
          {pro.skills.length > 3 && (
            <span className="bg-stone-100 text-stone-500 text-xs px-2.5 py-1 rounded-full">+{pro.skills.length - 3} more</span>
          )}
        </div>

        {/* Location & Response */}
        <div className="mt-3 flex items-center justify-between text-xs text-stone-500">
          <span>📍 {pro.location} · {pro.distance}</span>
          <span>⏱ Responds {pro.responseTime}</span>
        </div>

        {/* Actions */}
        <div className="mt-4 flex space-x-2">
          <Link
            to={`/pros/${pro.id}`}
            className="flex-1 bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-medium py-2 rounded-lg text-center transition-colors"
          >
            View Profile
          </Link>
          <Link
            to="/get-quotes"
            className="flex-1 border border-emerald-600 text-emerald-700 hover:bg-emerald-50 text-sm font-medium py-2 rounded-lg text-center transition-colors"
          >
            Request Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export { StarRating };
export default ProCard;
