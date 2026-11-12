import { CSSProperties, useState } from "react";
import { ROLES, TRACKS } from "../../content";

const FIRST_YEAR = 2021;
const now = new Date();
const years = Array.from({ length: now.getFullYear() - FIRST_YEAR + 1 }, (_, i) => FIRST_YEAR + i);

const rangeStart = new Date(FIRST_YEAR, 0).getTime();
const rangeEnd = new Date(now.getFullYear() + 1, 0).getTime();
const toPercent = (date?: string) =>
  (((date ? new Date(date) : now).getTime() - rangeStart) / (rangeEnd - rangeStart)) * 100;

const formatDate = (date?: string) =>
  date ? new Date(date).toLocaleDateString("en-GB", { month: "short", year: "numeric" }) : "Present";

export default function Timeline() {
  const [selected, setSelected] = useState(ROLES[ROLES.length - 1]);

  return (
    <div className="timeline">
      <div className="timeline-ruler mono">
        {years.map((year) => (
          <span key={year}>{year}</span>
        ))}
      </div>

      <div className="timeline-tracks" style={{ "--playhead": toPercent(selected.end) } as CSSProperties}>
        {TRACKS.map((track) => (
          <div key={track} className="timeline-track">
            <span className="mono">{track}</span>
            <div className="timeline-lane">
              {ROLES.filter((role) => role.track === track).map((role) => (
                <button
                  key={role.company}
                  className={`clip clip-${track}`}
                  aria-pressed={role === selected}
                  style={{ "--from": toPercent(role.start), "--to": toPercent(role.end) } as CSSProperties}
                  onClick={() => setSelected(role)}
                >
                  {role.short ?? role.company}
                </button>
              ))}
            </div>
          </div>
        ))}
        <div className="playhead" />
      </div>

      <div className="timeline-detail" aria-live="polite">
        <div>
          <h3>
            {selected.title}, {selected.company}
          </h3>
          <p className="mono muted">
            {selected.place} · {formatDate(selected.start)} – {formatDate(selected.end)}
          </p>
          <ul>
            {selected.points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>
        <p className="mono muted">{selected.stack}</p>
      </div>
    </div>
  );
}
