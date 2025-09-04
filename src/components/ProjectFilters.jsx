export default function ProjectFilters({ tags = [], selected = [], onChange }) {
  const toggle = (tag) => {
    if (selected.includes(tag)) {
      onChange(selected.filter(t => t !== tag));
    } else {
      onChange([...selected, tag]);
    }
  };

  return (
    <div className="filters">
      <strong>Filter:</strong>
      {tags.map(tag => (
        <label key={tag}>
          <input
            type="checkbox"
            checked={selected.includes(tag)}
            onChange={() => toggle(tag)}
          />{" "}
          {tag}
        </label>
      ))}
      {selected.length > 0 && <button onClick={() => onChange([])}>Clear</button>}
    </div>
  );
}
