import { ArrowUpRight } from "lucide-react";
import { universities } from "../data/siteContent";

export default function Universities() {
  return (
    <section className="section-pad universities">
      <div className="section-intro centered">
        <p className="eyebrow">Student Outcomes</p>
        <h2>Where Our Students <em>Have Been Admitted.</em></h2>
        <p>Leading institutions. Across the world.</p>
      </div>
      <div className="uni-wall">
        {universities.map((u) => <span key={u}>{u}</span>)}
      </div>
      <p className="uni-note">A selection of institutions our students have been admitted to.</p>
      <a className="text-link center-link" href="#reviews">Explore Student Results <ArrowUpRight size={16}/></a>
    </section>
  );
}