import React from 'react'
import '../scss/ComingSoon.scss'

export default function Signup() {
  return (
    <div className="page-container page-container--boka page-container--flush-top">
      <div
        className="section-header"
        data-header-image="/images/boka.png"
        data-header-image-mobile="/images/boka-mobile.png"
        data-nav-bg="#16213B"
      />
      <section className="booking-section" id="signup-section">
        <div className="booking-text">
          <img
            className="headline-picture"
            src="/images/skrivupp.png"
            alt="Skriv upp dig på listan"
          />
          <p className="booking-body">
          Onlinecoachning kommer gå att boka snart. 
          Just nu samlar jag intresseanmälningar inför kommande lektioner. Fyll i dina uppgifter nedan för att säkra en plats eller få uppdateringar!

          </p>
        </div>
      </section>
    </div>
  )
}
