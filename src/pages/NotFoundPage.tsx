import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { HiArrowLeft } from 'react-icons/hi2'

export default function NotFoundPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6"
    >
      <div className="text-8xl font-bold text-brand-green mb-4 tracking-tighter">
        404
      </div>
      <h1 className="text-2xl md:text-3xl font-bold text-brand-dark mb-3">
        Page not found
      </h1>
      <p className="text-slate-500 max-w-md mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-6 py-3 bg-brand-green text-white font-semibold rounded-full hover:bg-emerald-700 transition"
      >
        <HiArrowLeft /> Back to home
      </Link>
    </motion.div>
  )
}