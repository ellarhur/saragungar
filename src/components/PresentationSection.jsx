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
          className="bigger-headline-picture"
          src="/images/dagsattplockauppfiolen.png"
          alt="Dags att börja spela fiol"
        />
      </div>

      <a
        href="#booking-section"
        className="presentation-scroll-hint"
        aria-label="Scrolla nedåt"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M12 16l-6-6h12l-6 6z" />
        </svg>
      </a>
    </section>
  )
}
