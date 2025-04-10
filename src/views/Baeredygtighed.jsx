import { lazy, Suspense } from "react";
import Lottie from "lottie-react";
import { useRef, useEffect } from "react";
import SPIRALIKON from "../assets/spiramobile.svg";
import IPHONEJPEG from "../assets/iphonejpeg.jpeg";
import IPHONEWEBP from "../assets/iphonewebp.webp";
import "../css-med-lille/baeredygtighed.css";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Observer } from "gsap/Observer";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Observer);
ScrollTrigger.normalizeScroll(true);

import MotionGrapic from "../assets/motion-grapics.json";

const KontaktKnap = lazy(() => import("../components/kontakt"));

export default function Baeredygtighed() {
  const subtitle = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      subtitle.current,
      {
        opacity: 0,
        x: -500,
      },
      {
        x: 0,
        y: 0,
        rotation: 0,
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      }
    );
  }, []);

  return (
    <section className="baeredygtighed-section">
      {/* Overskrift + ikon */}
      <div className="baeredygtighed-header-alt">
        <div className="baeredygtighed-header">
          <div className="baeredygtighed-title">
            <h1 className="main-title">Vores syn på</h1>
            <h2 ref={subtitle} className="sub-title">
              bæredygtighed
            </h2>
          </div>
          <img
            src={SPIRALIKON}
            alt="Spiral ikon"
            className="spiral-icon"
            loading="lazy"
          />
        </div>
      </div>

      {/* Minimer dit digitale fodaftryk */}
      <div className="lottieboks">
        <div className="lottiefil">
          <Lottie animationData={MotionGrapic} />
        </div>

        <div className="vidste-du">
          <h3 className="section-title">Minimer dit digitale fodaftryk</h3>
          <p className="section-text">
            Internettet står for omkring 2% af det samlede menneskeskabte
            CO₂-udslip – svarende til den globale luftfartsindustri. Hver gang
            vi besøger en hjemmeside, streamer en video eller sender en e-mail,
            bruges der energi, som ofte kommer fra fossile brændsler. Heldigvis
            kan vi gøre en forskel: Gennem bæredygtigt webdesign kan vi reducere
            datamængder, optimere kode og vælge grønne servere – og dermed
            minimere det digitale fodaftryk.
          </p>
        </div>
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
              <br />
              <br />
              Et godt eksempel er forskellen mellem filformater af billeder. Til
              højre ses to billeder, hvor forskellen i filstørrelse er tydelig.
              Det ene billede er et JPEG, og det andet er et WEBP. Som det kan
              ses, er der næsten ingen forskel på de to billeder, så hvorfor
              ikke bare bruge WEBP og på den måde gøre din hjemmeside mere
              bæredygtig?
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

      <div className="farve-og-mobilefirst">
        <div className="mobilefirst">
          <h2>Mobil first</h2>
          <p>
            I dag foregår størstedelen af alle visninger via smartphones, og
            derfor er mobile first og responsivt webdesign afgørende. <br />{" "}
            <br />
            Ved at designe og kode med udgangspunkt i smartphones sikrer man
            både en god brugeroplevelse og optimeret performance. Kun nødvendige
            elementer loades på mobilen, mens ekstra indhold først tilføjes på
            større enheder som tablets og computere. <br /> <br />
            Det gør siden hurtigere, mere brugervenlig og samtidig mere
            bæredygtig, da mindre data skal hentes – og dermed bruges der også
            mindre strøm.
          </p>
        </div>
        <div className="farve">
          <h2>Farvevalg</h2>
          <p>
            Farver har også betydning for klimaet – f.eks. kræver blå farver
            generelt mere energi at vise end grønne og røde, da de kræver mere
            lys. Dog afhænger strømforbruget også af skærmens lysstyrke, og
            nyere skærme er blevet mere energieffektive. <br /> <br />
            At vælge energivenlige farver kan dog begrænse farvepaletten og
            udfordre visuelle identiteter, hvilket kan føre til mere ensartede
            design. <br /> <br />
            Ved udvikling af klimavenlige websites kan man derfor med fordel
            vælge mørke farver, gråtoner samt grønne og røde nuancer fremfor
            lyse og energikrævende farver.
          </p>
        </div>
      </div>

      <Suspense fallback={<div>Henter kontaktknap... Vent venligst</div>}>
        <KontaktKnap />
      </Suspense>
    </section>
  );
}
