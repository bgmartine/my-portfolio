import { Link } from "react-router-dom";
import useTypewriter from "@/hooks/useTypewriter.js";

export default function Home() {
  const typed = useTypewriter("Hi, I’m Briana ✨ I bring together technology and business to create purposeful projects.", 25);

  return (
    <section>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>{typed}</h1>
      <p> Welcome to my digital space. Here I share how I use my technical background and business perspective to deliver solutions that drive real results.</p>
      <p style={{ marginTop: "1.5rem" }}>
        <Link to="/projects" className="btn">See My Work</Link>
      </p>
    </section>
  );
}
