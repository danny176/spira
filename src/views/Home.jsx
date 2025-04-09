import { useRef, useEffect } from "react";
import "../css-med-lille/forside.css";
import logoForside from "../assets/spiralogoforside.svg";
import case1 from "../assets/case1.png";
import case2 from "../assets/case2.png";
import iconBranding from "../assets/iconBranding.svg";
import iconDesign from "../assets/iconDesign.svg";
import iconWebsupport from "../assets/iconWebsupport.svg";
import iconBaere from "../assets/iconBaere.svg";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Observer } from "gsap/Observer";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { lazy, Suspense } from "react";
const KontaktKnap = lazy(() => import("../components/kontakt"));

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Observer);
ScrollTrigger.normalizeScroll(true);

export default function Home() {
  const logoRef = useRef(null);
  const logoHeaderText = useRef(null);
  const HeaderText2 = useRef(null);
  const introText = useRef(null);
  const casePic1 = useRef(null);
  const casePic2 = useRef(null);
  const caseContainer = useRef(null);
  const caseContainer2 = useRef(null);
  const textContainer1 = useRef(null);
  const textContainer2 = useRef(null);
  const kort1 = useRef(null);
  const kort2 = useRef(null);
  const kort3 = useRef(null);
  const kort4 = useRef(null);
  const ydelsessec = useRef(null);
  const kontaktkomp = useRef(null);

  const isMobile = window.innerWidth <= 500;

 

  useEffect(() => {
    gsap.to(logoRef.current, {
      rotation: 360,
      duration: 120,
      repeat: -1,
    });
  }, []);

  useEffect(() => {
    gsap.to(logoHeaderText.current, {
        x: -500,
        opacity: 0,
        scrollTrigger: {
          trigger: introText.current,
          start: isMobile ? "top 20%" : "top 20%",
          end: isMobile ? "bottom top" : "bottom top",
          scrub: 2,
        },
      });
    
      
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 500);
    }, []);

  useEffect(() => {
    gsap.to(HeaderText2.current, {
      x: 500,
      opacity: 0,
      scrollTrigger: {
        trigger: introText.current,
        start: "top 20%",
        end: "bottom top",
        scrub: 2,
      },
    });
  }, []);

  useEffect(() => {
    gsap.fromTo(
      casePic1.current, 
      {
        
        rotation: -20, 
        opacity: 1, 
        x: -500,
        y: 100,
      },
      {
        
        x: 0,
        y: 0,
        rotation: 0, 
        opacity: 1, 
        duration: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: caseContainer.current,
          start: isMobile ? "top bottom" : "top 20%",
          end: "bottom bottom",
          scrub: isMobile ? false : 3,
          toggleActions: isMobile ? "play none none none" : undefined,
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      casePic2.current, // The element we want to animate
      {
        // From (initial state)
        rotation: 20, // Start at 180 degrees
        opacity: 1, // Start with opacity 0
        x: 500,
        y: 100,
      },
      {
        // To (final state)
        x: 0,
        y: 0,
        duration: 1,
        ease: "power1.inOut",
        rotation: 0, // End at 0 degrees (original position)
        opacity: 1, // End with opacity 1 (fully visible)
        scrollTrigger: {
          trigger: caseContainer2.current,
          start: "top center",
          end: "bottom bottom",
          scrub: isMobile ? false : 3,
          toggleActions: isMobile ? "play none none none" : undefined,
        },
      }
    );
  }, []);

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
          start: "top 80%",
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
          start: "top 80%",
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
          trigger: kort3.current,
          start: "top 80%",
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
          trigger: kort4.current,
          start: "top 80%",
          end: "bottom bottom",
          scrub: 3,
          once: true,
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      textContainer1.current, // The element we want to animate
      {
        // From (initial state)
        opacity: 1, // Start with opacity 0
        y: isMobile ? 300 : 400,
      },
      {
        // To (final state)
        x: 0,
        y: 0,
        rotation: 0, // End at 0 degrees (original position)
        opacity: 1, // End with opacity 1 (fully visible)
        duration: 1,
        ease: "power1.in",
        scrollTrigger: {
          trigger: isMobile ?  casePic1.current : caseContainer.current,
          start: "top bottom",
          end: "bottom bottom",
          scrub: isMobile ? 3 : 3,
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ydelsessec.current, // The element we want to animate
      {
        // From (initial state)
        opacity: 1, // Start with opacity 0
        y: 400,
      },
      {
        // To (final state)
        x: 0,
        y: 0,
        ease: "expo.out",
        rotation: 0, // End at 0 degrees (original position)
        opacity: 1, // End with opacity 1 (fully visible)
        scrollTrigger: {
          trigger: ydelsessec.current,
          start: "top bottom",
          end: "bottom center",
        },
        duration: 3,
      }
    );
  }, []);

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

  useEffect(() => {
    gsap.fromTo(
      textContainer2.current, // The element we want to animate
      {
        // From (initial state)
        opacity: 1, // Start with opacity 0
        y: isMobile ? 300 : 400,
      },
      {
        // To (final state)
        x: 0,
        y: 0,
        duration: 1,
        ease: "power1.in",
        rotation: 0, // End at 0 degrees (original position)
        opacity: 1, // End with opacity 1 (fully visible)
        scrollTrigger: {
          trigger: isMobile ?  casePic2.current : caseContainer2.current,
          start: "top center",
          end: "bottom bottom",
          scrub: isMobile ? 3 : 3,
          toggleActions: isMobile ? "play none none none" : undefined,
        },
      }
    );
  }, []);

  return (
    <>
      <div className="fullscreenhero">
        <div ref={introText} className="introtext">
          <img
            ref={logoRef}
            className="logoForside"
            src={logoForside}
            alt="LogoForside"
            loading="lazy"
          />
          <div className="overflowhiddentext">
            <h2 ref={logoHeaderText} className="headertext">
              Et webbureau der forstår
            </h2>
            <h2 ref={HeaderText2} className="headertext2">
              brugeren, brandet og balancen.{" "}
            </h2>
          </div>
        </div>
      </div>

      <h2 className="udvalgtecases">Vores udvalgte cases</h2>

      <div className="overflowhiddencases">
        <div ref={caseContainer} className="casecontainer">
          <img ref={casePic1} className="case1" src={case1} alt="case1" loading="lazy" />
          <div ref={textContainer1} className="textcasecontainer">
            <h2>Et personligt portfolio</h2>
            <p>
              Drømmer du om at få dit helt eget portfolio, hvor dine kreationer
              kommer til udtryk på en stilren, unik, eller måske en legende
              måde? Læs mere om, hvordan vi før har udarbejdet et portfolio.{" "}
              <br /> <br />
              Det siger vores kunde: “Et godt samarbejde hele vejen igennem med
              Spira. Det kan klart anbefales”
            </p>
            <a className="seprojektknap">Se projekt</a>
          </div>
        </div>
        <div ref={caseContainer2} className="casecontainer2">
          <img ref={casePic2} className="case2" src={case2} alt="case2" loading="lazy" />
          <div ref={textContainer2} className="textcasecontainer">
            <h2>Personlig træner hjemmeside</h2>
            <p>
              Ønsker du en hjemmeside, hvor du kan vise, hvad du tilbyder på en
              professionel måde? Kunne du tænke dig en måde dine kunder nemt kan
              få fat på dig med en kontaktformular? Lære mere om, hvordan vi før
              har skabt en hjemmeside med disse tiltag.
              <br />
              <br />
              Det siger vores kunde: ”Den bedste service! Spira opdatere min
              hjemmeside super hurtigt”
            </p>
            <a className="seprojektknap">Se projekt</a>
          </div>
        </div>
      </div>

      <section ref={ydelsessec} className="ydelsersec">
        <h2>Hvad vi står for</h2>
        <div className="textydel">
          <p className="tekstydelsbase">
            Vi vil gerne give den bedste oplevelse, når det kommer til køb af
            hjemmesider. Vi bestræber os efter at give vores kunder den gode
            brugeroplevelse når de køber en hjemmeside fra os.
          </p>
          <p className="tekstydelsbase2">
            Vi gør meget ud af at vores hjemmesider er hurtige og optimerede. I
            takt med, at vi laver optimerede hjemmesider, har vi også fokus på
            dataforbrug, og hvordan vi laver de mindst forurenende hjemmesider.
          </p>
        </div>
      </section>

      <section className="hvadtilbydervisec">
        <h2>Vores ydelser</h2>
        <div className="kortcontainererow">
          <div className="kortcontainer1">
            <div ref={kort1} className="kort1">
              <div className="titelIcon">
                <h3>Branding & Visuel Identitet</h3>
                <img className="iconbrand" src={iconBranding} alt="brandicon" loading="lazy" />
              </div>
              <ul>
                <li>Logo og branddesign</li>
                <li>Moodboards og design manual</li>
                <li>Grafisk design til online og offline materialer</li>
              </ul>
            </div>
            <div ref={kort2} className="kort2">
              <div className="titelIcon">
                <h3>Webudvikling & Design</h3>
                <img className="iconbrand" src={iconDesign} alt="brandicon" loading="lazy"/>
              </div>
              <ul>
                <li>Design og udvikling af hjemmesider efter dine ønsker</li>
                <li>UI/UX-design for en brugervenlig oplevelse</li>
                <li>Responsivt design, så siden fungerer på alle enheder</li>
              </ul>
            </div>
          </div>
          <div className="kortcontainer2">
            <div ref={kort3} className="kort1">
              <div className="titelIcon">
                <h3>Websupport & Vedligeholdelse</h3>
                <img
                  className="iconbrand"
                  src={iconWebsupport}
                  alt="brandicon"
                  loading="lazy"
                />
              </div>
              <ul>
                <li>Hosting og domænehåndtering</li>
                <li>Sikkerhedsopdateringer</li>
                <li>Løbende optimering og teknisk support</li>
              </ul>
            </div>
            <div ref={kort4} className="kort2">
              <div className="titelIcon">
                <h3>Webdesign & bæredygtighed</h3>
                <img className="iconbrand" src={iconBaere} alt="brandicon" loading="lazy"/>
              </div>
              <ul>
                <li>Optimering af websites for lavere CO₂-aftryk</li>
                <li>Grøn hosting og energieffektive teknologier</li>
                <li>Performance-optimering for fx hurtigere loadtider</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Suspense fallback={<div>Henter kontaktknap... Vent venligst</div>}>
              <KontaktKnap />
            </Suspense>
    </>
  );
}
