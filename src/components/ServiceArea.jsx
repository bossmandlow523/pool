import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const ServiceArea = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const cities = [
    'South Venice',
    'Venice',
    'Nokomis',
    'Osprey',
    'Sarasota',
    'Lakewood Ranch',
    'Bradenton',
    'University Park',
  ]

  return (
    <>
      <section className="section-padding">
        <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Serving South Venice to Lakewood Ranch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Proudly providing professional pool service throughout Southwest Florida
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d226916.47!2d-82.4265!3d27.1167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDA3JzAwLjEiTiA4MsKwMjUnMzUuNCJX!5e0!3m2!1sen!2sus!4v1696176000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Service Area Map"
              ></iframe>
            </div>

            {/* Floating stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -top-4 -right-4 bg-white rounded-2xl p-6 shadow-xl"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">35+</div>
                <div className="text-sm text-gray-600">Miles Coverage</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Service areas list */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">We Service These Areas:</h3>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {cities.map((city, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  className="flex items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <svg className="w-5 h-5 text-primary-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium text-gray-900">{city}</span>
                </motion.div>
              ))}
            </div>

            <div className="bg-primary-50 rounded-2xl p-6 border-l-4 border-primary-500">
              <p className="text-gray-700 leading-relaxed">
                <span className="font-semibold">Don't see your area?</span> We may still service your location! Give us a call or request a free estimate, and we'll let you know if we can help.
              </p>
            </div>

            <div className="mt-8">
              <a href="#contact" className="btn-primary">
                Request Free Estimate
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    </>
  )
}

export default ServiceArea

