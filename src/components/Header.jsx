import { NavLink, Link } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle.jsx";

export default function Header() {
  return (
    <header>
      <h1>
        <Link to="/">Briana ✨</Link>
      </h1>
      <nav className="nav">
        <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
        <NavLink to="/projects" className={({ isActive }) => (isActive ? "active" : "")}>Projects</NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink>
      </nav>
      <ThemeToggle />
    </header>
  );
}
