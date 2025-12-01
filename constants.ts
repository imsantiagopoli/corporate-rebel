import { NavItem, Service, Testimony, ComparisonPoint } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'The Doctrine', href: '#manifesto' },
  { label: 'Operatives', href: '#roles' },
  { label: 'Why Us', href: '#comparison' },
  { label: 'Protocol', href: '#process' },
  { label: 'The Arsenal', href: '#arsenal' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Join', href: '#contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'infiltration',
    title: 'Operation Infiltration',
    codename: 'Headhunting / Direct Hire',
    description: 'For companies that have their own infrastructure but lack the talent. We hunt the top 1%, vet them for "Owner Mentality," and embed them into your team.',
    features: [
      'Zero Noise Sourcing (Pre-vetted)',
      'Cultural Alignment Check',
      'One-time placement fee',
    ],
    price: '25% of Annual Salary',
    cta: 'Start Headhunt',
  },
  {
    id: 'shadow',
    title: 'Shadow Government',
    codename: 'Fully Managed Teams (EOR)',
    description: 'We act as the legal employer. We handle payroll, compliance, benefits, and hardware. You get the talent; we handle the bureaucracy.',
    features: [
      'Employer of Record (EOR)',
      'Payroll & Compliance included',
      'Device management & Benefits',
    ],
    price: '30% Fee on Payroll',
    cta: 'Deploy Team',
  },
];

export const ROLES = [
  {
    category: "Engineering Command",
    roles: ["Full Stack Architects", "DevOps Engineers", "AI Specialists", "Smart Contract Devs"],
    description: "Builders who don't need hand-holding. They ship code, not excuses."
  },
  {
    category: "Creative Warfare",
    roles: ["Brand Strategists", "UX/UI Killers", "Motion Designers", "Video Editors"],
    description: "Visual storytellers who understand that boring marketing is a crime."
  },
  {
    category: "Revenue Ops",
    roles: ["RevOps Specialists", "Finance Controllers", "Legal Ops", "Automation Experts"],
    description: "The backbone. Organized, ruthless, and efficient systems."
  },
  {
    category: "Data Intelligence",
    roles: ["Data Engineers", "Analytics Leads", "BI Specialists", "Growth Analysts"],
    description: "Truth seekers. We make decisions based on numbers, not feelings."
  },
  {
    category: "Product Leadership",
    roles: ["Product Owners", "Technical PMs", "Scrum Masters", "Head of Product"],
    description: "Visionaries who can actually execute a roadmap without delays."
  },
  {
    category: "Frontline Sales",
    roles: ["SDRs / BDRs", "Closers", "Account Executives", "Customer Success"],
    description: "Hunters. They don't wait for leads, they create them."
  }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "The Brief",
    desc: "We don't want a job description. We want the mission profile. Who do you need to kill your competition?"
  },
  {
    step: "02",
    title: "The Hunt",
    desc: "We don't post ads. We infiltrate networks. We scrape the top 1% of talent in LATAM who are currently employed but bored."
  },
  {
    step: "03",
    title: "The Vetting",
    desc: "We filter for 'Ownership Mindset'. If they ask about work-life balance before the mission, they are out."
  },
  {
    step: "04",
    title: "The Deployment",
    desc: "Interviews are set. Offers are signed. Onboarding is instant. We disappear, the talent remains."
  }
];

export const TESTIMONIALS: Testimony[] = [
  {
    id: '1',
    quote: "My office lease was costing me $5,000 a month. Canceling it was the best raise I ever gave myself.",
    author: "The Architect",
    role: "Founder, SaaS Scale-up",
  },
  {
    id: '2',
    quote: "I thought 50 employees meant success. I realized it meant 50 problems. Now I run lean, lethal, and remote.",
    author: "Unknown",
    role: "Recovering CEO",
  },
];

export const COMPARISON_POINTS: ComparisonPoint[] = [
  {
    metric: "Sourcing Strategy",
    traditional: "Post job ads & pray. Waiting for active applicants.",
    rebel: "Sniper Approach. We hunt passive top performers."
  },
  {
    metric: "Candidate Mindset",
    traditional: "Employee. Wants a paycheck & stability.",
    rebel: "Owner. Wants equity, impact & autonomy."
  },
  {
    metric: "Vetting Process",
    traditional: "Keyword matching (CV Scanning).",
    rebel: "Deep cultural & technical audit."
  },
  {
    metric: "Speed to Hire",
    traditional: "45-60 Days average.",
    rebel: "< 7 Days. We have a bench ready."
  },
  {
    metric: "The Goal",
    traditional: "Fill a seat (Headcount).",
    rebel: "Solve a bottleneck (Outcome)."
  }
];

export const FAQS = [
  {
    question: "Is this legal? How does compliance work?",
    answer: "Yes. If you choose 'Shadow Government' (EOR), we are the legal employer in their country. We handle local taxes, benefits, and labor laws. You just manage their work. If you choose 'Infiltration' (Direct Hire), we guide you on how to hire them as international contractors compliantly."
  },
  {
    question: "What if the talent quits or doesn't perform?",
    answer: "We offer a 90-day replacement guarantee. If they aren't a 'Hell Yes' within the first 3 months, we replace them for free. We own our mistakes."
  },
  {
    question: "Why LATAM? Why not India or Philippines?",
    answer: "Timezone alignment (US Timezones). High cultural affinity. And a hunger that Silicon Valley lost 10 years ago. We don't hire cheap labor; we hire elite talent that costs less because of geography."
  },
  {
    question: "How fast can you deploy?",
    answer: "For standard roles (Dev, Design, Ops), we usually present a shortlist within 3-5 days. Most placements are closed within 10 days."
  },
  {
    question: "Are you an agency or a platform?",
    answer: "We are a militant recruitment firm. Platforms give you a list of 1,000 unvetted freelancers. We give you the top 3 candidates who are actually qualified."
  }
];