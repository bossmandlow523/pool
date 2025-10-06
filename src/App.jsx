import React from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import ServiceShowcase from './components/ServiceShowcase'
import Testimonials from './components/Testimonials'
import OurStory from './components/OurStory'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <div className="flex flex-col">
        <div className="order-2 lg:order-3" id="services">
          <ServiceShowcase />
        </div>
        <div className="order-3 lg:order-2">
          <Benefits />
        </div>
        <div className="order-4">
          <Contact />
        </div>
        <div className="order-5">
          <Testimonials />
        </div>
        <div className="order-6">
          <OurStory />
        </div>
        <div className="order-7">
          <FAQ />
        </div>
        <div className="order-8">
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App

