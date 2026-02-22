import React from 'react'

export default function PresentationSection() {
  return (
    <section
      className="presentation-section"
      id="presentation-section"
      data-header-image="/images/saraheaderorange.png"
      data-header-image-mobile="/images/saragungarorange-mobile.png"
      data-nav-bg="#C66A27"
    >
      <img src="/images/sarafrontpage.jpeg" alt="Sara gungar" className="presentation-hero" />
      <div className="presentation-content">
        <img
          src="/images/fundera.png"
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
