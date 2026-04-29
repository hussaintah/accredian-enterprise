import { Zap, Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from 'lucide-react';

const footerLinks = {
  Solutions: ['Custom Programs', 'Analytics Dashboard', 'Live Mentorship', 'Cohort Learning', 'AI Learning Paths'],
  Company: ['About Us', 'Careers', 'Press', 'Blog', 'Contact'],
  Resources: ['Case Studies', 'Whitepapers', 'Webinars', 'ROI Calculator', 'L&D Playbook'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Data Processing'],
};

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center shadow-lg shadow-brand-500/30">
                <Zap className="w-4 h-4 text-white fill-white" />
              </div>
              <span className="font-display font-bold text-lg tracking-tight">
                accredian
                <span className="text-brand-400 ml-1 text-xs font-semibold uppercase tracking-widest align-top mt-1 inline-block">
                  enterprise
                </span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              The complete enterprise learning platform. Co-created with IITs, IIMs, and global
              universities to upskill your workforce at scale.
            </p>
            <div className="space-y-2.5 text-sm text-slate-400">
              <a href="mailto:enterprise@accredian.com" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4" /> enterprise@accredian.com
              </a>
              <a href="tel:+918069191919" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4" /> +91 80691 91919
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Bengaluru, India
              </span>
            </div>
            <div className="flex gap-3 mt-6">
              {[
                { icon: Linkedin, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Youtube, href: '#' },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-slate-400 hover:text-white text-sm transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Accredian. All rights reserved.</p>
          <p>Made with care for L&D leaders everywhere.</p>
        </div>
      </div>
    </footer>
  );
}
