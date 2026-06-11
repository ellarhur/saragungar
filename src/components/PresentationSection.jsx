import React from 'react'
import '../scss/PresentationSection.scss'

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
      <img className="headline-picture"src="/images/dagsattplockauppfiolen.png" alt="Dags att börja spela fiol" />
      </div>
    </section>
  )
}
