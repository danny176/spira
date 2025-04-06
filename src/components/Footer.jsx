import LI from "../assets/linkedLogo.svg";
import FB from "../assets/fbLogo.svg";
import IG from "../assets/igLogo.svg";

export default function Home() {
    return (
        <footer>
            <div className="logocontainer">
            <h2>Spira</h2>
            <div className="copysocials">
                <div className="socials">
                    <img src={LI} alt="li" />
                    <img src={FB} alt="fb" />
                    <img src={IG} alt="ig" />
                </div>
                <h4>hello@spira.com</h4>
            <h5>© Spira 2025. Alle rettigheder reserveret.</h5>
            </div>
            </div>
        </footer>
    )

}