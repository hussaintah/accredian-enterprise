'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle, Loader2 } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  company: string;
  teamSize: string;
  interest: string;
};

const initialForm: FormData = {
  name: '',
  email: '',
  company: '',
  teamSize: '',
  interest: '',
};

const teamSizes = ['1–50', '51–200', '201–500', '500–1000', '1000+'];
const interests = [
  'AI & Data Science',
  'Leadership Development',
  'Product Management',
  'Engineering Upskilling',
  'Custom Program',
];

export default function LeadForm() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.company) {
      setError('Please fill in all required fields.');
      return;
    }
    setError('');
    setStatus('loading');
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error('Server error');
      setStatus('success');
      setForm(initialForm);
    } catch {
      setStatus('error');
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left copy */}
          <div>
            <span className="section-tag">Get Started</span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Ready to transform your{' '}
              <span className="text-brand-600">workforce?</span>
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-8">
              Talk to an enterprise learning consultant. We&apos;ll map your organization&apos;s
              skill gaps, suggest the right programs, and show you measurable ROI projections —
              completely free.
            </p>
            <ul className="space-y-3">
              {[
                'Custom program design within 5 business days',
                'No minimum team size requirements',
                'IIT & IIM co-certified credentials included',
                'Dedicated success manager from day one',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-600">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right form */}
          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8">
            {status === 'success' ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
                <h3 className="font-display text-2xl font-bold text-slate-900 mb-2">
                  You&apos;re all set!
                </h3>
                <p className="text-slate-500">
                  Our enterprise team will reach out within 24 hours.
                </p>
              </div>
            ) : (
              <div className="space-y-5">
                <h3 className="font-display text-xl font-bold text-slate-900">
                  Book a Free Consultation
                </h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Priya Sharma"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Work Email *
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="priya@company.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Company *
                  </label>
                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Your organization"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-all"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Team Size
                    </label>
                    <select
                      name="teamSize"
                      value={form.teamSize}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-all"
                    >
                      <option value="">Select size</option>
                      {teamSizes.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1.5">
                      Area of Interest
                    </label>
                    <select
                      name="interest"
                      value={form.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 text-sm focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition-all"
                    >
                      <option value="">Select interest</option>
                      {interests.map((i) => <option key={i} value={i}>{i}</option>)}
                    </select>
                  </div>
                </div>

                {error && (
                  <p className="text-sm text-rose-600 bg-rose-50 border border-rose-200 rounded-lg px-4 py-2.5">
                    {error}
                  </p>
                )}

                <button
                  onClick={handleSubmit}
                  disabled={status === 'loading'}
                  className="btn-primary w-full justify-center py-3.5 text-base disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Submitting…
                    </>
                  ) : (
                    <>
                      Get Free Consultation
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-xs text-slate-400 text-center">
                  No spam. Our team responds within 24 hours.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
