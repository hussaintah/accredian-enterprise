'use client';

import { useEffect, useRef } from 'react';
import { ArrowRight, Play, TrendingUp, Users, Award, BarChart3 } from 'lucide-react';

const floatingCards = [
  {
    icon: TrendingUp,
    label: '40% Velocity Boost',
    sub: 'Data Engineering Teams',
    color: 'bg-emerald-50 text-emerald-600',
    position: 'top-16 right-8 lg:right-0',
    delay: '0ms',
    bgHex: '#d1fae5',
  },
  {
    icon: Users,
    label: '96% Completion Rate',
    sub: 'Across 300 managers',
    color: 'bg-violet-50 text-violet-600',
    position: 'bottom-24 left-4 lg:-left-8',
    delay: '300ms',
    bgHex: '#ede9fe',
  },
  {
    icon: Award,
    label: 'IIT & IIM Certified',
    sub: 'World-class credentials',
    color: 'bg-amber-50 text-amber-600',
    position: 'bottom-4 right-12 lg:right-4',
    delay: '600ms',
    bgHex: '#fef3c7',
  },
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.animate-target').forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = '1';
                (el as HTMLElement).style.transform = 'translateY(0)';
              }, i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-950 via-brand-950 to-slate-900 pt-16"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-0 w-full h-full opacity-30"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 30%, rgba(51,102,255,0.4) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(0,200,150,0.2) 0%, transparent 50%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />
        <div className="absolute top-1/4 left-1/3 w-96 h-96 rounded-full bg-brand-600/20 blur-[120px] animate-pulse-slow" />
        <div
          className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-accent/10 blur-[100px] animate-pulse-slow"
          style={{ animationDelay: '2s' }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text content */}
          <div>
            <div
              className="animate-target inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-xs font-semibold px-4 py-2 rounded-full mb-6"
              style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Trusted by 500+ Enterprise Organizations
            </div>

            <h1
              className="animate-target font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.08] tracking-tight mb-6"
              style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease' }}
            >
              Upskill Your{' '}
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent">
                  Workforce
                </span>
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 300 8" fill="none">
                  <path
                    d="M0 4 Q75 0 150 4 Q225 8 300 4"
                    stroke="url(#underline)"
                    strokeWidth="2.5"
                    fill="none"
                  />
                  <defs>
                    <linearGradient id="underline" x1="0" y1="0" x2="300" y2="0">
                      <stop offset="0%" stopColor="#5a91ff" />
                      <stop offset="100%" stopColor="#00c896" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>{' '}
              at Scale
            </h1>

            <p
              className="animate-target text-lg text-white/70 leading-relaxed mb-8 max-w-xl"
              style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease' }}
            >
              Partner with IITs, IIMs, and global universities to build future-ready teams — with
              curated programs, live mentorship, and real-time analytics that deliver measurable ROI.
            </p>

            <div
              className="animate-target flex flex-col sm:flex-row gap-4 mb-12"
              style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease' }}
            >
              <button
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-2 bg-brand-500 hover:bg-brand-400 text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 shadow-xl shadow-brand-500/30 hover:shadow-brand-500/50 hover:-translate-y-0.5"
              >
                Get a Free Consultation
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/20 text-white px-7 py-3.5 rounded-xl font-semibold text-sm transition-all duration-200">
                <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <Play className="w-3.5 h-3.5 fill-white ml-0.5" />
                </span>
                Watch Demo
              </button>
            </div>

            <div
              className="animate-target flex items-center gap-6 flex-wrap"
              style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease' }}
            >
              {[
                { value: '500+', label: 'Enterprises' },
                { value: '94%', label: 'Completion Rate' },
                { value: '40%', label: 'Avg. Velocity Boost' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-display font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-white/50 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Floating visual */}
          <div className="relative hidden lg:block">
            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl animate-float">
              <div className="flex items-center justify-between mb-5">
                <div>
                  <div className="text-white font-semibold text-sm">Learning Analytics</div>
                  <div className="text-white/40 text-xs">Real-time Dashboard</div>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span className="text-accent text-xs font-medium">Live</span>
                </div>
              </div>

              <div className="flex items-end gap-2 h-32 mb-4">
                {[65, 80, 55, 90, 70, 95, 85, 100, 75, 88, 92, 78].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-t-sm"
                    style={{
                      height: `${h}%`,
                      background:
                        i === 7
                          ? 'linear-gradient(to top, #3366ff, #00c896)'
                          : `rgba(51, 102, 255, ${0.2 + (i % 3) * 0.1})`,
                    }}
                  />
                ))}
              </div>

              <div className="grid grid-cols-3 gap-3">
                {[
                  { label: 'Learners', value: '2,847', icon: Users, color: 'text-brand-400' },
                  { label: 'Courses Active', value: '34', icon: Award, color: 'text-accent' },
                  { label: 'Avg. ROI', value: '3.2x', icon: BarChart3, color: 'text-amber-400' },
                ].map(({ label, value, icon: Icon, color }) => (
                  <div key={label} className="bg-white/5 rounded-xl p-3">
                    <Icon className={`w-4 h-4 ${color} mb-1.5`} />
                    <div className="text-white font-bold text-base">{value}</div>
                    <div className="text-white/40 text-xs">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {floatingCards.map(({ icon: Icon, label, sub, color, position, delay, bgHex }) => (
              <div
                key={label}
                className={`absolute ${position} bg-white rounded-xl shadow-xl p-3 flex items-center gap-3 min-w-[180px]`}
                style={{ animationDelay: delay, animation: 'float 6s ease-in-out infinite' }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: bgHex }}
                >
                  <Icon className={`w-4 h-4 ${color.split(' ')[1]}`} />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-800">{label}</div>
                  <div className="text-xs text-slate-400">{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full">
          <path
            d="M0 80L1440 80L1440 20C1200 60 900 0 600 40C300 80 120 10 0 30L0 80Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
