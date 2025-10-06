import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const OurStory = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-16 md:py-20 bg-primary-500/90 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-primary-600">
              <img
                src="/Generated Image October 01, 2025 - 3_27PM.png"
                alt="Rees's Pool Care LLC owner providing professional pool service"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-6 -right-6 bg-secondary-400 rounded-2xl p-6 shadow-2xl"
            >
              <div className="text-center">
                <div className="text-3xl font-bold">Family</div>
                <div className="text-sm">Owned & Operated</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-3xl sm:text-4xl font-bold mb-4"
            >
              <span className="relative inline-block pr-4 pl-2">
                <span className="bg-gradient-to-r from-secondary-300 via-secondary-200 to-secondary-400 bg-clip-text text-transparent italic font-black">
                  Our Story{'\u00A0'}
                </span>
                <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" preserveAspectRatio="none">
                  <path
                    d="M0,7 Q50,2 100,7 T200,7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    className="text-secondary-300/60"
                  />
                </svg>
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-4 text-base text-white/90 leading-relaxed"
            >
              <p>
                Rees's Pool Care LLC is a small, local family-owned pool company dedicated to serving our community in Williston, FL. We take pride in providing personalized, hands-on service that treats your pool like it's our own.
              </p>
              <p>
                We offer comprehensive pool and spa cleaning, professional pool-deck cleaning, minor repairs, opening services, and expert green-to-clean transformations. Our monthly service plans start at just $150, and we provide free on-site estimates for all services.
              </p>
              <p>
                From chemical testing and pH balancing to skimming, brushing, vacuuming, and filter maintenance, we handle every detail with care and professionalism. Serving Williston and surrounding areas, we're committed to keeping your pool crystal clear year-round.
              </p>
              <p className="text-base font-semibold text-white">
                We'd be honored to become your trusted pool service partner. Call us today for your free on-site estimate!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-6"
            >
              <a href="tel:+13525297596" className="btn-primary bg-secondary-400 hover:bg-secondary-500">
                Call Us Today
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default OurStory

