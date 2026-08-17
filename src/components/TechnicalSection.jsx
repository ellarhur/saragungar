import React from 'react'

export default function TechnicalSection() {
  return (
    <div className="page-container page-container--flush-top page-container--technical">
      <div
        className="section-header"
        data-header-image="/images/boka.png"
        data-header-image-mobile="/images/boka-mobile.png"
        data-nav-bg="#16213B"
      />
      <section className="technical-section content-section" id="teknisk-info">
        <div className="technical-layout">
          <img
            className="technical-headline headline-picture-technical"
            src="/images/liteteknisk.png"
            alt="Lite teknisk information"
          />

          <div className="technical-body">
            <p>Du behöver ingen avancerad utrustning - oftast räcker det med en laptop (och en fiol).</p>
            <p>
            Under coachningen använder vi datorns ljud- och bildverktyg. Se till att du har en stabil internetuppkoppling och en lugn miljö där vi kan ses ostört. 
            </p>            <p>
              Jag använder verktyget Zoom, men du måste inte ladda ner någonting i förväg då vi även kan använda webbläsaren. I zoom kan man ställa in mikrofonens ljud så det är anpassat till musik.</p>
          </div>

          <div className="technical-col technical-col--image">
            <img
              className="technical-image"
              src="/images/dator.jpeg"
              alt="Dator och mikrofon för onlinelektioner"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
