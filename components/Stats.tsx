'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 500, suffix: '+', label: 'Enterprise Clients', sub: 'Across 20+ industries' },
  { value: 94, suffix: '%', label: 'Completion Rate', sub: 'Industry avg is 38%' },
  { value: 3.2, suffix: 'x', label: 'Average ROI', sub: 'Measured within 6 months' },
  { value: 40, suffix: '%', label: 'Velocity Boost', sub: 'In team productivity' },
];

function useCountUp(target: number, duration = 1800, started: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    const isFloat = target % 1 !== 0;
    const steps = 60;
    const stepDuration = duration / steps;
    let current = 0;
    const increment = target / steps;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(isFloat ? parseFloat(current.toFixed(1)) : Math.floor(current));
      }
    }, stepDuration);
    return () => clearInterval(timer);
  }, [target, duration, started]);
  return count;
}

function StatCard({ value, suffix, label, sub, started }: (typeof stats)[0] & { started: boolean }) {
  const count = useCountUp(value, 1600, started);
  const isFloat = value % 1 !== 0;

  return (
    <div className="text-center group">
      <div className="text-5xl lg:text-6xl font-display font-bold text-brand-600 mb-2 tabular-nums">
        {isFloat ? count.toFixed(1) : count}
        <span className="text-accent">{suffix}</span>
      </div>
      <div className="text-slate-900 font-semibold text-lg mb-1">{label}</div>
      <div className="text-slate-400 text-sm">{sub}</div>
    </div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold text-accent bg-accent/10 border border-accent/20 px-3 py-1 rounded-full uppercase tracking-widest mb-4">
            Proven Results
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            Numbers that speak for themselves
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} started={started} />
          ))}
        </div>
      </div>
    </section>
  );
}
