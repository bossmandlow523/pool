import React from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import ServiceShowcase from './components/ServiceShowcase'
import Testimonials from './components/Testimonials'
import OurStory from './components/OurStory'
import ServiceArea from './components/ServiceArea'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navigation />
      <Hero />
      <div>
        <Benefits />
        <ServiceShowcase />
        <Contact />
        <Testimonials />
        <OurStory />
        <FAQ />
        <Footer />
      </div>
    </div>
  )
}

export default App

