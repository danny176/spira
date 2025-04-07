import LI from "../assets/linkedLogo.svg";
import FB from "../assets/fbLogo.svg";
import IG from "../assets/igLogo.svg";

export default function Home() {
  return (
    <footer>
      <div className="logocontainer">
        <div className="headercopy">
        <h2 className="footerheader">Spira</h2>
        
        <h5 className="copyright">© Spira 2025. Alle rettigheder reserveret.</h5>
        </div>
        <div className="copysocials">
          <div className="socials">
            <img src={LI} alt="li" />
            <img src={FB} alt="fb" />
            <img src={IG} alt="ig" />
          </div>
        </div>
      </div>
    </footer>
  );
}
