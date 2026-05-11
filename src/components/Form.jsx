export default function Form() {
  return (
    <div className="BookingForm">
      <form action="/send.php" method="POST">
        <label>Ditt namn</label>
        <input name="name" required />

        <label>Din e-post</label>
        <input type="email" name="email" required />

        <label>Ditt telefonnummer</label>
        <input type="tel" name="phone" required />

        <label>Vad är dina förväntningar & ditt mål med din fiollektion?</label>
        <textarea name="goals" required></textarea>

        <label>Har du en favoritlåt eller en låt du vill öva på med mig?</label>
        <input type="text" name="favorite_song" required />

        <fieldset className="experience-group">
          <legend>Har du tidigare erfarenhet med fiol?</legend>
          <label>
            <input type="checkbox" name="experience[]" value="noten" />
            Spelar efter noten
          </label>
          <label>
            <input type="checkbox" name="experience[]" value="gehor" />
            Spelar på gehör
          </label>
          <label>
            <input type="checkbox" name="experience[]" value="langesen" />
            Har spelat för länge sen
          </label>
          <label>
            <input type="checkbox" name="experience[]" value="aktivt" />
            Spelar aktivt
          </label>
          <label>
            <input type="checkbox" name="experience[]" value="mitt_emellan" />
            Något mitt emellan
          </label>
        </fieldset>

        <button type="submit">Skicka och gå vidare till bokning</button>
      </form>
    </div>
  )
}