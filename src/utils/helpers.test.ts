import test from 'node:test';
import assert from 'node:assert/strict';
import {
  validateInquiryForm,
  filterInitiatives,
  filterBlogPosts,
  generateInquiryReference,
  formatDate
} from './helpers';
import { Initiative, BlogPost } from '../types';

test('validateInquiryForm: returns errors when required fields are empty', () => {
  const result = validateInquiryForm({});
  assert.equal(result.isValid, false);
  assert.ok(result.errors.fullName);
  assert.ok(result.errors.email);
  assert.ok(result.errors.inquiryType);
  assert.ok(result.errors.subject);
  assert.ok(result.errors.message);
});

test('validateInquiryForm: catches invalid email format', () => {
  const result = validateInquiryForm({
    fullName: 'Ananya Sharma',
    email: 'not-an-email',
    inquiryType: 'partnership',
    subject: 'Project Collaboration',
    message: 'We would love to collaborate on the upcoming education initiative.'
  });
  assert.equal(result.isValid, false);
  assert.equal(
    result.errors.email,
    'Please enter a valid email address (e.g. name@example.com).'
  );
});

test('validateInquiryForm: accepts valid inquiry submission', () => {
  const result = validateInquiryForm({
    fullName: 'Rohit Verma',
    email: 'rohit@ngoalliance.org',
    inquiryType: 'speaking',
    subject: 'Keynote invitation for Social Impact Summit',
    message: 'We would be honored to host Nishant Pandey as our guest speaker.'
  });
  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
});

test('filterInitiatives: filters accurately by category and search terms', () => {
  const sampleInitiatives: Initiative[] = [
    {
      id: 'init-1',
      title: 'Project Vidya: Slum Youth Labs',
      category: 'Education',
      summary: 'Equipping youth with digital learning setups.',
      fullStory: '',
      location: 'New Delhi & NCR',
      yearStarted: '2021',
      status: 'Active',
      impactStats: [{ label: 'Students', value: '4,200+' }],
      partnerOrgs: ['TechForGood'],
      imageUrl: '',
      featured: true
    },
    {
      id: 'init-2',
      title: 'Aarogya Rural Care Drive',
      category: 'Healthcare',
      summary: 'Mobile clinic vans providing primary diagnosis.',
      fullStory: '',
      location: 'Varanasi Hinterlands',
      yearStarted: '2023',
      status: 'Active',
      impactStats: [{ label: 'Patients', value: '18,000+' }],
      partnerOrgs: ['Seva Trust'],
      imageUrl: '',
      featured: false
    }
  ];

  // Category filter
  const educationOnly = filterInitiatives(sampleInitiatives, 'Education', '');
  assert.equal(educationOnly.length, 1);
  assert.equal(educationOnly[0].id, 'init-1');

  // Search query
  const searched = filterInitiatives(sampleInitiatives, 'All', 'clinic');
  assert.equal(searched.length, 1);
  assert.equal(searched[0].id, 'init-2');

  // Location search
  const delhiMatches = filterInitiatives(sampleInitiatives, 'All', 'NCR');
  assert.equal(delhiMatches.length, 1);
  assert.equal(delhiMatches[0].id, 'init-1');
});

test('filterBlogPosts: filters articles by tag and keyword', () => {
  const samplePosts: BlogPost[] = [
    {
      id: 'blog-1',
      title: 'Dignity Over Charity: The Grassroots Way',
      slug: 'dignity-over-charity',
      excerpt: 'Rethinking humanitarian aid from community ownership lens.',
      content: ['Paragraph 1'],
      category: 'Community Leadership',
      readTime: '4 min read',
      publishedAt: '2026-08-10',
      author: { name: 'Nishant Pandey', role: 'Leader', avatarUrl: '' },
      tags: ['Grassroots', 'Empowerment'],
      keyTakeaways: ['Dignity is key']
    },
    {
      id: 'blog-2',
      title: 'Why Digital Literacy Can Close The Slum Divide',
      slug: 'digital-literacy-divide',
      excerpt: 'Providing smart device labs to marginalized children.',
      content: ['Paragraph 1'],
      category: 'Education & Youth',
      readTime: '5 min read',
      publishedAt: '2026-09-02',
      author: { name: 'Nishant Pandey', role: 'Leader', avatarUrl: '' },
      tags: ['Education', 'Tech'],
      keyTakeaways: ['Access matters']
    }
  ];

  const techFiltered = filterBlogPosts(samplePosts, 'All', 'digital');
  assert.equal(techFiltered.length, 1);
  assert.equal(techFiltered[0].id, 'blog-2');
});

test('generateInquiryReference: generates valid reference code', () => {
  const ref = generateInquiryReference();
  assert.match(ref, /^NP-INQ-\d{4}-\d{4}$/);
});
