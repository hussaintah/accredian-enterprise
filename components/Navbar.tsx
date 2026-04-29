'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Zap } from 'lucide-react';

const navLinks = [
  {
    label: 'Solutions',
    href: '#features',
    dropdown: ['Custom Programs', 'Analytics Dashboard', 'Live Mentorship', 'Cohort Learning'],
  },
  { label: 'Programs', href: '#programs' },
  { label: 'Partners', href: '#partners' },
  { label: 'Testimonials', href: '#testimonials' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    setActiveDropdown(null);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center shadow-lg shadow-brand-500/30 group-hover:scale-105 transition-transform">
              <Zap className="w-4 h-4 text-white fill-white" />
            </div>
            <span className="font-display font-bold text-lg text-slate-900 tracking-tight">
              accredian
              <span className="text-brand-600 ml-1 text-xs font-semibold uppercase tracking-widest align-top mt-1 inline-block">
                enterprise
              </span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.label} className="relative">
                <button
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-slate-600 hover:text-brand-600 rounded-lg hover:bg-brand-50 transition-colors duration-200"
                  onClick={() =>
                    link.dropdown
                      ? setActiveDropdown(activeDropdown === link.label ? null : link.label)
                      : handleNavClick(link.href)
                  }
                  onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                  onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
                >
                  {link.label}
                  {link.dropdown && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        activeDropdown === link.label ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </button>

                {link.dropdown && activeDropdown === link.label && (
                  <div
                    className="absolute top-full left-0 mt-1 w-52 bg-white rounded-xl shadow-xl border border-slate-100 py-1.5 z-50"
                    onMouseEnter={() => setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {link.dropdown.map((item) => (
                      <button
                        key={item}
                        className="w-full text-left px-4 py-2.5 text-sm text-slate-600 hover:bg-brand-50 hover:text-brand-600 transition-colors"
                        onClick={() => handleNavClick(link.href)}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors px-3 py-2">
              Sign In
            </button>
            <button className="btn-primary text-sm" onClick={() => handleNavClick('#contact')}>
              Talk to Sales
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-xl">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                className="w-full text-left px-4 py-3 text-sm font-medium text-slate-700 hover:bg-brand-50 hover:text-brand-600 rounded-lg transition-colors"
                onClick={() => handleNavClick(link.href)}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button className="w-full text-sm font-medium text-slate-600 px-4 py-3 text-left hover:bg-slate-50 rounded-lg">
                Sign In
              </button>
              <button
                className="btn-primary w-full justify-center"
                onClick={() => handleNavClick('#contact')}
              >
                Talk to Sales
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
