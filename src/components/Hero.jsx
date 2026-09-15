import { ArrowDown, ArrowUpRight } from "lucide-react";
import { SITE } from "../data/siteContent";

export default function Hero() {
  return (
    <section className="hero section-pad">
      <div className="hero-copy">
        <p className="eyebrow">1-on-1 SAT, GMAT & GRE Preparation</p>
        <h1>Test Preparation<br/><em>Built Around You.</em></h1>
        <p className="hero-sub">
          Personalized preparation for students who want more than a standardized test-prep experience.
          Your starting point, target score, strengths, weaknesses and timeline are unique. Your preparation should be too.
        </p>
        <p className="hero-sub secondary">
          At Light My Fire, we combine expert instruction with individualized strategy, rigorous analysis and dedicated mentorship to help you make meaningful progress toward your goals.
        </p>
        <div className="hero-actions">
          <a className="button button-dark" href={SITE.whatsappUrl}>Talk to Us on WhatsApp <ArrowUpRight size={16}/></a>
          <a className="text-link" href="#programs">Explore Our Programs <ArrowDown size={16}/></a>
        </div>
      </div>
      <div className="hero-art" aria-label="Light My Fire brand visual">
        <div className="orbit orbit-a"></div>
        <div className="orbit orbit-b"></div>
        <div className="hero-mark">LMF<span>01</span></div>
        <div className="hero-note">Individual<br/>strategy<br/>over<br/>standardization.</div>
      </div>
    </section>
  );
}