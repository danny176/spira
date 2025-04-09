import { useState } from "react";
import { lazy, Suspense } from "react";
{/* css filen */}
import "../css-med-lille/omos.css";
{/* vores portrætter */}
import DAN from "../assets/danielpor.svg";
import MIK from "../assets/mikkelpor.svg";
import VIK from "../assets/vikpor.svg";
import MAR from "../assets/mariapor.svg";

const KontaktKnap = lazy(() => import("../components/kontakt"));

export default function ForwardChain() {
  return <>
  
  {/* Den øverste sektion */}
  <div className="hvem-er-forside">
 <p><span className="hvemer">Hvem er</span><span className="vi"> vi?</span></p>
 <p className="underteksthver">Her kan du møde os bag Spira og se hvad vi hver især står for i udviklingsprocessen af dit nye website!</p>
 </div>

{/* vores værdier sektion */}
<div className="værdier-sektion">
 <p className="veardier">Vores værdier</p>
 <p className="veardiertekst">Samarbejde: Vi udvikler webdesigns i tæt dialog med vores kunder. <br />
    Bæredygtighed: Vi går op i at skabe websites med mere omtanke for miljøet. <br />
    Brugervenlighed: Vi sætter altid brugeren i centrum.</p>
    </div>

{/* sektionen om os */}
<p><span className="moed">Mød</span><span className="teamet"> teamet</span></p>

<section className="nret">
  <section className="baggrundpor" >
    <img src={DAN} alt="portræt af Daniel" loading="lazy" />
    <h3 className="navn">Daniel</h3>
    <p>Daniel er specialist i webudvikling og har flere års erfaring indenfor den digitale verden.</p>
  </section>

  <section className="baggrundpor">
    <img src={MIK} alt="portræt af Mikkel" loading="lazy"/>
    <h3 className="navn">Mikkel</h3>
    <p>Mikkel er vores projektleder. Han har flere års erfaring koordinering og projektstyring.</p>
  </section>
</section>

<section className="nrto">
  <section className="baggrundpor">
    <img src={VIK} alt="portræt af Viktoria" loading="lazy"/>
    <h3 className="navn">Viktoria</h3>
    <p>Viktoria er vores grafiske designer. Hun har flere års erfaring med udvikling af grafiske elementer og animationer.</p>
  </section>

  <section className="baggrundpor">
    <img src={MAR} alt="portræt af Maria" loading="lazy" />
    <h3 className="navn">Maria</h3>
    <p>Maria er vores content koordinator og har flere års erfaring med udvikling af content og design elementer.</p>
  </section>
</section>
<Suspense fallback={<div>Henter kontaktknap... Vent venligst</div>}>
        <KontaktKnap />
      </Suspense>
</> 
}