const steps = [
  ["01", "Diagnose", "Understand your current level, target, strengths, weaknesses and timeline."],
  ["02", "Strategize", "Build a preparation plan around the specific gaps between where you are and where you want to be."],
  ["03", "Practice", "Develop the skills that will have the greatest impact on your performance through focused, purposeful practice."],
  ["04", "Analyze", "Go beyond right and wrong answers. Identify recurring conceptual, strategic, timing and test-taking patterns."],
  ["05", "Refine", "As your performance changes, your preparation changes with it."]
];

export default function Methodology() {
  return (
    <section className="section-pad method">
      <div className="section-intro centered">
        <p className="eyebrow">How We Work</p>
        <h2>Diagnose. Strategize. Practice. Analyze. Refine.</h2>
        <p>Personalization isn't just having a private lesson. It means understanding what each student needs and continually adapting the preparation accordingly.</p>
      </div>
      <div className="steps">
        {steps.map(([num,title,body]) => (
          <article className="step" key={num}>
            <span>{num}</span><h3>{title}</h3><p>{body}</p>
          </article>
        ))}
      </div>
      <p className="method-close">That's what personalized preparation should mean.</p>
    </section>
  );
}