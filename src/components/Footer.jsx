import React from 'react'

export default function Footer() {
  return (
    <footer>
      <div className="footer-wrapper">
        <p>Missa inte uppdateringar genom att prenumerera på mitt nyhetsbrev!</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Din e-postadress" required />
          <button type="submit">PRENUMERERA</button>
        </form>
      </div>
    </footer>
  )
}
