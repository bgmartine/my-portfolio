import { useMemo, useState } from "react";
import ProjectCard from "@/components/ProjectCard.jsx";
import ProjectFilters from "@/components/ProjectFilters.jsx";
import Carousel from "@/components/Carousel.jsx";
import projects from "@/data/projects.js";

export default function Projects() {
  const [filters, setFilters] = useState([]);

  const tags = useMemo(
    () => Array.from(new Set(projects.flatMap(p => p.tags))).sort(),
    []
  );

  const filtered = useMemo(() => {
    if (!filters.length) return projects;
    return projects.filter(p => filters.every(f => (p.tags || []).includes(f)));
  }, [filters]);

  return (
    <section>
      <h2>Projects</h2>
      <ProjectFilters tags={tags} selected={filters} onChange={setFilters} />

      <div className="grid">
        {filtered.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>

      <h3 style={{ margin: "1.5rem 0 1rem" }}>Carousel Preview</h3>
      <Carousel>
        {filtered.map(p => (
          <div key={p.id}><ProjectCard project={p} /></div>
        ))}
      </Carousel>
    </section>
  );
}
