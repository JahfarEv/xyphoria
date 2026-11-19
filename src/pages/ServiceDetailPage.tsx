import { Link, useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  HiArrowLeft,
  HiOutlineCheckCircle,
  HiOutlineArrowRight,
} from 'react-icons/hi2'
import { getServiceBySlug, services } from '../data/services'

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const service = slug ? getServiceBySlug(slug) : undefined

  if (!service) {
    return <Navigate to="/404" replace />
  }

  const Icon = service.icon
  const otherServices = services.filter((s) => s.slug !== service.slug)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Hero with image */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 gradient-hero" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm mb-8 transition"
            >
              <HiArrowLeft /> Back to home
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/15 backdrop-blur border border-white/20 text-white">
                <Icon className="text-2xl" />
              </div>
              <span
                className={`text-[0.7rem] font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${
                  service.active
                    ? 'bg-brand-green text-white'
                    : 'bg-amber-400 text-amber-950'
                }`}
              >
                {service.badge}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-4 max-w-3xl">
              {service.title}
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl">
              {service.tagline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center"
          >
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-green">
                Overview
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-mid mt-2 mb-5">
                What we deliver
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                {service.detail.overview}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand-green text-white font-semibold rounded-full hover:bg-emerald-700 transition shadow-md shadow-brand-green/20"
              >
                Discuss this service
                <HiOutlineArrowRight />
              </a>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-soft">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-80 lg:h-[26rem] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features grid */}
      <section className="py-16 md:py-20 bg-brand-cream">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span className="text-xs font-semibold uppercase tracking-wider text-brand-green">
              Capabilities
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-mid mt-2">
              What's included
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.detail.features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-brand-green/30 hover:shadow-soft transition-all"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={feature.image}
                    alt=""
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-10 h-10 rounded-xl bg-white/95 text-brand-green flex items-center justify-center">
                    <HiOutlineCheckCircle className="text-lg" />
                  </div>
                </div>
                <p className="p-6 text-sm text-slate-700 leading-relaxed">
                  {feature.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-end justify-between mb-10 gap-4"
          >
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-green">
                Keep exploring
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-brand-mid mt-2">
                Other services
              </h2>
            </div>
            <Link
              to="/"
              className="text-sm font-semibold text-brand-green hover:underline"
            >
              View all →
            </Link>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherServices.map((s, i) => {
              const OtherIcon = s.icon
              return (
                <motion.div
                  key={s.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <Link
                    to={`/services/${s.slug}`}
                    className="group block bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-brand-green/30 hover:shadow-hover transition-all"
                  >
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={s.image}
                        alt={s.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 card-gradient" />
                      <div className="absolute bottom-3 left-4 w-10 h-10 rounded-xl bg-white/95 flex items-center justify-center text-brand-green">
                        <OtherIcon className="text-lg" />
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-semibold text-brand-dark text-sm mb-1">
                        {s.title}
                      </h3>
                      <p className="text-xs text-slate-500 line-clamp-2">
                        {s.tagline}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>
    </motion.div>
  )
}