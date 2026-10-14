import { motion } from 'framer-motion'
import ServiceCard from './ServiceCard'
import { services } from '../data/services'

export default function Services() {
  return (
    <section className="pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-brand-mid mb-3">
          Our Expertise
        </h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 70 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-1 bg-brand-green rounded-full mx-auto opacity-70"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, i) => (
          <ServiceCard key={service.title} service={service} index={i} />
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-center mt-16 text-slate-500 text-sm md:text-base border-t border-slate-100 pt-10 max-w-3xl mx-auto"
      >
        <span className="text-brand-green mr-1.5">●</span>
        Two active pillars today, two more on the way. Xyphoria is expanding.
      </motion.p>
    </section>
  )
}