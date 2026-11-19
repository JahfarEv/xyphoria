import { motion } from 'framer-motion'
import HeroBanner from '../components/HeroBanner'
import ServicesGrid from '../components/ServicesGrid'
import CTASection from '../components/CTASection'
import AboutSection from '../components/AboutSection'
import InitiativesSection from '../components/InitiativesSection'
import MovementSection from '../components/MovementSection'

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <HeroBanner />
      <AboutSection />
      <ServicesGrid />
      <InitiativesSection />
      <MovementSection />
      <CTASection />
    </motion.div>
  )
}