import React from 'react'
import Form from './Form.jsx'

export default function BookingSection() {

  return (
    <div className="page-container page-container--boka">
      <div className="section-header" data-header-image="/images/boka.png" data-header-image-mobile="/images/boka-mobile.png" data-nav-bg="#16213B">
      </div>
      <section className="booking-section" id="booking-section">
        <div className="booking-text">
          <img className="headline-picture"src="/images/bokadinlektion.png" alt="Boka din lektion" />
          <p>
            Klicka på en ledig tid i kalendern nedan och följ anvisningarna.<br /><br />
            När din bokning är klar får du bekräftelse via epost. Med din bekräftelse får du en länk till din lektion. Länken går att öppna i vilken webbläsare som helst. Under lektionen använder du datorns mikrofon, kamera och högtalare.
            Behöver du mer specifik teknisk information så har vi samlat det <a href="#teknisk-info">här</a>.<br /><br />
            Utöver länken till lektionen finns även en möjlighet att fylla i ett formulär. Där kan du lämna information om vad du vill uppnå med lektionerna och dina tidigare erfarenhet med mera. Formuläret är inte obligatoriskt utan används endast för att anpassa lektionsinnehållet.<br /><br />
            Lektionen kan avbokas utan kostnad upp till 24 timmar innan lektionen startar.<br /><br />
            En lektion tar cirka 30 minuter och kostar 800 SEK.
          </p>
          <p>Har du frågor? <a href="#contact-section">Kontakta mig</a></p>
        </div>
        <Form />
      </section>
    </div>
  )
}
