import {
  HiOutlineCodeBracket,
  HiOutlineBuildingOffice2,
} from 'react-icons/hi2'
import { PiAirplaneTilt, PiPlant } from 'react-icons/pi'
import type { Service } from '../types'

export const services: Service[] = [
  {
    slug: 'software-development',
    icon: HiOutlineCodeBracket,
    title: 'Software Development',
    shortTitle: 'Software',
    tagline: 'Scalable digital products built to last',
    description:
      'Custom web & mobile apps, cloud solutions, and enterprise software. We build scalable, secure, and user-centric digital products.',
    badge: 'Core Service',
    active: true,
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    accentColor: 'from-brand-mid to-brand-green',
    detail: {
      overview:
        'From concept to deployment, we craft software that powers modern businesses. Our engineering teams specialise in full-stack web applications, mobile experiences, cloud-native architecture, and enterprise integrations.',
      features: [
        'Custom web & mobile application development',
        'Cloud infrastructure & DevOps (AWS, GCP, Azure)',
        'API design, microservices & system integration',
        'AI/ML feature integration and data pipelines',
        'Legacy modernisation & migration',
        'Ongoing maintenance, monitoring & support',
      ],
      deliverables: [
        'Product discovery & technical specification',
        'UI/UX design system and clickable prototype',
        'Production-ready codebase with CI/CD',
        'Documentation & handover training',
      ],
    },
  },
  {
    slug: 'real-estate',
    icon: HiOutlineBuildingOffice2,
    title: 'Real Estate',
    shortTitle: 'Real Estate',
    tagline: 'Smart property investments & advisory',
    description:
      'Property advisory, smart investments, and modern real estate solutions. Connecting people with spaces that inspire.',
    badge: 'Core Service',
    active: true,
    image:
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
    accentColor: 'from-amber-600 to-orange-500',
    detail: {
      overview:
        'We help individuals, families, and businesses make confident property decisions. From first-time buyers to portfolio investors, our advisory combines market data with on-ground expertise.',
      features: [
        'Residential & commercial property advisory',
        'Investment portfolio structuring',
        'Property valuation & market research',
        'Legal, documentation & due diligence support',
        'Rental management & tenant sourcing',
        'Smart-home & sustainable building consulting',
      ],
      deliverables: [
        'Personalised property investment plan',
        'Curated shortlist matching your criteria',
        'Site visits with a dedicated advisor',
        'End-to-end transaction support',
      ],
    },
  },
  {
    slug: 'tourism',
    icon: PiAirplaneTilt,
    title: 'Tourism',
    shortTitle: 'Tourism',
    tagline: 'Curated journeys, unforgettable memories',
    description:
      'Curated travel experiences, eco-tourism, and hospitality ventures. Launching soon to redefine how you explore.',
    badge: 'Coming Soon',
    active: false,
    image:
      'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80',
    accentColor: 'from-sky-500 to-cyan-400',
    detail: {
      overview:
        'Xyphoria Tourism will curate journeys that blend comfort, culture, and conservation. Expect boutique itineraries, eco-lodges, and experiences crafted with local partners.',
      features: [
        'Personalised itinerary planning',
        'Eco-tourism & sustainable travel packages',
        'Boutique hospitality partnerships',
        'Cultural & culinary immersion experiences',
        'Corporate retreats & group travel',
        'Adventure & wellness retreats',
      ],
      deliverables: [
        'Full itinerary with day-by-day plan',
        'Curated stays & local guides',
        'Transparent pricing, no hidden fees',
        '24/7 on-trip support',
      ],
    },
  },
  {
    slug: 'agriculture',
    icon: PiPlant,
    title: 'Agriculture',
    shortTitle: 'Agriculture',
    tagline: 'Growing a greener, smarter future',
    description:
      'Sustainable farming, agri-tech, and smart supply chains. Growing a greener future — on the horizon.',
    badge: 'Coming Soon',
    active: false,
    image:
      'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80',
    accentColor: 'from-lime-600 to-green-500',
    detail: {
      overview:
        'Our Agriculture vertical will empower growers with technology, sustainability, and market access. We are building partnerships with farmers, agri-tech startups, and cooperatives.',
      features: [
        'Agri-tech advisory & IoT sensor deployment',
        'Sustainable & regenerative farming practices',
        'Smart supply chain & cold-chain logistics',
        'Farm-to-market direct sourcing',
        'Soil health & crop yield analytics',
        'Farmer training & cooperative enablement',
      ],
      deliverables: [
        'Farm assessment & technology roadmap',
        'Pilot deployment with measurable KPIs',
        'Supply chain integration blueprint',
        'Ongoing agronomy & data support',
      ],
    },
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}