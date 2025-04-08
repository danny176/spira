import { useState, useEffect, useRef } from 'react';
import SPIRALIKON from "../assets/spiramobile.svg";
/*
import IPHONEJPEG from "../assets/iphonejpeg.jpeg";
import IPHONEWEBP from "../assets/iphonewebp.webp"; 
import SPIRALIKON from "../assets/spiramobile.svg";
import IPHONEJPEG from "../assets/iphonejpeg.jpeg";
*/
import "../css-med-lille/ydelser.css";

/* const ydelser = [
  {
    titel: "Branding & Visuel identitet",
    beskrivelse: "Vi udarbejder moodboard sammen, så vi kan nemt kan finde frem til lige netop dine ønsker. Vi designer dit nye logo og branddesign i tæt samarbejde, for at få det bedst mulige resultat. Her efter vil vi udarbejde en designmanual, så du også nemt selv kan skabe ændringer. Derudover kan vi hjælpe dig med grafisk design til både online og offline materialer. "
  },
  {
    titel: "Webudvikling & Design",
    beskrivelse: "Vi designer og udvikler din nye hjemmeside lige efter dine ønsker - ofte i REACT eller wordpress. Vi har altid brugervenlighed i fokus, og går derfor meget op i at vide mest muligt om målgruppen, for at kunne skabe den bedst mulige brugeroplevelse. Derudover har vi stor erfaring indenfor responsivt design, så din hjemmeside vil fungere på alle enheder."
  },
  {
    titel: "Websupport & Vedligeholdelse",
    beskrivelse: "Har du allerede en hjemmeside du er rigtig glad for? Vi kan hoste hjemmesiden for dig, og hjælpe dig med vedligeholdelse af denne. Vi tilbyder at hjælpe dig med løbende optimeringer, sikkerhedsopdateringer og teknisk support, for at du selv kan spare tid, og kan fokusere mere på din kerneforretning. "
  },
  {
    titel: "Webdesign & Bæredygtighed",
    beskrivelse: "Vi tilbyder at optimere din hjemmeside, for at gøre den mere bæredygtig. Vi kan både skabe den fra bunden, med fokus på bæredygtighed, eller blot optimere din allerede eksisterende hjemmeside.  Vi gør det med fokus på et lavere CO₂-aftryk, men også fordi det faktisk vil gøre fx loading tider hurtigere, eller optimere din SEO endnu mere.Vil du vide mere om bæredygtighed indenfor den online verden? SÅ KLIK HER"
  },
]; */
const [activeCard, setActiveCard] = useState(0);
  const cardsRef = useRef([]);

  const services = [
    {
      title: "Branding & Visuel Identitet",
      description: "Vi udarbejder moodboard sammen, så vi kan nemt kan finde frem til lige netop dine ønsker. Vi designer dit nye logo og branddesign i tæt samarbejde, for at få det bedst mulige resultat. Herefter vil vi udarbejde en designmanual, så du også nemt selv kan skabe ændringer. Derudover kan vi hjælpe dig med grafisk design til både online og offline materialer.",
      price: "Fra 999",
      icon: (
        <svg viewBox="0 0 100 100" className="w-20 h-20 text-white">
          <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="2" fill="none" />
          <line x1="50" y1="20" x2="50" y2="35" stroke="currentColor" strokeWidth="2" />
          <line x1="50" y1="65" x2="50" y2="80" stroke="currentColor" strokeWidth="2" />
          <line x1="20" y1="50" x2="35" y2="50" stroke="currentColor" strokeWidth="2" />
          <line x1="65" y1="50" x2="80" y2="50" stroke="currentColor" strokeWidth="2" />
        </svg>
      )
    },
    {
      title: "Webudvikling & Design",
      description: "Vi designer og udvikler din nye hjemmeside lige efter dine ønsker - ofte i REACT eller wordpress. Vi har altid brugervenlighed i fokus, og går derfor meget op i at give mere muligt værdi til gruppen, for at kunne skabe den bedst mulige brugeroplevelse. Derudover har vi stor erfaring indenfor responsivt design, så din hjemmeside vil fungere på alle enheder.",
      price: "Fra 999",
      icon: (
        <svg viewBox="0 0 100 100" className="w-20 h-20 text-white">
          <path d="M30 30 L70 70 M70 30 L30 70" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      )
    },
    {
      title: "Websupport & Vedligeholdelse",
      description: "Har du allerede en hjemmeside du er rigtig glad for? Vi kan hoste hjemmesiden for dig, og hjælpe dig med vedligeholdelse af denne. Vi tilbyder at hjælpe dig med løbende optimeringer, sikkerhedsopdateringer og teknisk support, for at du selv kan spare tid, og kan fokusere mere på din kerneforretning.",
      price: "Fra 999",
      icon: (
        <svg viewBox="0 0 100 100" className="w-20 h-20 text-white">
          <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="2" fill="none" />
          <polyline points="30,50 45,65 70,35" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      )
    },
    {
      title: "Webdesign & bæredygtighed",
      description: "Vi tilbyder at optimere din hjemmeside, for at gøre den mere bæredygtig. Vi kan både skabe den fra bunden, med fokus på bæredygtighed, eller blot optimere din allerede eksisterende hjemmeside. Vi gør det med fokus på at lavere CO₂-aftryk, men også fordi det faktisk vil gøre fx loading tider hurtigere, eller optimere din SEO endnu mere.",
      price: "Fra 999",
      icon: (
        <svg viewBox="0 0 100 100" className="w-20 h-20 text-white">
          <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="2" fill="none" />
          <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      )
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      cardsRef.current.forEach((card, index) => {
        if (card && scrollPosition >= card.offsetTop) {
          setActiveCard(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


export default function ForwardChain() {
  return (
    <section className="ydelse-section">

      {/* Overskrift + ikon */}
      <div className="ydelse-header-alt">
            <div>
              <p className="-intro-text">
                  Her kan du læse mere om vores syn på online bæredygtighed.
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

            
            <div className="relative">
          {services.map((service, index) => (
            <div 
              key={index}
              ref={el => cardsRef.current[index] = el}
              className={`mb-64 transition-all duration-500 ${
                index <= activeCard 
                  ? 'opacity-100' 
                  : 'opacity-0'
              }`}
              style={{
                height: '250px',
                zIndex: services.length - index,
                position: 'sticky',
                top: index * 80 + 100 + 'px',
              }}
            >
              <div className="flex items-start gap-8">
                <div className="w-1/2">
                  <h2 className="text-4xl font-light mb-6">{service.title}</h2>
                  {index === activeCard && (
                    <div className="animate-fadeIn">
                      <p className="mb-4">{service.description}</p>
                      <p className="text-right">{service.price}</p>
                    </div>
                  )}
                </div>
                <div className="w-1/2 flex justify-center">
                  {service.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

    </section>

    
  )
}