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

        <p className="presentation-text">
        Funderar du på att plocka upp fiolen igen? 

Med onlineundervisning får du personlig coaching anpassad efter din nivå, dina mål och din takt. Fokus ligger på det som utvecklar ditt spel.

Till skillnad från traditionella lektioner, där man ofta spelar tillsammans, handlar detta mer om individuell guidning – som att ha en personlig tränare snarare än att delta i ett gruppass. Du får feedback, övningar och stöd som tar dig framåt.

Det bästa? Du behöver ingen avancerad utrustning. För de flesta räcker det med en laptop, ett par hörlurar – och såklart din fiol.
        </p>
      </div>
    </section>
  )
}
