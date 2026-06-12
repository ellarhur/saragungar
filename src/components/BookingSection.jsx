import React from 'react'
import SignupForm from './SignupForm.jsx'

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
          <div className="booking-col booking-col--text">
            <h1>
            Vill du utvecklas på fiol i din egen takt och i ett lugnt tempo?
            </h1>

            <div className="booking-col--image booking-col--image-mobile">
              <img
                className="booking-image booking-image--mobile"
                src="/images/spelarfiol.png"
                alt="Händer som spelar fiol"
              />
            </div>

            <div className="booking-body">
              <p><br/> 
                Till hösten bjuder jag in till personlig och helt skräddarsydd onlinecoachning. Det är tjänsten för dig som spelar fiol på egen hand, eller har spelat tidigare och vill hitta tillbaka till spelglädjen med den rätta tekniken.
             <br/><br/>    Jag använder inga färdiga mallar. Tillsammans bygger vi ett individanpassat upplägg där dina behov står i centrum.
              </p>
              <p>Det du behöver göra är att ge dig själv tiden att utvecklas. Jag ser till att hjälpa dig nå målen.</p>
              <p className="booking-cta">
                Lämna din e-post för att få en personlig inbjudan och mer information så fort vi öppnar för hösten. Platserna är begränsade.
              </p>
            </div>

            <div className="booking-signup" id="signup-section">
              <SignupForm />
            </div>
          </div>

          <div className="booking-col booking-col--image booking-col--image-desktop">
            <img
              className="booking-image booking-image--desktop"
              src="/images/saraundervisaronline.jpg"
              alt="Sara ger onlineundervisning i fiol"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
