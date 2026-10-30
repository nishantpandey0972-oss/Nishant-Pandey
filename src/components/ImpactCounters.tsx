import React from 'react';
import { Users, HeartHandshake, Sparkles, Award, GraduationCap, Activity, Flame, ShieldCheck } from 'lucide-react';
import { IMPACT_METRICS, CORE_PILLARS } from '../data/portfolioData';

export const ImpactCounters: React.FC = () => {
  const getMetricIcon = (name: string) => {
    switch (name) {
      case 'Users':
        return <Users className="w-6 h-6 text-emerald-400" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-amber-400" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-sky-400" />;
      case 'Award':
        return <Award className="w-6 h-6 text-purple-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-white" />;
    }
  };

  const getPillarIcon = (name: string) => {
    switch (name) {
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-sky-400" />;
      case 'Activity':
        return <Activity className="w-6 h-6 text-rose-400" />;
      case 'Flame':
        return <Flame className="w-6 h-6 text-amber-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-white" />;
    }
  };

  return (
    <section id="impact" className="py-20 bg-[#0e1015] border-t border-b border-white/10 relative overflow-hidden">
      {/* Decorative ambient light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-white/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            Quantifiable Impact
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Empowerment Grounded in Real Outcomes
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            Social work is not judged by promises, but by measurable shifts in human lives. Here is how Nishant Pandey’s decade of grassroots mobilization translates into community progress.
          </p>
        </div>

        {/* 4 Core Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {IMPACT_METRICS.map((metric) => (
            <div
              key={metric.id}
              className="bg-[#15171e] rounded-2xl p-7 border border-white/10 hover:border-white/25 transition-all hover:translate-y-[-4px] shadow-lg group"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                {getMetricIcon(metric.iconName)}
              </div>
              <div className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-1 font-display">
                {metric.value}
              </div>
              <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider mb-2">
                {metric.label}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {metric.subtext}
              </p>
            </div>
          ))}
        </div>

        {/* 4 Pillars of Action */}
        <div>
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 pb-4 border-b border-white/10 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-slate-400 font-mono">
                FOCUS HORIZONS
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                Core Pillars of Grassroots Work
              </h3>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              Targeted interventions designed for long-term sustainability rather than fleeting charity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CORE_PILLARS.map((pillar, index) => (
              <div
                key={pillar.title}
                className="bg-[#12141a] rounded-xl p-6 border border-white/5 hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                      {getPillarIcon(pillar.icon)}
                    </div>
                    <span className="font-mono text-xs text-slate-500 font-bold">
                      0{index + 1}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
