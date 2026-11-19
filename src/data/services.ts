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
        {
          title: 'Custom web & mobile application development',
          image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
        },
        {
          title: 'Cloud infrastructure & DevOps (AWS, GCP, Azure)',
          image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
        },
        {
          title: 'API design, microservices & system integration',
          image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
        },
        {
          title: 'AI/ML feature integration and data pipelines',
          image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80',
        },
        {
          title: 'Legacy modernisation & migration',
          image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80',
        },
        {
          title: 'Ongoing maintenance, monitoring & support',
          image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80',
        },
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
        {
          title: 'Residential & commercial property advisory',
          image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
        },
        {
          title: 'Investment portfolio structuring',
          image: 'https://images.unsplash.com/photo-1460472178825-e5240623afd5?auto=format&fit=crop&w=800&q=80',
        },
        {
          title: 'Property valuation & market research',
          image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
        },
        {
          title: 'Legal, documentation & due diligence support',
          image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
        },
        {
          title: 'Rental management & tenant sourcing',
          image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=80',
        },
        {
          title: 'Smart-home & sustainable building consulting',
          image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
        },
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
        {
          title: 'Personalised itinerary planning',
          image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80',
        },
        {
          title: 'Eco-tourism & sustainable travel packages',
          image: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80',
        },
        {
          title: 'Boutique hospitality partnerships',
          image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
        },
        {
          title: 'Cultural & culinary immersion experiences',
          image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
        },
        {
          title: 'Corporate retreats & group travel',
          image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80',
        },
        {
          title: 'Adventure & wellness retreats',
          image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80',
        },
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
        {
          title: 'Agri-tech advisory & IoT sensor deployment',
          image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
        },
        {
          title: 'Sustainable & regenerative farming practices',
          image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
        },
        {
          title: 'Smart supply chain & cold-chain logistics',
          image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
        },
        {
          title: 'Farm-to-market direct sourcing',
          image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80',
        },
        {
          title: 'Soil health & crop yield analytics',
          image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80',
        },
        {
          title: 'Farmer training & cooperative enablement',
          image: 'https://images.unsplash.com/photo-1592982537447-6f2a6a0e3cfd?auto=format&fit=crop&w=800&q=80',
        },
      ],
    },
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}