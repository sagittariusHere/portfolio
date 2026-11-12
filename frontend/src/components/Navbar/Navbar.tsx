const items = [
  { id: "timeline", label: "Timeline" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="nav mono">
      <div className="container">
        <a href="#top">Abdullah Khalid</a>
        <div className="nav-links">
          {items.map(({ id, label }) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
