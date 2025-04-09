import { useState } from "react";
{/* css filen */}
import "../css-med-lille/omos.css";
{/* vores portrætter */}
import DAN from "../assets/danielpor.svg";
import MIK from "../assets/mikkelpor.svg";
import VIK from "../assets/vikpor.svg";
import MAR from "../assets/mariapor.svg";

import KontaktKnap from "../components/kontakt";

export default function ForwardChain() {
  return <>
  
  {/* Den øverste sektion */}
 <p><span className="hvemer">Hvem er</span><span className="vi"> vi?</span></p>
 <p>Her kan du møde os bag Spira og se hvad vi hver især står for i udviklingsprocessen af dit nye website!</p>

{/* vores værdier sektion */}
 <p className="veardier">Vores værdier</p>
 <p className="veardiertekst">Samarbejde: Vi udvikler webdesigns i tæt dialog med vores kunder. <br />
    Bæredygtighed: Vi går op i at skabe websites med mere omtanke for miljøet. <br />
    Brugervenlighed: Vi sætter altid brugeren i centrum.</p>

{/* sektionen om os */}
<p><span className="moed">Mød</span><span className="teamet"> teamet</span></p>

<section className="nret">
  <section className="baggrundpor" >
    <img src={DAN} alt="portræt af Daniel" />
    <p className="navn">Daniel</p>
    <p>Daniel er specialist i webudvikling og har flere års erfaring indenfor den digitale verden.</p>
  </section>

  <section className="baggrundpor">
    <img src={MIK} alt="portræt af Mikkel" />
    <p className="navn">Mikkel</p>
    <p>Mikkel er vores projektleder. Han har flere års erfaring koordinering og projektstyring.</p>
  </section>
</section>

<section className="nrto">
  <section className="baggrundpor">
    <img src={VIK} alt="portræt af Viktoria" />
    <p className="navn">Viktoria</p>
    <p>Viktoria er vores grafiske designer. Hun har flere års erfaring med udvikling af grafiske elementer og animationer.</p>
  </section>

  <section className="baggrundpor">
    <img src={MAR} alt="portræt af Maria" />
    <p className="navn">Maria</p>
    <p>Maria er vores content koordinator og har flere års erfaring med udvikling af content og design elementer.</p>
  </section>
</section>
<KontaktKnap/>
</> 
}