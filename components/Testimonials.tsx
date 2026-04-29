'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    title: 'Chief People Officer',
    company: 'Infosys',
    quote:
      'Accredian Enterprise transformed our L&D function. We saw a 38% improvement in leadership pipeline quality within 8 months of rolling out the IIM-certified program.',
    rating: 5,
    avatar: 'PS',
    color: 'bg-violet-100 text-violet-700',
  },
  {
    name: 'Rahul Verma',
    title: 'VP of Engineering',
    company: 'Wipro Digital',
    quote:
      'The AI & ML cohort program from IIT Delhi gave our data teams the skills they needed. Completion rate was 97% — unheard of in our previous L&D initiatives.',
    rating: 5,
    avatar: 'RV',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    name: 'Anjali Menon',
    title: 'Head of Talent Development',
    company: 'Capgemini India',
    quote:
      'The real-time analytics dashboard alone justified the investment. We finally have visibility into what programs are working and why — and the ROI data is compelling.',
    rating: 5,
    avatar: 'AM',
    color: 'bg-emerald-100 text-emerald-700',
  },
  {
    name: 'Siddharth Nair',
    title: 'Director, HR Strategy',
    company: 'TCS',
    quote:
      "Accredian's success managers were with us every step of the way. The custom curriculum they built for our cloud migration initiative was exactly what we needed.",
    rating: 5,
    avatar: 'SN',
    color: 'bg-amber-100 text-amber-700',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-slate-950 to-brand-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full uppercase tracking-widest mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            What enterprise L&D leaders say
          </h2>
        </div>

        <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 sm:p-12">
          {/* Stars */}
          <div className="flex gap-1 mb-6">
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
          </div>

          {/* Quote */}
          <blockquote className="text-white/90 text-xl sm:text-2xl font-medium leading-relaxed mb-8 font-display">
            &ldquo;{t.quote}&rdquo;
          </blockquote>

          {/* Author */}
          <div className="flex items-center gap-4">
            <div
              className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center font-bold text-sm flex-shrink-0`}
            >
              {t.avatar}
            </div>
            <div>
              <div className="text-white font-bold">{t.name}</div>
              <div className="text-white/50 text-sm">
                {t.title} · {t.company}
              </div>
            </div>
          </div>

          {/* Nav */}
          <div className="flex items-center gap-3 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/20 hover:border-white/40 flex items-center justify-center text-white/70 hover:text-white transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current ? 'w-6 h-2 bg-accent' : 'w-2 h-2 bg-white/30'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/20 hover:border-white/40 flex items-center justify-center text-white/70 hover:text-white transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
