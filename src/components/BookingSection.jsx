import React from 'react'
import '../scss/BookingSection.scss'

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
        <div className="booking-layout">
          <div className="booking-col booking-col--left">
            <img
              className="booking-headline"
              src="/images/fundera.png"
              alt="Funderar du på att plocka upp fiolen igen?"
            />
            <p className="booking-intro">
              Med onlineundervisning får du personlig coaching anpassad efter din nivå, dina mål och din takt. Fokus ligger på det som utvecklar ditt spel.
            </p>
          </div>

          <div className="booking-col booking-col--center">
            <img
              className="booking-image"
              src="/images/saraundervisaronline.jpg"
              alt="Onlineundervisning i fiol"
            />
          </div>

          <div className="booking-col booking-col--right">
            <p>
              Till skillnad från traditionella lektioner, där man ofta spelar tillsammans, handlar detta mer om individuell guidning – som att ha en personlig tränare snarare än att delta i ett gruppass. Du får feedback, övningar och stöd som tar dig framåt.
            </p>
            <p>
              Det bästa? Du behöver ingen avancerad utrustning. För de flesta räcker det med en laptop, ett par hörlurar – och såklart din fiol.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
