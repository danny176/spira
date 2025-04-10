import { lazy, Suspense } from "react";
import { useRef, useEffect } from "react";
import SPIRALIKON from "../assets/spiramobile.svg";
import ICONBAERE from "../assets/iconBaere.svg";
import ICONBRANDING from "../assets/iconBranding.svg";
import ICONDESIGN from "../assets/iconDesign.svg";
import ICONWEBSUPPORT from "../assets/iconWebsupport.svg";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Observer } from "gsap/Observer";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Observer);
ScrollTrigger.normalizeScroll(true);

const KontaktKnap = lazy(() => import("../components/kontakt"));

import "../css-med-lille/ydelser.css";

export default function () {
  const subtitle = useRef(null);
  const subtitle2 = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      [subtitle.current, subtitle2.current],
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
    <section className="ydelse-section">
      {/* Overskrift + ikon */}
      <div className="ydelse-header-alt">
        <div>
          <p className="-intro-text">
            Her kan du læse mere om, hvilke ydelser vi tilbyder. <br />
            Synes du der mangler noget? <br />
            <br /> Kontakt os, så skal vi nok finde ud af noget!
          </p>
        </div>
        <div className="ydelse-header">
          <div className="ydelse-title">
            <h1 ref={subtitle} className="main-title">
              Vores
            </h1>
            <h2 ref={subtitle2} className="sub-title">
              ydelser
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

      {/* Kort over ydelser samt ikon og pris */}
      <div className="kortholder">
        <div className="kort">
          <div className="kort-tekst">
            <h2>Branding & Visuel Identitet</h2>
            <p>
              Vi udarbejder moodboard sammen, så vi kan nemt kan finde frem til
              lige netop dine ønsker. <br />
              Vi designer dit nye logo og branddesign i tæt samarbejde, for at
              få det bedst mulige resultat.
              <br />
              <br />
              Her efter vil vi udarbejde en designmanual, så du også nemt selv
              kan skabe ændringer.
              <br />
              Derudover kan vi hjælpe dig med grafisk design til både online og
              offline materialer.
              <br />
            </p>
          </div>
          <div className="kort-billede-pris">
            <div className="kort-billede">
              <img src={ICONBRANDING} alt="ikon branding" loading="lazy" />
            </div>
            <div className="kort-pris">
              <p>Pris fra kun 999 kr</p>
            </div>
          </div>
        </div>

        <div className="kort">
          <div className="kort-tekst">
            <h2>Webudvikling & Design</h2>
            <p>
              Vi designer og udvikler din nye hjemmeside lige efter dine ønsker
              - ofte i REACT eller wordpress. <br />
              <br />
              Vi har altid brugervenlighed i fokus, og går derfor meget op i at
              vide mest muligt om målgruppen, for at kunne skabe den bedst
              mulige brugeroplevelse.
              <br />
              <br />
              Derudover har vi stor erfaring indenfor responsivt design, så din
              hjemmeside vil fungere på alle enheder.
            </p>
          </div>
          <div className="kort-billede-pris">
            <div className="kort-billede">
              <img src={ICONDESIGN} alt="ikon design" loading="lazy" />
            </div>
            <div className="kort-pris">
              <p>Pris fra kun 999 kr</p>
            </div>
          </div>
        </div>

        <div className="kort">
          <div className="kort-tekst">
            <h2>Websupport & Vedligeholdelse</h2>
            <p>
              Har du allerede en hjemmeside du er rigtig glad for? Vi kan hoste
              hjemmesiden for dig, og hjælpe dig med vedligeholdelse af denne.
              <br />
              <br />
              Vi tilbyder at hjælpe dig med løbende optimeringer,
              sikkerhedsopdateringer og teknisk support, for at du selv kan
              spare tid, og kan fokusere mere på din kerneforretning.
            </p>
          </div>
          <div className="kort-billede-pris">
            <div className="kort-billede">
              <img src={ICONWEBSUPPORT} alt="ikon websupport" loading="lazy" />
            </div>
            <div className="kort-pris">
              <p>Pris fra kun 999 kr</p>
            </div>
          </div>
        </div>

        <div className="kort">
          <div className="kort-tekst">
            <h2>Webdesign & bæredygtighed</h2>
            <p>
              Vi tilbyder at optimere din hjemmeside, for at gøre den mere
              bæredygtig. Vi kan både skabe den fra bunden, med fokus på
              bæredygtighed, eller blot optimere din allerede eksisterende
              hjemmeside. <br />
              <br />
              Vi gør det med fokus på et lavere CO₂-aftryk, men også fordi det
              faktisk vil gøre fx loading tider hurtigere, eller optimere din
              SEO endnu mere.
              <br />
              <br />
              Vil du vide mere om bæredygtighed indenfor den online verden? SÅ
              KLIK HER
            </p>
          </div>
          <div className="kort-billede-pris">
            <div className="kort-billede">
              <img src={ICONBAERE} alt="ikon bæredygtighed" loading="lazy" />
            </div>
            <div className="kort-pris">
              <p>Pris fra kun 999 kr</p>
            </div>
          </div>
        </div>
      </div>
      <Suspense fallback={<div>Henter kontaktknap... Vent venligst</div>}>
        <KontaktKnap />
      </Suspense>
    </section>
  );
}
