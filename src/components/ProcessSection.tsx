import { motion } from 'framer-motion'
import { processSteps } from '../data/testimonials'

export default function ProcessSection() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-green">
            How we work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-mid mt-2">
            A simple, transparent process
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative p-7 rounded-3xl bg-brand-cream border border-slate-100 hover:border-brand-green/20 hover:shadow-soft transition-all"
              >
                <div className="absolute -top-4 left-7 text-5xl font-bold text-slate-200/80 tracking-tighter select-none">
                  {step.number}
                </div>
                <div className="relative w-12 h-12 flex items-center justify-center rounded-2xl bg-white text-brand-green shadow-sm mb-5">
                  <Icon className="text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-brand-dark mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}