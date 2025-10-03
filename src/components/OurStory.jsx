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
                alt="Kim and Drew with happy customer beside sparkling pool"
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
                <div className="text-4xl font-bold">10+</div>
                <div className="text-sm">Years Experience</div>
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
              Our <span className="bg-gradient-to-r from-secondary-400 via-secondary-300 to-secondary-500 bg-clip-text text-transparent font-black">Story</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-4 text-base text-white/90 leading-relaxed"
            >
              <p>
                For over 10 years, we've been proud to serve our community as a family-owned pool service. As a small team—just myself and my nephew—we're personally invested in every pool we maintain and every customer we serve.
              </p>
              <p>
                Quality is at the heart of everything we do. Unlike the "dump and dash" approach of larger companies, we provide comprehensive weekly cleaning and chemical services with meticulous attention to detail. Our commitment to excellence comes at fair, honest prices.
              </p>
              <p>
                We proudly service the entire area from South Venice to Lakewood Ranch. As a licensed and insured business, you can trust us with complete confidence. Whether you have questions or would like a free estimate, we're just a call, text, or email away.
              </p>
              <p className="text-base font-semibold text-white">
                We'd be honored to become your trusted pool service partner. Let us show you what reliable, quality service looks like.
              </p>
              <p className="text-lg font-bold">- Kim and Drew</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-6"
            >
              <a href="tel:+19415550123" className="btn-primary bg-secondary-400 hover:bg-secondary-500">
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

