import { InquiryFormData, FormErrors, Initiative, BlogPost, InquiryCategory } from '../types';

export const VALID_CATEGORIES: InquiryCategory[] = [
  'partnership',
  'speaking',
  'volunteer',
  'donation',
  'media',
  'general'
];

/**
 * Validates the contact/inquiry form submission.
 */
export function validateInquiryForm(data: Partial<InquiryFormData>): {
  isValid: boolean;
  errors: FormErrors;
} {
  const errors: FormErrors = {};

  // Full name validation
  if (!data.fullName || data.fullName.trim().length === 0) {
    errors.fullName = 'Please enter your full name.';
  } else if (data.fullName.trim().length < 2) {
    errors.fullName = 'Name must be at least 2 characters long.';
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || data.email.trim().length === 0) {
    errors.email = 'Please provide your email address.';
  } else if (!emailRegex.test(data.email.trim())) {
    errors.email = 'Please enter a valid email address (e.g. name@example.com).';
  }

  // Inquiry category validation
  if (!data.inquiryType || !VALID_CATEGORIES.includes(data.inquiryType)) {
    errors.inquiryType = 'Please select a valid inquiry type.';
  }

  // Subject validation
  if (!data.subject || data.subject.trim().length === 0) {
    errors.subject = 'Please enter a subject for your message.';
  } else if (data.subject.trim().length < 3) {
    errors.subject = 'Subject must be at least 3 characters long.';
  }

  // Message validation
  if (!data.message || data.message.trim().length === 0) {
    errors.message = 'Please provide details in the message field.';
  } else if (data.message.trim().length < 15) {
    errors.message = 'Please provide a bit more detail (minimum 15 characters).';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

/**
 * Filters initiatives by category and search query.
 */
export function filterInitiatives(
  initiatives: Initiative[],
  category: string,
  query: string
): Initiative[] {
  const normalizedQuery = (query || '').trim().toLowerCase();

  return initiatives.filter((item) => {
    const matchesCategory =
      category === 'All' || item.category.toLowerCase() === category.toLowerCase();

    if (!matchesCategory) return false;
    if (!normalizedQuery) return true;

    const inTitle = item.title.toLowerCase().includes(normalizedQuery);
    const inSummary = item.summary.toLowerCase().includes(normalizedQuery);
    const inLocation = item.location.toLowerCase().includes(normalizedQuery);
    const inPartners = item.partnerOrgs.some((p) => p.toLowerCase().includes(normalizedQuery));

    return inTitle || inSummary || inLocation || inPartners;
  });
}

/**
 * Filters blog posts by category and search query.
 */
export function filterBlogPosts(
  posts: BlogPost[],
  category: string,
  query: string
): BlogPost[] {
  const normalizedQuery = (query || '').trim().toLowerCase();

  return posts.filter((post) => {
    const matchesCategory =
      category === 'All' || post.category.toLowerCase() === category.toLowerCase();

    if (!matchesCategory) return false;
    if (!normalizedQuery) return true;

    const inTitle = post.title.toLowerCase().includes(normalizedQuery);
    const inExcerpt = post.excerpt.toLowerCase().includes(normalizedQuery);
    const inTags = post.tags.some((t) => t.toLowerCase().includes(normalizedQuery));

    return inTitle || inExcerpt || inTags;
  });
}

/**
 * Generates an inquiry reference code.
 */
export function generateInquiryReference(): string {
  const randomSuffix = Math.floor(1000 + Math.random() * 9000);
  return `NP-INQ-${new Date().getFullYear()}-${randomSuffix}`;
}

/**
 * Formats a date string.
 */
export function formatDate(dateStr: string): string {
  try {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  } catch {
    return dateStr;
  }
}
