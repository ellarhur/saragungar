import React from 'react'

export default function AboutSection() {
  return (
    <div className="page-container page-container--flush-top page-container--about">
      <div
        className="section-header"
        data-header-image="/images/ommig.png"
        data-header-image-mobile="/images/ommig-mobile.png"
        data-nav-bg="#851F19"
      />

      <section className="about-section content-section" id="about-section">
        <div className="about-layout">
          <div className="about-col about-col--text">
            <img
              className="about-headline"
              src="/images/omsaraochsaragungar.png"
              alt="Om Sara och Sara gungar"
            />

            <div className="about-body">
              <p>Första gången jag undervisade i fiol var 1988. Det var på musikskolan i Tidaholm. Jag var bara sexton och hade själv varit elev där.</p>
              <p>
                Jag började spela redan som treåring. Min pappa var traditionellt utbildad fiolpedagog men intresserade sig under början av sjuttiotalet för suzukimetoden med den påföljden att jag blev hans första elev. Han var både målmedveten och hängiven, ordnade till och med att jag fick spela för självaste Shinichi Suzuki 1981.
              </p>
              <p>
                Länge hade jag siktet på att bli musiker och nådde efter studier på Edsbergs musikinstitut och Mälardalens högskola fram till en fil. kand. i kammarmusik. Studerade även två somrar för John D. Kendall i USA.
              </p>
              <p>
                Men det visade sig att det var som fiollärare jag trivdes bäst. Att kombinera de metodiker jag själv undervisats i med elevernas skiftande förutsättningar inspirerade mer än en karriär som solomusiker. Sedan dess har jag arbetat på olika musik- och kulturskolor runtom i Sverige.
              </p>
              <p>
                Givetvis fortsätter jag spela själv. Och när jag säger ”själv” menar jag oftast med andra. Både på konserter och i studio. Att hålla liv i spelandet är livsviktigt för mig.
              </p>
              <p>
                Eftersom jag lärde mig spela tidigt är musik som ett språk för mig: Ett lika naturligt sätt att uttrycka sig på som att prata. Det som började med ”Blinka lilla stjärna” och ”Sara gungar” kommer fortsätta livet ut.
              </p>
              <p>Det är förresten jag som är Sara, hon som gungar. Min pappa Vigo skrev den runt 1975.</p>
            </div>

            <div className="about-signature">
              <img src="/images/invertsara.png" alt="Saras signatur" />
            </div>
          </div>

          <div className="about-col about-col--image">
            <img
              className="about-photo"
              src="/images/sarazusuki.jpeg"
              alt="Sara får fiolundervisning av Shinichi Suzuki"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
