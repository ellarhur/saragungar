import React, { useEffect, useState } from 'react'
import Header from './src/components/Header.jsx'
import PresentationSection from './src/components/PresentationSection.jsx'
import BookingSection from './src/components/BookingSection.jsx'
import Signup from './src/components/Signup.jsx'
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
    let cancelled = false
    const run = async () => {
      const { initApp } = await import('./src/js/app.js')
      requestAnimationFrame(() => {
        if (cancelled) return
        requestAnimationFrame(() => {
          if (cancelled) return
          initApp()
        })
      })
    }
    run()
    return () => { cancelled = true }
  }, [])

  // Parallax körs när React-DOM är klart (annars hittar scriptet inga .parallax-bg i t.ex. Strict Mode)
  useEffect(() => {
    let cancelled = false
    const run = async () => {
      const { initParallax, initParallaxContentFade, initSmoothScroll } = await import('./src/js/parallax.js')
      requestAnimationFrame(() => {
        if (cancelled) return
        requestAnimationFrame(() => {
          if (cancelled) return
          initParallax()
          initParallaxContentFade()
          initSmoothScroll()
        })
      })
    }
    run()
    return () => { cancelled = true }
  }, [])

  useEffect(() => {
    const hideLoading = () => setShowLoading(false)
    if (document.readyState === 'complete') {
      hideLoading()
    } else {
      window.addEventListener('load', hideLoading)
      return () => window.removeEventListener('load', hideLoading)
    }
  }, [])

  return (
    <>
      {showLoading && <LoadingViolin />}
      <Header />
      <main>
        <PresentationSection />
        <BookingSection />
        <Parallax id="parallax-signup" />
        <Signup />
        <Parallax id="parallax-1" />
        <TechnicalSection />
        <Parallax id="parallax-2" />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
