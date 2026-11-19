import { Link } from 'react-router-dom'
import { services } from '../data/services'

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-slate-300 pt-16 pb-8 mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-white mb-4">
              XYBUZ<span className="text-brand-green">.</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
              A multi-vertical company building across software, real estate,
              tourism, and agriculture. Modern, thoughtful, and built to last.
            </p>
           
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="text-slate-400 hover:text-brand-green transition"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/#about" className="text-slate-400 hover:text-brand-green transition">
                  About
                </a>
              </li>
              <li>
                <a href="/#movement" className="text-slate-400 hover:text-brand-green transition">
                  Join Us
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-slate-400 hover:text-brand-green transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© 2026 XYBUZ. All rights reserved.</p>
          <p>Built with Nexve Core.</p>
        </div>
      </div>
    </footer>
  )
}