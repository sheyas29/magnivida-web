// src/lib/constants.ts

import { Building2, Package, Shield, Users } from 'lucide-react';

export const COMPANY_INFO = {
  name: 'Magnivida Securitas Pvt Ltd',
  tagline: 'The New Force in Manpower Supply & Facility Management.',
  contact: {
    address: 'Regd. Office: Secunderabad, Telangana, India',
    phone: '+91 73370 69677',
    email: 'info@magnivida.com',
  },
  socials: {
    linkedin: '#',
    twitter: 'https://x.com/magnivida',
    facebook: 'https://www.facebook.com/magnivida.securitas',
    instagram: 'https://www.instagram.com/magnivida.securitas',
  },
};

export const SERVICES = [
  {
    id: 'integrated-facility-management',
    title: 'Integrated Facility Management',
    shortDescription: 'Modern stewardship of your physical assets.',
    description:
      "We move beyond basic cleaning to total asset stewardship. Our integrated approach combines soft services (housekeeping, gardening) with hard services (electrical, HVAC) to ensure your facility isn't just clean, but operationally efficient.",
    icon: Building2,
    coverImage:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop',
    colSpan: 'md:col-span-2',
    features: [
      {
        title: 'Mechanized Cleaning',
        desc: 'Using industrial scrubbers and high-pressure jets for deep hygiene.',
      },
      {
        title: 'Pantry Management',
        desc: 'Professional beverage service and cafeteria upkeep.',
      },
      {
        title: 'Waste Management',
        desc: 'Eco-friendly segregation and disposal protocols.',
      },
      {
        title: 'Vendor Consolidation',
        desc: 'Single point of contact for all building repairs.',
      },
    ],
    capabilities: [
      'Corporate Housekeeping',
      'Electro-Mechanical Maintenance',
      'Horticulture & Landscaping',
      'Facade Cleaning',
    ],
    process: [
      {
        step: '01',
        title: 'Site Audit',
        desc: "We map your facility's wear-and-tear points.",
      },
      {
        step: '02',
        title: 'SLA Definition',
        desc: 'Setting clear hygiene and uptime standards.',
      },
      {
        step: '03',
        title: 'Team Deployment',
        desc: 'Uniformed staff with on-site supervisors.',
      },
      {
        step: '04',
        title: 'Monthly Audits',
        desc: 'Performance scoring and snag-list clearance.',
      },
    ],
  },
  {
    id: 'security-guarding',
    title: 'Manned Security Solutions',
    shortDescription:
      'Vigilant, well-trained personnel for retail, residential, and corporate protection.',
    description:
      "Safety is not just about presence; it's about protocol. Our security personnel are vetted through rigorous police verification and trained in modern access control, fire safety, and emergency response.",
    icon: Shield,
    coverImage:
      'https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?q=80&w=2000&auto=format&fit=crop',
    colSpan: 'md:col-span-1',
    features: [
      {
        title: 'PSARA Compliant',
        desc: 'Fully licensed operations adhering to state regulations.',
      },
      {
        title: 'Ex-Servicemen Supervisors',
        desc: 'Field leadership by retired defense personnel.',
      },
      {
        title: 'Strict Patrol Logs',
        desc: 'Regular checkpoints to ensure constant vigilance.',
      },
      {
        title: 'Crisis Response',
        desc: 'First-aid and fire safety certified guards.',
      },
    ],
    capabilities: [
      'Industrial Gate Management',
      'Corporate Front Desk Security',
      'Residential Complex Safety',
      'Event Bouncers & VIP Protection',
    ],
    process: [
      {
        step: '01',
        title: 'Risk Assessment',
        desc: 'Identifying vulnerability zones in your perimeter.',
      },
      {
        step: '02',
        title: 'Post Creation',
        desc: 'Defining specific duties for each guard station.',
      },
      {
        step: '03',
        title: 'Induction',
        desc: 'On-site training for visitor management protocols.',
      },
      {
        step: '04',
        title: 'Night Checks',
        desc: 'Surprise visits by patrolling officers.',
      },
    ],
  },
  {
    id: 'workforce-staffing',
    title: 'Manpower Supply',
    shortDescription:
      'Agile blue-collar and white-collar staffing solutions for the modern workforce.',
    description:
      'We supply the manpower that drives your business. From warehouse operatives to back-office staff, we handle sourcing, payroll, and compliance with speed and precision.',
    icon: Users,
    coverImage:
      'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=2000&auto=format&fit=crop',
    colSpan: 'md:col-span-1',
    features: [
      {
        title: '100% Compliance',
        desc: 'PF, ESI, and Labor Law adherences guaranteed.',
      },
      {
        title: 'Rapid Fulfillment',
        desc: 'Deployment of candidates within 48-72 hours.',
      },
      {
        title: 'Payroll Management',
        desc: 'Timely disbursement of salaries and slips.',
      },
      {
        title: 'Skill Testing',
        desc: 'Candidates screened for specific role competencies.',
      },
    ],
    capabilities: [
      'Warehouse & Logistics Labor',
      'Data Entry Operators',
      'Receptionists / Front Office',
      'IT Support Staff',
    ],
    process: [
      {
        step: '01',
        title: 'Requirement Analysis',
        desc: 'Understanding the volume and skills needed.',
      },
      {
        step: '02',
        title: 'Sourcing',
        desc: 'Accessing our database of 10,000+ candidates.',
      },
      {
        step: '03',
        title: 'Screening',
        desc: 'Background checks and skill verification.',
      },
      {
        step: '04',
        title: 'Onboarding',
        desc: 'Issuing ID cards and uniforms.',
      },
    ],
  },
  {
    id: 'office-logistics',
    title: 'Office Logistics & Supplies',
    shortDescription:
      'Efficient procurement keeping your workspace stocked and running.',
    description:
      'An office runs on more than just people. We manage your inventory of consumables, stationery, and pantry supplies, ensuring you never run out of the essentials that keep daily operations moving.',
    icon: Package,
    coverImage:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop',
    colSpan: 'md:col-span-1',
    features: [
      {
        title: 'Just-in-Time Delivery',
        desc: 'Restocking supplies exactly when you need them.',
      },
      {
        title: 'Bulk Procurement',
        desc: 'Cost advantages passed directly to you.',
      },
      {
        title: 'Inventory Tracking',
        desc: 'Monthly consumption reports to reduce wastage.',
      },
      {
        title: 'Eco-Friendly Options',
        desc: 'Sustainable paper and pantry alternatives.',
      },
    ],
    capabilities: [
      'Stationery & Print Supplies',
      'Pantry Consumables',
      'Cleaning Materials',
      'Corporate Gifting',
    ],
    process: [
      {
        step: '01',
        title: 'Inventory Audit',
        desc: 'Analyzing your current consumption patterns.',
      },
      {
        step: '02',
        title: 'Stock Planning',
        desc: 'Setting reorder levels for critical items.',
      },
      {
        step: '03',
        title: 'Supply Chain',
        desc: 'Scheduled deliveries to your office.',
      },
      {
        step: '04',
        title: 'Billing',
        desc: 'Consolidated monthly invoice for all supplies.',
      },
    ],
  },
];

export const INDUSTRIES = [
  { name: 'Startups & Offices', desc: 'Agile Workspace Management' },
  { name: 'Residential', desc: 'Community Safety & Hygiene' },
  { name: 'Retail Stores', desc: 'Loss Prevention & Upkeep' },
  { name: 'SME Warehouses', desc: 'Logistics Support & Security' },
  { name: 'Educational Inst.', desc: 'Campus Safety & Maintenance' },
  { name: 'Hospitality', desc: 'Guest Experience Support' },
];

export const OPEN_POSITIONS = [
  {
    id: 'sec-guard-hyd',
    role: 'Security Guard (Unarmed)',
    department: 'Security Operations',
    location: 'Hyderabad, Telangana',
    type: 'Full-Time',
    salary: '₹15,000 - ₹18,000 / mo',
    description:
      'Responsible for gate management, visitor tracking, and perimeter patrolling for a corporate client.',
    requirements: ['10th Pass', 'Height 5\'7"+', 'Min 1 year experience'],
  },
  {
    id: 'housekeeping-sup-sec',
    role: 'Housekeeping Supervisor',
    department: 'Facility Management',
    location: 'Secunderabad, Telangana',
    type: 'Full-Time',
    salary: '₹20,000 - ₹25,000 / mo',
    description:
      'Lead a team of 15 janitorial staff. Ensure SLAs are met and manage inventory of cleaning supplies.',
    requirements: [
      '12th Pass / Graduate',
      'Team Handling Experience',
      'Basic Computer Knowledge',
    ],
  },
  {
    id: 'field-officer',
    role: 'Field Officer',
    department: 'Operations',
    location: 'Ranga Reddy District',
    type: 'Full-Time',
    salary: '₹25,000 + Fuel Allowance',
    description:
      'Patrol multiple client sites, conduct night checks, and handle client grievances on the ground.',
    requirements: [
      'Own Bike & License',
      'Ex-Serviceman Preferred',
      'Strong Communication',
    ],
  },
];

export const CLIENTS_LIST = [
  {
    category: 'Defense & Government',
    names: [
      'DRDO (Defence R&D Org)',
      'Indian Army (Local Units)',
      'Indian Coast Guard',
      'BPCL (Bharat Petroleum)',
    ],
  },
  {
    category: 'Corporate & Banking',
    names: [
      'HDFC Bank',
      'Sony India',
      'GMR Airports',
      'Tech Mahindra (Facility)',
    ],
  },
  {
    category: 'Commercial & Retail',
    names: [
      'Shoppers Stop',
      'TATA Croma',
      'Various Residential Societies',
      'Local SME Warehouses',
    ],
  },
];
