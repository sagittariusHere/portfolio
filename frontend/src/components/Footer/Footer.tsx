import { LINKS } from "../../content";

export default function Footer() {
  return (
    <footer className="container footer mono muted">
      <span>© {new Date().getFullYear()} Abdullah Khalid</span>
      <div>
        <a href={LINKS.github}>GitHub</a>
        <a href={LINKS.linkedin}>LinkedIn</a>
        <a href={LINKS.email}>Email</a>
      </div>
    </footer>
  );
}
