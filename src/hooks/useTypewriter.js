import { useState, useEffect } from "react";

export default function useTypewriter(text = "", speed = 50) {
  const [out, setOut] = useState("");

  useEffect(() => {
    setOut("");
    if (!text) return;
    let i = 0;
    const id = setInterval(() => {
      i++;
      setOut(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);

  return out;
}
