import { SKILLS } from "../../content";

export default function Skills() {
  return (
    <section id="skills" className="container">
      <div className="section-head">
        <h2>Toolbox</h2>
        <span className="mono muted">what I reach for</span>
      </div>
      <dl className="skills">
        {SKILLS.map(([group, tools]) => (
          <div key={group}>
            <dt>{group}</dt>
            <dd className="muted">{tools}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
