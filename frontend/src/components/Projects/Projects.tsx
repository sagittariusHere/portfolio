import { PROJECTS } from "../../content";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="work" className="container">
      <div className="section-head">
        <h2>Selected work</h2>
        <span className="mono muted">{String(PROJECTS.length).padStart(2, "0")}</span>
      </div>

      {PROJECTS.map((project, i) => (
        <article key={project.name} className="project">
          <span className="mono muted">{String(i + 1).padStart(2, "0")}</span>
          <div>
            <h3>{project.name}</h3>
            <p className="muted">{project.summary}</p>
            {project.links && (
              <p className="mono">
                {project.links.map(({ label, url }) => (
                  <a key={url} href={url} target="_blank" rel="noreferrer">
                    {label} ↗
                  </a>
                ))}
              </p>
            )}
          </div>
          <span className="mono muted">{project.stack}</span>
          {project.image && <img src={project.image} alt="" loading="lazy" />}
        </article>
      ))}
    </section>
  );
}
