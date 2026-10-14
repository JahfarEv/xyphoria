import { motion } from 'framer-motion'
import {
  HiOutlineShieldCheck,
  HiOutlineSparkles,
  HiOutlineUserGroup,
  HiOutlineClock,
} from 'react-icons/hi2'

const points = [
  {
    icon: HiOutlineShieldCheck,
    title: 'Reliable by default',
    text: 'Clear scopes, honest timelines, and deliverables you can plan around.',
  },
  {
    icon: HiOutlineSparkles,
    title: 'Craft over shortcuts',
    text: 'We obsess over details — from architecture to the last pixel.',
  },
  {
    icon: HiOutlineUserGroup,
    title: 'Senior-led teams',
    text: 'Direct access to the people actually doing the work.',
  },
  {
    icon: HiOutlineClock,
    title: 'Long-term partners',
    text: 'We measure success by how our clients grow after launch.',
  },
]

export default function WhyUs() {
  return (
    <section className="py-20 md:py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-green">
              Why Xyphoria
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-mid mt-3 mb-5 leading-tight">
              A partner who thinks beyond the brief.
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              We combine engineering discipline with a founder's mindset. That
              means asking harder questions, challenging assumptions, and
              delivering outcomes — not just outputs.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {points.map((p, i) => {
                const Icon = p.icon
                return (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex gap-3"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white flex items-center justify-center text-brand-green shadow-sm">
                      <Icon className="text-lg" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-dark text-sm mb-1">
                        {p.title}
                      </h4>
                      <p className="text-slate-500 text-xs leading-relaxed">
                        {p.text}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-hover">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="Team collaboration"
                className="w-full h-[420px] object-cover"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-hover border border-slate-100 max-w-[220px]"
            >
              <div className="text-3xl font-bold text-brand-green">7+</div>
              <div className="text-xs text-slate-500 mt-1">
                Years building digital & physical products
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}