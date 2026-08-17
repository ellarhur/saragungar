import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer>
      <div className="footer-content">
        <div className="footer-brand">
          <p className="footer-title">Sara gungar</p>
          <p className="footer-tagline">Onlineundervisning i fiol – personlig coaching anpassad efter din nivå och dina mål.</p>
        </div>

        <nav className="footer-nav" aria-label="Sidfotsnavigering">
          <p className="footer-label">Navigering</p>
          <ul className="footer-ul">
            <li className="footer-list"><a href="#presentation-section">Gå tillbaka till toppen</a></li>
            <li className="footer-list"><a href="#booking-section">Boka din lektion</a></li>
            <li className="footer-list"><a href="#about-section">Om mig</a></li>
            <li className="footer-list"><a href="#contact-section">Kontakt</a></li>
          </ul>
        </nav>

        <div className="footer-contact">
          <p className="footer-label">Kontakt</p>
          <ul className="footer-ul">
            <li className="footer-list">
              <a href="mailto:sara@tacksam.com">sara@tacksam.com</a>
            </li>
            <li className="footer-list">
              <a href="https://instagram.com/@dinkanal" target="_blank" rel="noreferrer">Instagram: @saragungar</a>
            </li>
          </ul>
        </div>
      </div>


      <p className="footer-note">
        Jag har en opolitisk och ickereligiös hållning i min undervisning.
      </p>

      <p className="copyright">© {year} Sara gungar</p>
    </footer>
  )
}
