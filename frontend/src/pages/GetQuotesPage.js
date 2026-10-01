import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/mockData';

const STEPS = [
  { id: 1, title: 'Service Type',    subtitle: 'What do you need help with?' },
  { id: 2, title: 'Project Details', subtitle: 'Tell us more about your project.' },
  { id: 3, title: 'Location',        subtitle: "Where is the job located?" },
  { id: 4, title: 'Confirmation',    subtitle: "You're all set!" },
];

const GetQuotesPage = () => {
  const [step, setStep]         = useState(1);
  const [formData, setFormData] = useState({
    category: '',
    description: '',
    timeline: '',
    budget: '',
    zipCode: '',
    name: '',
    email: '',
    phone: '',
  });

  const update = (field, value) => setFormData(prev => ({ ...prev, [field]: value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(4);
  };

  const StepIndicator = () => (
    <div className="flex items-center justify-center mb-10">
      {STEPS.map((s, i) => (
        <React.Fragment key={s.id}>
          <div className="flex flex-col items-center">
            <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-colors
              ${step > s.id ? 'bg-emerald-500 text-white' : step === s.id ? 'bg-emerald-700 text-white' : 'bg-stone-200 text-stone-500'}`}>
              {step > s.id ? '✓' : s.id}
            </div>
            <span className="text-xs text-stone-500 mt-1 hidden sm:block">{s.title}</span>
          </div>
          {i < STEPS.length - 1 && (
            <div className={`flex-1 h-0.5 mx-2 ${step > s.id ? 'bg-emerald-400' : 'bg-stone-200'}`} />
          )}
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-stone-900">Get Free Quotes</h1>
          <p className="mt-2 text-stone-500">Tell us about your project and get matched with the best local pros.</p>
        </div>

        <StepIndicator />

        <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8">

          {/* ── Step 1: Service Type ─────────────────────── */}
          {step === 1 && (
            <div>
              <h2 className="text-xl font-bold text-stone-900 mb-1">{STEPS[0].subtitle}</h2>
              <p className="text-stone-500 text-sm mb-6">Select the category that best fits your project.</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => { update('category', cat.slug); setStep(2); }}
                    className={`border-2 rounded-xl p-4 text-center transition-all duration-200 hover:border-emerald-400 hover:bg-emerald-50
                      ${formData.category === cat.slug ? 'border-emerald-600 bg-emerald-50' : 'border-stone-200 bg-white'}`}
                  >
                    <div className="text-3xl mb-1">{cat.icon}</div>
                    <p className="text-sm font-semibold text-stone-800">{cat.name}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* ── Step 2: Project Details ──────────────────── */}
          {step === 2 && (
            <div>
              <h2 className="text-xl font-bold text-stone-900 mb-1">{STEPS[1].subtitle}</h2>
              <p className="text-stone-500 text-sm mb-6">The more detail you provide, the better we can match you.</p>
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-1">Describe your project *</label>
                  <textarea
                    rows={4}
                    value={formData.description}
                    onChange={e => update('description', e.target.value)}
                    placeholder="e.g. I have a leaky faucet in my kitchen that needs fixing..."
                    className="w-full border border-stone-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none text-stone-800"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-stone-700 mb-1">Timeline</label>
                    <select
                      value={formData.timeline}
                      onChange={e => update('timeline', e.target.value)}
                      className="w-full border border-stone-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 text-stone-800"
                    >
                      <option value="">Select...</option>
                      <option>ASAP / Same day</option>
                      <option>Within a week</option>
                      <option>Within a month</option>
                      <option>Flexible</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-stone-700 mb-1">Budget</label>
                    <select
                      value={formData.budget}
                      onChange={e => update('budget', e.target.value)}
                      className="w-full border border-stone-300 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 text-stone-800"
                    >
                      <option value="">Select...</option>
                      <option>Under $100</option>
                      <option>$100 – $500</option>
                      <option>$500 – $1,000</option>
                      <option>$1,000 – $5,000</option>
                      <option>$5,000+</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-between pt-2">
                  <button onClick={() => setStep(1)} className="text-stone-500 hover:text-stone-700 text-sm font-medium">← Back</button>
                  <button
                    onClick={() => setStep(3)}
                    disabled={!formData.description.trim()}
                    className="bg-emerald-700 hover:bg-emerald-800 disabled:bg-stone-300 text-white font-semibold px-6 py-2.5 rounded-lg transition-colors text-sm"
                  >
                    Continue →
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ── Step 3: Location & Contact ───────────────── */}
          {step === 3 && (
            <form onSubmit={handleSubmit}>
              <h2 className="text-xl font-bold text-stone-900 mb-1">{STEPS[2].subtitle}</h2>
              <p className="text-stone-500 text-sm mb-6">We'll use this to match you with pros in your area.</p>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-1">ZIP / Postal Code *</label>
                  <input type="text" required value={formData.zipCode} onChange={e => update('zipCode', e.target.value)}
                    placeholder="e.g. 10001"
                    className="w-full border border-stone-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 text-stone-800" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-stone-700 mb-1">Your Name *</label>
                    <input type="text" required value={formData.name} onChange={e => update('name', e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full border border-stone-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 text-stone-800" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-stone-700 mb-1">Phone</label>
                    <input type="tel" value={formData.phone} onChange={e => update('phone', e.target.value)}
                      placeholder="(555) 000-0000"
                      className="w-full border border-stone-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 text-stone-800" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-stone-700 mb-1">Email Address *</label>
                  <input type="email" required value={formData.email} onChange={e => update('email', e.target.value)}
                    placeholder="jane@example.com"
                    className="w-full border border-stone-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 text-stone-800" />
                </div>
                <p className="text-xs text-stone-400">By submitting, you agree to our Terms of Service and Privacy Policy.</p>
                <div className="flex justify-between pt-2">
                  <button type="button" onClick={() => setStep(2)} className="text-stone-500 hover:text-stone-700 text-sm font-medium">← Back</button>
                  <button type="submit" className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-8 py-3 rounded-lg transition-colors">
                    🚀 Get My Free Quotes
                  </button>
                </div>
              </div>
            </form>
          )}

          {/* ── Step 4: Success ──────────────────────────── */}
          {step === 4 && (
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 text-4xl">
                🎉
              </div>
              <h2 className="text-2xl font-extrabold text-stone-900">You're all set, {formData.name.split(' ')[0] || 'there'}!</h2>
              <p className="mt-3 text-stone-500 max-w-sm mx-auto">
                We're matching you with the best local pros for your <strong className="capitalize text-stone-700">{formData.category}</strong> project.
                Expect quotes within <strong className="text-stone-700">1–2 hours</strong>.
              </p>
              <div className="mt-6 bg-emerald-50 border border-emerald-100 rounded-xl p-5 text-sm text-stone-700 text-left max-w-sm mx-auto space-y-2">
                <p>📧 Confirmation sent to <strong>{formData.email}</strong></p>
                <p>📍 Matching pros near <strong>{formData.zipCode}</strong></p>
                <p>⏱ Typical response time: <strong>&lt; 1 hour</strong></p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/pros" className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                  Browse Pros Now
                </Link>
                <Link to="/" className="border border-stone-300 text-stone-700 hover:bg-stone-50 font-medium px-6 py-3 rounded-lg transition-colors">
                  Back to Home
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GetQuotesPage;
