import React, { useEffect, useState } from 'react';
import { X, Calendar, Clock, Bookmark, Share2, Check, ArrowRight } from 'lucide-react';
import { BlogPost } from '../types';
import { formatDate } from '../utils/helpers';

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
  onInquire: (subjectTopic: string) => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({ post, onClose, onInquire }) => {
  const [copied, setCopied] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (post) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [post, onClose]);

  if (!post) return null;

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-blog-title"
    >
      <div
        className="bg-[#12141a] text-slate-100 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/15 shadow-2xl relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="sticky top-0 bg-[#12141a]/95 backdrop-blur-md px-6 py-4 border-b border-white/10 flex items-center justify-between z-10">
          <span className="px-3 py-1 rounded-full bg-white/10 text-slate-300 text-xs font-semibold uppercase tracking-wider">
            {post.category}
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setBookmarked(!bookmarked)}
              type="button"
              className={`p-2 rounded-lg border transition-all ${
                bookmarked
                  ? 'bg-amber-500/20 text-amber-400 border-amber-500/30'
                  : 'bg-white/5 text-slate-300 hover:text-white border-white/10'
              }`}
              title={bookmarked ? 'Saved to bookmarks' : 'Bookmark article'}
              aria-label="Bookmark article"
            >
              <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-amber-400' : ''}`} />
            </button>

            <button
              onClick={handleShare}
              type="button"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-all flex items-center gap-1.5 text-xs"
              title="Share link"
              aria-label="Share article"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Share'}</span>
            </button>

            <button
              onClick={onClose}
              type="button"
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-all"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Article Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h2 id="modal-blog-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug mb-4 font-display">
              {post.title}
            </h2>

            {/* Meta author strip */}
            <div className="flex items-center gap-3.5 pb-6 border-b border-white/10">
              <img
                src={post.author.avatarUrl}
                alt={post.author.name}
                className="w-10 h-10 rounded-full object-cover border border-white/20"
              />
              <div>
                <p className="text-sm font-bold text-white">{post.author.name}</p>
                <div className="flex items-center gap-3 text-xs text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-slate-500" />
                    {formatDate(post.publishedAt)}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-500" />
                    {post.readTime}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Takeaways Box */}
          <div className="p-4 rounded-xl bg-slate-900 border border-white/10 space-y-2">
            <span className="text-xs uppercase tracking-wider text-amber-400 font-bold block">
              Key Insights from the Field
            </span>
            <ul className="space-y-1.5">
              {post.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 flex-shrink-0" />
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Paragraphs */}
          <div className="space-y-4 text-slate-200 text-sm sm:text-base leading-relaxed">
            {post.content.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          {/* Tags */}
          <div className="pt-4 border-t border-white/10">
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-md bg-white/5 text-[11px] text-slate-400 border border-white/5"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="p-5 rounded-xl bg-gradient-to-r from-white/10 to-transparent border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-sm font-bold text-white">
                Interested in discussing this topic or inviting Nishant to speak?
              </p>
              <p className="text-xs text-slate-400">
                Submit an inquiry or connect directly for workshops.
              </p>
            </div>
            <button
              onClick={() => {
                onClose();
                onInquire(post.title);
              }}
              type="button"
              className="px-5 py-2.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-slate-200 transition-all flex items-center gap-1.5 flex-shrink-0"
            >
              Discuss with Nishant
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
