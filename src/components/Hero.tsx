import { motion, type Variants } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi2'

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section className="py-20 md:py-28 text-center">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto px-6"
      >
        <motion.h1
          variants={item}
          className="text-4xl md:text-6xl font-bold text-brand-dark leading-tight tracking-tight mb-6"
        >
          Building tomorrow,
          <br />
          one service at a time{' '}
          <motion.span
            animate={{ x: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-block text-brand-green"
          >
            <HiArrowRight className="inline" />
          </motion.span>
        </motion.h1>

        <motion.p
          variants={item}
          className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto"
        >
          Xyphoria delivers excellence across software, real estate, and soon —
          tourism &amp; agriculture. Clean, modern, and built for growth.
        </motion.p>
      </motion.div>
    </section>
  )
}