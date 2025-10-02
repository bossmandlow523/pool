import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const OurStory = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="section-padding bg-primary-500 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-primary-600">
              <div className="w-full h-full flex items-center justify-center text-white/30 p-8">
                <div className="text-center space-y-4">
                  <svg className="w-24 h-24 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                  <p className="font-medium">Photo: Kim and Drew with happy customer beside sparkling pool</p>
                </div>
              </div>
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
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Our Story
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="space-y-6 text-lg text-white/90 leading-relaxed"
            >
              <p>
                We have been in business for about 10 years now. We are a small family owned business with myself and my nephew. We work very hard to make all of our customers happy with our service.
              </p>
              <p>
                We strive in quality work—we do not cut corners and as I call it "dump and dash" like other companies do. We provide a full cleaning and chemical service weekly at guaranteed quality and at fair prices.
              </p>
              <p>
                We service from South Venice to Lakewood Ranch. I am licensed and insured. Please feel free to call, text, or email with any questions or if you would like a free estimate.
              </p>
              <p className="text-xl font-semibold text-white">
                We would love to be your new reliable pool service. You all stay safe and take care.
              </p>
              <p className="text-2xl font-bold">- Kim and Drew</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a href="#contact" className="btn-primary bg-secondary-400 hover:bg-secondary-500">
                Get Your Free Estimate
              </a>
              <a href="tel:+19415550123" className="btn-secondary border-white text-white hover:bg-white/10">
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

