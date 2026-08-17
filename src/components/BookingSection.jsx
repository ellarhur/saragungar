import React, { useEffect, useRef } from 'react'

const WIDGET_CONFIG = {
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
    sb_available: '#e7d9cb',
  },
  timeline: 'modern',
  datepicker: 'top_calendar',
  is_rtl: false,
  app_config: {
    clear_session: 0,
    allow_switch_to_ada: 0,
    predefined: { provider: '2', service: '2' },
  },
}

function loadSimplybookScript() {
  return new Promise((resolve, reject) => {
    if (window.SimplybookWidget) {
      resolve(window.SimplybookWidget)
      return
    }

    const existing = document.querySelector('script[data-simplybook-widget]')
    if (existing) {
      existing.addEventListener('load', () => resolve(window.SimplybookWidget))
      existing.addEventListener('error', reject)
      return
    }

    const script = document.createElement('script')
    script.src = 'https://widget.simplybook.it/v2/widget/widget.js'
    script.async = true
    script.dataset.simplybookWidget = 'true'
    script.onload = () => resolve(window.SimplybookWidget)
    script.onerror = reject
    document.body.appendChild(script)
  })
}

export default function BookingSection() {
  const widgetRef = useRef(null)

  useEffect(() => {
    const container = widgetRef.current
    if (!container) return

    let cancelled = false

    loadSimplybookScript().then((SimplybookWidget) => {
      if (cancelled || !SimplybookWidget) return
      new SimplybookWidget({
        ...WIDGET_CONFIG,
        container_id: container,
      })
    })

    return () => {
      cancelled = true
      container.innerHTML = ''
    }
  }, [])

  return (
    <div className="page-container page-container--boka page-container--flush-top">
      <div
        className="section-header"
        data-header-image="/images/boka.png"
        data-header-image-mobile="/images/boka-mobile.png"
        data-nav-bg="#16213B"
      />
      <section className="booking-section" id="booking-section">
        <div className="booking-layout">
          <div className="booking-col booking-col--text">
            <h1>
              Vill du utvecklas på fiol i din egen takt och i ett lugnt tempo?
            </h1>

            <div className="booking-col--image booking-col--image-mobile">
              <img
                className="booking-image booking-image--mobile"
                src="/images/spelarfiol.png"
                alt="Händer som spelar fiol"
              />
            </div>

            <div className="booking-body">
              <p>
                <br />
                Från och med hösten 2026 bjuder jag in till personlig och helt skräddarsydd onlinecoachning. Det är tjänsten för dig som spelar fiol på egen hand, eller har spelat tidigare och vill hitta tillbaka till spelglädjen.
                <br /><br />
                Jag använder inga färdiga mallar. Tillsammans bygger vi ett individanpassat upplägg där dina behov står i centrum.
              </p>
              <p>Det du behöver göra är att ge dig själv tiden att utvecklas. Jag ser till att hjälpa dig nå målen.</p>
            </div>
          </div>

          <div className="booking-col booking-col--image booking-col--image-desktop">
            <img
              className="booking-image booking-image--desktop"
              src="/images/saraundervisaronline.jpg"
              alt="Sara ger onlineundervisning i fiol"
            />
          </div>
        </div>
      </section>

      <section className="booking-widget" ref={widgetRef} />
    </div>
  )
}
