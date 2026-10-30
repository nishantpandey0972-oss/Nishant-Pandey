import React, { useState } from 'react';
import { Search, MapPin, ArrowRight, Sparkles, Filter } from 'lucide-react';
import { INITIATIVES } from '../data/portfolioData';
import { Initiative } from '../types';
import { filterInitiatives } from '../utils/helpers';
import { InitiativeModal } from './InitiativeModal';

interface InitiativesSectionProps {
  onPartnerInquiry: (initiativeTitle: string) => void;
}

const CATEGORIES = [
  'All',
  'Education',
  'Healthcare',
  'Women Empowerment',
  'Relief',
  'Community Development'
];

export const InitiativesSection: React.FC<InitiativesSectionProps> = ({ onPartnerInquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedInitiative, setSelectedInitiative] = useState<Initiative | null>(null);

  const filtered = filterInitiatives(INITIATIVES, selectedCategory, searchQuery);

  const handleInquiryFromModal = (title: string) => {
    setSelectedInitiative(null);
    onPartnerInquiry(title);
  };

  return (
    <section id="initiatives" className="py-24 bg-[#0d0f14] text-slate-100 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              Social Work Portfolio
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Flagship Field Initiatives
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              From solar-powered digital education hubs to mobile healthcare vans and women's cooperatives—designed for community self-reliance.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search initiatives, cities..."
              className="w-full bg-[#161821] border border-white/10 rounded-full pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all"
              aria-label="Search initiatives"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar" role="tablist">
          <span className="text-xs text-slate-400 font-medium mr-2 hidden sm:flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" />
            Filter:
          </span>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              role="tab"
              aria-selected={selectedCategory === cat}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-white text-black shadow-md'
                  : 'bg-[#161821] text-slate-300 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 bg-[#12141a] rounded-2xl border border-white/10">
            <p className="text-slate-400 text-sm mb-4">
              No initiatives found matching "{searchQuery}" in {selectedCategory}.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-full bg-white/10 text-white text-xs font-semibold hover:bg-white/20 transition-all"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="bg-[#13151c] rounded-2xl overflow-hidden border border-white/10 hover:border-white/25 transition-all flex flex-col justify-between group shadow-lg hover:translate-y-[-4px]"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#13151c] via-black/30 to-transparent" />

                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-md text-[11px] font-bold text-white border border-white/10">
                        {item.category}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-slate-300">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-slate-200 transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed mb-6 line-clamp-3">
                      {item.summary}
                    </p>

                    {/* Quick impact stat snapshot */}
                    <div className="grid grid-cols-2 gap-2 pt-4 border-t border-white/5 mb-2">
                      {item.impactStats.slice(0, 2).map((stat, idx) => (
                        <div key={idx} className="bg-white/5 rounded-lg p-2.5">
                          <div className="text-sm font-bold text-white font-display">
                            {stat.value}
                          </div>
                          <div className="text-[10px] text-slate-400 truncate">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="px-6 pb-6 pt-2">
                  <button
                    onClick={() => setSelectedInitiative(item)}
                    type="button"
                    className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-white text-slate-200 hover:text-black font-semibold text-xs transition-all flex items-center justify-center gap-1.5 border border-white/10 hover:border-transparent group/btn"
                  >
                    <span>View Full Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Modal Dialog */}
      <InitiativeModal
        initiative={selectedInitiative}
        onClose={() => setSelectedInitiative(null)}
        onPartnerInquiry={handleInquiryFromModal}
      />
    </section>
  );
};
