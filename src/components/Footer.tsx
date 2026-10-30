import React, { useState } from 'react';
import { ArrowUp, Mail, Linkedin, Twitter, Phone, Heart, Check } from 'lucide-react';
import { CLIENT_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail && newsletterEmail.includes('@')) {
      setNewsletterSubscribed(true);
      setTimeout(() => {
        setNewsletterSubscribed(false);
        setNewsletterEmail('');
      }, 4000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#08090b] text-slate-400 text-xs border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-white text-black flex items-center justify-center font-black font-display text-lg">
                NP
              </div>
              <span className="text-white font-bold text-base tracking-tight">
                {CLIENT_INFO.name}
              </span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Social Work Leader, Philanthropist & Community Advocate. Catalyzing grassroots education, emergency health relief, and human dignity across underprivileged settlements.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={`mailto:${CLIENT_INFO.email}`}
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 text-white flex items-center justify-center border border-white/10 transition-colors"
                aria-label="Email Nishant Pandey"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 text-white flex items-center justify-center border border-white/10 transition-colors"
                aria-label="Nishant Pandey on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 text-white flex items-center justify-center border border-white/10 transition-colors"
                aria-label="Nishant Pandey on Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={`tel:+919876543210`}
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-white/10 text-white flex items-center justify-center border border-white/10 transition-colors"
                aria-label="Call Nishant Pandey"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs uppercase tracking-wider text-white font-bold block">
              Navigation
            </span>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Nishant
                </a>
              </li>
              <li>
                <a href="#initiatives" className="hover:text-white transition-colors">
                  Social Work Initiatives
                </a>
              </li>
              <li>
                <a href="#impact" className="hover:text-white transition-colors">
                  Impact & Focus Pillars
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-white transition-colors">
                  Field Notes & Blog Articles
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Inquiry & Collaboration
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter / Field Bulletins */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs uppercase tracking-wider text-white font-bold block">
              Quarterly Impact Dispatch
            </span>
            <p className="text-xs text-slate-400 leading-relaxed">
              Receive concise quarterly summaries of grassroots field drives, newly inaugurated learning hubs, and community dispatches.
            </p>

            {newsletterSubscribed ? (
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Subscribed! Thank you for staying connected.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-white flex-1"
                  aria-label="Newsletter email address"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-white text-black font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-slate-200 transition-all flex-shrink-0"
                >
                  Join
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-xs">
          <p className="flex items-center gap-1">
            © {new Date().getFullYear()} Nishant Pandey. Dedicated to community welfare & civic equity.
          </p>

          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1 text-[11px] text-slate-400">
              Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> for community empowerment
            </span>

            <button
              onClick={scrollToTop}
              type="button"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white transition-all flex items-center gap-1.5 border border-white/10 text-xs"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
