import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const FAQ = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: "What if I'm not home during service?",
      answer: "No problem! Our techs access your pool area directly and leave everything secure. We'll send you a service report after each visit so you know exactly what was done.",
    },
    {
      question: "Are there hidden fees?",
      answer: "Never. Our pricing is transparent and includes chemicals for standard service. If any additional work is needed, we'll always contact you first for approval.",
    },
    {
      question: "How often will you come?",
      answer: "Weekly service is our specialty—consistent, reliable care you can count on. We come the same day each week, rain or shine, to keep your pool in perfect condition.",
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes. We believe you'll stay because you love the service, not because you're locked in. We offer month-to-month service with no long-term contracts.",
    },
    {
      question: "What chemicals do you use?",
      answer: "We use only professional-grade, EPA-approved pool chemicals. We carefully balance your water chemistry to ensure it's safe, clear, and comfortable for swimming.",
    },
    {
      question: "Do you service commercial pools?",
      answer: "Absolutely! While we specialize in residential pools, we also service HOA pools, apartment complexes, and small commercial properties. Contact us for a custom quote.",
    },
    {
      question: "What happens if equipment breaks?",
      answer: "We inspect your equipment during every visit. If we spot an issue, we'll notify you immediately with repair options and fair pricing. We can handle most repairs in-house.",
    },
    {
      question: "How do I get started?",
      answer: "Simply fill out our contact form or give us a call. We'll schedule a free estimate, assess your pool, and can typically start service within a week.",
    },
  ]

  return (
    <section id="faq" className="section-padding">
      <div className="container-custom max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Questions We Hear From Homeowners
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about our pool service
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-base text-gray-900 pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-sm text-gray-700 leading-relaxed bg-gray-50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-12 text-center bg-primary-50 rounded-2xl p-8"
        >
          <p className="text-lg text-gray-700 mb-4">
            Still have questions? We're here to help!
          </p>
          <a href="#contact" className="btn-primary">
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ

