import { useRef, useEffect } from "react";
import { lazy, Suspense } from "react";
{
  /* css filen */
}
import "../css-med-lille/omos.css";
{
  /* vores portrætter */
}
import logoForside from "../assets/spiralogoforside.svg";
import DAN from "../assets/danielpor.svg";
import MIK from "../assets/mikkelpor.svg";
import VIK from "../assets/vikpor.svg";
import MAR from "../assets/mariapor.svg";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Observer } from "gsap/Observer";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Observer);
ScrollTrigger.normalizeScroll(true);

const KontaktKnap = lazy(() => import("../components/kontakt"));

export default function OmOs() {

  const kort1 = useRef(null);
  const kort2 = useRef(null);
  const kort3 = useRef(null);
  const kort4 = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      kort1.current, // The element we want to animate
      {
        // From (initial state)
        rotation: -20, // Start at 180 degrees
        opacity: 0, // Start with opacity 0
        x: -500,
        y: -50,
      },
      {
        // To (final state)
        x: 0,
        y: 0,
        rotation: 0, // End at 0 degrees (original position)
        opacity: 1, // End with opacity 1 (fully visible)
        scrollTrigger: {
          trigger: kort1.current,
          start: "top 90%",
          end: "bottom bottom",
          scrub: 3,
          once: true,
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      kort2.current, // The element we want to animate
      {
        // From (initial state)
        rotation: -20, // Start at 180 degrees
        opacity: 0, // Start with opacity 0
        x: -500,
        y: 50,
      },
      {
        // To (final state)
        x: 0,
        y: 0,
        rotation: 0, // End at 0 degrees (original position)
        opacity: 1, // End with opacity 1 (fully visible)
        scrollTrigger: {
          trigger: kort2.current,
          start: "top 90%",
          end: "bottom bottom",
          scrub: 3,
          once: true,
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      kort3.current, // The element we want to animate
      {
        // From (initial state)
        rotation: 20, // Start at 180 degrees
        opacity: 0, // Start with opacity 0
        x: 500,
        y: 50,
      },
      {
        // To (final state)
        x: 0,
        y: 0,
        rotation: 0, // End at 0 degrees (original position)
        opacity: 1, // End with opacity 1 (fully visible)
        scrollTrigger: {
          trigger: kort1.current,
          start: "top 90%",
          end: "bottom bottom",
          scrub: 3,
          once: true,
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      kort4.current, // The element we want to animate
      {
        // From (initial state)
        rotation: 20, // Start at 180 degrees
        opacity: 0, // Start with opacity 0
        x: 500,
        y: 50,
      },
      {
        // To (final state)
        x: 0,
        y: 0,
        rotation: 0, // End at 0 degrees (original position)
        opacity: 1, // End with opacity 1 (fully visible)
        scrollTrigger: {
          trigger: kort2.current,
          start: "top 90%",
          end: "bottom bottom",
          scrub: 3,
          once: true,
        },
      }
    );
  }, []);

  return (
    <>
      {/* Den øverste sektion */}
      <div className="hvem-er-forside">
        <div className="columnrev">
        <p>
          <span className="hvemer">Hvem er</span>
          <span className="vi"> vi?</span>
        </p>{" "}
        <img
          className="logoForsideOmOs"
          src={logoForside}
          alt="LogoForside"
          loading="lazy"
        />
        </div>
        <p className="underteksthver">
          Her kan du møde os bag Spira og se hvad vi hver især står for i
          udviklingsprocessen af dit nye website!
        </p>
      </div>

      {/* vores værdier sektion */}
      <div className="værdier-sektion">
        <p className="veardier">Vores værdier</p>
        <p className="veardiertekst">
          Samarbejde: Vi udvikler webdesigns i tæt dialog med vores kunder.{" "}
          <br />
          Bæredygtighed: Vi går op i at skabe websites med mere omtanke for
          miljøet. <br />
          Brugervenlighed: Vi sætter altid brugeren i centrum.
        </p>
      </div>

      {/* sektionen om os */}
      <p>
        <span className="moed">Mød</span>
        <span className="teamet"> teamet</span>
      </p>

      <section className="nret">
        <section ref={kort1} className="baggrundpor">
          <img src={DAN} alt="portræt af Daniel" loading="lazy" />
          <h3 className="navn">Daniel</h3>
          <p>
            Daniel er specialist i webudvikling og har flere års erfaring
            indenfor den digitale verden.
          </p>
        </section>

        <section ref={kort3} className="baggrundpor">
          <img src={MIK} alt="portræt af Mikkel" loading="lazy" />
          <h3 className="navn">Mikkel</h3>
          <p>
            Mikkel er vores projektleder. Han har flere års erfaring
            koordinering og projektstyring.
          </p>
        </section>
      </section>

      <section className="nrto">
        <section ref={kort2} className="baggrundpor">
          <img src={VIK} alt="portræt af Viktoria" loading="lazy" />
          <h3 className="navn">Viktoria</h3>
          <p>
            Viktoria er vores grafiske designer. Hun har flere års erfaring med
            udvikling af grafiske elementer og animationer.
          </p>
        </section>

        <section ref={kort4} className="baggrundpor">
          <img src={MAR} alt="portræt af Maria" loading="lazy" />
          <h3 className="navn">Maria</h3>
          <p>
            Maria er vores content koordinator og har flere års erfaring med
            udvikling af content og design elementer.
          </p>
        </section>
      </section>
      <Suspense fallback={<div>Henter kontaktknap... Vent venligst</div>}>
        <KontaktKnap />
      </Suspense>
    </>
  );
}
