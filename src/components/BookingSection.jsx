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
        <div className="booking-text">
          <img
            className="headline-picture"
            src="/images/fundera.png"
            alt="Fundera"
          />
          <p className="booking-body">

          Med onlineundervisning får du personlig coaching anpassad efter din nivå, dina mål och din takt. Fokus ligger på det som utvecklar ditt spel.

Till skillnad från traditionella lektioner, där man ofta spelar tillsammans, handlar detta mer om individuell guidning – som att ha en personlig tränare snarare än att delta i ett gruppass. Du får feedback, övningar och stöd som tar dig framåt.

Det bästa? Du behöver ingen avancerad utrustning. För de flesta räcker det med en laptop, ett par hörlurar – och såklart din fiol.
          </p>
        </div>
      </section>
    </div>
  )
}
