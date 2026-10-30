import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, Copy, Check, MessageSquare, AlertCircle, ArrowRight } from 'lucide-react';
import { CLIENT_INFO } from '../data/portfolioData';
import { InquiryFormData, FormErrors, InquirySubmission, InquiryCategory } from '../types';
import { validateInquiryForm, generateInquiryReference } from '../utils/helpers';

interface ContactSectionProps {
  initialSubject?: string;
  initialCategory?: InquiryCategory;
}

const INQUIRY_CATEGORIES: { id: InquiryCategory; label: string; desc: string }[] = [
  { id: 'partnership', label: 'NGO / Foundation Partnership', desc: 'Joint initiatives, CSR, co-funding' },
  { id: 'speaking', label: 'Keynote / Panel Talk', desc: 'Summits, universities, workshops' },
  { id: 'volunteer', label: 'Volunteering & Mentorship', desc: 'Join on-ground field drives' },
  { id: 'donation', label: 'Direct Project Support', desc: 'Equipping labs, supplies & relief' },
  { id: 'media', label: 'Press & Media Interview', desc: 'Stories, coverage, articles' },
  { id: 'general', label: 'General Inquiry', desc: 'Say hello or ask a question' }
];

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialSubject = '',
  initialCategory = 'partnership'
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    email: '',
    organization: '',
    inquiryType: initialCategory,
    subject: initialSubject,
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof InquiryFormData, boolean>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedInquiry, setSubmittedInquiry] = useState<InquirySubmission | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedTicket, setCopiedTicket] = useState(false);

  // Update subject if passed from another section
  React.useEffect(() => {
    if (initialSubject) {
      setFormData((prev) => ({
        ...prev,
        subject: initialSubject,
        inquiryType: initialCategory || prev.inquiryType
      }));
    }
  }, [initialSubject, initialCategory]);

  const handleChange = (
    field: keyof InquiryFormData,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const validation = validateInquiryForm({ ...formData, [field]: value });
      setErrors((prev) => ({ ...prev, [field]: validation.errors[field] }));
    }
  };

  const handleBlur = (field: keyof InquiryFormData) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const validation = validateInquiryForm(formData);
    setErrors((prev) => ({ ...prev, [field]: validation.errors[field] }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({
      fullName: true,
      email: true,
      organization: true,
      inquiryType: true,
      subject: true,
      message: true
    });

    const validation = validateInquiryForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable dispatch & reference generation
    setTimeout(() => {
      const submission: InquirySubmission = {
        ...formData,
        id: generateInquiryReference(),
        submittedAt: new Date().toISOString(),
        status: 'received'
      };
      setSubmittedInquiry(submission);
      setIsSubmitting(false);
      setErrors({});
    }, 800);
  };

  const handleResetForm = () => {
    setSubmittedInquiry(null);
    setFormData({
      fullName: '',
      email: '',
      organization: '',
      inquiryType: 'partnership',
      subject: '',
      message: ''
    });
    setTouched({});
    setErrors({});
  };

  const handleCopyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(CLIENT_INFO.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  const handleCopyTicket = (id: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(id);
      setCopiedTicket(true);
      setTimeout(() => setCopiedTicket(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0d0e12] text-slate-100 relative overflow-hidden">
      
      {/* Decorative gradient orb */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
            Connect & Collaborate
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 font-display">
            Start a Conversation with Nishant
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Whether you are an NGO exploring joint initiatives, an academic institution hosting a symposium, or a volunteer ready to hit the ground running—every great movement begins with a conversation.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Info & Availability */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#13151c] rounded-2xl p-8 border border-white/10 shadow-xl space-y-6">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Direct Channels
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Nishant personally reviews all proposals, speaking invitations, and collaboration requests.
              </p>

              {/* Email Card */}
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-white">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 uppercase tracking-wider block font-semibold">
                      Primary Email
                    </span>
                    <a
                      href={`mailto:${CLIENT_INFO.email}`}
                      className="text-sm font-bold text-white hover:text-slate-200 transition-colors break-all"
                    >
                      {CLIENT_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  type="button"
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 transition-all flex items-center justify-center"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Response Time & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-[11px] text-slate-400 font-semibold block">Response Time</span>
                    <span className="text-xs text-slate-200 font-medium">Within 24–48 hours</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-sky-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-[11px] text-slate-400 font-semibold block">Locations</span>
                    <span className="text-xs text-slate-200 font-medium">Delhi NCR & London</span>
                  </div>
                </div>
              </div>

              {/* Focus Areas for Engagement */}
              <div className="pt-4 border-t border-white/10">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-bold block mb-3">
                  Open For Collaboration In
                </span>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    CSR & Philanthropic Grant Direction
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    University Lectures & Youth Keynotes
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    Grassroots Healthcare & Education Infrastructure
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    Emergency Disaster Mobilization
                  </li>
                </ul>
              </div>
            </div>

            {/* Quote Badge */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-white/5 to-white/10 border border-white/10">
              <p className="text-xs text-slate-300 italic leading-relaxed">
                "Partnership is about alignment of values before alignment of budgets. If your heart is set on uplifting human lives, we will always find common ground."
              </p>
              <span className="text-[11px] text-white font-bold block mt-2">
                — Nishant Pandey
              </span>
            </div>
          </div>

          {/* Right Column: Contact & Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#12141c] rounded-2xl p-6 sm:p-10 border border-white/15 shadow-2xl relative">
              
              {/* Form or Success State */}
              {submittedInquiry ? (
                /* Success View */
                <div className="py-8 text-center space-y-6 animate-in zoom-in-95 duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Inquiry Received Successfully!
                    </h3>
                    <p className="text-slate-300 text-sm max-w-md mx-auto">
                      Thank you, <strong className="text-white">{submittedInquiry.fullName}</strong>. Nishant has received your message and will review it shortly.
                    </p>
                  </div>

                  {/* Inquiry Receipt Card */}
                  <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-left max-w-md mx-auto space-y-3">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <span className="text-xs text-slate-400">Reference ID:</span>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-amber-400">
                          {submittedInquiry.id}
                        </span>
                        <button
                          onClick={() => handleCopyTicket(submittedInquiry.id)}
                          type="button"
                          className="text-slate-400 hover:text-white"
                          title="Copy reference code"
                          aria-label="Copy reference code"
                        >
                          {copiedTicket ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </div>

                    <div className="text-xs space-y-1.5 text-slate-300">
                      <div>
                        <span className="text-slate-400">Category: </span>
                        <span className="capitalize font-semibold text-white">{submittedInquiry.inquiryType}</span>
                      </div>
                      <div>
                        <span className="text-slate-400">Subject: </span>
                        <span className="font-medium text-white">{submittedInquiry.subject}</span>
                      </div>
                      <div>
                        <span className="text-slate-400">Contact Email: </span>
                        <span className="font-medium text-white">{submittedInquiry.email}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                      onClick={handleResetForm}
                      type="button"
                      className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-slate-200 transition-all"
                    >
                      Send Another Inquiry
                    </button>
                    <a
                      href={`mailto:${CLIENT_INFO.email}?subject=Follow-up on ${submittedInquiry.id}`}
                      className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-white/10 text-white font-semibold text-xs uppercase tracking-wider hover:bg-white/20 transition-all border border-white/10"
                    >
                      Email Direct Follow-up
                    </a>
                  </div>
                </div>
              ) : (
                /* Contact Form */
                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight mb-1">
                      Inquiry & Partnership Form
                    </h3>
                    <p className="text-xs text-slate-400">
                      Please provide details so we can direct your request to the right field taskforce.
                    </p>
                  </div>

                  {/* Inquiry Type Selector Pills */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2.5">
                      Nature of Inquiry *
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {INQUIRY_CATEGORIES.map((cat) => (
                        <button
                          key={cat.id}
                          type="button"
                          onClick={() => handleChange('inquiryType', cat.id)}
                          className={`p-2.5 rounded-xl text-left border transition-all flex flex-col justify-between ${
                            formData.inquiryType === cat.id
                              ? 'bg-white text-black border-white shadow-md'
                              : 'bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 border-white/10'
                          }`}
                        >
                          <span className="text-xs font-bold leading-tight">
                            {cat.label}
                          </span>
                          <span className={`text-[10px] mt-1 leading-snug ${
                            formData.inquiryType === cat.id ? 'text-slate-700' : 'text-slate-400'
                          }`}>
                            {cat.desc}
                          </span>
                        </button>
                      ))}
                    </div>
                    {errors.inquiryType && (
                      <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        {errors.inquiryType}
                      </p>
                    )}
                  </div>

                  {/* Name and Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="inquiry-fullname" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        id="inquiry-fullname"
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => handleChange('fullName', e.target.value)}
                        onBlur={() => handleBlur('fullName')}
                        placeholder="e.g. Maya Iyer"
                        className={`w-full bg-[#181a24] border rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none transition-all ${
                          errors.fullName
                            ? 'border-rose-500 focus:ring-1 focus:ring-rose-500'
                            : 'border-white/10 focus:ring-1 focus:ring-white focus:border-white'
                        }`}
                        required
                        aria-invalid={!!errors.fullName}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="inquiry-email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        id="inquiry-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        onBlur={() => handleBlur('email')}
                        placeholder="e.g. maya@domain.org"
                        className={`w-full bg-[#181a24] border rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none transition-all ${
                          errors.email
                            ? 'border-rose-500 focus:ring-1 focus:ring-rose-500'
                            : 'border-white/10 focus:ring-1 focus:ring-white focus:border-white'
                        }`}
                        required
                        aria-invalid={!!errors.email}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Organization & Subject */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="inquiry-org" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Organization / Foundation <span className="text-slate-400 font-normal">(Optional)</span>
                      </label>
                      <input
                        id="inquiry-org"
                        type="text"
                        value={formData.organization}
                        onChange={(e) => handleChange('organization', e.target.value)}
                        placeholder="e.g. Youth Education Trust"
                        className="w-full bg-[#181a24] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-white focus:border-white transition-all"
                      />
                    </div>

                    <div>
                      <label htmlFor="inquiry-subject" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Inquiry Subject *
                      </label>
                      <input
                        id="inquiry-subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) => handleChange('subject', e.target.value)}
                        onBlur={() => handleBlur('subject')}
                        placeholder="e.g. Invitation to Keynote Address"
                        className={`w-full bg-[#181a24] border rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none transition-all ${
                          errors.subject
                            ? 'border-rose-500 focus:ring-1 focus:ring-rose-500'
                            : 'border-white/10 focus:ring-1 focus:ring-white focus:border-white'
                        }`}
                        required
                        aria-invalid={!!errors.subject}
                      />
                      {errors.subject && (
                        <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.subject}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label htmlFor="inquiry-message" className="block text-xs font-semibold text-slate-300">
                        Detailed Message / Scope of Request *
                      </label>
                      <span className="text-[10px] text-slate-400">
                        {formData.message.length} chars (min 15)
                      </span>
                    </div>
                    <textarea
                      id="inquiry-message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      onBlur={() => handleBlur('message')}
                      placeholder="Share context, target timeline, location, and how we can collaborate effectively..."
                      className={`w-full bg-[#181a24] border rounded-xl p-4 text-xs text-white placeholder-slate-400 focus:outline-none transition-all resize-y ${
                        errors.message
                          ? 'border-rose-500 focus:ring-1 focus:ring-rose-500'
                          : 'border-white/10 focus:ring-1 focus:ring-white focus:border-white'
                      }`}
                      required
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-rose-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-full bg-white text-black font-bold text-xs uppercase tracking-wider hover:bg-slate-200 active:scale-[0.99] transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                          <span>Routing Inquiry to Nishant...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Official Inquiry</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-slate-400 text-center mt-3">
                      Submissions are transmitted securely and verified directly by Nishant Pandey's team.
                    </p>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
