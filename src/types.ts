import type { IconType } from 'react-icons'

export interface ServiceDetail {
  overview: string
  features: {
    title: string
    image: string
  }[]
}

export interface Service {
  slug: string
  icon: IconType
  title: string
  shortTitle: string
  tagline: string
  description: string
  badge: string
  active: boolean
  image: string
  accentColor: string
  detail: ServiceDetail
}

export interface Stat {
  value: string
  label: string
  icon: IconType
}

export interface Testimonial {
  quote: string
  name: string
  role: string
  company: string
  avatar: string
}

export interface ProcessStep {
  number: string
  title: string
  description: string
  icon: IconType
}