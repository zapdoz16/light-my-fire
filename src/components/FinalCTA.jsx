import { ArrowUpRight } from "lucide-react";
import { SITE } from "../data/siteContent";

export default function FinalCTA() {
  return (
    <section className="final-cta section-pad" id="contact">
      <p className="eyebrow">Start Here</p>
      <h2>Know Where You Want to Go.<br/><em>Let's Figure Out What It Will Take to Get There.</em></h2>
      <p>Whether you're starting from scratch, trying to break through a plateau or preparing for your final attempt, the first step is understanding where you are and what needs to change.</p>
      <p>Start with a diagnostic conversation. We'll discuss your current level, target, timeline and preparation needs—and determine whether a 1-on-1 approach is the right fit.</p>
      <a className="button button-green" href={SITE.whatsappUrl}>Talk to Us on WhatsApp <ArrowUpRight size={16}/></a>
      <small>No generic pitch. Just a conversation about your goals and the right path forward.</small>
    </section>
  );
}