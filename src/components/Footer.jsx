export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <strong>LIGHT MY FIRE</strong>
        <p>1-on-1 SAT, GMAT & GRE Preparation<br/>Admissions Consulting<br/>Personalized Mentorship</p>
      </div>
      <div><span className="footer-label">Location</span><p>Delhi · Online Worldwide</p></div>
      <div><span className="footer-label">Explore</span><a href="#programs">Programs</a><a href="#approach">Our Approach</a><a href="#reviews">Student Results</a><a href="#about">About</a></div>
      <div><span className="footer-label">Contact</span><a href="#contact">Talk to Us on WhatsApp</a><a href="#contact">Contact Us</a></div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Light My Fire</span><span>Test preparation built around you.</span></div>
    </footer>
  );
}