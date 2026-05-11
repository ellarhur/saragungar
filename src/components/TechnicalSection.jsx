import React from 'react'

export default function TechnicalSection() {
  return (
    <div className="page-container">
      <section className="technical-section content-section">
        <div className="technical-content">
        <img className="headline-picture"src="/images/liteteknisk.png" alt="Teknisk information" />
        <p>Du behöver ingen avancerad utrustning - oftast räcker det med en laptop (och en fiol).</p>
          <p>Under lektionen använder du datorns mikrofon, kamera och högtalare. Se till att du har en stabil internetanslutning och en lugn miljö där du kan spela ostört.</p>
          <p>Placera datorn så att kameran kan fånga både din spelposition och fingrarna på greppbrädan.</p>
          <p>Jag använder verktyget Zoom, men du måste inte ladda ner någonting i förväg då vi även kan använda webbläsaren. I zoom kan man ställa in mikrofonens ljud så det är anpassat till musik. Det går snabbt och om du inte hittar inställningen på egen hand gör vi det tillsammans i början av vår lektion.</p>
        </div>
        <div className="technical-image-right">
          <img src="/images/dator.jpeg" alt="Dator för lektioner" />
        </div>
      </section>
    </div>
  )
}
