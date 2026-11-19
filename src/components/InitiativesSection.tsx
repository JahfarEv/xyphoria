import { motion } from 'framer-motion'
import { HiArrowRight, HiOutlineGlobeAlt } from 'react-icons/hi2'
import { PiPlant } from 'react-icons/pi'

export default function InitiativesSection() {
  return (
    <section id="initiatives" className="py-20 md:py-24 bg-brand-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-10 items-end mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-green">
              Initiatives
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-brand-mid mt-3">
              Building what comes next.
            </h2>
          </motion.div>
          <p className="text-slate-600 leading-relaxed max-w-xl lg:justify-self-end">
            Our next ventures turn emerging needs into meaningful experiences:
            responsible journeys and smarter, sustainable agriculture.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: HiOutlineGlobeAlt,
              label: 'Tourism',
              title: 'Travel with purpose',
              text: 'Curated cultural journeys, eco-tourism, and hospitality experiences that benefit local communities and preserve destinations.',
              link: '/services/tourism',
              image:
                'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80',
            },
            {
              icon: PiPlant,
              label: 'Agriculture',
              title: 'Grow smarter, grow greener',
              text: 'Agri-tech, regenerative practices, and transparent supply chains designed to support farmers and strengthen food systems.',
              link: '/services/agriculture',
              image:
                'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80',
            },
          ].map((item, index) => {
            const Icon = item.icon
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.12 }}
                className="group relative min-h-[380px] overflow-hidden rounded-3xl"
              >
                <img
                  src={item.image}
                  alt={`${item.label} initiative`}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-brand-dark/10" />
                <div className="absolute inset-x-0 bottom-0 p-7 md:p-9 text-white">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-300 mb-3">
                    <Icon />
                    {item.label}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">{item.title}</h3>
                  <p className="text-sm text-white/75 leading-relaxed max-w-lg mb-5">
                    {item.text}
                  </p>
                  <a
                    href={item.link}
                    className="inline-flex items-center gap-2 text-sm font-semibold hover:text-emerald-300 transition"
                  >
                    Explore initiative
                    <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
