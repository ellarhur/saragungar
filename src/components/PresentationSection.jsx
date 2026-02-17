import React from 'react'
import hero from '../images/sarafrontpage.jpeg'
import fundera from '../images/fundera.png'

export default function PresentationSection() {
  return (
    <section
      className="presentation-section"
      id="presentation-section"
      data-header-image={hero}
    >
      <img src={hero} alt="Sara gungar" className="presentation-hero" />
      <div className="presentation-content">
        <img
          src={fundera}
          alt="Funderar du på att plocka upp fiolen igen?"
          className="presentation-content-image"
        />
        <p>
          Vill du få undervisning anpassad till dina förutsättningar, oavsett var du är?
          Onlinelektioner är perfekt både för dig som önskar enstaka lektioner och för dig som vill ha återkommande undervisning.
          Du behöver ingen avancerad utrustning. Oftast räcker det med en laptop (och en fiol).
          Du hittar tillgängliga tider <a href="#booking-section">här</a>
        </p>
      </div>
    </section>
  )
}
