import { useRef, useEffect } from "react";
import "../css-med-lille/forside.css";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Observer } from "gsap/Observer";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Observer);
ScrollTrigger.normalizeScroll(true);

export default function KontaktKnap() {

    const kontaktkomp = useRef (null);
    
  useEffect(() => {
    gsap.fromTo(
      kontaktkomp.current, // The element we want to animate
      {
        // From (initial state)
        opacity: 0, // Start with opacity 0
        x: 600,
      },
      {
        // To (final state)
        x: 0,
        y: 0,
        ease: "expo.out",
        rotation: 0, // End at 0 degrees (original position)
        opacity: 1, // End with opacity 1 (fully visible)
        scrollTrigger: {
          trigger: kontaktkomp.current,
          start: "top bottom",
          end: "bottom center",
          scrub: 4,
        },
      }
    );
  }, []);

  return (
    <section  className="kontaktkomp">
      <div ref={kontaktkomp} className="konktaktknapcont">
        <h3>
          Vil du vide mere om, hvad vi tilbyder, eller har du spørgsmål?
          <br />
          <br />
          Du er velkommen til at kontakte os!
        </h3>
        <a className="kontaktknapside" href="/spira/Kontakt">
          Kontakt
        </a>
      </div>
    </section>
  );
}


