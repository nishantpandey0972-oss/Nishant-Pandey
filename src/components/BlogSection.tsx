import React, { useState } from 'react';
import { BookOpen, Search, Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { BLOG_POSTS } from '../data/portfolioData';
import { BlogPost } from '../types';
import { filterBlogPosts, formatDate } from '../utils/helpers';
import { BlogModal } from './BlogModal';

interface BlogSectionProps {
  onArticleInquiry: (subjectTopic: string) => void;
}

const BLOG_CATEGORIES = [
  'All',
  'Community Leadership',
  'Education & Youth',
  'Field Stories',
  'Philanthropy'
];

export const BlogSection: React.FC<BlogSectionProps> = ({ onArticleInquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const filteredPosts = filterBlogPosts(BLOG_POSTS, selectedCategory, searchQuery);

  return (
    <section id="blog" className="py-24 bg-[#0a0b0e] text-slate-100 border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-3">
              <BookOpen className="w-3.5 h-3.5 text-sky-400" />
              Field Notes & Articles
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Perspectives on Social Change
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Authentic reflections from the frontlines of grassroots activism, ethical philanthropy, and community resilience.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles, keywords..."
              className="w-full bg-[#151720] border border-white/10 rounded-full pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white transition-all"
              aria-label="Search blog articles"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar" role="tablist">
          {BLOG_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              role="tab"
              aria-selected={selectedCategory === cat}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-white text-black shadow-md'
                  : 'bg-[#151720] text-slate-300 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid of Articles */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 bg-[#12141a] rounded-2xl border border-white/10">
            <p className="text-slate-400 text-sm mb-4">
              No articles found matching "{searchQuery}" in {selectedCategory}.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-full bg-white/10 text-white text-xs font-semibold hover:bg-white/20 transition-all"
            >
              Reset Search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-[#12141c] rounded-2xl p-7 border border-white/10 hover:border-white/25 transition-all flex flex-col justify-between group shadow-lg hover:translate-y-[-3px]"
              >
                <div>
                  {/* Category and Read Time */}
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-4">
                    <span className="px-2.5 py-1 rounded-md bg-white/5 text-slate-300 border border-white/10 font-medium">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 font-mono text-[11px]">
                      <Clock className="w-3 h-3 text-slate-500" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-slate-200 transition-colors line-clamp-2 font-display">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10px] bg-white/5 text-slate-400 border border-white/5"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom strip: Author + Read Action */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={post.author.avatarUrl}
                        alt={post.author.name}
                        className="w-7 h-7 rounded-full object-cover border border-white/20"
                      />
                      <span className="text-xs text-slate-300 font-medium">
                        {post.author.name}
                      </span>
                    </div>

                    <button
                      onClick={() => setSelectedPost(post)}
                      type="button"
                      className="text-xs font-bold text-white hover:text-slate-300 flex items-center gap-1 group/link focus:outline-none"
                    >
                      <span>Read Story</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

      </div>

      {/* Reader Modal */}
      <BlogModal
        post={selectedPost}
        onClose={() => setSelectedPost(null)}
        onInquire={onArticleInquiry}
      />
    </section>
  );
};
