export default function Credibility() {
  const stats = [["5,000+", "Students coached"], ["12+", "Years of experience"], ["99th", "Percentile personal test performance"], ["5.0 ★★★★★", "Reviews on Leland & Google"]];
  return (
    <section className="credibility section-pad">
      <div className="section-intro centered">
        <p className="eyebrow">Experience & Credibility</p>
        <h2>Experience You Can <em>Build On.</em></h2>
      </div>
      <div className="stats">{stats.map(([n,l]) => <div className="stat" key={l}><strong>{n}</strong><span>{l}</span></div>)}</div>
      <p className="cred-copy">For more than a decade, Light My Fire has worked with students across test preparation and higher education, helping them navigate both the challenge of the exam and the decisions that follow it.</p>
    </section>
  );
}