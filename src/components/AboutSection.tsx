
import { motion } from 'framer-motion'
import {
  HiOutlineEye,
  HiOutlineFlag,
  HiOutlineArrowUpRight,
  HiOutlineCpuChip,
  HiOutlineGlobeAlt,
  HiOutlineShieldCheck,
  HiOutlineGlobeAmericas,
  HiOutlineUserGroup,
  
} from 'react-icons/hi2'


const missions = [
  {
    label: 'Transparent Technology & Software Solutions',
    text: 'Developing custom websites, mobile apps, and robust software including billing systems, business platforms, educational tools, and healthcare solutions with superior service, maximum transparency, and cost-effective pricing.',
  },
  {
    label: 'Authentic Tourism',
    text: 'Redefining travel by offering international and domestic visitors genuine experiences of our culture, natural landscapes, and rural lifestyle within accessible budgets.',
  },
  {
    label: 'Transparent Construction',
    text: 'Delivering reliable, high-quality, and cost-effective building solutions for homes, homestays, and commercial spaces through community participation, eliminating exploitation and malpractice.',
  },
  {
    label: 'Poison-Free Agriculture',
    text: 'Reviving local farming to produce safe, chemical-free agricultural goods, ensuring community health, fighting lifestyle diseases, and establishing self-sufficiency.',
  },
  {
    label: 'Community-Led Growth',
    text: 'Fostering collective development, fair trade, and local entertainment destinations that enrich everyday life while keeping costs affordable for ordinary people.',
  },
]

const coreValues = [
  {
    number: '01',
    icon: HiOutlineCpuChip,
    title: 'Technological Excellence & Transparency',
    text: 'We provide superior, cost-effective digital products—from business billing systems to healthcare and educational software—with complete honesty and unmatched service support.',
  },
  {
    number: '02',
    icon: HiOutlineGlobeAlt,
    title: 'Authentic over Artifice',
    text: 'We reject standard, sterile commercialization. In tourism, we honor what visitors truly seek—genuine cultural immersion, natural landscapes, and the warmth of local life within modest budgets.',
  },
  {
    number: '03',
    icon: HiOutlineShieldCheck,
    title: 'Radical Transparency & Trust',
    text: 'In the construction and real estate sector, we eradicate deception and incomplete promises. We deliver certified quality, absolute accountability, and fair pricing.',
  },
  {
    number: '04',
    icon: HiOutlineGlobeAmericas,
    title: 'Health and Sustainability',
    text: 'We champion chemical-free, indigenous agriculture to fight rising lifestyle diseases and ensure safe, nourishing food for our families and community.',
  },
  {
    number: '05',
    icon: HiOutlineUserGroup,
    title: 'Community-Led Empowerment',
    text: 'Every project we undertake—from software platforms and affordable homestays to local entertainment destinations and farming initiatives—relies on direct public participation and mutual benefit.',
  },
]

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export default function AboutSection() {
  return (
    <>
      <section id="about" className="bg-white py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 sm:px-6">

          {/* ABOUT INTRO */}
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-end pb-14 border-b border-slate-200"
          >
            <div>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-green">
                <span className="w-7 h-[2px] bg-brand-green" />
                About Xyphoria
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-brand-mid mt-5 leading-[1.15] tracking-tight">
                Building one future
                <span className="block text-brand-green">
                  across many industries.
                </span>
              </h2>
            </div>

            <div className="lg:pb-1">
              <h3 className="text-lg font-bold text-brand-dark mb-3">
                Who We Are
              </h3>
              <p className="text-slate-600 text-[15px] leading-7 mb-4">
                Xyphoria is a purpose-led, multi-vertical company bringing
                technology, property, travel, and agriculture together around
                a shared standard: useful ideas, thoughtful execution, and
                lasting value.
              </p>
              <p className="text-slate-600 text-[15px] leading-7">
                We are a team of builders, strategists, operators, and local
                partners working across disciplines to solve real problems,
                connect people with opportunities, and help communities grow.
              </p>
            </div>
          </motion.div>

          {/* VISION & MISSION */}
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-7 mt-12 items-stretch">

            {/* VISION */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="lg:col-span-5 relative overflow-hidden rounded-[28px] bg-brand-dark p-7 sm:p-9 lg:p-10 text-white flex flex-col justify-between min-h-[420px]"
            >
              <div className="absolute -right-24 -bottom-24 w-72 h-72 rounded-full border border-white/10" />
              <div className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full border border-white/10" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-9">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                    <HiOutlineEye className="text-2xl text-emerald-300" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
                      Our Direction
                    </span>
                    <h3 className="text-2xl font-bold mt-1">
                      Our Vision
                    </h3>
                  </div>
                </div>

                <p className="text-[15px] sm:text-base text-slate-200 leading-[1.9] max-w-lg">
                  To build a self-reliant, ethical, and sustainable ecosystem
                  where technology empowers every business and individual
                  with absolute transparency, tourism honors authentic local
                  heritage, construction upholds uncompromised quality, and
                  agriculture thrives poison-free — empowering everyone to
                  live a prosperous and healthy life.
                </p>
              </div>

              <div className="relative z-10 mt-12 pt-6 border-t border-white/15 flex items-center justify-between">
                <span className="text-xs tracking-wider uppercase text-slate-400">
                  Our long-term commitment
                </span>
                <HiOutlineArrowUpRight className="text-xl text-emerald-300" />
              </div>
            </motion.div>

            {/* MISSION */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65 }}
              className="lg:col-span-7 rounded-[28px] bg-[#EAF3EF] p-6 sm:p-8 lg:p-9"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center">
                  <HiOutlineFlag className="text-2xl text-brand-green" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-green">
                    Our Purpose
                  </span>
                  <h3 className="text-2xl font-bold text-brand-dark mt-1">
                    Our Mission
                  </h3>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3.5">
                {missions.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.07,
                    }}
                    className={`group flex items-start gap-3 rounded-2xl bg-white/80 p-4 sm:p-4.5 border border-white hover:border-emerald-200 hover:bg-white transition-all duration-300 ${
                      index === 4 ? 'sm:col-span-2' : ''
                    }`}
                  >
                    <span className="w-8 h-8 rounded-full bg-brand-green text-white text-[11px] font-bold flex items-center justify-center flex-shrink-0">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <div>
                      <h4 className="text-[13px] font-bold text-brand-dark leading-5 mb-1">
                        {item.label}
                      </h4>
                      <p className="text-[12px] sm:text-[13px] text-slate-600 leading-[1.7]">
                        {item.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CORE PRINCIPLES */}
    
{/* OUR CORE VALUES */}
<section
  id="core-values"
  className="bg-[#F5F8F6] py-20 md:py-28 border-y border-slate-100"
>
  <div className="max-w-7xl mx-auto px-5 sm:px-6">

    {/* HEADER */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-2xl mb-12 md:mb-16"
    >
      <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-green">
        <span className="w-7 h-[2px] bg-brand-green" />
        What We Stand For
      </span>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-mid mt-5 tracking-tight leading-tight">
        Our Core Values
        <span className="block text-brand-green">
          Principles that move us forward.
        </span>
      </h2>

      <p className="text-slate-500 text-sm sm:text-base leading-7 mt-5 max-w-xl">
        Our values define who we are, guide our decisions,
        and shape the positive impact we create across
        businesses, communities, and everyday life.
      </p>
    </motion.div>

    {/* VALUES GRID */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-5">

      {coreValues.map((item, index) => {
        const Icon = item.icon

        return (
          <motion.div
            key={item.number}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
            }}
            className={`group flex flex-col bg-white rounded-[26px] p-7 md:p-8 border border-slate-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 ${
              index < 3 ? 'lg:col-span-2' : 'lg:col-span-3'
            }`}
          >
            {/* ICON & NUMBER */}
            <div className="flex items-center justify-between mb-8">
              <div className="w-14 h-14 rounded-2xl bg-[#EAF3EF] flex items-center justify-center group-hover:bg-brand-green transition-all duration-300">
                <Icon className="text-[27px] text-brand-green group-hover:text-white transition-colors duration-300" />
              </div>

              <span className="text-3xl font-bold text-slate-100 group-hover:text-emerald-100 transition-colors duration-300">
                {item.number}
              </span>
            </div>

            {/* CONTENT */}
            <div className="flex-1">
              <h3 className="text-lg font-bold text-brand-dark leading-snug mb-4 group-hover:text-brand-green transition-colors duration-300">
                {item.title}
              </h3>

              <p className="text-sm text-slate-500 leading-7">
                {item.text}
              </p>
            </div>

            {/* FOOTER */}
            <div className="mt-8 pt-5 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.16em] font-semibold text-slate-400">
                Our Commitment
              </span>

              <span className="w-8 h-[2px] bg-brand-green group-hover:w-14 transition-all duration-300" />
            </div>
          </motion.div>
        )
      })}

    </div>

    {/* CLOSING STATEMENT */}
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-12 text-center"
    >
      <p className="text-sm text-slate-500 leading-7">
        Different industries. One shared purpose.
        <span className="font-semibold text-brand-green">
          {' '}Building a better future together.
        </span>
      </p>
    </motion.div>

  </div>
</section>

    </>
  )
}
