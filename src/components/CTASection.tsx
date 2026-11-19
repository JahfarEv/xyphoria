import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi2'

export default function CTASection() {
  return (
    <section id="contact" className="py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-brand-mid p-10 md:p-16 text-center"
        >
          {/* decorative gradients */}
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-brand-green/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-emerald-400/20 blur-3xl" />

          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 tracking-tight">
              Have a project in mind?
            </h2>
            <p className="text-white/75 max-w-2xl mx-auto mb-9 text-lg">
              Tell us what you're building. We'll come back with an honest
              view of how we can help — no fluff, no pressure.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:hello@zyphoriz.com"
                className="group inline-flex items-center gap-2 px-8 py-3.5 bg-white text-brand-mid font-semibold rounded-full hover:bg-brand-light transition shadow-lg"
              >
                Start a conversation
                <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/#services"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-transparent text-white font-semibold rounded-full border border-white/40 hover:bg-white/10 transition"
              >
                Browse services
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}