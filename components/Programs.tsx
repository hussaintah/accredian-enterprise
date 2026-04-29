'use client';

import { useState } from 'react';
import { Clock, Users, Award, ArrowRight } from 'lucide-react';

const categories = ['All', 'AI & Data', 'Leadership', 'Product', 'Engineering'];

const programs = [
  {
    category: 'AI & Data',
    title: 'Executive Program in Applied AI & ML',
    partner: 'IIT Delhi',
    duration: '6 months',
    learners: '1,200+',
    level: 'Advanced',
    badge: 'IIT Certified',
    color: 'from-blue-500 to-brand-600',
    tag: 'Most Popular',
  },
  {
    category: 'Leadership',
    title: 'Senior Leadership Development Program',
    partner: 'IIM Bangalore',
    duration: '9 months',
    learners: '800+',
    level: 'Executive',
    badge: 'IIM Certified',
    color: 'from-violet-500 to-purple-600',
    tag: 'New Batch',
  },
  {
    category: 'AI & Data',
    title: 'Data Science & Analytics Bootcamp',
    partner: 'IIT Bombay',
    duration: '5 months',
    learners: '2,500+',
    level: 'Intermediate',
    badge: 'IIT Certified',
    color: 'from-cyan-500 to-blue-600',
    tag: '',
  },
  {
    category: 'Product',
    title: 'Product Management Excellence',
    partner: 'IIM Ahmedabad',
    duration: '4 months',
    learners: '600+',
    level: 'Intermediate',
    badge: 'IIM Certified',
    color: 'from-emerald-500 to-teal-600',
    tag: '',
  },
  {
    category: 'Engineering',
    title: 'Full Stack Cloud Engineering',
    partner: 'IIT Madras',
    duration: '6 months',
    learners: '1,800+',
    level: 'Intermediate',
    badge: 'IIT Certified',
    color: 'from-amber-500 to-orange-600',
    tag: '',
  },
  {
    category: 'Leadership',
    title: 'Strategic Business Management',
    partner: 'IIM Calcutta',
    duration: '12 months',
    learners: '400+',
    level: 'Executive',
    badge: 'IIM Certified',
    color: 'from-rose-500 to-pink-600',
    tag: 'Featured',
  },
];

export default function Programs() {
  const [active, setActive] = useState('All');

  const filtered =
    active === 'All' ? programs : programs.filter((p) => p.category === active);

  return (
    <section id="programs" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="section-tag">Programs</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            Programs built for{' '}
            <span className="text-brand-600">enterprise outcomes</span>
          </h2>
          <p className="text-lg text-slate-500">
            Co-created with India's and the world's best institutions. Every program maps
            to real business objectives.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                active === cat
                  ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/30'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-brand-300 hover:text-brand-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Program cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((program) => (
            <div
              key={program.title}
              className="card bg-white p-6 flex flex-col group"
            >
              {/* Gradient bar */}
              <div className={`h-1.5 w-full bg-gradient-to-r ${program.color} rounded-full mb-5`} />

              {/* Tag */}
              {program.tag && (
                <span className="inline-block self-start text-xs font-bold text-brand-600 bg-brand-50 px-2.5 py-1 rounded-full mb-3 uppercase tracking-wide">
                  {program.tag}
                </span>
              )}

              <h3 className="font-display font-bold text-slate-900 text-lg leading-snug mb-2 group-hover:text-brand-600 transition-colors">
                {program.title}
              </h3>

              <div className="flex items-center gap-2 mb-4">
                <Award className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span className="text-sm font-semibold text-slate-600">{program.partner}</span>
                <span className="ml-auto text-xs bg-amber-50 text-amber-700 border border-amber-200 px-2 py-0.5 rounded-full font-medium">
                  {program.badge}
                </span>
              </div>

              <div className="flex items-center gap-5 text-sm text-slate-500 mb-5 mt-auto">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {program.duration}
                </span>
                <span className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" />
                  {program.learners} enrolled
                </span>
              </div>

              <button className="btn-ghost w-full justify-between border border-slate-200 group-hover:border-brand-300 group-hover:text-brand-600 group-hover:bg-brand-50">
                Learn More
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="btn-primary">
            View All Programs
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
