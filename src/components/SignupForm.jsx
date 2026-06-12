import React from 'react'

export default function SignupForm() {
  return (
    <form className="signup-form" action="/send.php" method="POST">
      <input type="hidden" name="form_type" value="signup" />

      <label className="signup-field">
        E-post
        <input type="email" name="email" required />
      </label>

      <button type="submit">Skicka</button>
    </form>
  )
}
