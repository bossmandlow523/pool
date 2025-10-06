import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Amanda C.',
      location: 'Williston, FL',
      rating: 5,
      text: 'They\'ve completely taken the stress out of maintaining my pool. Always on time, thorough cleaning, and handle small fixes with no surprise fees. The guys are super nice and you can tell they care. Love the updates after each visit!',
      avatar: 'AC',
    },
    {
      name: 'Michael H.',
      location: 'Gainesville, FL',
      rating: 5,
      text: 'Wow, what a difference! My pool was green and gross but they turned it around completely. Their green-to-clean service really works and the price was very reasonable. Clearly a family business - you can feel it in how they treat you.',
      avatar: 'MH',
    },
    {
      name: 'Jessica R.',
      location: 'Ocala, FL',
      rating: 5,
      text: 'Shea and the crew are solid. They show up on time and don\'t cut corners. My water stays clear now - no more missed appointments. They do the full deal and you can tell they care about doing things right. Best pool service I\'ve used!',
      avatar: 'JR',
    },
  ]

  return (
    <section id="testimonials" className="py-6 bg-gradient-to-br from-primary-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-primary-300 shadow-primary-500/30 hover:shadow-primary-500/50 hover:-translate-y-1"
            >
              {/* Quote Icon */}
              <div className="mb-3">
                <svg className="w-8 h-8 text-primary-400 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Stars */}
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-4 leading-relaxed text-sm">"{testimonial.text}"</p>

              {/* Author */}
              <div className="flex items-center pt-3 border-t border-gray-100">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold mr-3 shadow-md text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                  <div className="text-xs text-gray-600">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
