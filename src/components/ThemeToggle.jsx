import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.style.setProperty("--bg", "#1a1a1a");
      root.style.setProperty("--text", "#f5f5f5");
      root.style.setProperty("--card-bg", "#222");
    } else {
      root.style.setProperty("--bg", "#fdfcf9");
      root.style.setProperty("--text", "#2d2d2d");
      root.style.setProperty("--card-bg", "#fff");
    }
  }, [dark]);

  return (
    <button onClick={() => setDark(d => !d)}>
      {dark ? "🌙" : "☀️"}
    </button>
  );
}
