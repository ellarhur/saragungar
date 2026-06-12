import React from 'react'

export default function ContactSection() {
  return (
    <div className="page-container page-container--flush-top page-container--contact">
      <div
        className="section-header"
        data-header-image="/images/kontakt.png"
        data-header-image-mobile="/images/kontakt-mobile.png"
        data-nav-bg="#851F19"
      />

      <section className="contact-section content-section" id="contact-section">
        <div className="contact-layout">
          <div className="contact-col contact-col--text">
            <img
              className="contact-headline"
              src="/images/kontaktamig.png"
              alt="Kontakta mig"
            />

            <div className="contact-body">
              <p>Du når mig lättast via mail:</p>
              <p>
                E-post:{' '}
                <a href="mailto:sara@tacksam.com">sara@tacksam.com</a>
              </p>
              <p>Men du får också gärna följa mig på instagram:</p>
              <p>
                <a href="https://instagram.com/saragungar.se" target="_blank" rel="noopener noreferrer">
                  @saragungar.se
                </a>
              </p>
              <p>Jag svarar i mån av tid.</p>
            </div>
          </div>

          <div className="contact-col contact-col--image">
            <img
              className="contact-image"
              src="/images/fiolhals.jpeg"
              alt="Fiolhals med ljusslingor"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
