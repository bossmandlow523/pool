import React from 'react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah H.',
      location: 'Venice, FL',
      rating: 5,
      text: 'Before, our pool was just sitting there cloudy and frustrating. Now? It\'s the centerpiece of our weekends again. We don\'t even think about maintenance—it\'s just perfect every time. Worth every penny.',
      avatar: 'SH',
    },
    {
      name: 'David M.',
      location: 'Sarasota, FL',
      rating: 5,
      text: 'Reliable, thorough, professional. It\'s the first pool service where I don\'t check their work—they simply deliver sparkling water every single week.',
      avatar: 'DM',
    },
    {
      name: 'Jennifer L.',
      location: 'Lakewood Ranch, FL',
      rating: 5,
      text: 'Kim and Drew are fantastic! They truly care about the quality of their work. Our pool has never looked better, and we finally have our Saturdays back for family time.',
      avatar: 'JL',
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-primary-300 shadow-primary-500/30 hover:shadow-primary-500/50 hover:-translate-y-1"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <svg className="w-10 h-10 text-primary-400 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-6 leading-relaxed text-base">"{testimonial.text}"</p>

              {/* Author */}
              <div className="flex items-center pt-4 border-t border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold mr-4 shadow-md">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.location}</div>
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
