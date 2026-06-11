import React from 'react'
import '../scss/Signup.scss'

export default function Signup() {
  return (
    <div className="page-container page-container--boka page-container--flush-top">
      <div
        className="section-header"
        data-header-image="/images/boka.png"
        data-header-image-mobile="/images/boka-mobile.png"
        data-nav-bg="#16213B"
      />
      <section className="signup-section" id="signup-section">
        <div className="signup-content">
          <img
            className="signup-headline"
            src="/images/skrivupp.png"
            alt="Skriv upp dig på listan"
          />

          <p className="signup-intro">
            Onlinecoachning kommer gå att boka snart.
            Just nu samlar jag intresseanmälningar inför kommande lektioner. Fyll i dina uppgifter nedan för att säkra en plats eller få uppdateringar!
          </p>

          <form className="signup-form" action="/send.php" method="POST">
            <input type="hidden" name="form_type" value="signup" />

            <label className="signup-field">
              Namn
              <input type="text" name="name" required />
            </label>

            <label className="signup-field">
              E-post
              <input type="email" name="email" required />
            </label>

            <button type="submit">Skicka</button>
          </form>
        </div>
      </section>
    </div>
  )
}
