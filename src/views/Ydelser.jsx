import { useState } from 'react';
import SPIRALIKON from "../assets/spiramobile.svg";
/*
import IPHONEJPEG from "../assets/iphonejpeg.jpeg";
import IPHONEWEBP from "../assets/iphonewebp.webp"; 
import SPIRALIKON from "../assets/spiramobile.svg";
import IPHONEJPEG from "../assets/iphonejpeg.jpeg";
*/
import "../css-med-lille/ydelser.css";



export default function ForwardChain() {
  return ( 
    <section className="ydelse-section">

      {/* Overskrift + ikon */}
       <div className="ydelse-header-alt">
            <div>
              <p className="-intro-text">
                Her kan du læse mere om, hvilke ydelser vi tilbyder. <br/> 
                Synes du der mangler noget? Kontakt os, så skal vi nok finde ud af noget!
                </p>
              </div>
            <div className="ydelse-header">
              <div className="ydelse-title">
                <h1 className="main-title">Vores</h1>
                <h2 className="sub-title">ydelser</h2>
              </div>
              <img src={SPIRALIKON} alt="Spiral ikon" className="spiral-icon" />
              </div>
            </div>

            {/* Kort over ydelser samt ikon og pris */}
            <div className='kortholder'>
              <div className='kort'>
                <div className='kort-tekst'>
                <h2>Branding & Visuel Identitet</h2>
                <p> 
                  Vi udarbejder moodboard sammen, så vi kan nemt kan finde frem til lige netop dine ønsker
                  Vi designer dit nye logo og branddesign i tæt samarbejde, for at få det bedst mulige resultat. 
                  Her efter vil vi udarbejde en designmanual, så du også nemt selv kan skabe ændringer.
                  Derudover kan vi hjælpe dig med grafisk design til både online og offline materialer.
                </p>
              </div>
              <div className='kort-billede'>
                <img src={SPIRALIKON} alt="logo"/>
              </div>
              </div>

              <div className='kort'>
                <div className='kort-tekst'>
                <h2>Webudvikling & Design</h2>
                <p> 
                  Vi designer og udvikler din nye hjemmeside lige efter dine ønsker - ofte i REACT eller wordpress. 
                  Vi har altid brugervenlighed i fokus, og går derfor meget op i at vide mest muligt om målgruppen, for at kunne skabe den bedst mulige brugeroplevelse.
                  Derudover har vi stor erfaring indenfor responsivt design, så din hjemmeside vil fungere på alle enheder.
                </p>
              </div>
              <div className='kort-billede'>
                <img src={SPIRALIKON} alt="logo"/>
              </div>
              </div>

              <div className='kort'>
                <div className='kort-tekst'>
                <h2>Websupport & Vedligeholdelse</h2>
                <p> 
                  Har du allerede en hjemmeside du er rigtig glad for?
                  Vi kan hoste hjemmesiden for dig, og hjælpe dig med vedligeholdelse af denne.
                  Vi tilbyder at hjælpe dig med løbende optimeringer, sikkerhedsopdateringer og teknisk support, for at du selv kan spare tid, og kan fokusere mere på din kerneforretning.
                </p>
              </div>
              <div className='kort-billede'>
                <img src={SPIRALIKON} alt="logo"/>
              </div>
              </div>

              <div className='kort'>
                <div className='kort-tekst'>
                <h2>Webdesign & bæredygtighed</h2>
                <p> 
                  Vi tilbyder at optimere din hjemmeside, for at gøre den mere bæredygtig. Vi kan både skabe den fra bunden, med fokus på bæredygtighed, eller blot optimere din allerede eksisterende hjemmeside. 
                  Vi gør det med fokus på et lavere CO₂-aftryk, men også fordi det faktisk vil gøre fx loading tider hurtigere, eller optimere din SEO endnu mere. 

                  Vil du vide mere om bæredygtighed indenfor den online verden? SÅ KLIK HER
                </p>
              </div>
              <div className='kort-billede'>
                <img src={SPIRALIKON} alt="logo"/>
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