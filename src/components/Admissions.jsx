import { ArrowUpRight } from "lucide-react";

export default function Admissions() {
  return (
    <section className="section-pad admissions">
      <div className="admissions-main">
        <p className="eyebrow">Beyond the Test</p>
        <h2>The Test Is Only <em>Part of the Journey.</em></h2>
        <p>A strong score can open doors. What you do with that score matters too.</p>
        <p>For students pursuing competitive undergraduate, graduate and MBA programs, Light My Fire can extend beyond test preparation to provide guidance around the broader higher-education journey.</p>
      </div>
      <div className="admissions-list">
        <div><span>01</span><h3>Test Preparation</h3><p>SAT · GMAT · GRE</p></div>
        <div><span>02</span><h3>Admissions Strategy</h3><p>School selection · Profile strategy · Application guidance</p></div>
        <div><span>03</span><h3>Mentorship</h3><p>A dedicated perspective throughout the process</p></div>
      </div>
      <a className="button button-dark" href="#contact">Explore Admissions Consulting <ArrowUpRight size={16}/></a>
    </section>
  );
}