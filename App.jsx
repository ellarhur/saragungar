import React, { useEffect, useState } from 'react'
import Header from './src/components/Header.jsx'
import PresentationSection from './src/components/PresentationSection.jsx'
import BookingSection from './src/components/BookingSection.jsx'
import Parallax from './src/components/Parallax.jsx'
import TechnicalSection from './src/components/TechnicalSection.jsx'
import AboutSection from './src/components/AboutSection.jsx'
import ContactSection from './src/components/ContactSection.jsx'
import Footer from './src/components/Footer.jsx'
import LoadingViolin from './src/components/LoadingViolin.jsx'
import './src/scss/LoadingViolin.scss'

export default function App() {
  const [showLoading, setShowLoading] = useState(true)

  useEffect(() => {
    import('./src/js/app.js')
    import('./src/js/parallax.js')
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setShowLoading(false), 15000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {showLoading && <LoadingViolin />}
      <Header />
      <main>
        <PresentationSection />
        <BookingSection />
        <Parallax id="parallax-1" />
        <TechnicalSection />
        <Parallax id="parallax-2" />
        <AboutSection />
        <Parallax id="parallax-3" />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
