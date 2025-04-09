 import { lazy, Suspense } from "react";
import SPIRALIKON from "../assets/spiramobile.svg";
import IPHONEJPEG from "../assets/iphonejpeg.jpeg";
import IPHONEWEBP from "../assets/iphonewebp.webp";
import "../css-med-lille/baeredygtighed.css";

const KontaktKnap = lazy(() => import("../components/kontakt"));

export default function Baeredygtighed() {
  return (
    <section className="baeredygtighed-section">
      {/* Overskrift + ikon */}
      <div className="baeredygtighed-header-alt">
        <div className="baeredygtighed-header">
          <div className="baeredygtighed-title">
            <h1 className="main-title">Vores syn på</h1>
            <h2 className="sub-title">bæredygtighed</h2>
          </div>
          <img src={SPIRALIKON} alt="Spiral ikon" className="spiral-icon" loading="lazy" />
        </div>
      </div>

      {/* Vidste du... */}
      <div className="vidste-du">
        <h3 className="section-title">Minimer dit digitale fodaftryk</h3>
        <p className="section-text">
          Internettet står for omkring 2% af det samlede menneskeskabte
          CO₂-udslip – svarende til den globale luftfartsindustri. Hver gang vi
          besøger en hjemmeside, streamer en video eller sender en e-mail,
          bruges der energi, som ofte kommer fra fossile brændsler. Heldigvis
          kan vi gøre en forskel: Gennem bæredygtigt webdesign kan vi reducere
          datamængder, optimere kode og vælge grønne servere – og dermed
          minimere det digitale fodaftryk.
        </p>
      </div>

      {/* Billedoptimering */}
      <div className="billede-optimering">
        <div className="optimering-samlet-text">
          <h3 className="section-title">Optimering af billeder</h3>
          <div className="section-text-wrapper">
            <p>
              En af de nemmeste måder at optimere din hjemmeside på, er at
              optimere dine billeder. Det bedste er at uploade billeder med en
              lille filstørrelse, som er tilpasset det brugte design.
            </p>
            <p>
              Et godt eksempel er forskellen mellem filformater af billeder. Til
              højre ses to billeder, hvor forskellen i filstørrelse er tydelig.
              Det ene billede er et JPEG, og det andet er et WEBP.
            </p>
            <p>
              Som det kan ses, er der næsten ingen forskel på de to billeder, så
              hvorfor ikke bare bruge WEBP og på den måde gøre din hjemmeside
              mere bæredygtig?
            </p>
            <p>
              <strong>Bonus:</strong> Hvis du optimerer alle dine billeder på
              denne måde, vil din loadingtime på din hjemmeside også blive
              bedre.
            </p>
          </div>
        </div>

        {/* Billede sammenligning */}
        <div className="billede-sammenligning">
          <div className="billede-box">
            <img
              src={IPHONEJPEG}
              alt="JPEG format"
              className="optimeret-billede"
              loading="lazy"
            />
            <p className="billede-caption">JPEG - 744 kb</p>
          </div>
          <div className="billede-box">
            <img
              src={IPHONEWEBP}
              alt="WEBP format"
              className="optimeret-billede"
              loading="lazy"
            />
            <p className="billede-caption">WEBP - 86 kb</p>
          </div>
        </div>
      </div>

      <Suspense fallback={<div>Henter kontaktknap... Vent venligst</div>}>
        <KontaktKnap />
      </Suspense>
    </section> 
  )  
  }