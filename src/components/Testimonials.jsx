import { ArrowUpRight, Quote } from "lucide-react";
import { testimonials } from "../data/siteContent";

export default function Testimonials() {
  return (
    <section className="section-pad testimonials" id="reviews">
      <div className="section-intro">
        <p className="eyebrow">Student Reviews</p>
        <h2>What Our <em>Students Say.</em></h2>
        <p>The best description of our approach comes from the students who've experienced it.</p>
      </div>
      <div className="testimonial-grid">
        {testimonials.map((t) => (
          <article className="testimonial" key={t.name}>
            <Quote size={25}/>
            <p className="quote">{t.text}</p>
            <div className="reviewer"><strong>{t.name}</strong><span>{t.meta}</span></div>
          </article>
        ))}
      </div>
      <a className="button button-light" href="#contact">Read More Student Reviews <ArrowUpRight size={16}/></a>
    </section>
  );
}