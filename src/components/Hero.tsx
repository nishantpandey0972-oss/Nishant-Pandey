import React, { useState } from 'react';
import { Mail, Linkedin, Twitter, Phone, ArrowDown, Sparkles, MapPin, CheckCircle } from 'lucide-react';
import { CLIENT_INFO } from '../data/portfolioData';

interface HeroProps {
  onContactClick: () => void;
  onExploreWorkClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onContactClick, onExploreWorkClick }) => {
  const [activePhoto, setActivePhoto] = useState<'urban' | 'bridge'>('urban');

  const currentPhotoSrc =
    activePhoto === 'urban' ? CLIENT_INFO.heroImage : CLIENT_INFO.portraitImage;

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-center overflow-hidden bg-[#0c0d10] pt-20 lg:pt-0">
      {/* Container split matching template screenshot */}
      <div className="w-full h-full flex flex-col lg:flex-row flex-1">
        
        {/* Left Side: Light Minimalist Canvas (matching template's off-white panel) */}
        <div className="w-full lg:w-[52%] bg-[#ebecee] text-black px-6 sm:px-12 lg:px-16 xl:px-20 py-16 lg:py-28 flex flex-col justify-center z-10 relative">
          
          {/* Subtle decorative grid/ambient touch */}
          <div className="absolute top-6 left-6 opacity-40 hidden sm:block">
            <span className="text-[11px] font-mono tracking-widest text-slate-500 uppercase">
              PORTFOLIO // VOL. 2026
            </span>
          </div>

          <div className="max-w-xl">
            {/* "Hi, I am" matching template */}
            <p className="text-xl sm:text-2xl font-medium text-slate-700 mb-2 font-display">
              {CLIENT_INFO.headline}
            </p>

            {/* Nishant Pandey - Bold Display Typography */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold text-[#0e1015] tracking-tight leading-[1.08] mb-3">
              {CLIENT_INFO.name}
            </h1>

            {/* Subtitle matching template: "Front-end Developer / UI Designer" -> Social Work Leader */}
            <h2 className="text-base sm:text-xl font-semibold text-slate-600 tracking-wide mb-6">
              Social Work Leader <span className="text-slate-400">/</span> Grassroots Changemaker
            </h2>

            {/* Welcoming humanitarian narrative */}
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-8 max-w-lg">
              {CLIENT_INFO.tagline}
            </p>

            {/* Square Framed Social Icons matching template */}
            <div className="flex items-center gap-3.5 mb-10">
              <a
                href={`mailto:${CLIENT_INFO.email}`}
                className="w-12 h-12 bg-white rounded-lg shadow-sm hover:shadow-md border border-slate-300/80 flex items-center justify-center text-slate-800 hover:text-black hover:bg-slate-50 active:scale-95 transition-all group"
                aria-label="Send Email to Nishant Pandey"
                title="Send Email"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white rounded-lg shadow-sm hover:shadow-md border border-slate-300/80 flex items-center justify-center text-slate-800 hover:text-black hover:bg-slate-50 active:scale-95 transition-all group"
                aria-label="Connect with Nishant Pandey on LinkedIn"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white rounded-lg shadow-sm hover:shadow-md border border-slate-300/80 flex items-center justify-center text-slate-800 hover:text-black hover:bg-slate-50 active:scale-95 transition-all group"
                aria-label="Follow Nishant Pandey on Twitter / X"
                title="Twitter / X"
              >
                <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>

              <a
                href={`tel:+919876543210`}
                className="w-12 h-12 bg-white rounded-lg shadow-sm hover:shadow-md border border-slate-300/80 flex items-center justify-center text-slate-800 hover:text-black hover:bg-slate-50 active:scale-95 transition-all group"
                aria-label="Call or WhatsApp Nishant Pandey"
                title="WhatsApp / Phone"
              >
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreWorkClick}
                type="button"
                className="px-6 py-3 bg-[#0e1015] text-white rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-slate-800 active:scale-95 transition-all shadow-md flex items-center gap-2 group"
              >
                Explore Initiatives
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={onContactClick}
                type="button"
                className="px-6 py-3 bg-white text-slate-900 border border-slate-300 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-slate-100 active:scale-95 transition-all shadow-sm"
              >
                Get In Touch
              </button>
            </div>

            {/* Trust badge */}
            <div className="mt-8 pt-6 border-t border-slate-300/60 flex items-center gap-2 text-xs text-slate-600 font-medium">
              <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Over 12 years championing underprivileged youth education & relief</span>
            </div>
          </div>
        </div>

        {/* Right Side: Midnight Charcoal Canvas with Diagonal Angle & Client Photo */}
        <div className="w-full lg:w-[48%] bg-[#0c0d10] relative flex items-center justify-center min-h-[480px] lg:min-h-full overflow-hidden hero-diagonal-clip -ml-0 lg:-ml-12 z-20">
          
          {/* Ambient subtle glow backdrop */}
          <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-slate-700/20 rounded-full blur-3xl pointer-events-none" />

          {/* Photo Frame Container */}
          <div className="relative w-full h-full flex flex-col items-center justify-center p-6 sm:p-10 lg:p-14">
            
            {/* The photo itself */}
            <div className="relative max-w-md w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10 group bg-slate-900">
              <img
                src={currentPhotoSrc}
                alt={`Nishant Pandey portrait - ${activePhoto === 'urban' ? 'City' : 'London Landmark'}`}
                className="w-full h-[460px] sm:h-[540px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />

              {/* Gradient overlay for bottom badge readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

              {/* Photo Switcher Pill */}
              <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md border border-white/20 rounded-full p-1 flex items-center gap-1 z-10">
                <button
                  type="button"
                  onClick={() => setActivePhoto('urban')}
                  className={`px-3 py-1 text-xs font-semibold rounded-full transition-all ${
                    activePhoto === 'urban'
                      ? 'bg-white text-black shadow-sm'
                      : 'text-slate-300 hover:text-white'
                  }`}
                  aria-label="View Nishant in urban setting"
                >
                  Street
                </button>
                <button
                  type="button"
                  onClick={() => setActivePhoto('bridge')}
                  className={`px-3 py-1 text-xs font-semibold rounded-full transition-all ${
                    activePhoto === 'bridge'
                      ? 'bg-white text-black shadow-sm'
                      : 'text-slate-300 hover:text-white'
                  }`}
                  aria-label="View Nishant at Tower Bridge"
                >
                  Global
                </button>
              </div>

              {/* Location Badge */}
              <div className="absolute bottom-5 left-5 right-5 text-white z-10 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-amber-400 font-semibold mb-0.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Nishant Pandey</span>
                  </div>
                  <p className="text-xs text-slate-300 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    {activePhoto === 'urban' ? 'Community Field Leader' : 'Tower Bridge, London (Outreach)'}
                  </p>
                </div>
                <span className="text-[11px] font-mono bg-white/15 px-2.5 py-1 rounded-md text-white border border-white/10">
                  {activePhoto === 'urban' ? 'Photo 1 of 2' : 'Photo 2 of 2'}
                </span>
              </div>
            </div>

            {/* Quick floating stat below portrait on large screens */}
            <div className="mt-4 flex items-center gap-4 text-xs text-slate-400 max-w-md w-full justify-between px-2">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Active on Grassroots Frontlines
              </span>
              <span>New Delhi & Worldwide</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
