export type InquiryCategory =
  | 'partnership'
  | 'speaking'
  | 'volunteer'
  | 'donation'
  | 'media'
  | 'general';

export interface InquiryFormData {
  fullName: string;
  email: string;
  organization?: string;
  inquiryType: InquiryCategory;
  subject: string;
  message: string;
}

export type FormErrors = Partial<Record<keyof InquiryFormData, string>>;

export interface InquirySubmission extends InquiryFormData {
  id: string;
  submittedAt: string;
  status: 'received' | 'in_review';
}

export interface MetricItem {
  id: string;
  label: string;
  value: string;
  subtext: string;
  iconName: string;
}

export interface Initiative {
  id: string;
  title: string;
  category: 'Education' | 'Healthcare' | 'Relief' | 'Women Empowerment' | 'Community Development';
  summary: string;
  fullStory: string;
  location: string;
  yearStarted: string;
  status: 'Active' | 'Expanding' | 'Completed Phase';
  impactStats: { label: string; value: string }[];
  partnerOrgs: string[];
  imageUrl: string;
  featured: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string[];
  category: 'Community Leadership' | 'Field Stories' | 'Education & Youth' | 'Philanthropy';
  readTime: string;
  publishedAt: string;
  author: {
    name: string;
    role: string;
    avatarUrl: string;
  };
  tags: string[];
  keyTakeaways: string[];
}
