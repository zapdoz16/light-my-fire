const rows = [
  ["One curriculum for everyone", "Preparation built around your needs"],
  ["Fixed pace", "Pace adapted to the student"],
  ["Generic practice", "Targeted practice"],
  ["Focus on completing the syllabus", "Focus on solving the underlying problem"],
  ["Scores tell you what happened", "Analysis helps identify why"],
  ["Limited individual attention", "Dedicated 1-on-1 mentorship"],
];

export default function ComparisonSection() {
  return (
    <section className="section-pad comparison">
      <div className="section-intro centered">
        <p className="eyebrow">A Different Model</p>
        <h2>Not Another <em>Batch Class.</em></h2>
        <p>Your preparation shouldn't look like everyone else's.</p>
      </div>
      <div className="compare-table">
        <div className="compare-head"><span>Conventional Test Prep</span><span>Light My Fire</span></div>
        {rows.map(([a,b], i) => <div className="compare-row" key={i}><span>{a}</span><strong>{b}</strong></div>)}
      </div>
      <p className="compare-close">The goal isn't simply to cover more material. It's to make sure your preparation time is being spent on the things that will actually move your performance forward.</p>
    </section>
  );
}