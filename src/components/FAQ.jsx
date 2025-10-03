import React, { useState } from 'react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqItems = [
    {
      id: 'item-1',
      question: "What if I'm not home during service?",
      answer: "No problem! Our techs access your pool area directly and leave everything secure. We'll send you a service report after each visit so you know exactly what was done.",
    },
    {
      id: 'item-2',
      question: "Are there hidden fees?",
      answer: "Never. Our pricing is transparent and includes chemicals for standard service. If any additional work is needed, we'll always contact you first for approval.",
    },
    {
      id: 'item-3',
      question: "How often will you come?",
      answer: "Weekly service is our specialty—consistent, reliable care you can count on. We come the same day each week, rain or shine, to keep your pool in perfect condition.",
    },
    {
      id: 'item-4',
      question: "Can I cancel anytime?",
      answer: "Yes. We believe you'll stay because you love the service, not because you're locked in. We offer month-to-month service with no long-term contracts.",
    },
    {
      id: 'item-5',
      question: "What chemicals do you use?",
      answer: "We use only professional-grade, EPA-approved pool chemicals. We carefully balance your water chemistry to ensure it's safe, clear, and comfortable for swimming.",
    },
    {
      id: 'item-6',
      question: "Do you service commercial pools?",
      answer: "Absolutely! While we specialize in residential pools, we also service HOA pools, apartment complexes, and small commercial properties. Contact us for a custom quote.",
    },
    {
      id: 'item-7',
      question: "What happens if equipment breaks?",
      answer: "We inspect your equipment during every visit. If we spot an issue, we'll notify you immediately with repair options and fair pricing. We can handle most repairs in-house.",
    },
    {
      id: 'item-8',
      question: "How do I get started?",
      answer: "Simply fill out our contact form or give us a call. We'll schedule a free estimate, assess your pool, and can typically start service within a week.",
    },
  ]

  return (
    <section id="faq" className="py-16 md:py-24 bg-gradient-to-br from-primary-50 to-white">
      <div className="container-custom px-6">
        <div className="space-y-12">
          <h2 className="text-primary-600 text-center text-4xl font-bold">
            Frequently Asked <span className="text-secondary-500">Questions</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {faqItems.map((item, index) => (
              <div className="group" key={item.id}>
                <div
                  className={`peer rounded-xl border-2 px-5 py-1 md:px-7 transition-all ${
                    openIndex === index
                      ? 'bg-primary-500 border-primary-600 text-white'
                      : 'bg-white border-primary-200 hover:border-primary-400'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="flex w-full cursor-pointer items-center justify-between py-4 text-left text-base font-semibold transition-all"
                  >
                    <span className={openIndex === index ? 'text-white' : 'text-primary-700'}>{item.question}</span>
                    <svg
                      className={`h-5 w-5 flex-shrink-0 transition-transform ${
                        openIndex === index ? 'rotate-180 text-secondary-400' : 'text-primary-500'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index ? 'max-h-96 pb-4' : 'max-h-0'
                    }`}
                  >
                    <p className={`text-base ${openIndex === index ? 'text-white/90' : 'text-gray-700'}`}>{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default FAQ

