import { ArrowUpRight } from "lucide-react";
import { SITE } from "../data/siteContent";

const programs = [
  ["SAT", "SAT Preparation", "For students targeting competitive SAT scores and families looking for an alternative to large-group test preparation.", "Our approach combines conceptual clarity, targeted practice, test-taking strategy and the confidence to perform under pressure."],
  ["GMAT", "GMAT Preparation", "For MBA candidates targeting competitive scores, we combine rigorous instruction with individualized strategy and detailed performance analysis.", "Whether you're building your foundation, trying to break through a plateau or refining your approach for a final attempt, preparation is built around your specific needs."],
  ["GRE", "GRE Preparation", "GRE preparation built around your current level, weaknesses, timeline and graduate-school goals.", "Rather than following a predetermined sequence simply because it is the curriculum, we focus on the areas that will have the greatest impact on your performance."],
  ["AD", "Admissions Consulting", "The test is only one part of the journey.", "For students applying to competitive universities and business schools, we provide strategic guidance around the broader admissions process—from understanding your options to developing a stronger application strategy."]
];

export default function Programs() {
  return (
    <section className="section-pad programs" id="programs">
      <div className="section-intro">
        <p className="eyebrow">Programs</p>
        <h2>Preparation That <em>Meets You Where You Are.</em></h2>
        <p>Whether you're preparing for a standardized test or navigating the admissions process, your goals determine the approach.</p>
      </div>
      <div className="program-grid">
        {programs.map(([tag,title,a,b]) => (
          <article className="program-card" key={tag}>
            <div className="program-tag">{tag}</div>
            <h3>{title}</h3>
            <p>{a}</p><p>{b}</p>
            <a href={SITE.whatsappUrl}>Talk to Us About {title} <ArrowUpRight size={15}/></a>
          </article>
        ))}
      </div>
    </section>
  );
}