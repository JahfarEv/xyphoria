import { motion } from 'framer-motion'
import { HiStar } from 'react-icons/hi'
import { testimonials } from '../data/testimonials'

export default function Testimonials() {
  return (
    <section className="py-20 md:py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-brand-green">
            Client stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-mid mt-2">
            Trusted by founders &amp; teams
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-white rounded-3xl p-7 border border-slate-100 shadow-soft hover:shadow-hover transition-all"
            >
              <div className="flex gap-1 text-amber-400 mb-4">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <HiStar key={idx} />
                ))}
              </div>
              <p className="text-slate-700 text-sm leading-relaxed mb-6">
                “{t.quote}”
              </p>
              <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <div className="text-sm font-semibold text-brand-dark">
                    {t.name}
                  </div>
                  <div className="text-xs text-slate-500">
                    {t.role}, {t.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}