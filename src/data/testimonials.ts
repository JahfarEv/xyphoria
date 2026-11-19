import type { ProcessStep, Stat, Testimonial } from '../types'
import {
  HiOutlineChartBar,
  HiOutlineUsers,
  HiOutlineGlobeAlt,
  HiOutlineMagnifyingGlass,
  HiOutlinePencilSquare,
  HiOutlineRocketLaunch,
  HiOutlineLifebuoy,
} from 'react-icons/hi2'

export const stats: Stat[] = [
  { value: '120+', label: 'Projects Delivered', icon: HiOutlineRocketLaunch },
  { value: '85+', label: 'Happy Clients', icon: HiOutlineUsers },
  { value: '12', label: 'Countries Served', icon: HiOutlineGlobeAlt },
  { value: '98%', label: 'Client Retention', icon: HiOutlineChartBar },
]

export const testimonials: Testimonial[] = [
  {
    quote:
      'XYBUZ rebuilt our legacy platform into a modern, scalable system. Delivery was on time and the team felt like an extension of ours.',
    name: 'Aarav Mehta',
    role: 'CTO',
    company: 'NorthPeak Logistics',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote:
      'Their real estate advisory helped us structure a portfolio we are genuinely proud of. Data-driven, patient, and always available.',
    name: 'Priya Raghavan',
    role: 'Investor',
    company: 'Private Portfolio',
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote:
      'The clarity and craftsmanship XYBUZ brings is rare. They ask the right questions before writing a single line of code.',
    name: 'Daniel Okafor',
    role: 'Founder',
    company: 'Kite Financial',
    avatar:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
  },
]

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discover',
    description:
      'We listen first. Understanding your goals, constraints, and users before proposing anything.',
    icon: HiOutlineMagnifyingGlass,
  },
  {
    number: '02',
    title: 'Design',
    description:
      'Strategy, architecture, and design converge. You get a clear blueprint and a clickable prototype.',
    icon: HiOutlinePencilSquare,
  },
  {
    number: '03',
    title: 'Deliver',
    description:
      'Iterative builds with weekly demos. Transparent progress, no surprises at the finish line.',
    icon: HiOutlineRocketLaunch,
  },
  {
    number: '04',
    title: 'Support',
    description:
      'We stay after launch. Monitoring, iteration, and a long-term partnership you can rely on.',
    icon: HiOutlineLifebuoy,
  },
]