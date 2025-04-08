import { useState } from "react";
import SPIRALIKON from "../assets/spiramobile.svg";
import IPHONEJPEG from "../assets/iphonejpeg.jpeg";
import IPHONEWEBP from "../assets/iphonewebp.webp";
import "../css-med-lille/baeredygtighed.css";

export default function Baeredygtighed() {
  return (
  <section className="baeredygtighed-section">
      
      {/* Overskrift + ikon */}
      <div className="baeredygtighed-header-alt">
      <div>
        <p className="-intro-text">
            Her kan du læse mere om vores syn på online bæredygtighed.
          </p>
        </div>
      <div className="baeredygtighed-header">
        <div className="baeredygtighed-title">
          <h1 className="main-title">Vores syn på</h1>
          <h2 className="sub-title">bæredygtighed</h2>
        </div>
        <img src={SPIRALIKON} alt="Spiral ikon" className="spiral-icon" />
        </div>
      </div>

      {/* Vidste du... */}
      <div className="vidste-du">
        <h3 className="section-title">Vidste du…</h3>
        <p className="section-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      {/* Billedoptimering */}
      <div className="billede-optimering">
        <div className="optimering-samlet-text">
        <h3 className="section-title">Optimering af billeder</h3>
        <div className="section-text-wrapper">
          <p>
            En af de nemmeste måder at optimere din hjemmeside på, er at optimere dine billeder.
            Det bedste er at uploade billeder med en lille filstørrelse, som er tilpasset det brugte design.
          </p>
          <p>
            Et godt eksempel er forskellen mellem filformater af billeder.
            Til højre ses to billeder, hvor forskellen i filstørrelse er tydelig.
            Det ene billede er et JPEG, og det andet er et WEBP.
          </p>
          <p>
            Som det kan ses, er der næsten ingen forskel på de to billeder, så hvorfor ikke bare bruge WEBP og på den måde gøre din hjemmeside mere bæredygtig?
          </p>
          <p>
            <strong>Bonus:</strong> Hvis du optimerer alle dine billeder på denne måde, vil din loadingtime på din hjemmeside også blive bedre.
          </p>
        </div>
        </div>

        {/* Billede sammenligning */}
        <div className="billede-sammenligning">
          <div className="billede-box">
            <img src={IPHONEJPEG} alt="JPEG format" className="optimeret-billede" />
            <p className="billede-caption">JPEG - 744 kb</p>
          </div>
          <div className="billede-box">
            <img src={IPHONEWEBP} alt="WEBP format" className="optimeret-billede" />
            <p className="billede-caption">WEBP - 86 kb</p>
          </div>
        </div>
      </div>

      {/* Kontakt CTA */}
      <div className="kontakt-cta">
        <p>Vil du vide mere om hvad vi tilbyder af mere bæredygtigt webdesign?</p>
        <p>Du er velkommen til at kontakte os!</p>
        <button className="kontakt-button">Kontakt</button>
      </div>
    </section> 
  )  
  }