import React from 'react'

export default function ContactSection() {
  return (
    <div className="page-container page-container--flush-top">
      <div className="section-header" data-header-image="/images/kontakt.png" data-nav-bg="#000000">
        <img src="/images/kontakt.png" alt="Kontakt" className="section-header-image" />
      </div>

      <section className="contact-section content-section" id="contact-section">
        <div className="contact-content">
          <h1>Kontakta mig</h1>
          <p>Det finns flera sätt att nå mig:</p>
          <ul className="contact-list">
            <li><strong>E-post:</strong> <a href="mailto:sara@tacksam.com">sara@tacksam.com</a></li>
            <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/@dinkanal">@dinkanal</a></li>
            <li><strong>Instagram:</strong> <a href="https://instagram.com/@dinkanal">@dinkanal</a></li>
          </ul>
          <p>Jag svarar i mån av tid.</p>
          <i>Jag har en opolitisk och ickereligiös hållning i min undervisning. Det innebär att jag inte arbetar med musik som är kopplad till politiska budskap eller religiösa högtider.</i>
        </div>
      </section>
    </div>
  )
}
