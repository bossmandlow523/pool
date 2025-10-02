import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 800], [0, 200])

  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 w-full h-full">
      {/* Split Layout */}
      <div className="flex flex-col lg:flex-row w-full h-full">
        {/* Right Side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="w-full lg:w-[50vw] relative min-h-[400px] lg:min-h-0 order-2 lg:order-1"
        >
          <div className="absolute inset-0">
            <img
              src="/hero-pool.png"
              alt="Stunning crystal-clear pool with palm trees and modern outdoor living space"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent"></div>
          </div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute bottom-8 left-8 bg-white rounded-lg shadow-2xl p-4 animate-float"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">10+</div>
              <div className="text-sm text-gray-600">Years of Service</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Left Side - Text Content */}
        <div className="w-full lg:w-[50vw] bg-primary-500 flex items-center justify-center px-6 py-20 lg:py-0 order-1 lg:order-2">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-6"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-none tracking-tight">
                Reclaim Your{' '}
                <span className="bg-gradient-to-r from-secondary-400 via-secondary-300 to-secondary-500 bg-clip-text text-transparent drop-shadow-lg">
                  Weekends
                </span>
              </h1>
              <p className="text-2xl md:text-3xl lg:text-4xl font-light text-white/95 leading-relaxed">
                Swim in <span className="font-semibold italic text-secondary-200">Crystal-Clear Water</span> Without the Hassle
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg md:text-xl text-white/90 mb-8 font-light"
            >
              Tired of cloudy water and wasted Saturdays? Our professional pool care keeps your backyard oasis sparkling, while you spend time on what matters most – family, friends, and fun.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#contact" className="btn-primary bg-secondary-400 hover:bg-secondary-500">
                Get Your Free Quote Today
              </a>
              <a href="#services" className="btn-secondary bg-white/10 text-white border-white hover:bg-white/20">
                Learn More
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
      </motion.div>

    </section>
  )
}

export default Hero

