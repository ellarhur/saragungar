import React from 'react'

export default function BookingImageGallery() {
  return (
    <section className="booking-gallery" id="booking-gallery">
      <div className="booking-gallery__row">
        <div className="booking-gallery__item">
          <img src="/images/fiolupclose.jpg" alt="Fiol närbild" />
        </div>
        <div className="booking-gallery__item">
          <img src="/images/saraklickar.jpg" alt="Sara vid datorn" />
        </div>
        <div className="booking-gallery__item">
          <img src="/images/fiolfodral.jpeg" alt="Fiol i fodral" />
        </div>
      </div>
    </section>
  )
}
