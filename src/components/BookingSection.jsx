import React from 'react'
import '../scss/ComingSoon.scss'

export default function BookingSection() {
  return (
    <div className="page-container page-container--boka page-container--flush-top">
      <div
        className="section-header"
        data-header-image="/images/boka.png"
        data-header-image-mobile="/images/boka-mobile.png"
        data-nav-bg="#16213B"
      />
      <section className="booking-section" id="booking-section">
        <div className="Coming-soon">
          <p>Kommer snart!</p>
          <p>
            Har du frågor? <a href="#contact-section">Kontakta mig</a>
          </p>
        </div>
      </section>
    </div>
  )
}
