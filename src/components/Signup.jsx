import React from 'react'
import SignupForm from './SignupForm.jsx'

export default function Signup() {
  return (
    <div className="page-container page-container--boka page-container--flush-top">
      <div
        className="section-header"
        data-header-image="/images/boka.png"
        data-header-image-mobile="/images/boka-mobile.png"
        data-nav-bg="#16213B"
      />
      <section className="signup-section" id="signup-section-standalone">
        <div className="signup-content">
          <img
            className="signup-headline"
            src="/images/skrivupp.png"
            alt="Skriv upp dig på listan"
          />

          <p className="signup-intro">
            Onlinecoachning kommer gå att boka snart.
            Just nu samlar jag intresseanmälningar inför kommande lektioner. Fyll i din e-post nedan för att säkra en plats eller få uppdateringar!
          </p>

          <SignupForm />
        </div>
      </section>
    </div>
  )
}
