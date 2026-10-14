import { motion } from 'framer-motion'
import HeroBanner from '../components/HeroBanner'
import StatsSection from '../components/StatsSection'
import ServicesGrid from '../components/ServicesGrid'
import WhyUs from '../components/WhyUs'
import ProcessSection from '../components/ProcessSection'
import Testimonials from '../components/Testimonials'
import CTASection from '../components/CTASection'

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <HeroBanner />
      <StatsSection />
      <ServicesGrid />
      <WhyUs />
      <ProcessSection />
      <Testimonials />
      <CTASection />
    </motion.div>
  )
}