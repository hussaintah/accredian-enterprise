'use client';

const partners = [
  'IIT Delhi', 'IIM Bangalore', 'IIT Bombay', 'IIM Ahmedabad',
  'IIT Madras', 'IIM Calcutta', 'IIT Kharagpur', 'XLRI Jamshedpur',
  'ISB Hyderabad', 'IIT Roorkee',
];

const enterprises = [
  'Infosys', 'Wipro', 'TCS', 'HCL', 'Tech Mahindra',
  'Cognizant', 'Capgemini', 'Accenture', 'Deloitte', 'IBM India',
];

export default function Partners() {
  return (
    <section id="partners" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="section-tag">Trusted By</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Academic partners & enterprise clients
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Co-created with India&apos;s premier institutions and deployed across 500+
            leading organizations.
          </p>
        </div>

        {/* Academic partners marquee */}
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
          Academic Partners
        </p>
        <div className="relative mb-10">
          <div className="flex gap-6 overflow-hidden">
            <div
              className="flex gap-6 shrink-0 animate-marquee"
              style={{ animation: 'marquee 20s linear infinite' }}
            >
              {[...partners, ...partners].map((p, i) => (
                <div
                  key={i}
                  className="shrink-0 h-12 px-6 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-sm font-bold text-slate-600 whitespace-nowrap hover:border-brand-200 hover:text-brand-600 transition-colors"
                >
                  {p}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enterprise clients marquee (reverse) */}
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">
          Enterprise Clients
        </p>
        <div className="relative">
          <div className="flex gap-6 overflow-hidden">
            <div
              className="flex gap-6 shrink-0"
              style={{ animation: 'marquee-reverse 24s linear infinite' }}
            >
              {[...enterprises, ...enterprises].map((e, i) => (
                <div
                  key={i}
                  className="shrink-0 h-12 px-6 bg-brand-50 border border-brand-100 rounded-xl flex items-center justify-center text-sm font-bold text-brand-700 whitespace-nowrap hover:bg-brand-100 transition-colors"
                >
                  {e}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
