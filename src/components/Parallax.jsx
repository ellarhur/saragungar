import React from 'react'

export default function Parallax({ id }) {
  return (
    <section className={`parallax-section ${id}`}>
      <div className="parallax-bg"></div>
      <div className="parallax-overlay"></div>
      <div className="parallax-content"></div>
    </section>
  )
}
