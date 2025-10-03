import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-600 text-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-5">
            <div className="mb-6">
              <img src="/logo.png" alt="A Plus Pool Cleaning" className="h-16 w-auto mb-4" />
            </div>
            <p className="text-white/90 mb-6 max-w-md leading-relaxed">
              Family-owned pool service company providing professional, reliable pool maintenance throughout Southwest Florida for over 10 years.
            </p>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center text-sm text-white bg-primary-700 px-4 py-2 rounded-lg">
                <svg className="w-5 h-5 mr-2 text-secondary-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Licensed & Insured
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h3 className="font-bold text-lg mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-white/80 hover:text-white transition-colors inline-flex items-center group">
                  <svg className="w-4 h-4 mr-2 text-secondary-300 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/80 hover:text-white transition-colors inline-flex items-center group">
                  <svg className="w-4 h-4 mr-2 text-secondary-300 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  About Us
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/80 hover:text-white transition-colors inline-flex items-center group">
                  <svg className="w-4 h-4 mr-2 text-secondary-300 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#faq" className="text-white/80 hover:text-white transition-colors inline-flex items-center group">
                  <svg className="w-4 h-4 mr-2 text-secondary-300 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-white transition-colors inline-flex items-center group">
                  <svg className="w-4 h-4 mr-2 text-secondary-300 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h3 className="font-bold text-lg mb-6 text-white">Get In Touch</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:+19415550123" className="text-white/80 hover:text-white transition-colors flex items-start group">
                  <div className="w-10 h-10 bg-primary-700 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-secondary-400 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-white/60 mb-1">Call Us</div>
                    <div className="font-semibold text-white">(941) 555-POOL</div>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:info@apluspoolcleaning.com" className="text-white/80 hover:text-white transition-colors flex items-start group">
                  <div className="w-10 h-10 bg-primary-700 rounded-lg flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-secondary-400 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs text-white/60 mb-1">Email Us</div>
                    <div className="font-semibold text-white break-all">info@apluspoolcleaning.com</div>
                  </div>
                </a>
              </li>
              <li className="text-white/80 flex items-start">
                <div className="w-10 h-10 bg-primary-700 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-white/60 mb-1">Service Area</div>
                  <div className="font-semibold text-white">South Venice to Lakewood Ranch, FL</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-500 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/70">
          <p>© {currentYear} A Plus Pool Cleaning Inc. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <span className="text-white/50">|</span>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

