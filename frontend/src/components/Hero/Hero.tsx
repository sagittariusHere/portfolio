import Timeline from "./Timeline";
import "./Hero.css";

export default function Hero() {
  return (
    <header id="timeline" className="container hero">
      <div className="hero-intro">
        <h1>Abdullah Khalid builds software, frame by frame.</h1>
        <p className="muted">
          Software engineer in Gloucester, UK. Five years across games, the web and the desktop. These
          days I build the software behind commercial drone light shows at HVN Labs.
        </p>
      </div>
      <Timeline />
    </header>
  );
}
