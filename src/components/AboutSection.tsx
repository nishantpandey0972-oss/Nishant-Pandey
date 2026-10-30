import React from 'react';
import { Quote, Heart, Target, Compass, Globe, Check, ArrowRight } from 'lucide-react';
import { CLIENT_INFO, TESTIMONIALS } from '../data/portfolioData';

interface AboutSectionProps {
  onContactClick: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  return (
    <section id="about" className="py-24 bg-[#0a0b0e] text-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Visual Column + Narrative Column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          
          {/* Image Column (Featuring Photo 2 at Tower Bridge) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Backing decorative frame */}
              <div className="absolute -inset-3 bg-gradient-to-tr from-white/10 to-transparent rounded-3xl -rotate-2 -z-10" />

              {/* Main Photo Card */}
              <div className="rounded-2xl overflow-hidden border border-white/15 bg-slate-900 shadow-2xl relative group">
                <img
                  src={CLIENT_INFO.portraitImage}
                  alt="Nishant Pandey at Tower Bridge London"
                  className="w-full h-[480px] sm:h-[520px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                {/* Floating caption card */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-white/20">
                  <p className="text-white font-bold text-sm">
                    {CLIENT_INFO.name}
                  </p>
                  <p className="text-xs text-slate-300 flex items-center gap-1 mt-0.5">
                    <Globe className="w-3.5 h-3.5 text-sky-400" />
                    Bridging grassroots action with global social advocacy
                  </p>
                </div>
              </div>

              {/* Micro badge pill */}
              <div className="absolute -top-4 -right-4 bg-white text-black px-4 py-2 rounded-full font-bold text-xs uppercase tracking-wider shadow-xl border border-slate-200 hidden sm:flex items-center gap-1.5">
                <Heart className="w-3.5 h-3.5 fill-red-500 text-red-500" />
                Community First
              </div>
            </div>
          </div>

          {/* Narrative Column */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-4">
              <Compass className="w-3.5 h-3.5 text-sky-400" />
              About Nishant Pandey
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
              A Life Dedicated to Restoring Dignity & Unlocking Human Potential
            </h2>

            <div className="space-y-4 text-slate-300 text-base leading-relaxed mb-8">
              <p>
                Nishant Pandey is an accomplished social work leader, philanthropist, and community builder with over twelve years of continuous on-the-ground service. Rooted in deep empathy and rigorous operational planning, his work bridges the divide between marginalized grassroots settlements and sustainable opportunities.
              </p>
              <p>
                Rather than treating social development as short-term charity, Nishant champions a model of <strong>radical community ownership</strong>. Through digital education centers, mobile medical vans, and vocational cooperatives, he equips families with the tools, skills, and dignity required to lift themselves out of poverty.
              </p>
              <p>
                His advocacy has touched more than 45,000 lives across peri-urban settlements, slums, and rural districts, fostering partnerships with non-profits, civic agencies, and international humanitarian forums.
              </p>
            </div>

            {/* Core Values Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                'Grassroots Community Sovereignty',
                'Zero-Intermediary Relief Logistics',
                'Accessible Digital Classrooms for All',
                'Transparent Donor & Public Reporting'
              ].map((value) => (
                <div key={value} className="flex items-center gap-2.5 text-sm text-slate-200">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </div>
                  <span>{value}</span>
                </div>
              ))}
            </div>

            {/* Quote block */}
            <div className="bg-[#14161d] rounded-xl p-5 border-l-4 border-white border border-white/10 mb-8 relative">
              <Quote className="w-6 h-6 text-slate-500 mb-2" />
              <p className="text-slate-200 italic text-sm sm:text-base leading-relaxed">
                "Real change isn't measured in headlines or photo opportunities; it is seen in the dignity restored to every single family we walk alongside."
              </p>
              <p className="text-xs text-slate-400 font-semibold mt-2">
                — Nishant Pandey
              </p>
            </div>

            {/* Action CTA */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onContactClick}
                type="button"
                className="px-6 py-3 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-slate-200 active:scale-95 transition-all shadow-md flex items-center gap-2"
              >
                Inquire For Advisory & Talks
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <a
                href="#initiatives"
                className="px-6 py-3 rounded-full bg-white/10 text-white font-bold text-xs uppercase tracking-wider hover:bg-white/20 active:scale-95 transition-all border border-white/15"
              >
                Explore Active Initiatives
              </a>
            </div>

          </div>

        </div>

        {/* Community Words & Testimonials */}
        <div className="pt-16 border-t border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-slate-400 font-mono">
              COMMUNITY VOICES
            </span>
            <h3 className="text-2xl font-bold text-white mt-1">
              Words From The Field & Partners
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, index) => (
              <div
                key={index}
                className="bg-[#12141a] rounded-2xl p-6 border border-white/10 flex flex-col justify-between"
              >
                <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
                <div className="pt-4 border-t border-white/5">
                  <p className="text-white font-bold text-sm">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.role}</p>
                  <p className="text-[11px] text-slate-500">{t.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
