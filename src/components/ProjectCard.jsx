export default function ProjectCard({ project }) {
  const { title, image, tags = [], url = "#" } = project;
  return (
    <article className="card">
      {image && <img src={image} alt={title} />}
      <div className="body">
        <h3>{title}</h3>
        <div className="badges">
          {tags.map(tag => <span key={tag} className="badge">{tag}</span>)}
        </div>
        <a href={url} target="_blank" rel="noreferrer" className="btn">View</a>
      </div>
    </article>
  );
}
