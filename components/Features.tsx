'use client';

import { useEffect, useRef } from 'react';
import {
  BookOpen,
  BarChart3,
  Users,
  GitBranch,
  Settings,
  Award,
  Cpu,
  Globe2,
  Headphones,
} from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Curated University Programs',
    description:
      'Access a library of programs co-created with IITs, IIMs, and global universities. Every course is rigorously structured for real-world applicability.',
    tag: 'Content',
    color: 'from-blue-500 to-brand-600',
    bg: 'bg-blue-50',
    iconColor: 'text-blue-600',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics Dashboard',
    description:
      'Track completion rates, scores, engagement metrics, and ROI through a live command center. Data-driven L&D decisions at your fingertips.',
    tag: 'Analytics',
    color: 'from-violet-500 to-purple-600',
    bg: 'bg-violet-50',
    iconColor: 'text-violet-600',
  },
  {
    icon: Users,
    title: 'Live Expert Mentorship',
    description:
      '1:1 sessions with 500+ industry practitioners across AI/ML, Data Science, Product, and Leadership. Capstone projects guided by domain experts.',
    tag: 'Mentorship',
    color: 'from-emerald-500 to-teal-600',
    bg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
  },
  {
    icon: GitBranch,
    title: 'Cohort-Based Learning',
    description:
      'Synchronized learning paths foster team collaboration, accountability, and peer learning — driving completion rates above 94%.',
    tag: 'Collaboration',
    color: 'from-amber-500 to-orange-600',
    bg: 'bg-amber-50',
    iconColor: 'text-amber-600',
  },
  {
    icon: Settings,
    title: 'Custom Curriculum Design',
    description:
      "Tailor programs entirely to your organization's specific tech stack, skill gaps, and strategic goals. Our consultants map every requirement.",
    tag: 'Customization',
    color: 'from-rose-500 to-pink-600',
    bg: 'bg-rose-50',
    iconColor: 'text-rose-600',
  },
  {
    icon: Award,
    title: 'Recognized Certifications',
    description:
      'Earn credentials co-certified by IITs and IIMs that employees proudly share — significantly boosting retention and career trajectory.',
    tag: 'Credentials',
    color: 'from-brand-500 to-indigo-600',
    bg: 'bg-brand-50',
    iconColor: 'text-brand-600',
  },
  {
    icon: Cpu,
    title: 'AI-Driven Learning Paths',
    description:
      "Adaptive pathways that adjust to each learner's pace, baseline, and performance in real time. Personalized at enterprise scale.",
    tag: 'AI-Powered',
    color: 'from-cyan-500 to-blue-600',
    bg: 'bg-cyan-50',
    iconColor: 'text-cyan-600',
  },
  {
    icon: Globe2,
    title: 'Global Distributed Teams',
    description:
      'Seamlessly upskill distributed teams across different timezones. Flexible scheduling designed for the modern hybrid enterprise.',
    tag: 'Global',
    color: 'from-teal-500 to-emerald-600',
    bg: 'bg-teal-50',
    iconColor: 'text-teal-600',
  },
  {
    icon: Headphones,
    title: 'Dedicated Success Support',
    description:
      'From curriculum design to go-live and beyond — dedicated enterprise success managers ensure your learning programs never stall.',
    tag: 'Support',
    color: 'from-slate-500 to-slate-700',
    bg: 'bg-slate-50',
    iconColor: 'text-slate-600',
  },
];

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.reveal-card').forEach((el, i) => {
              setTimeout(() => {
                (el as HTMLElement).style.opacity = '1';
                (el as HTMLElement).style.transform = 'translateY(0)';
              }, i * 80);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-tag">Platform Features</span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            From curriculum to analytics —<br />
            <span className="text-brand-600">everything L&D teams need</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            The complete operating system for enterprise learning. Purpose-built for L&D leaders
            who demand measurable outcomes, not just course catalogs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="reveal-card card p-6 group cursor-default"
                style={{
                  opacity: 0,
                  transform: 'translateY(24px)',
                  transition: 'opacity 0.5s ease, transform 0.5s ease',
                }}
              >
                <div
                  className={`w-11 h-11 ${feature.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className={`w-5 h-5 ${feature.iconColor}`} />
                </div>
                <span className="inline-block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  {feature.tag}
                </span>
                <h3 className="font-display text-lg font-bold text-slate-900 mb-2 leading-snug group-hover:text-brand-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
                <div
                  className={`h-0.5 w-0 group-hover:w-full mt-4 bg-gradient-to-r ${feature.color} rounded-full transition-all duration-500`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
