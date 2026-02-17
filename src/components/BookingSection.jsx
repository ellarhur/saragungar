import React, { useEffect } from 'react'

export default function BookingSection() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://widget.simplybook.it/v2/widget/widget.js'
    script.async = true
    script.onload = () => {
      // eslint-disable-next-line no-undef
      const widget = new SimplybookWidget({
        widget_type: 'iframe',
        url: 'https://saragungar.simplybook.it',
        theme: 'blur',
        theme_settings: {
          timeline_hide_unavailable: '1',
          hide_past_days: '0',
          timeline_modern_display: 'as_slots',
          sb_base_color: '#4f1200',
          display_item_mode: 'block',
          body_bg_color: '#ffffff',
          dark_font_color: '#27231c',
          light_font_color: '#e7d9cb',
          btn_color_1: '#e7d9cb',
          sb_company_label_color: '#4f1200',
          hide_img_mode: '0',
          sb_busy: '#27231c',
          sb_available: '#e7d9cb'
        },
        timeline: 'modern',
        datepicker: 'top_calendar',
        is_rtl: false,
        app_config: {
          clear_session: 0,
          allow_switch_to_ada: 0,
          predefined: { provider: '2', service: '2' }
        }
      })
      return () => widget && widget.destroy && widget.destroy()
    }
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="page-container page-container--boka">
      <div className="section-header" data-header-image="/images/boka.png" data-nav-bg="#000000">
        <img src="/images/boka.png" alt="Boka" className="section-header-image" />
      </div>
      <section className="booking-section" id="booking-section">
        <div className="booking-text">
          <h1>Boka din virtuella privatlektion</h1>
          <p>
            Klicka på en ledig tid i kalendern nedan och följ anvisningarna.<br /><br />
            När din bokning är klar får du bekräftelse via epost. Med din bekräftelse får du en länk till din lektion. Länken går att öppna i vilken webbläsare som helst. Under lektionen använder du datorns mikrofon, kamera och högtalare.
            Behöver du mer specifik teknisk information så har vi samlat det <a href="#teknisk-info">här</a>.<br /><br />
            Utöver länken till lektionen finns även en möjlighet att fylla i ett formulär. Där kan du lämna information om vad du vill uppnå med lektionerna och dina tidigare erfarenhet med mera. Formuläret är inte obligatoriskt utan används endast för att anpassa lektionsinnehållet.<br /><br />
            Lektionen kan avbokas utan kostnad upp till 24 timmar innan lektionen startar.<br /><br />
            En lektion tar cirka 30 minuter och kostar 800 SEK.
          </p>
          <p>Har du frågor? <a href="#contact-section">Kontakta mig</a></p>
        </div>
        <div className="booking-widget">
          <div id="simplybook-widget"></div>
        </div>
      </section>
    </div>
  )
}
