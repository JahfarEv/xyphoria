import { motion } from 'framer-motion'
import {
  HiArrowRight,
  HiOutlineBriefcase,
  HiOutlineLightBulb,
  HiOutlineUserGroup,
} from 'react-icons/hi2'

export default function MovementSection() {
  return (
    <section id="movement" className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">
            Join our movement
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-mid mt-3 mb-5">
            Help build meaningful progress.
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Bring your talent, partnership, or local insight. Together, we can
            turn ambitious ideas into practical outcomes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: HiOutlineBriefcase,
              title: 'Build with us',
              text: 'Explore opportunities to shape products, businesses, and experiences across our growing verticals.',
              action: 'View opportunities',
              href: 'mailto:careers@zyphoriz.com',
            },
            {
              icon: HiOutlineLightBulb,
              title: 'Partner with us',
              text: 'Collaborate on investments, innovation, community projects, supply chains, or specialist services.',
              action: 'Start a partnership',
              href: 'mailto:partners@zyphoriz.com',
            },
            {
              icon: HiOutlineUserGroup,
              title: 'Grow with us',
              text: 'Join a team that values initiative, learning, shared ownership, and positive long-term impact.',
              action: 'Meet the team',
              href: '/#about',
            },
          ].map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-3xl border border-slate-200 p-7 md:p-8 hover:border-brand-green/30 hover:shadow-hover transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-brand-light text-brand-green flex items-center justify-center mb-5">
                  <Icon className="text-xl" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">{item.text}</p>
                <a
                  href={item.href}
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-green"
                >
                  {item.action}
                  <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
