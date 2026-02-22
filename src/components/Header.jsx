import React from 'react'

export default function Header() {
  return (
    <header data-nav-default-bg="#C66A27" data-header-default-image-mobile="/images/saragungarorange-mobile.png">
      <div className="Sarasheader">
        <img src="/images/saraheaderorange.png" alt="Sara gungar" className="header-image" />
      </div>
      <input type="checkbox" id="nav-toggle" className="nav-toggle" aria-label="Öppna navigationsmeny" />
      <label htmlFor="nav-toggle" className="nav-toggle-label">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <ul className="nav-links">
        <li className="nav-link">
          <a href="#presentation-section">hem</a>
        </li>
        <li className="nav-link">
          <a href="#booking-section">boka</a>
        </li>
        <li className="nav-link">
          <a href="#about-section">om mig</a>
        </li>
        <li className="nav-link">
          <a href="#contact-section">kontakt</a>
        </li>
      </ul>
    </header>
  )
}
