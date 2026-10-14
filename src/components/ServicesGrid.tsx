import { motion } from 'framer-motion'
import ServiceCard from './ServiceCard'
import { services } from '../data/services'

export default function ServicesGrid() {
  return (
    <section id="services" className="py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-green">
            What we do
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-mid mt-2 mb-4">
            Our Expertise
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 70 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1 bg-brand-green rounded-full mx-auto opacity-70"
          />
          <p className="text-slate-500 mt-5 max-w-2xl mx-auto">
            Four verticals, one promise — thoughtful execution. Click any
            category to explore what we deliver.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}