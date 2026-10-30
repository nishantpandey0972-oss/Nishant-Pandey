import { useState, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ImpactCounters } from './components/ImpactCounters';
import { AboutSection } from './components/AboutSection';
import { InitiativesSection } from './components/InitiativesSection';
import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { InquiryCategory } from './types';

export default function App() {
  const [inquirySubject, setInquirySubject] = useState<string>('');
  const [inquiryCategory, setInquiryCategory] = useState<InquiryCategory>('partnership');

  const scrollToContact = useCallback(() => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const scrollToInitiatives = useCallback(() => {
    const initiativesEl = document.getElementById('initiatives');
    if (initiativesEl) {
      initiativesEl.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handlePartnerInquiry = useCallback((initiativeTitle: string) => {
    setInquirySubject(`Partnership Interest: ${initiativeTitle}`);
    setInquiryCategory('partnership');
    scrollToContact();
  }, [scrollToContact]);

  const handleArticleInquiry = useCallback((articleTitle: string) => {
    setInquirySubject(`Discussion on Article: "${articleTitle}"`);
    setInquiryCategory('speaking');
    scrollToContact();
  }, [scrollToContact]);

  return (
    <div className="min-h-screen bg-[#0c0d10] text-slate-100 flex flex-col selection:bg-white selection:text-black">
      {/* Top Navigation */}
      <Navbar onContactClick={scrollToContact} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section - Modeled faithfully after template screenshot */}
        <Hero
          onContactClick={scrollToContact}
          onExploreWorkClick={scrollToInitiatives}
        />

        {/* Quantifiable Impact & Focus Horizons */}
        <ImpactCounters />

        {/* About Nishant Pandey */}
        <AboutSection onContactClick={scrollToContact} />

        {/* Social Work Portfolio & Case Studies */}
        <InitiativesSection onPartnerInquiry={handlePartnerInquiry} />

        {/* Blog & Thought Leadership */}
        <BlogSection onArticleInquiry={handleArticleInquiry} />

        {/* Contact & Inquiry Form */}
        <ContactSection
          initialSubject={inquirySubject}
          initialCategory={inquiryCategory}
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
