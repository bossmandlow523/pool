import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const ServiceShowcase = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeService, setActiveService] = useState(0)

  // Auto-rotate carousel every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % 3)
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  const services = [
    {
      name: 'Weekly Maintenance',
      tagline: 'The foundation of a perfect pool',
      features: [
        'Complete water testing & chemical balancing',
        'Skim surface & remove debris',
        'Vacuum pool floor & walls',
        'Brush tiles & walls',
        'Clean skimmer baskets & pump baskets',
        'Inspect equipment & report issues',
      ],
      image: '/weekly-maintenance-testing.png',
      imageAlt: 'Professional pool technician testing water chemistry with color-coded test kit by crystal-clear pool',
    },
    {
      name: 'Premium Care',
      tagline: 'Everything you need, nothing you don\'t',
      features: [
        'All Weekly Maintenance services',
        'Filter cleaning & backwashing',
        'Tile line deep cleaning',
        'Equipment performance optimization',
        'Seasonal prep & winterization',
        'Priority emergency service',
      ],
      image: '/premium-care-filter.png',
      imageAlt: 'Pool filter being professionally cleaned and pressure washed with crystal-clear pool in background',
    },
    {
      name: 'Storm Recovery',
      tagline: 'Get your pool back fast',
      features: [
        'Heavy debris removal',
        'Water clarity restoration',
        'Chemical shock treatment',
        'Equipment inspection & restart',
        'Pressure wash surfaces',
        'Full system check',
      ],
      image: '/storm-recovery-before-after.png',
      imageAlt: 'Before and after pool transformation - from murky storm-damaged water to crystal-clear blue pool',
    },
  ]

  return (
    <section className="relative section-padding z-10">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <div>
              <span className="text-gray-800">From</span>{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-gray-400 via-gray-500 to-gray-400 bg-clip-text text-transparent font-black">Cloudy</span>
                <span className="absolute inset-0 bg-gradient-to-r from-gray-400/80 via-gray-500/90 to-gray-400/80 blur-lg rounded-lg"></span>
              </span>{' '}
              <span className="text-gray-800">to</span>{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent font-black">
                  Crystal-Clear
                </span>
                <span className="absolute inset-x-0 bottom-2 h-5 bg-gradient-to-r from-cyan-300/70 via-blue-300/70 to-teal-300/70 -z-10 blur-sm"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-200/30 via-blue-200/30 to-teal-200/30 blur-2xl"></span>
              </span>
            </div>
            <div className="text-center">
              <span className="font-black bg-gradient-to-r from-secondary-400 via-secondary-300 to-secondary-500 bg-clip-text text-transparent drop-shadow-sm">
                Every Week
              </span>
            </div>
          </h2>
          <p className="text-xl text-gray-900 font-semibold max-w-3xl mx-auto drop-shadow-lg">
            Whether your pool needs routine weekly care, storm clean-up, or total seasonal prep, we do it with precision. Our step-by-step care means clear, balanced, swim-ready water every visit.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Service Cards */}
          <div className="space-y-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                onClick={() => setActiveService(index)}
                className={`p-6 rounded-2xl cursor-pointer transition-all duration-700 ease-out will-change-transform ${
                  activeService === index
                    ? 'bg-primary-500 text-white shadow-2xl scale-105'
                    : 'bg-white hover:bg-gray-100'
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{service.name}</h3>
                    <p className={`text-sm ${activeService === index ? 'text-white/80' : 'text-gray-600'}`}>
                      {service.tagline}
                    </p>
                  </div>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      activeService === index ? 'bg-white/20' : 'bg-primary-100'
                    }`}
                  >
                    <span className={`text-sm font-bold ${activeService === index ? 'text-white' : 'text-primary-600'}`}>
                      {index + 1}
                    </span>
                  </div>
                </div>
                
                <AnimatePresence>
                  {activeService === index && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                      className="space-y-2 mt-4"
                    >
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg
                            className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Visual Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-primary-400 to-primary-600 relative will-change-transform"
              >
                {services[activeService].image ? (
                  <>
                    <img 
                      src={services[activeService].image} 
                      alt={services[activeService].imageAlt}
                      className="w-full h-full object-cover"
                    />
                    {/* Logo Watermark - Bottom Right */}
                    <div className="absolute bottom-2 right-2 w-16 h-16 bg-white/80 rounded-full shadow-lg flex items-center justify-center">
                      <img
                        src="/logo.png"
                        alt="A Plus Pool Cleaning Inc Logo"
                        className="w-14 h-14 object-contain"
                      />
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-white/30 p-8">
                    <div className="text-center space-y-4">
                      <svg className="w-24 h-24 mx-auto" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L4 7v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-8-5zm0 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
                      </svg>
                      <p className="font-medium text-lg">{services[activeService].imageAlt}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Floating indicator dots */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 bg-white px-4 py-2 rounded-full shadow-lg">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveService(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-500 ease-out will-change-transform ${
                    activeService === index ? 'bg-primary-500 w-6' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ServiceShowcase

