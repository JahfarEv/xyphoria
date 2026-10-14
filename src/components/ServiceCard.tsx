import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi2'
import type { Service } from '../types'

interface ServiceCardProps {
  service: Service
  index: number
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const { icon: Icon, title, tagline,  active, image, slug } = service

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      className="group"
    >
      <Link to={`/services/${slug}`} className="block h-full">
        <div
          className={`relative flex flex-col h-full bg-white rounded-3xl overflow-hidden border transition-all duration-300 shadow-soft hover:shadow-hover ${
            active ? 'border-t-4 border-t-brand-green' : ''
          } border-slate-100 hover:border-brand-green/30`}
        >
          {/* Image */}
          <div className="relative h-48 overflow-hidden">
            <img
              src={image}
              alt={title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 card-gradient" />

            {/* Badge */}
            {/* <span
              className={`absolute top-4 right-4 text-[0.65rem] font-semibold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-sm ${
                active
                  ? 'bg-brand-green/90 text-white'
                  : 'bg-amber-400/90 text-amber-950'
              }`}
            >
              {badge}
            </span> */}

            {/* Icon */}
            <div className="absolute bottom-4 left-5 w-12 h-12 flex items-center justify-center rounded-2xl bg-white/95 backdrop-blur text-brand-green shadow-md">
              <Icon className="text-xl" />
            </div>
          </div>

          {/* Body */}
          <div className="flex flex-col flex-1 p-6">
            <h3 className="text-lg font-semibold text-brand-dark mb-1.5 tracking-tight">
              {title}
            </h3>
            <p className="text-xs uppercase tracking-wider text-brand-green font-medium mb-3">
              {tagline}
            </p>
            <p className="text-slate-600 text-sm leading-relaxed flex-grow line-clamp-3">
              {service.description}
            </p>

            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-sm font-semibold text-brand-mid">
                Learn more
              </span>
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-brand-light text-brand-green group-hover:bg-brand-green group-hover:text-white transition-colors">
                <HiArrowRight />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}