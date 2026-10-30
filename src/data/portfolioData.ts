import { Initiative, BlogPost, MetricItem } from '../types';

export const CLIENT_INFO = {
  name: 'Nishant Pandey',
  monogram: 'NP',
  title: 'Social Work Leader & Grassroots Changemaker',
  headline: 'Hi, I am',
  tagline: 'Empowering marginalized communities, championing education for underprivileged youth, and mobilizing compassionate human networks to create lasting societal change.',
  email: 'nishantpandey0972@gmail.com',
  location: 'New Delhi / London (Global Outreach)',
  availability: 'Available for Advisory, NGO Partnerships & Speaking Engagements',
  heroImage: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_9.26.26_PM_189ea858.jpeg',
  portraitImage: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_9.26.26_PM__2__b673f468.jpeg',
  socialLinks: [
    { name: 'Email', icon: 'Mail', href: 'mailto:nishantpandey0972@gmail.com', label: 'nishantpandey0972@gmail.com' },
    { name: 'LinkedIn', icon: 'Linkedin', href: 'https://linkedin.com', label: 'linkedin.com/in/nishant-pandey' },
    { name: 'Twitter', icon: 'Twitter', href: 'https://twitter.com', label: '@nishantpandey' },
    { name: 'WhatsApp', icon: 'Phone', href: 'tel:+919876543210', label: '+91 98765 43210' }
  ]
};

export const IMPACT_METRICS: MetricItem[] = [
  {
    id: 'm1',
    label: 'Lives Impacted',
    value: '45,000+',
    subtext: 'Direct beneficiaries through grassroots education, rations & healthcare drives.',
    iconName: 'Users'
  },
  {
    id: 'm2',
    label: 'Community Drives',
    value: '130+',
    subtext: 'Field interventions executed in urban slums and rural underserved belts.',
    iconName: 'HeartHandshake'
  },
  {
    id: 'm3',
    label: 'Active Programs',
    value: '18+',
    subtext: 'Sustainable local initiatives spanning digital labs, vocational guilds & nutrition.',
    iconName: 'Sparkles'
  },
  {
    id: 'm4',
    label: 'Years of Dedication',
    value: '12+',
    subtext: 'Unwavering commitment to community empowerment and civic equity.',
    iconName: 'Award'
  }
];

export const CORE_PILLARS = [
  {
    title: 'Youth & Digital Literacy',
    description: 'Transforming underprivileged classrooms with smart learning tools, foundational reading programs, and computer labs.',
    icon: 'GraduationCap'
  },
  {
    title: 'Emergency Relief & Healthcare',
    description: 'Rapid-response nutrition distribution, free health diagnostic camps, and critical medicines in times of humanitarian distress.',
    icon: 'Activity'
  },
  {
    title: 'Women Livelihood Guilds',
    description: 'Vocational stitching, handicraft entrepreneurship, and financial literacy workshops to ensure women lead financially secure lives.',
    icon: 'Flame'
  },
  {
    title: 'Civic Infrastructure & Clean Water',
    description: 'Restoring local sanitation access, installation of solar water filtration kiosks, and green plantation drives in community spaces.',
    icon: 'ShieldCheck'
  }
];

export const INITIATIVES: Initiative[] = [
  {
    id: 'init-1',
    title: 'Project Vidya: Slum Education & Digital Literacy Labs',
    category: 'Education',
    summary: 'Building high-tech yet accessible digital study centers for first-generation school learners in densely populated informal settlements.',
    fullStory: `Project Vidya was born from a fundamental observation: during economic hardship, children in low-income settlements are the first to drop out of school. Nishant Pandey spearheaded this initiative to establish community-owned learning hubs operating after standard school hours.\n\nEach hub is equipped with solar-powered tablets, internet access, curated interactive STEM learning modules, and dedicated youth volunteers who provide homework assistance and life skills mentorship. Today, over 80% of enrolled students show measurable improvements in basic literacy and numeracy.`,
    location: 'NCR & Northern Regional Settlements',
    yearStarted: '2020',
    status: 'Expanding',
    impactStats: [
      { label: 'Students Enrolled', value: '4,200+' },
      { label: 'Digital Labs Built', value: '14' },
      { label: 'Volunteer Mentors', value: '85' }
    ],
    partnerOrgs: ['Digital Bridges Foundation', 'Jan Kalyan Sangh', 'Youth For Progress'],
    imageUrl: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1000&q=80',
    featured: true
  },
  {
    id: 'init-2',
    title: 'Aarogya Seva: Mobile Health & Preventive Care Vans',
    category: 'Healthcare',
    summary: 'Bringing certified doctors, diagnostic equipment, and free essential medication directly to families without hospital access.',
    fullStory: `Access to preventative primary healthcare remains a severe hurdle for daily-wage families. Missing a day of work to visit a distant government dispensary often means losing a day's livelihood.\n\nUnder Nishant's leadership, Aarogya Seva deploys custom medical vans visiting peri-urban clusters on regular weekly schedules. Certified general physicians, pediatricians, and optometrists perform screenings for diabetes, hypertension, malnutrition, and vision problems, while distributing essential medicines and hygiene kits free of charge.`,
    location: 'Suburban Districts & Rural Outskirts',
    yearStarted: '2021',
    status: 'Active',
    impactStats: [
      { label: 'Patients Treated', value: '18,500+' },
      { label: 'Free Glasses Distributed', value: '3,400+' },
      { label: 'Medical Camps Held', value: '92' }
    ],
    partnerOrgs: ['Seva Swasthya Trust', 'Rural Doctors Collective'],
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80',
    featured: true
  },
  {
    id: 'init-3',
    title: 'Prerana: Women Vocational Hubs & Micro-Enterprise',
    category: 'Women Empowerment',
    summary: 'Skill development in artisanal textiles, tailoring, and micro-commerce to foster financial autonomy for homemakers and young women.',
    fullStory: `Sustainable community resilience requires economic self-reliance. Prerana establishes self-help manufacturing collectives where women receive formal vocational training in garment tailoring, sustainable cloth bag creation, and organic candle craft.\n\nNishant worked directly with local market vendors and corporate gifting partners to guarantee upfront purchase orders for items produced by these women, ensuring fair living wages deposited directly into their personal bank accounts.`,
    location: 'Semi-Urban Clusters & Resettlement Colonies',
    yearStarted: '2022',
    status: 'Active',
    impactStats: [
      { label: 'Women Trained', value: '1,150+' },
      { label: 'Active Micro-Enterprises', value: '9' },
      { label: 'Avg Income Increase', value: '140%' }
    ],
    partnerOrgs: ['Mahila Pragati Parishad', 'CraftRoots Global'],
    imageUrl: 'https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&w=1000&q=80',
    featured: true
  },
  {
    id: 'init-4',
    title: 'Crisis Sahayata: Emergency Disaster & Relief Taskforce',
    category: 'Relief',
    summary: 'Rapid response distribution of food kits, clean drinking water, and winter warmth supplies during environmental crises.',
    fullStory: `Whether dealing with severe monsoon flooding or winter cold waves, vulnerable populations suffer disproportionately. Crisis Sahayata operates as a pre-mobilized emergency unit.\n\nWith a vetted logistics network, Nishant and his core team coordinate dry ration kits, insulated blankets, water purification tablets, and temporary shelter awnings within 24 hours of local distress signals. During seasonal freezes, over 12,000 high-grade winter blankets have been handed directly to street sleepers and shanty residents.`,
    location: 'Flood Plains & High Vulnerability Zones',
    yearStarted: '2019',
    status: 'Active',
    impactStats: [
      { label: 'Ration Kits Delivered', value: '24,000+' },
      { label: 'Blankets Distributed', value: '12,500+' },
      { label: 'Disaster Zones Served', value: '16' }
    ],
    partnerOrgs: ['Red Cross Regional Chapters', 'Disaster Relief Alliance'],
    imageUrl: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1000&q=80',
    featured: false
  },
  {
    id: 'init-5',
    title: 'Clean Jal & Eco-Roots: Sustainable Community Water',
    category: 'Community Development',
    summary: 'Community-run water filtration kiosks and localized tree canopy corridors in neglected residential belts.',
    fullStory: `Clean drinking water is an undisputed human right. Through Eco-Roots, community-managed gravity-based water purification systems were installed in 6 high-density neighborhoods where groundwater had become brackish.\n\nIn addition, Nishant mobilized youth clubs to plant 8,000 native shade trees along canals and school perimeters, training neighborhood guardians to maintain each sapling.`,
    location: 'Industrial Perimeter Settlements',
    yearStarted: '2023',
    status: 'Completed Phase',
    impactStats: [
      { label: 'Daily Clean Water Liters', value: '35,000L' },
      { label: 'Trees Planted', value: '8,200+' },
      { label: 'Families Served', value: '2,800+' }
    ],
    partnerOrgs: ['Clean Earth Initiatives', 'Jal Swaraj'],
    imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1000&q=80',
    featured: false
  },
  {
    id: 'init-6',
    title: 'Yuva Disha: Youth Apprenticeships & Career Mentoring',
    category: 'Education',
    summary: 'One-on-one career counseling, vocational trades training, and resume readiness for adolescents entering the modern workforce.',
    fullStory: `Bridging the gap between secondary school completion and meaningful employment is one of the greatest hurdles for underprivileged youth. Yuva Disha connects high school pass-outs with industry professionals for practical interview prep, soft skills training, and trade apprenticeships.\n\nGraduates of this program have transitioned into roles across retail, IT administration, solar installation, and cooperative banking.`,
    location: 'Metro Satellite Townships',
    yearStarted: '2024',
    status: 'Active',
    impactStats: [
      { label: 'Youth Counselled', value: '1,800+' },
      { label: 'Placements Secured', value: '620+' },
      { label: 'Corporate Partners', value: '22' }
    ],
    partnerOrgs: ['SkillUp India Network', 'Apex Training Academy'],
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80',
    featured: false
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'Dignity Over Charity: Rethinking How We Support Grassroots Communities',
    slug: 'dignity-over-charity',
    excerpt: 'True empowerment is never about top-down handouts. It is about creating transparent systems where community members are architects of their own destiny.',
    content: [
      `For over a decade on the ground, I have watched well-meaning organizations descend upon underserved villages with prefabricated solutions. They distribute supplies, take ceremonial photographs, and depart—only to find that six months later, the underlying systemic vulnerabilities remain entirely unchanged.`,
      `Human dignity must be the starting principle of social work, not a convenient afterthought. When you approach a mother living in an informal settlement not as a 'beneficiary' but as a partner in problem-solving, the entire dynamic shifts. She knows the neighborhood’s real challenges far better than any visiting consultant.`,
      `In our initiatives, whether it is building a digital classroom or launching a women’s craft collective, we insist on a Community Advisory Council composed of local residents. They decide operating hours, select student candidates, and oversee fund transparency. When people have skin in the game and genuine leadership, the programs do not just survive—they flourish.`,
      `Charity solves today's hunger; dignity and ownership eliminate tomorrow's dependency. That is the philosophy I carry into every single project.`
    ],
    category: 'Community Leadership',
    readTime: '4 min read',
    publishedAt: '2026-10-18',
    author: {
      name: 'Nishant Pandey',
      role: 'Social Work Leader',
      avatarUrl: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_9.26.26_PM__2__b673f468.jpeg'
    },
    tags: ['Grassroots', 'Humanitarian', 'Dignity', 'Sustainability'],
    keyTakeaways: [
      'Top-down charity creates dependency; collaborative ownership builds enduring resilience.',
      'Local communities must hold real governance power in development projects.',
      'Measuring impact through dignity and autonomy yields generational dividends.'
    ]
  },
  {
    id: 'blog-2',
    title: 'Closing the Digital Chasm: Why Slum Youth Need More Than Basic Textbooks',
    slug: 'closing-the-digital-chasm',
    excerpt: 'In an economy driven by technology, treating digital literacy as a luxury rather than an essential human right locks another generation in poverty.',
    content: [
      `Walk through any shanty settlement in our major cities, and you will see children brimming with curiosity and creative intelligence. Yet, by age 14, their educational paths frequently hit a wall. While their peers in private institutions master coding, digital communication, and internet research, marginalized youth are often handed outdated textbooks and rote memorization drills.`,
      `When we launched Project Vidya, skeptics warned us that delicate tech equipment would quickly break down or go unmaintained. What happened instead was remarkable: within two weeks of receiving solar-powered tablets, teenagers who had never touched a mouse were creating presentations, learning arithmetic through gamified simulations, and teaching their younger siblings.`,
      `Closing the digital divide is not merely an educational goal; it is our strongest safeguard against generational inequality. When a child from an impoverished household learns to build a spreadsheet or write an email, they become the economic beacon for their entire family.`
    ],
    category: 'Education & Youth',
    readTime: '5 min read',
    publishedAt: '2026-09-28',
    author: {
      name: 'Nishant Pandey',
      role: 'Social Work Leader',
      avatarUrl: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_9.26.26_PM__2__b673f468.jpeg'
    },
    tags: ['Education', 'Digital Divide', 'Youth', 'Technology For Good'],
    keyTakeaways: [
      'Digital literacy is a fundamental economic right in the modern world.',
      'Underprivileged children adapt to technology with phenomenal speed when given genuine access.',
      'Targeted STEM and digital labs yield immediate improvements in school retention.'
    ]
  },
  {
    id: 'blog-3',
    title: 'Field Notes: What Midnight Relief Operations Taught Me About Human Resilience',
    slug: 'field-notes-midnight-relief',
    excerpt: 'Reflections from the frontlines during the seasonal flash floods—finding boundless courage and camaraderie in the darkest moments.',
    content: [
      `It was 2:30 AM during the height of the monsoon floods along the river embankments. Rain was pouring relentlessly, roads were submerged in knee-deep water, and our emergency response van was struggling to traverse the muddy embankment. We were carrying dry food packets, thermal blankets, and clean drinking water drums.`,
      `What stays with me from that night was not the hardship of the logistics, but the sheer generosity of the affected people. A tea vendor whose own stall had been destroyed by rising waters spent four hours boiling water on a salvaged kerosene stove to serve free hot tea to our relief volunteers and his displaced neighbors.`,
      `Time and again, the poorest communities exhibit the highest per-capita compassion. They do not wait for external rescue to start caring for each other. As social workers, our task is to stand beside that preexisting strength, providing the structural resources to multiply their own resilience.`
    ],
    category: 'Field Stories',
    readTime: '6 min read',
    publishedAt: '2026-08-14',
    author: {
      name: 'Nishant Pandey',
      role: 'Social Work Leader',
      avatarUrl: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_9.26.26_PM__2__b673f468.jpeg'
    },
    tags: ['Emergency Relief', 'Frontlines', 'Human Spirit', 'Volunteerism'],
    keyTakeaways: [
      'The most affected communities are often the quickest to show collective solidarity.',
      'Effective relief requires pre-positioned supply networks and zero administrative bureaucracy.',
      'Humility and presence matter as much as material aid during a disaster.'
    ]
  },
  {
    id: 'blog-4',
    title: 'Strategic Philanthropy: How Donors Can Transition From Symbolic Giving to Real Impact',
    slug: 'strategic-philanthropy-impact',
    excerpt: 'Why high-net-worth individuals and corporate CSR funds must shift from sporadic photo-ops to multi-year capacity building.',
    content: [
      `India and the developing world are experiencing an unprecedented surge in philanthropic capital. Yet too often, funds are allocated based on emotional impulses or seasonal festival calendars rather than strategic outcome frameworks.`,
      `If a corporation spends $50,000 to hand out food for a single afternoon, thousands of people eat well for 12 hours. But if that same $50,000 is invested in a solar-powered cold storage or a cooperative grain bank, those same families become food-secure for the next ten years.`,
      `We must encourage philanthropists to ask harder questions: What is the cost per sustainable outcome? How does this intervention build local leadership? What happens when our funding cycle ends? When we align philanthropic capital with rigorous, empathetic ground execution, societal transformation happens at scale.`
    ],
    category: 'Philanthropy',
    readTime: '5 min read',
    publishedAt: '2026-07-22',
    author: {
      name: 'Nishant Pandey',
      role: 'Social Work Leader',
      avatarUrl: '/assets/aistudio/WhatsApp_Image_2026-10-30_at_9.26.26_PM__2__b673f468.jpeg'
    },
    tags: ['Philanthropy', 'CSR', 'Strategy', 'Accountability'],
    keyTakeaways: [
      'Shift focus from one-off charity events to multi-year capacity development.',
      'Insist on radical transparency and audited outcome metrics.',
      'Fund local infrastructure and leadership that outlasts the donation cycle.'
    ]
  }
];

export const TESTIMONIALS = [
  {
    quote: 'Nishant’s hands-on approach and unwavering integrity transformed our local primary school. He didn’t just donate computers; he sat with our teachers and ensured our children were actually learning.',
    name: 'Sushila Devi',
    role: 'Community School Headmistress',
    location: 'Delhi Outskirts'
  },
  {
    quote: 'During the cold wave, Nishant and his taskforce were on the streets when everyone else stayed inside. His commitment to social work is authentic to the core.',
    name: 'Dr. Alok Srivastava',
    role: 'Medical Director, Public Health Mission',
    location: 'North India'
  },
  {
    quote: 'Collaborating with Nishant has shown our foundation how effective grassroots mobilization can be. He bridges the gap between high-level vision and granular field realities seamlessly.',
    name: 'Marcus Vance',
    role: 'Program Director, Global Equity Alliance',
    location: 'London'
  }
];
