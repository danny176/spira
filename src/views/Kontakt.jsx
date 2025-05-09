import { useState } from "react"
import '../css-med-lille/kontakt.css'
import logoForside from "../assets/spiralogoforside.svg";

// Kontaktformular-komponent
export default function Kontakt() {
  // Form state
  const [formData, setFormData] = useState({
    navn: '',
    virksomhed: '',
    email: '',
    telefon: '',
    besked: ''
  })

  // Opdater formData (objektet med alle inputværdierne fra formularen) ved ændring i felterne. 
  const handleChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value })

  // Til udvidelsen, hvis der skal ske noget, når formularen bliver sendt 
  const handleSubmit = e => e.preventDefault()

  return (
    <div className="kontakt-container">
      {/* H1 */}
      <h1 className="kontakt-h1">
        <span className="font1">Er du</span>
        <span className="font2"> interesseret?</span>
      </h1>

      {/* Indhold under h1: tekst til venstre, formular til højre */}
      <div className="kontakt-indhold">
        {/* Venstre side med introduktionstekst */}
        <div className="kontakt-tekst">
          <p className="intro-tekst">
            Vil du vide mere om os, eller har du nogle specifikke ønsker eller spørgsmål?<br />
           <br /> Du er mere end velkommen til at kontakte os, så vil vi gøre vores bedste for at
            få lige netop dine ønsker opfyldt!
          </p>
          <div className="spiraldiv">
                  <img
                    className="logoForsideKontakt"
                    src={logoForside}
                    alt="LogoForside"
                    loading="lazy"
                  />
                  </div>
        </div>
        

        {/* Højre side med kontaktformular */}
        <form className="kontakt-formular" onSubmit={handleSubmit}>
          {/* Første række: navn og virksomhed */}
          <div className="form-row">
            <input
              type="text"
              name="navn"
              placeholder="Fulde navn"
              value={formData.navn}
              onChange={handleChange}
            />
            <input
              type="text"
              name="virksomhed"
              placeholder="Virksomhed"
              value={formData.virksomhed}
              onChange={handleChange}
            />
          </div>

          {/* Anden række: e-mail og telefonnummer */}
          <div className="form-row">
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="telefon"
              placeholder="Telefon nr."
              value={formData.telefon}
              onChange={handleChange}
            />
          </div>

          {/* Tekstfelt til besked */}
          <textarea
            name="besked"
            placeholder="Hvad kan vi hjælpe dig med?"
            value={formData.besked}
            onChange={handleChange}
          />

          {/* Send-knap */}
          <button type="submit">Send</button>
        </form>
      </div>
    </div>

  )
}
