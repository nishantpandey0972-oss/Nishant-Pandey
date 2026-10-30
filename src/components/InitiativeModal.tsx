import React, { useEffect } from 'react';
import { X, MapPin, Calendar, CheckCircle2, Building2, ArrowRight } from 'lucide-react';
import { Initiative } from '../types';

interface InitiativeModalProps {
  initiative: Initiative | null;
  onClose: () => void;
  onPartnerInquiry: (initiativeTitle: string) => void;
}

export const InitiativeModal: React.FC<InitiativeModalProps> = ({
  initiative,
  onClose,
  onPartnerInquiry
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (initiative) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [initiative, onClose]);

  if (!initiative) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-initiative-title"
    >
      <div
        className="bg-[#12141a] text-slate-100 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/15 shadow-2xl relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cover Image */}
        <div className="relative h-60 sm:h-72 w-full overflow-hidden flex-shrink-0 bg-slate-900">
          <img
            src={initiative.imageUrl}
            alt={initiative.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#12141a] via-[#12141a]/40 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            type="button"
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-all border border-white/20 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Category & Status Badges */}
          <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider">
              {initiative.category}
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold">
              {initiative.status}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h3 id="modal-initiative-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
              {initiative.title}
            </h3>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-500" />
                {initiative.location}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                Initiated in {initiative.yearStarted}
              </span>
            </div>
          </div>

          {/* Impact Stats Grid */}
          <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
            {initiative.impactStats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-xl sm:text-2xl font-black text-white font-display">
                  {stat.value}
                </div>
                <div className="text-[11px] text-slate-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Full Narrative */}
          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed whitespace-pre-line border-t border-b border-white/10 py-6">
            {initiative.fullStory}
          </div>

          {/* Partner Organizations */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-slate-500" />
              Partner Organizations & Civic Bodies
            </h4>
            <div className="flex flex-wrap gap-2">
              {initiative.partnerOrgs.map((partner) => (
                <span
                  key={partner}
                  className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-slate-300 flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  {partner}
                </span>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={() => onPartnerInquiry(initiative.title)}
              type="button"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-slate-200 transition-all flex items-center justify-center gap-2"
            >
              Partner / Inquire About This
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onClose}
              type="button"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-white/10 text-white font-semibold text-xs uppercase tracking-wider hover:bg-white/20 transition-all"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
