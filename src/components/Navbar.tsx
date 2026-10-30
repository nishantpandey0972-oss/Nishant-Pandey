import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { CLIENT_INFO } from '../data/portfolioData';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About me', href: '#about' },
    { label: 'Initiatives', href: '#initiatives' },
    { label: 'Impact', href: '#impact' },
    { label: 'Blog', href: '#blog' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0c0d10]/95 backdrop-blur-md border-b border-white/10 shadow-lg py-3'
          : 'bg-[#0c0d10]/90 lg:bg-transparent backdrop-blur-md lg:backdrop-blur-none py-3 lg:py-5 border-b border-white/10 lg:border-none'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Monogram Brand Logo matching template */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-white/50 rounded-lg p-1"
          aria-label="Nishant Pandey Portfolio Home"
        >
          <div className="w-10 h-10 rounded-lg bg-black text-white border border-white/20 flex items-center justify-center font-bold text-lg tracking-tighter shadow-md group-hover:scale-105 transition-transform">
            <span className="font-display font-black text-xl tracking-tight">NP</span>
          </div>
          <div className="flex flex-col">
            <span
              className={`font-bold tracking-tight text-base sm:text-lg transition-colors ${
                isScrolled
                  ? 'text-white group-hover:text-slate-200'
                  : 'text-white lg:text-slate-900 group-hover:text-slate-200 lg:group-hover:text-black'
              }`}
            >
              {CLIENT_INFO.name}
            </span>
            <span
              className={`text-[10px] sm:text-xs font-bold tracking-wide uppercase ${
                isScrolled ? 'text-slate-400' : 'text-slate-400 lg:text-slate-600'
              }`}
            >
              Social Work & Impact
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-slate-200 hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-white hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}

          {/* CONTACT ME Pill Button - faithful to the template screenshot */}
          <button
            onClick={onContactClick}
            type="button"
            className="px-6 py-2.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-slate-200 active:scale-95 transition-all shadow-md hover:shadow-white/20 flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0c0d10]"
          >
            CONTACT ME
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={onContactClick}
            type="button"
            className="px-3.5 py-1.5 rounded-full bg-white text-black font-bold text-[11px] uppercase tracking-wider"
          >
            Contact
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0d10] border-b border-white/10 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-300 hover:text-white py-2 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onContactClick();
                }}
                type="button"
                className="w-full py-3 rounded-full bg-white text-black font-bold text-sm uppercase tracking-wider text-center"
              >
                CONTACT ME
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
